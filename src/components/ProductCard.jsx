import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { formatINR } from '../utils/formatters';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#A8B99A]/30 hover:border-[#153D2B]/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image Area */}
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-square bg-[#ECE8D7] overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Eco Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#153D2B]/90 text-[#F6F4EA] backdrop-blur-xs shadow-xs">
            {product.badge}
          </span>
        )}

        {/* In Stock Status */}
        {product.inStock ? (
          <span className="absolute bottom-3 right-3 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-white/90 text-[#153D2B] backdrop-blur-xs">
            In Stock
          </span>
        ) : (
          <span className="absolute bottom-3 right-3 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-red-100 text-red-700">
            Out of Stock
          </span>
        )}
      </Link>

      {/* Product Details Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#92765A] mb-2">
            <span className="uppercase tracking-wider font-semibold text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#252B26]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-[#92765A]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link
            to={`/product/${product.id}`}
            className="block font-serif text-lg font-bold text-[#153D2B] hover:text-[#1D543B] transition-colors line-clamp-1"
          >
            {product.name}
          </Link>

          {/* Short Description */}
          <p className="text-xs text-[#5D6B60] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Ecological Impact Badge */}
          {product.impact && (
            <div className="mt-3 px-2.5 py-1 rounded-lg bg-[#A8B99A]/15 border border-[#A8B99A]/30 text-[11px] font-medium text-[#153D2B] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#153D2B] shrink-0" />
              <span className="truncate">{product.impact}</span>
            </div>
          )}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-5 mt-4 border-t border-[#A8B99A]/20">
          <div>
            <span className="text-lg font-bold text-[#153D2B]">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#92765A] line-through ml-2">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              isInCart
                ? 'bg-[#A8B99A] text-[#153D2B] hover:bg-[#8A9C7B]'
                : 'bg-[#153D2B] text-[#F6F4EA] hover:bg-[#1D543B] active:scale-95 shadow-xs'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

