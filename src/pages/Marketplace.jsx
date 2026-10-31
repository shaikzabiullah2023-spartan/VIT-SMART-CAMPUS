import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { formatINR } from '../utils/formatters';

export const Marketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam && CATEGORIES.includes(categoryParam) ? categoryParam : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(7000);
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Sync category param if URL changes
  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setMaxPrice(7000);
    setSortBy('featured');
    setInStockOnly(false);
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filtered & Sorted Products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Search match (name, description, or materials)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesMaterials = product.materials?.some((m) => m.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesMaterials) {
          return false;
        }
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // In stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      // Default: featured first, then id
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPrice, sortBy, inStockOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="space-y-3 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
          Conscious Commerce
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#153D2B] tracking-tight">
          Eco-Friendly Marketplace
        </h1>
        <p className="text-sm sm:text-base text-[#5D6B60] max-w-2xl leading-relaxed">
          Explore ethically handcrafted, zero-waste products that replace single-use disposables. Backed by life-cycle audits and plastic-free carbon-neutral delivery across India.
        </p>
      </div>

      {/* Search & Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex-1">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search organic linen, terracotta, bamboo, hemp..."
          />
        </div>

        {/* Mobile Filter Toggle & Sort Dropdown */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#A8B99A]/40 text-xs font-semibold text-[#153D2B]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#92765A]" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-[#A8B99A]/40 shadow-2xs">
            <span className="text-xs text-[#92765A] font-medium hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-semibold text-[#153D2B] focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured & Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div>
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </div>

      {/* Main Grid + Filter Sidebar Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <div
          className={`lg:block bg-white p-6 rounded-3xl border border-[#A8B99A]/30 space-y-6 shadow-xs ${
            showFiltersMobile ? 'block' : 'hidden'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#A8B99A]/20">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#153D2B]" />
              <h3 className="font-serif text-base font-bold text-[#153D2B]">Refine Search</h3>
            </div>
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#92765A] hover:text-[#153D2B] flex items-center gap-1 font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-[#252B26]">Max Price:</span>
              <span className="text-[#153D2B] font-bold text-sm">{formatINR(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="500"
              max="7000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#153D2B] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#92765A]">
              <span>₹500</span>
              <span>₹7,000</span>
            </div>
          </div>

          {/* In Stock Only Checkbox */}
          <div className="pt-2 border-t border-[#A8B99A]/20">
            <label className="flex items-center gap-2.5 text-xs text-[#252B26] font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 rounded text-[#153D2B] focus:ring-[#153D2B] border-[#A8B99A]"
              />
              <span>In Stock Items Only</span>
            </label>
          </div>

          {/* Eco Impact Guarantees */}
          <div className="pt-4 border-t border-[#A8B99A]/20 space-y-2 text-xs text-[#5D6B60]">
            <p className="font-bold text-[#153D2B] uppercase text-[10px] tracking-wider">
              VERDANT Standard:
            </p>
            <p className="flex items-center gap-1.5">✓ Zero single-use plastic</p>
            <p className="flex items-center gap-1.5">✓ Toxic-free certified dyes</p>
            <p className="flex items-center gap-1.5">✓ 100% fair artisan compensation</p>
          </div>
        </div>

        {/* Product Grid Area (3 cols on desktop) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#92765A]">
            <span>
              Showing <strong className="text-[#153D2B]">{filteredProducts.length}</strong> of{' '}
              {PRODUCTS.length} curated products
            </span>
            {(selectedCategory !== 'All' || searchQuery || maxPrice < 7000 || inStockOnly) && (
              <button
                onClick={handleResetFilters}
                className="text-[#153D2B] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            /* Empty Search State */
            <div className="py-20 bg-white rounded-3xl border border-[#A8B99A]/30 p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ECE8D7] flex items-center justify-center text-[#92765A] mx-auto">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#153D2B]">
                No eco-products matched your filter
              </h3>
              <p className="text-sm text-[#5D6B60] max-w-md mx-auto">
                Try widening your price range or clearing search keywords like "{searchQuery}".
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-full bg-[#153D2B] text-[#F6F4EA] text-xs font-semibold hover:bg-[#1D543B] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

