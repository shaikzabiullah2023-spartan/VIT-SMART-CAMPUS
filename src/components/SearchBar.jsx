import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ searchQuery, setSearchQuery, placeholder = "Search curated eco essentials..." }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#92765A]" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-[#A8B99A]/40 rounded-full pl-11 pr-10 py-2.5 sm:py-3 text-sm text-[#252B26] placeholder:text-[#92765A]/70 focus:outline-none focus:border-[#153D2B] focus:ring-2 focus:ring-[#A8B99A]/30 transition-all shadow-xs"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#92765A] hover:text-[#153D2B] transition-colors rounded-full"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

