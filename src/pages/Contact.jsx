import React, { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faq';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Customer Support',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'A valid email address is required';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject cannot be empty';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please correct the highlighted fields in the form.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Your message has been received! We will respond within 24 hours.', 'success');
      setFormData({
        name: '',
        email: '',
        category: 'Customer Support',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153D2B]/10 text-xs font-semibold text-[#153D2B]">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#153D2B] tracking-tight">
          We’d love to hear from you.
        </h1>
        <p className="text-sm sm:text-base text-[#5D6B60] max-w-2xl leading-relaxed">
          Whether you have a question about zero-waste materials, brand partnerships, order logistics, or simply want to say hello—our team is here for you.
        </p>
      </div>

      {/* Main Grid: Contact Form + Contact Info (2 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#A8B99A]/30 shadow-xs space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#153D2B]">
            Send an Inquiry
          </h2>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#153D2B] flex items-center justify-center text-[#A8B99A] mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#153D2B]">
                Message Received!
              </h3>
              <p className="text-sm text-[#5D6B60] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. A VERDANT sustainability coordinator will review your inquiry and email you back within one business day.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-[#153D2B] text-[#F6F4EA] text-xs font-semibold hover:bg-[#1D543B] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-[#252B26]">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full bg-[#F6F4EA] border rounded-xl p-3 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B] ${
                      errors.name ? 'border-red-500' : 'border-[#A8B99A]/40'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-600">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#252B26]">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className={`w-full bg-[#F6F4EA] border rounded-xl p-3 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B] ${
                      errors.email ? 'border-red-500' : 'border-[#A8B99A]/40'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-600">{errors.email}</p>}
                </div>
              </div>

              {/* Inquiry Category */}
              <div className="space-y-1">
                <label className="font-semibold text-[#252B26]">Inquiry Nature</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#F6F4EA] border border-[#A8B99A]/40 rounded-xl p-3 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B] cursor-pointer"
                >
                  <option value="Customer Support">Customer Support & Orders</option>
                  <option value="Artisan Partnership">Artisan / Brand Partnership Inquiry</option>
                  <option value="Press & Media">Press, Speaking & Media</option>
                  <option value="General Question">General Sustainability Question</option>
                </select>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="font-semibold text-[#252B26]">Subject *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Summary of your inquiry"
                  className={`w-full bg-[#F6F4EA] border rounded-xl p-3 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B] ${
                    errors.subject ? 'border-red-500' : 'border-[#A8B99A]/40'
                  }`}
                />
                {errors.subject && <p className="text-[10px] text-red-600">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="font-semibold text-[#252B26]">Your Message *</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're thinking, how we can help, or about your ethical brand..."
                  className={`w-full bg-[#F6F4EA] border rounded-xl p-3 text-xs text-[#252B26] focus:outline-none focus:border-[#153D2B] ${
                    errors.message ? 'border-red-500' : 'border-[#A8B99A]/40'
                  }`}
                />
                {errors.message && <p className="text-[10px] text-red-600">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-[#153D2B] hover:bg-[#1D543B] text-[#F6F4EA] font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Dispatch...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#153D2B] text-[#F6F4EA] p-8 rounded-3xl shadow-lg space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">
              Studio & Headquarters
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A8B99A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">The VERDANT Studio</p>
                  <p className="text-white/70 mt-0.5 leading-relaxed">
                    142 Green Terrace, Indiranagar 100ft Road,<br />
                    Bengaluru, Karnataka 560038, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <Mail className="w-4 h-4 text-[#A8B99A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Direct Inquiries</p>
                  <p className="text-white/70 mt-0.5">hello@verdant.eco</p>
                  <p className="text-white/70">partners@verdant.eco</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#A8B99A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Operating Hours</p>
                  <p className="text-white/70 mt-0.5">Monday – Friday: 9:30 AM – 6:30 PM IST</p>
                  <p className="text-white/70">Weekend Dispatch: 10:00 AM – 2:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#A8B99A]/30 space-y-2">
            <h4 className="font-serif text-base font-bold text-[#153D2B]">
              Looking to Become a Vendor Partner?
            </h4>
            <p className="text-xs text-[#5D6B60] leading-relaxed">
              We welcome independent artisans, certified organic cooperatives, and clean-tech pioneers. Select "Artisan Partnership" in the form above and include your catalog link.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <section id="faq" className="space-y-8 pt-8 border-t border-[#A8B99A]/30">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#92765A]">
            <HelpCircle className="w-4 h-4 text-[#153D2B]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#153D2B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 max-w-4xl">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#A8B99A]/30 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-[#153D2B] hover:text-[#1D543B] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#92765A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#92765A] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#5D6B60] leading-relaxed border-t border-[#A8B99A]/15 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

