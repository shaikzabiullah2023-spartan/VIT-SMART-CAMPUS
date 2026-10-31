/**
 * VIT SMART CAMPUS – CAMPUS STORE & CHECKOUT ENGINE (shopping.js)
 * Product catalog, cart state, quantity modification, and multi-step checkout
 * Author: Shaik Zabiullah (23MIC0007), VIT Vellore
 */

// Master Catalog
const STORE_CATALOG = [
  {
    id: 'prod-01',
    name: 'Data Structures & Algorithms in Java (Core Textbook)',
    category: 'Books',
    price: 650,
    desc: 'Official semester curriculum guide with comprehensive algorithm analysis and lab tutorials.',
    rating: '4.8 ★',
    icon: '📚'
  },
  {
    id: 'prod-02',
    name: 'Logitech Signature Wireless Ergonomic Mouse',
    category: 'Electronics',
    price: 1899,
    desc: 'Precision optical tracking with silent clicks and dual Bluetooth / 2.4GHz USB connectivity.',
    rating: '4.9 ★',
    icon: '🖱️'
  },
  {
    id: 'prod-03',
    name: 'VIT University Official Varsity Hoodie (Navy Blue)',
    category: 'Clothing',
    price: 1299,
    desc: 'Premium fleece cotton embroidered with the official VIT Vellore crest and kangaroo pockets.',
    rating: '4.7 ★',
    icon: '👕'
  },
  {
    id: 'prod-04',
    name: 'Classmate Octane Neon Gel Pens (Pack of 25)',
    category: 'Stationery',
    price: 250,
    desc: 'Smooth Japanese waterproof ink cartridges designed for examinations and speed writing.',
    rating: '4.6 ★',
    icon: '🖊️'
  },
  {
    id: 'prod-05',
    name: 'Stainless Steel Insulated University Flask (750ml)',
    category: 'Accessories',
    price: 499,
    desc: 'Double-walled vacuum thermal insulation keeps beverages cold for 24h or hot for 12h.',
    rating: '4.8 ★',
    icon: '🍶'
  },
  {
    id: 'prod-06',
    name: 'Web Technologies: HTML5, CSS3 & Modern JavaScript',
    category: 'Books',
    price: 780,
    desc: 'Comprehensive reference covering responsive design, flexbox, grid, and DOM events.',
    rating: '4.9 ★',
    icon: '📖'
  },
  {
    id: 'prod-07',
    name: 'SanDisk 128GB Ultra Dual USB 3.1 OTG Flash Drive',
    category: 'Electronics',
    price: 849,
    desc: 'High-speed Type-C and Type-A flash storage for instant project backups and OS booting.',
    rating: '4.7 ★',
    icon: '💾'
  },
  {
    id: 'prod-08',
    name: 'Engineering Graphics Pro Drafting Kit',
    category: 'Stationery',
    price: 890,
    desc: 'Complete engineering geometry set with mini drafter, scale rulers, compass, and sheet clip.',
    rating: '4.8 ★',
    icon: '📐'
  }
];

let cart = [];

// Initialize Cart from LocalStorage
try {
  cart = JSON.parse(localStorage.getItem('vit_cart') || '[]');
} catch(e) {
  cart = [];
}

document.addEventListener('DOMContentLoaded', () => {
  renderStoreProducts(STORE_CATALOG);
  renderCartModal();
  updateCartCounters();
  initCheckoutListeners();
});

/* Render Product Cards */
function renderStoreProducts(products, containerId = 'productGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products.map(prod => `
    <div class="card card-hover product-card" data-category="${prod.category}">
      <div class="product-media" style="height: 180px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); display: flex; align-items: center; justify-content: center; font-size: 56px; border-bottom: 1px solid var(--border-light);">
        <span>${prod.icon}</span>
      </div>
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-cyan">${prod.category}</span>
          <span style="font-size: 12px; color: var(--status-warning); font-weight: 700;">${prod.rating}</span>
        </div>
        <h3 style="font-size: 16px; font-weight: 700; color: var(--primary-navy); margin-bottom: 6px; line-height: 1.3;">${prod.name}</h3>
        <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px; min-height: 40px;">${prod.desc}</p>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-light);">
          <span style="font-size: 19px; font-weight: 800; color: var(--primary-navy);">₹${prod.price.toLocaleString('en-IN')}</span>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn btn-outline btn-sm" onclick="showProductDetails('${prod.id}')">Details</button>
            <button type="button" class="btn btn-primary btn-sm" onclick="addToCart('${prod.id}')">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* Category Filter */
function filterStoreByCategory(category) {
  if (category === 'All') {
    renderStoreProducts(STORE_CATALOG);
  } else {
    const filtered = STORE_CATALOG.filter(p => p.category.toLowerCase() === category.toLowerCase());
    renderStoreProducts(filtered);
  }
}

/* Add Item to Cart */
function addToCart(productId) {
  const item = STORE_CATALOG.find(p => p.id === productId);
  if (!item) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateCartCounters();
  renderCartModal();
  window.showToast?.(`Added "${item.name}" to cart!`, 'success');
}

/* Change Quantity */
function updateCartQty(productId, change) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
  }

  saveCart();
  updateCartCounters();
  renderCartModal();
}

/* Save Cart */
function saveCart() {
  try {
    localStorage.setItem('vit_cart', JSON.stringify(cart));
  } catch(e) {}
}

