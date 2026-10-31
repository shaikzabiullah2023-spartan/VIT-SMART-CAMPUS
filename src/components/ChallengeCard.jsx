import React from 'react';
import { Award, Clock, Users, CheckCircle2, Circle, ArrowRight, Zap } from 'lucide-react';
import { useChallenges } from '../context/ChallengeContext';

export const ChallengeCard = ({ challenge }) => {
  const { isChallengeJoined, joinChallenge, toggleTask, getChallengeProgress, joinedChallenges } = useChallenges();
  const isJoined = isChallengeJoined(challenge.id);
  const progress = getChallengeProgress(challenge.id);
  const completedTaskIndices = joinedChallenges[challenge.id]?.completedTasks || [];

  return (
    <div className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 border ${
      isJoined
        ? 'bg-white border-[#153D2B]/40 shadow-md ring-1 ring-[#153D2B]/10'
        : 'bg-white/80 border-[#A8B99A]/30 hover:border-[#153D2B]/30 hover:shadow-lg'
    }`}>
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="px-3 py-1 rounded-full bg-[#153D2B]/10 text-[#153D2B] font-bold tracking-wider uppercase text-[11px]">
            {challenge.category}
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#92765A]/15 text-[#6E5740] font-bold text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>+{challenge.points} Eco-Points</span>
          </div>
        </div>

        {/* Challenge Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#153D2B] mt-2 leading-snug">
          {challenge.title}
        </h3>

        {/* Metadata stats */}
        <div className="flex items-center gap-4 text-xs text-[#5D6B60] mt-2.5 pb-4 border-b border-[#A8B99A]/20">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#92765A]" />
            <span>{challenge.durationLabel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#92765A]" />
            <span>{challenge.participantsCount.toLocaleString()} Participants</span>
          </div>
          <div className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#ECE8D7] text-[#252B26]">
            {challenge.difficulty}
          </div>
        </div>

        {/* Description & Impact */}
        <p className="text-xs text-[#5D6B60] mt-4 leading-relaxed">
          {challenge.description}
        </p>

        <div className="mt-3.5 p-3 rounded-2xl bg-[#A8B99A]/15 border border-[#A8B99A]/30 text-xs text-[#153D2B] flex items-start gap-2">
          <Zap className="w-4 h-4 text-[#153D2B] shrink-0 mt-0.5" />
          <span className="leading-tight font-medium">
            <strong className="font-bold">Eco Impact:</strong> {challenge.impact}
          </span>
        </div>

        {/* Progress & Checklist if Joined */}
        {isJoined ? (
          <div className="mt-6 pt-5 border-t border-[#A8B99A]/20 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#153D2B]">
                  {progress.isComplete ? '🎉 Challenge Completed!' : 'Your Challenge Progress'}
                </span>
                <span className="text-[#92765A]">
                  {progress.completedCount} of {progress.totalCount} Tasks ({progress.percent}%)
                </span>
              </div>
              <div className="w-full bg-[#ECE8D7] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#153D2B] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>

            {/* Daily Task List */}
            <div className="space-y-2 mt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
                Daily Action Plan:
              </p>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {challenge.dailyTasks.map((task, idx) => {
                  const isDone = completedTaskIndices.includes(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleTask(challenge.id, idx)}
                      className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-colors cursor-pointer ${
                        isDone
                          ? 'bg-[#153D2B]/10 border-[#153D2B]/30 text-[#153D2B]'
                          : 'bg-white border-[#A8B99A]/30 text-[#252B26] hover:bg-[#F6F4EA]'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-[#153D2B] shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#92765A] shrink-0 mt-0.5" />
                      )}
                      <span className={`leading-snug ${isDone ? 'line-through opacity-70' : ''}`}>
                        {task}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4">
        {isJoined ? (
          <div className="flex items-center justify-between text-xs font-semibold text-[#153D2B]">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Enrolled & Tracking</span>
            </span>
            <span className="text-[#92765A]">Reward: {challenge.badgeReward}</span>
          </div>
        ) : (
          <button
            onClick={() => joinChallenge(challenge.id)}
            className="w-full py-3 px-5 rounded-full bg-[#153D2B] hover:bg-[#1D543B] text-[#F6F4EA] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Join Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

