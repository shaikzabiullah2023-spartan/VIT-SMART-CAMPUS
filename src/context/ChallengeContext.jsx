import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { CHALLENGES } from '../data/challenges';
import confetti from 'canvas-confetti';

const ChallengeContext = createContext(null);

const CHALLENGES_STORAGE_KEY = 'verdant_user_challenges';
const POINTS_STORAGE_KEY = 'verdant_user_points';
const BADGES_STORAGE_KEY = 'verdant_user_badges';

export const ChallengeProvider = ({ children }) => {
  const { showToast } = useToast();

  const [joinedChallenges, setJoinedChallenges] = useState(() => {
    try {
      const saved = localStorage.getItem(CHALLENGES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
      // Default: user has joined challenge-1 to give immediate interactive gratification
      return {
        'challenge-1': {
          joinedAt: new Date().toISOString(),
          completedTasks: [0, 1] // first two tasks completed as demo
        }
      };
    } catch {
      return {};
    }
  });

  const [points, setPoints] = useState(() => {
    try {
      const saved = localStorage.getItem(POINTS_STORAGE_KEY);
      return saved ? parseInt(saved, 10) : 340;
    } catch {
      return 340;
    }
  });

  const [badges, setBadges] = useState(() => {
    try {
      const saved = localStorage.getItem(BADGES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : ["Early Adopter", "Seed Sower"];
    } catch {
      return ["Early Adopter", "Seed Sower"];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CHALLENGES_STORAGE_KEY, JSON.stringify(joinedChallenges));
    } catch (e) {
      console.error(e);
    }
  }, [joinedChallenges]);

  useEffect(() => {
    try {
      localStorage.setItem(POINTS_STORAGE_KEY, points.toString());
    } catch (e) {
      console.error(e);
    }
  }, [points]);

  useEffect(() => {
    try {
      localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(badges));
    } catch (e) {
      console.error(e);
    }
  }, [badges]);

  const joinChallenge = (challengeId) => {
    const challenge = CHALLENGES.find((c) => c.id === challengeId);
    if (!challenge) return;

    if (joinedChallenges[challengeId]) {
      showToast(`You are already enrolled in "${challenge.title}"!`, 'info');
      return;
    }

    setJoinedChallenges((prev) => ({
      ...prev,
      [challengeId]: {
        joinedAt: new Date().toISOString(),
        completedTasks: []
      }
    }));

    showToast(`Enrolled in "${challenge.title}"! Let's build a greener habit.`, 'success');
  };

  const toggleTask = (challengeId, taskIndex) => {
    const challenge = CHALLENGES.find((c) => c.id === challengeId);
    if (!challenge) return;

    const currentEntry = joinedChallenges[challengeId] || {
      joinedAt: new Date().toISOString(),
      completedTasks: []
    };

    const isAlreadyCompleted = currentEntry.completedTasks.includes(taskIndex);
    let updatedTasks;

    if (isAlreadyCompleted) {
      updatedTasks = currentEntry.completedTasks.filter((idx) => idx !== taskIndex);
      setPoints((p) => Math.max(0, p - 20));
      showToast(`Task unchecked.`, 'info');
    } else {
      updatedTasks = [...currentEntry.completedTasks, taskIndex];
      const newPointsEarned = 25;
      setPoints((p) => p + newPointsEarned);
      showToast(`Task completed! +${newPointsEarned} Eco-Points earned!`, 'success');

      // Check if entire challenge is now finished!
      if (updatedTasks.length === challenge.dailyTasks.length) {
        // Confetti burst!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#153D2B', '#A8B99A', '#92765A', '#F6F4EA']
        });

        // Award badge
        if (challenge.badgeReward && !badges.includes(challenge.badgeReward)) {
          setBadges((b) => [...b, challenge.badgeReward]);
        }
        setPoints((p) => p + challenge.points);
        showToast(
          `🎉 Magnificent! You completed "${challenge.title}" and unlocked the "${challenge.badgeReward}" badge!`,
          'success',
          6000
        );
      }
    }

    setJoinedChallenges((prev) => ({
      ...prev,
      [challengeId]: {
        ...currentEntry,
        completedTasks: updatedTasks
      }
    }));
  };

  const isChallengeJoined = (challengeId) => !!joinedChallenges[challengeId];

  const getChallengeProgress = (challengeId) => {
    const challenge = CHALLENGES.find((c) => c.id === challengeId);
    if (!challenge || !joinedChallenges[challengeId]) {
      return { completedCount: 0, totalCount: challenge?.dailyTasks?.length || 0, percent: 0, isComplete: false };
    }
    const completedCount = joinedChallenges[challengeId].completedTasks.length;
    const totalCount = challenge.dailyTasks.length;
    const percent = Math.round((completedCount / totalCount) * 100);
    return {
      completedCount,
      totalCount,
      percent,
      isComplete: completedCount === totalCount
    };
  };

  return (
    <ChallengeContext.Provider
      value={{
        joinedChallenges,
        points,
        badges,
        joinChallenge,
        toggleTask,
        isChallengeJoined,
        getChallengeProgress
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenges = () => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw new Error('useChallenges must be used within a ChallengeProvider');
  }
  return context;
};

