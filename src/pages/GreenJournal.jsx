import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import { ARTICLES, JOURNAL_CATEGORIES } from '../data/articles';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { formatDate } from '../utils/formatters';
import { Newsletter } from '../components/Newsletter';

export const GreenJournal = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      if (selectedCategory !== 'All' && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesSubtitle = article.subtitle.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
        const matchesAuthor = article.author.name.toLowerCase().includes(query);
        const matchesTags = article.tags?.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSubtitle && !matchesExcerpt && !matchesAuthor && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Editorial Header */}
      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153D2B]/10 text-xs font-semibold text-[#153D2B]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>The VERDANT Chronicle</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#153D2B] tracking-tight">
          The Green Journal
        </h1>
        <p className="text-sm sm:text-base text-[#5D6B60] max-w-2xl leading-relaxed">
          Deep, investigative essays, regenerative science breakdowns, and calm practical guides for conscious daily stewardship.
        </p>
      </div>

      {/* Featured Editorial Cover Article (if no search active) */}
      {!searchQuery && selectedCategory === 'All' && featuredArticle && (
        <div className="bg-white rounded-3xl overflow-hidden border border-[#A8B99A]/30 shadow-md group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#ECE8D7]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Editorial Copy (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-5 text-left">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#153D2B] text-[#F6F4EA] font-bold uppercase tracking-wider text-[10px]">
                  Featured Essay
                </span>
                <span className="text-[#92765A] font-semibold">{featuredArticle.category}</span>
              </div>

              <Link to={`/journal/${featuredArticle.id}`}>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153D2B] hover:text-[#1D543B] transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>
              </Link>

              <p className="text-sm text-[#5D6B60] leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              {/* Author & Read Time */}
              <div className="pt-4 border-t border-[#A8B99A]/20 flex items-center justify-between text-xs text-[#5D6B60]">
                <div className="flex items-center gap-2.5">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#A8B99A]/40"
                  />
                  <div>
                    <p className="font-bold text-[#153D2B]">{featuredArticle.author.name}</p>
                    <p className="text-[10px] text-[#92765A]">{formatDate(featuredArticle.date)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 font-semibold text-[#153D2B]">
                  <Clock className="w-3.5 h-3.5 text-[#92765A]" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              <Link
                to={`/journal/${featuredArticle.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#153D2B] hover:text-[#92765A] uppercase tracking-wider pt-2"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search & Category Filter Navigation */}
      <div className="space-y-4">
        <div className="max-w-md">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search essays, circular textiles, soil science..."
          />
        </div>

        <CategoryFilter
          categories={JOURNAL_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Articles Grid */}
      <div className="space-y-6">
        <div className="text-xs text-[#92765A] text-left">
          <span>
            Displaying <strong className="text-[#153D2B]">{filteredArticles.length}</strong> essays
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-16 bg-white rounded-3xl border border-[#A8B99A]/30 p-8 text-center space-y-3">
            <h3 className="font-serif text-2xl font-bold text-[#153D2B]">
              No articles found
            </h3>
            <p className="text-sm text-[#5D6B60]">
              Try a different keyword or switch to another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#153D2B] text-[#F6F4EA] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#A8B99A]/30 hover:border-[#153D2B]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <Link
                  to={`/journal/${article.id}`}
                  className="block aspect-[16/10] overflow-hidden bg-[#ECE8D7] relative"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#153D2B] backdrop-blur-xs">
                    {article.category}
                  </span>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-[#92765A]">
                      <span>{formatDate(article.date)}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-[#153D2B]">
                        <Clock className="w-3 h-3 text-[#92765A]" />
                        {article.readTime}
                      </span>
                    </div>

                    <Link to={`/journal/${article.id}`}>
                      <h3 className="font-serif text-lg font-bold text-[#153D2B] group-hover:text-[#1D543B] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#5D6B60] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#A8B99A]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold text-[#153D2B] truncate max-w-[120px]">
                        {article.author.name}
                      </span>
                    </div>

                    <Link
                      to={`/journal/${article.id}`}
                      className="text-xs font-bold text-[#153D2B] hover:text-[#92765A] flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Newsletter */}
      <Newsletter />
    </div>
  );
};

