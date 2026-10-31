import React, { useState } from 'react';
import { Users, Award, Trophy, Sparkles, CheckCircle2, MessageSquare, Heart, Send } from 'lucide-react';
import { CHALLENGES, COMMUNITY_LEADERBOARD, COMMUNITY_STORIES } from '../data/challenges';
import { ChallengeCard } from '../components/ChallengeCard';
import { useChallenges } from '../context/ChallengeContext';
import { useToast } from '../context/ToastContext';

export const Community = () => {
  const { points, badges, joinedChallenges } = useChallenges();
  const { showToast } = useToast();

  const [storyAuthor, setStoryAuthor] = useState('');
  const [storyCity, setStoryCity] = useState('');
  const [storyText, setStoryText] = useState('');
  const [userStories, setUserStories] = useState([]);

  const activeEnrolledCount = Object.keys(joinedChallenges).length;

  const handleStorySubmit = (e) => {
    e.preventDefault();
    if (!storyAuthor.trim() || !storyText.trim()) {
      showToast('Please provide your name and story details.', 'error');
      return;
    }

    const newStory = {
      id: 'user-story-' + Date.now(),
      author: storyAuthor.trim(),
      location: storyCity.trim() || 'India',
      story: storyText.trim(),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      stat: 'Community Contributor'
    };

    setUserStories([newStory, ...userStories]);
    showToast('Your sustainability story has been shared with the VERDANT community!', 'success');
    setStoryAuthor('');
    setStoryCity('');
    setStoryText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153D2B]/10 text-xs font-semibold text-[#153D2B]">
          <Users className="w-3.5 h-3.5" />
          <span>The VERDANT Circle</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#153D2B] tracking-tight">
          Community & Green Challenges
        </h1>
        <p className="text-sm sm:text-base text-[#5D6B60] max-w-2xl leading-relaxed">
          Sustainable living is not a solo pursuit. Join collaborative weekly habit challenges, track personal milestones, and celebrate collective regenerative impact.
        </p>
      </div>

      {/* User Eco-Status Banner */}
      <div className="bg-[#153D2B] text-[#F6F4EA] p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <span className="text-xs uppercase tracking-widest text-[#A8B99A] font-bold">
            Your Active Citizen Profile
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Keep Growing, Mindful Neighbor.
          </h2>
          <p className="text-xs text-white/75 max-w-md leading-relaxed">
            Every daily task completed earns Eco-Points and helps fund our mangrove rewilding projects.
          </p>
        </div>

        {/* Stats Badges */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center min-w-[120px]">
            <span className="text-2xl font-extrabold text-[#A8B99A] block">{points}</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-semibold">Eco-Points</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center min-w-[120px]">
            <span className="text-2xl font-extrabold text-[#A8B99A] block">{activeEnrolledCount}</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-semibold">Enrolled Challenges</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center min-w-[120px]">
            <span className="text-2xl font-extrabold text-[#A8B99A] block">{badges.length}</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-semibold">Badges Earned</span>
          </div>
        </div>
      </div>

      {/* Unlocked Badges Shelf */}
      <div className="bg-white p-6 rounded-3xl border border-[#A8B99A]/30 space-y-4 text-left">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#153D2B]" />
          <h3 className="font-serif text-lg font-bold text-[#153D2B]">
            Your Unlocked Achievement Badges
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#153D2B]/10 border border-[#153D2B]/20 text-xs font-bold text-[#153D2B]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#92765A]" />
              <span>{badge}</span>
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ECE8D7] text-xs font-medium text-[#5D6B60]">
            + Complete more challenges to unlock "Water Sage" & "Solar Pioneer"
          </span>
        </div>
      </div>

      {/* Active Weekly Challenges Grid */}
      <div className="space-y-6 text-left">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            Take Action
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153D2B] mt-1">
            Weekly Habit Quests
          </h2>
          <p className="text-sm text-[#5D6B60] mt-1">
            Click "Join Challenge" to enroll and track your daily sustainable milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHALLENGES.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Community Leaderboard & Impact Stories (2 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Leaderboard (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#A8B99A]/30 shadow-xs space-y-6 text-left">
          <div className="flex items-center justify-between pb-4 border-b border-[#A8B99A]/20">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="font-serif text-xl font-bold text-[#153D2B]">
                Monthly Leaderboard
              </h3>
            </div>
            <span className="text-xs text-[#92765A] font-semibold">Demo Rankings</span>
          </div>

          <div className="space-y-3">
            {COMMUNITY_LEADERBOARD.map((member) => (
              <div
                key={member.rank}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F6F4EA] border border-[#A8B99A]/20 hover:border-[#153D2B]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 text-center font-bold text-sm ${
                    member.rank === 1 ? 'text-amber-500 font-extrabold' : 'text-[#92765A]'
                  }`}>
                    #{member.rank}
                  </span>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#A8B99A]/40"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#153D2B]">{member.name}</h4>
                    <span className="text-[10px] text-[#92765A]">{member.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-bold text-xs text-[#153D2B] block">
                    {member.points.toLocaleString()} pts
                  </span>
                  <span className="text-[10px] text-[#5D6B60] block">
                    {member.challengesCompleted} completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stories & Share Form (7 cols) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#A8B99A]/30 shadow-xs space-y-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#153D2B]" />
              <h3 className="font-serif text-xl font-bold text-[#153D2B]">
                Share Your Sustainability Story
              </h3>
            </div>

            <form onSubmit={handleStorySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={storyAuthor}
                  onChange={(e) => setStoryAuthor(e.target.value)}
                  className="w-full bg-[#F6F4EA] border border-[#A8B99A]/40 rounded-xl px-4 py-2.5 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B]"
                  required
                />
                <input
                  type="text"
                  placeholder="City (e.g. Pune, Jaipur, Kochi)"
                  value={storyCity}
                  onChange={(e) => setStoryCity(e.target.value)}
                  className="w-full bg-[#F6F4EA] border border-[#A8B99A]/40 rounded-xl px-4 py-2.5 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B]"
                />
              </div>
              <textarea
                rows="3"
                placeholder="What swap or challenge did you complete? What did you learn?"
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                className="w-full bg-[#F6F4EA] border border-[#A8B99A]/40 rounded-xl p-4 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B]"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#153D2B] text-[#F6F4EA] text-xs font-bold hover:bg-[#1D543B] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post to Community Board</span>
              </button>
            </form>
          </div>

          {/* Stories Feed */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#153D2B]">
              Recent Community Moments
            </h4>
            {[...userStories, ...COMMUNITY_STORIES].map((story) => (
              <div
                key={story.id}
                className="p-5 rounded-2xl bg-white border border-[#A8B99A]/30 space-y-3"
              >
                <p className="text-xs text-[#3C453E] leading-relaxed italic">
                  "{story.story}"
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#A8B99A]/15">
                  <div className="flex items-center gap-2">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-bold text-[#153D2B]">{story.author}</span>
                    <span className="text-[#92765A]">({story.location})</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#153D2B]/10 text-[#153D2B] text-[10px] font-bold">
                    {story.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

