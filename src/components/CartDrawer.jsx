import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/formatters';
import confetti from 'canvas-confetti';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartSubtotal,
    isFreeShipping,
    shippingFee,
    includeCarbonOffset,
    setIncludeCarbonOffset,
    carbonOffset,
    cartTotal,
    progressToFreeShipping,
    amountNeededForFreeShipping
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCartOpen) return null;

  const handleSimulateCheckout = (e) => {
    e.preventDefault();
    setIsCheckingOut(true);

    setTimeout(() => {
      const generatedId = 'VRD-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsCheckingOut(false);
      setOrderComplete(true);

      // Trigger Confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#153D2B', '#A8B99A', '#92765A', '#F6F4EA']
      });

      clearCart();
    }, 1200);
  };

  const handleCloseDrawer = () => {
    setIsCartOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={handleCloseDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F4EA] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#A8B99A]/30 flex items-center justify-between bg-white/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#153D2B] flex items-center justify-center text-[#A8B99A]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#153D2B]">
                Your Eco-Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={handleCloseDrawer}
              className="p-1.5 rounded-full hover:bg-[#A8B99A]/20 text-[#252B26] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              /* Order Success Simulation State */
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#153D2B] flex items-center justify-center text-[#A8B99A] shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#153D2B]">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#92765A] font-semibold">
                  Order ID: {orderId}
                </p>
                <p className="text-sm text-[#5D6B60] max-w-xs leading-relaxed">
                  Your carbon-neutral order has been recorded. It will be packaged in 100% plastic-free recycled paper and dispatched via electric delivery!
                </p>
                <div className="p-4 rounded-2xl bg-white border border-[#A8B99A]/40 w-full text-left text-xs space-y-1.5 text-[#252B26]">
                  <p className="font-semibold text-[#153D2B]">Estimated Delivery:</p>
                  <p className="text-[#5D6B60]">2-3 Business Days (Zero-Emission Transit)</p>
                  <p className="font-semibold text-[#153D2B] pt-2">Carbon Offset Impact:</p>
                  <p className="text-[#5D6B60]">4.8kg CO₂ neutralized via Sundarbans mangrove project.</p>
                </div>
                <button
                  onClick={handleCloseDrawer}
                  className="w-full py-3 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-sm hover:bg-[#1D543B] transition-colors"
                >
                  Continue Mindful Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#A8B99A]/20 flex items-center justify-center text-[#153D2B]/50">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#153D2B]">
                  Your cart is empty
                </h3>
                <p className="text-sm text-[#5D6B60] max-w-xs leading-relaxed">
                  Discover thoughtfully crafted, low-waste goods designed for daily mindful living.
                </p>
                <button
                  onClick={() => {
                    handleCloseDrawer();
                  }}
                >
                  <Link
                    to="/marketplace"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-xs tracking-wider uppercase hover:bg-[#1D543B] transition-colors shadow-sm"
                  >
                    <span>Browse Marketplace</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <>
                {/* Free Shipping Progress Indicator */}
                <div className="p-4 rounded-2xl bg-white border border-[#A8B99A]/30 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#153D2B]">
                      {isFreeShipping
                        ? '🎉 You unlocked Zero-Plastic Free Delivery!'
                        : `Add ${formatINR(amountNeededForFreeShipping)} more for Free Delivery`}
                    </span>
                    <span className="text-[#92765A]">{Math.round(progressToFreeShipping)}%</span>
                  </div>
                  <div className="w-full bg-[#ECE8D7] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#153D2B] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${progressToFreeShipping}%` }}
                    />
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#A8B99A]/20 shadow-2xs"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl bg-[#ECE8D7] shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-sm font-bold text-[#153D2B] truncate">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-400 hover:text-red-600 p-0.5 transition-colors"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[11px] text-[#92765A] uppercase tracking-wider font-medium">
                            {item.category}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="font-bold text-sm text-[#153D2B]">
                            {formatINR(item.price * item.quantity)}
                          </span>

                          {/* Quantity Selector */}
                          <div className="flex items-center gap-2 border border-[#A8B99A]/40 rounded-full px-2 py-0.5 bg-[#F6F4EA]">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-[#153D2B] hover:text-black transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-[#153D2B] hover:text-black transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carbon Offset Checkbox */}
                <div className="p-4 rounded-2xl bg-[#153D2B]/5 border border-[#153D2B]/15 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="carbon-offset-toggle"
                    checked={includeCarbonOffset}
                    onChange={(e) => setIncludeCarbonOffset(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#153D2B] focus:ring-[#153D2B] border-[#A8B99A]"
                  />
                  <label htmlFor="carbon-offset-toggle" className="text-xs cursor-pointer">
                    <span className="font-bold text-[#153D2B]">
                      Add ₹49 Mangrove Reforestation Offset
                    </span>
                    <p className="text-[#5D6B60] mt-0.5 leading-relaxed">
                      100% of this contribution funds community mangrove planting in West Bengal, sequestering an estimated 15kg of CO₂ per tree planted.
                    </p>
                  </label>
                </div>
              </>
            )}
          </div>

          {/* Footer Totals & Checkout Button */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-6 bg-white border-t border-[#A8B99A]/30 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#5D6B60]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#252B26]">{formatINR(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between text-[#5D6B60]">
                  <span>Zero-Plastic Delivery</span>
                  <span className="font-semibold text-[#252B26]">
                    {isFreeShipping ? (
                      <span className="text-[#153D2B] font-bold">FREE</span>
                    ) : (
                      formatINR(shippingFee)
                    )}
                  </span>
                </div>
                {includeCarbonOffset && (
                  <div className="flex justify-between text-[#5D6B60]">
                    <span>Verified Carbon Offset</span>
                    <span className="font-semibold text-[#252B26]">{formatINR(carbonOffset)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#A8B99A]/20 flex justify-between text-base font-bold text-[#153D2B]">
                  <span>Total</span>
                  <span>{formatINR(cartTotal)}</span>
                </div>
              </div>

              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 px-6 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-sm hover:bg-[#1D543B] transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Processing Zero-Waste Order...</span>
                ) : (
                  <>
                    <span>Proceed to Eco-Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#92765A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#153D2B]" />
                <span>100% Ethical Guarantee • Plastic-Free Transit</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