/* Update Header Badge & Counters */
function updateCartCounters() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

/* Render Cart Drawer / Modal */
function renderCartModal() {
  const cartItemsContainer = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartCountHeader = document.getElementById('cartCountHeader');

  if (!cartItemsContainer) return;

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + delivery;

  if (cartCountHeader) cartCountHeader.textContent = `(${totalCount} items)`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 12px;">🛒</span>
        <p style="font-weight: 600; font-size: 16px; color: var(--primary-navy); margin-bottom: 6px;">Your cart is currently empty</p>
        <p style="font-size: 13px;">Add books, varsity apparel, or tech gear from the campus store!</p>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border-light);">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 28px;">${item.icon}</span>
          <div>
            <h4 style="font-size: 14px; font-weight: 700; color: var(--primary-navy);">${item.name}</h4>
            <span style="font-size: 13px; color: var(--brand-cyan); font-weight: 600;">₹${item.price} each</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn btn-secondary btn-sm" style="padding: 2px 8px;" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; font-size: 14px; min-width: 20px; text-align: center;">${item.qty}</span>
          <button type="button" class="btn btn-secondary btn-sm" style="padding: 2px 8px;" onclick="updateCartQty('${item.id}', 1)">+</button>
          <span style="font-weight: 800; font-size: 14px; color: var(--primary-navy); margin-left: 10px;">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        </div>
      </div>
    `).join('');
  }

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (cartTotalEl) cartTotalEl.textContent = `₹${total.toLocaleString('en-IN')}`;

  // Also sync with Checkout Summary Table if present
  const checkoutSummaryBody = document.getElementById('checkoutSummaryItems');
  if (checkoutSummaryBody) {
    checkoutSummaryBody.innerHTML = cart.map(item => `
      <tr>
        <td>${item.icon} ${item.name}</td>
        <td>${item.qty}</td>
        <td>₹${item.price}</td>
        <td style="font-weight: bold;">₹${(item.price * item.qty).toLocaleString('en-IN')}</td>
      </tr>
    `).join('');
    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

/* Product Details Modal */
function showProductDetails(productId) {
  const prod = STORE_CATALOG.find(p => p.id === productId);
  if (!prod) return;

  const modalEl = document.getElementById('productDetailModal');
  if (!modalEl) {
    alert(`${prod.name}\n\nPrice: ₹${prod.price}\nCategory: ${prod.category}\n\n${prod.desc}`);
    return;
  }

  document.getElementById('modalProdTitle').textContent = prod.name;
  document.getElementById('modalProdIcon').textContent = prod.icon;
  document.getElementById('modalProdCategory').textContent = prod.category;
  document.getElementById('modalProdPrice').textContent = `₹${prod.price.toLocaleString('en-IN')}`;
  document.getElementById('modalProdDesc').textContent = prod.desc;
  document.getElementById('modalProdAddBtn').onclick = () => {
    addToCart(prod.id);
    closeProductModal();
  };

  modalEl.style.display = 'flex';
}

function closeProductModal() {
  const modalEl = document.getElementById('productDetailModal');
  if (modalEl) modalEl.style.display = 'none';
}

/* --------------------------------------------------------------------------
   MULTI-STEP CHECKOUT SYSTEM (Q27)
   Part A: Delivery -> Part B: Payment -> Part C: Summary
   -------------------------------------------------------------------------- */
function initCheckoutListeners() {
  const checkoutForm = document.getElementById('checkoutForm');
  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    processCheckoutSubmission();
  });
}

function processCheckoutSubmission() {
  if (cart.length === 0) {
    alert('Your shopping cart is empty! Add products before checking out.');
    return;
  }

  const name = document.getElementById('custName')?.value.trim();
  const address = document.getElementById('custAddress')?.value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
  const termsChecked = document.getElementById('termsCheck')?.checked;

  if (!name || !address) {
    alert('Please complete the Customer & Delivery details in Part A.');
    return;
  }

  if (!termsChecked) {
    alert('Please accept the Terms & Conditions in Part B.');
    return;
  }

  // Simulated Order Success
  const orderId = 'VIT-ORD-' + Math.floor(100000 + Math.random() * 900000);
  const totalAmount = document.getElementById('checkoutTotal')?.textContent || '₹0';

  const receiptModal = document.getElementById('orderReceiptModal');
  if (receiptModal) {
    document.getElementById('receiptOrderId').textContent = orderId;
    document.getElementById('receiptCustomer').textContent = name;
    document.getElementById('receiptPayment').textContent = paymentMethod || 'Standard Payment';
    document.getElementById('receiptTotal').textContent = totalAmount;
    document.getElementById('receiptDate').textContent = new Date().toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
    receiptModal.style.display = 'flex';
  } else {
    alert(`✓ Order Placed Successfully!\n\nOrder ID: ${orderId}\nTotal: ${totalAmount}\nDelivery to: ${name}`);
  }

  // Reset cart
  cart = [];
  saveCart();
  updateCartCounters();
  renderCartModal();
  window.showToast?.('Order Confirmed! Receipt generated.', 'success');
}

// Global Expose
window.STORE_CATALOG = STORE_CATALOG;
window.renderStoreProducts = renderStoreProducts;
window.filterStoreByCategory = filterStoreByCategory;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.showProductDetails = showProductDetails;
window.closeProductModal = closeProductModal;
window.processCheckoutSubmission = processCheckoutSubmission;

