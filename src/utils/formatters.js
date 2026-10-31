// Utility formatters for VERDANT

/**
 * Format a number as Indian Rupee (INR)
 * @param {number} amount
 * @returns {string} e.g. "₹1,499"
 */
export const formatINR = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format standard numbers with locale commas
 * @param {number} num
 * @returns {string} e.g. "12,450"
 */
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

/**
 * Format date nicely
 * @param {string} dateStr e.g. "2026-03-15"
 * @returns {string} e.g. "15 March 2026"
 */
export const formatDate = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
};

