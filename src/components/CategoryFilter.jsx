import React from 'react';

export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none py-1">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isSelected
                ? 'bg-[#153D2B] text-[#F6F4EA] shadow-sm'
                : 'bg-white text-[#252B26] border border-[#A8B99A]/30 hover:border-[#153D2B]/50 hover:bg-[#F6F4EA]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

