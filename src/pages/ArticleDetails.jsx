import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Share2, Check, Bookmark, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { formatDate } from '../utils/formatters';
import { useToast } from '../context/ToastContext';

export const ArticleDetails = () => {
  const { id } = useParams();
  const { showToast } = useToast();
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const article = ARTICLES.find((a) => a.id === id || a.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-[#153D2B]">
          Essay Not Found
        </h2>
        <p className="text-sm text-[#5D6B60]">
          The article you requested could not be located in our archive.
        </p>
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-xs tracking-wider uppercase hover:bg-[#1D543B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Journal</span>
        </Link>
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      showToast('Article link copied to clipboard!', 'info');
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    showToast(bookmarked ? 'Removed from saved reading list.' : 'Saved to your personal reading list!', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 text-left">
      {/* Back Button & Actions */}
      <div className="flex items-center justify-between text-xs text-[#92765A]">
        <Link
          to="/journal"
          className="inline-flex items-center gap-1.5 font-bold text-[#153D2B] hover:text-[#92765A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Essays</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-full border transition-colors cursor-pointer ${
              bookmarked
                ? 'bg-[#153D2B] text-[#F6F4EA] border-[#153D2B]'
                : 'bg-white text-[#153D2B] border-[#A8B99A]/40 hover:bg-[#F6F4EA]'
            }`}
            aria-label="Bookmark article"
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#A8B99A]/40 text-[#153D2B] hover:bg-[#F6F4EA] transition-colors font-semibold cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copied' : 'Share Essay'}</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-[#153D2B] text-[#F6F4EA] font-bold text-xs uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-xs text-[#92765A]">{formatDate(article.date)}</span>
          <span className="text-xs text-[#92765A]">•</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-[#153D2B]">
            <Clock className="w-3.5 h-3.5 text-[#92765A]" />
            {article.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#153D2B] tracking-tight leading-[1.15]">
          {article.title}
        </h1>

        <p className="font-serif text-lg sm:text-xl italic text-[#5D6B60] leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author Bio Banner */}
        <div className="p-4 rounded-2xl bg-white border border-[#A8B99A]/30 flex items-center gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover border border-[#A8B99A]/40"
          />
          <div>
            <h4 className="font-bold text-sm text-[#153D2B]">{article.author.name}</h4>
            <p className="text-xs text-[#92765A]">{article.author.role}</p>
          </div>
        </div>
      </header>

      {/* Featured Header Photography */}
      <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-[#ECE8D7] shadow-lg border border-[#A8B99A]/30">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formatted Article Body */}
      <div className="space-y-8 text-base text-[#252B26] leading-relaxed font-sans">
        {article.content?.map((block, idx) => {
          if (block.type === 'paragraph') {
            return (
              <p key={idx} className="text-[#3C453E] text-base sm:text-lg leading-relaxed">
                {block.text}
              </p>
            );
          }

          if (block.type === 'heading') {
            return (
              <h2
                key={idx}
                className="font-serif text-2xl sm:text-3xl font-bold text-[#153D2B] pt-4 tracking-tight"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === 'quote') {
            return (
              <blockquote
                key={idx}
                className="my-8 pl-6 border-l-4 border-[#153D2B] py-2 italic font-serif text-xl sm:text-2xl text-[#153D2B] bg-[#A8B99A]/10 rounded-r-2xl pr-6"
              >
                "{block.text}"
              </blockquote>
            );
          }

          if (block.type === 'takeaways') {
            return (
              <div
                key={idx}
                className="my-8 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#153D2B]/20 shadow-xs space-y-4"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#153D2B]" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#153D2B]">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-[#5D6B60]">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#153D2B] shrink-0 mt-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Tags */}
      {article.tags && (
        <div className="pt-6 border-t border-[#A8B99A]/20 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#92765A] mr-2">Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#ECE8D7] text-[#252B26] text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Essays */}
      {relatedArticles.length > 0 && (
        <div className="pt-12 border-t border-[#A8B99A]/30 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#153D2B]">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/journal/${rel.id}`}
                className="group p-5 bg-white rounded-3xl border border-[#A8B99A]/30 hover:shadow-md transition-all space-y-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#92765A]">
                  {rel.category}
                </span>
                <h4 className="font-serif text-base font-bold text-[#153D2B] group-hover:text-[#1D543B] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#5D6B60] line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

