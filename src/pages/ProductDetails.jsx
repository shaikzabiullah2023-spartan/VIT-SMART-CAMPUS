import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Leaf,
  Plus,
  Minus,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Share2,
  Check
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { formatINR } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const { showToast } = useToast();

  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('materials');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-[#153D2B]">
          Product Not Found
        </h2>
        <p className="text-sm text-[#5D6B60]">
          The eco-product you're looking for might have been retired or moved.
        </p>
        <Link
          to="/marketplace"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-xs tracking-wider uppercase hover:bg-[#1D543B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const isInCart = cart.some((i) => i.id === product.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      showToast('Product link copied to clipboard!', 'info');
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? '' : name);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-[#92765A]">
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:text-[#153D2B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/marketplace" className="hover:text-[#153D2B] transition-colors">Marketplace</Link>
          <span>/</span>
          <span className="text-[#153D2B] font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#A8B99A]/30 text-[#153D2B] hover:bg-[#F6F4EA] transition-colors cursor-pointer"
        >
          {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
        </button>
      </div>

      {/* Main Product Display Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Image Gallery (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="aspect-square rounded-3xl overflow-hidden bg-[#ECE8D7] border border-[#A8B99A]/30 shadow-md relative">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#153D2B] text-[#F6F4EA] shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    (selectedImage || product.image) === img
                      ? 'border-[#153D2B] shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Add to Cart (6 cols) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="px-3 py-1 rounded-full bg-[#153D2B]/10 text-[#153D2B] font-bold tracking-wider uppercase text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#252B26]">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span>{product.rating}</span>
              <span className="text-[#92765A] font-medium">({product.reviewsCount} customer reviews)</span>
            </div>
          </div>

          {/* Product Title */}
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#153D2B] tracking-tight leading-tight">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-bold text-[#153D2B]">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="text-base text-[#92765A] line-through">
                  {formatINR(product.originalPrice)}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          {/* Environmental Impact Highlight Box */}
          {product.impact && (
            <div className="p-4 rounded-2xl bg-[#A8B99A]/15 border border-[#A8B99A]/30 flex items-start gap-3 text-xs text-[#153D2B]">
              <Leaf className="w-5 h-5 text-[#153D2B] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Verified Ecological Impact:</p>
                <p className="text-[#5D6B60] mt-0.5">{product.impact}</p>
              </div>
            </div>
          )}

          {/* Long Description */}
          <p className="text-sm text-[#5D6B60] leading-relaxed">
            {product.description}
          </p>

          {/* Quantity & Add to Cart Controls */}
          <div className="pt-4 border-t border-[#A8B99A]/20 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between border border-[#A8B99A]/50 rounded-full px-4 py-3 bg-white w-full sm:w-36">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-[#153D2B] hover:text-black transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-sm text-[#153D2B]">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="p-1 text-[#153D2B] hover:text-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 py-3.5 px-8 rounded-full bg-[#153D2B] hover:bg-[#1D543B] text-[#F6F4EA] font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
              >
                <ShoppingBag className="w-4 h-4 text-[#A8B99A]" />
                <span>Add {quantity} to Cart • {formatINR(product.price * quantity)}</span>
              </button>
            </div>

            {/* In-Stock Indicator */}
            <p className="text-xs text-[#92765A]">
              ✓ Ships within 24 hours in 100% compostable mycelium packaging
            </p>
          </div>

          {/* Accordion Sections: Materials, Sustainability, Care, Shipping */}
          <div className="pt-4 border-t border-[#A8B99A]/20 space-y-3">
            {/* Accordion Item: Materials Used */}
            <div className="border border-[#A8B99A]/30 rounded-2xl bg-white overflow-hidden">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full p-4 flex items-center justify-between text-left font-serif text-sm font-bold text-[#153D2B]"
              >
                <span>Certified Materials & Ingredients</span>
                {activeAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {activeAccordion === 'materials' && (
                <div className="p-4 pt-0 text-xs text-[#5D6B60] space-y-2 border-t border-[#A8B99A]/15">
                  <p className="font-semibold text-[#153D2B] mt-2">Components Breakdown:</p>
                  <ul className="space-y-1 list-disc pl-4">
                    {product.materials?.map((mat, i) => (
                      <li key={i}>{mat}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[#92765A] italic">
                    {product.sustainabilityInfo}
                  </p>
                </div>
              )}
            </div>

            {/* Accordion Item: Benefits */}
            <div className="border border-[#A8B99A]/30 rounded-2xl bg-white overflow-hidden">
              <button
                onClick={() => toggleAccordion('benefits')}
                className="w-full p-4 flex items-center justify-between text-left font-serif text-sm font-bold text-[#153D2B]"
              >
                <span>Lifelong Benefits & Longevity</span>
                {activeAccordion === 'benefits' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {activeAccordion === 'benefits' && (
                <div className="p-4 pt-0 text-xs text-[#5D6B60] space-y-2 border-t border-[#A8B99A]/15">
                  <ul className="space-y-1.5 list-disc pl-4 mt-2">
                    {product.benefits?.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion Item: Zero-Waste Shipping */}
            <div className="border border-[#A8B99A]/30 rounded-2xl bg-white overflow-hidden">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full p-4 flex items-center justify-between text-left font-serif text-sm font-bold text-[#153D2B]"
              >
                <span>Zero-Plastic Delivery & Ethical Returns</span>
                {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {activeAccordion === 'shipping' && (
                <div className="p-4 pt-0 text-xs text-[#5D6B60] space-y-2 border-t border-[#A8B99A]/15">
                  <p className="mt-2 leading-relaxed">
                    Orders above ₹2,000 qualify for free pan-India electric delivery. Every box uses water-activated paper gum tape and non-toxic soy ink labels. We provide a 15-day mindful return window with zero-emission return couriers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Eco-Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-[#A8B99A]/30 space-y-8">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
              Complete Your Conscious Space
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153D2B] mt-1">
              Complementary Eco-Essentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

