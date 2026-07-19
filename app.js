/**
 * SAMSUNG DEALER STORE — app.js
 * Handles: Auth, Products, Cart, Search, Filter, Checkout, Toasts
 */

'use strict';

// Debug: Verify app.js is loading
console.log('✅ app.js loaded successfully');

/* ============================================================
   PRODUCT DATA
   ── To add product images, set the `image` field like:
      image: 'assets/products/your-file.jpg'
   ── or replace the placeholder <div> in renderProductCard()
      with an <img> tag pointing to your file.
   ============================================================ */
const PRODUCTS = [
  /* ── MOBILE PHONES ─────────────────────────────────────── */
  {
    id: 'p001', category: 'phones',
    name: 'Samsung Galaxy S24 Ultra',
    spec: '12GB RAM · 256GB · 6.8" AMOLED · 200MP Camera',
    price: 6499, originalPrice: 7200,
    stock: 23, badge: 'new',
    bulkMin: 5, bulkDiscount: 8,
    image: '/static/assets/p001.jpg', // ── INSERT: 'assets/products/s24-ultra.jpg'
    // Samsung Galaxy S24 Ultra (p001)
variants: [
  { label: '256GB', price: 6499 },
  { label: '512GB', price: 7299 },
  { label: '1TB',   price: 8499 },
],
  },
  {
    id: 'p002', category: 'phones',
    name: 'Samsung Galaxy S24+',
    spec: '12GB RAM · 256GB · 6.7" AMOLED · 50MP Camera',
    price: 5299, originalPrice: null,
    stock: 11, badge: 'new',
    bulkMin: 5, bulkDiscount: 7,
    image: '/static/assets/p002.jpg', // ── INSERT: 'assets/products/s24-plus.jpg'
    // Samsung Galaxy S24+ (p002)
variants: [
  { label: '256GB', price: 5299 },
  { label: '512GB', price: 5999 },
],
  },
  {
    id: 'p003', category: 'phones',
    name: 'Samsung Galaxy S24',
    spec: '8GB RAM · 128GB · 6.2" AMOLED · 50MP Camera',
    price: 3999, originalPrice: null,
    stock: 38, badge: null,
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p003.jpg', // ── INSERT: 'assets/products/s24.jpg'
    // Samsung Galaxy S24 (p003)
variants: [
  { label: '128GB', price: 3999 },
  { label: '256GB', price: 4499 },
],
  },
  {
    id: 'p004', category: 'phones',
    name: 'Samsung Galaxy A55 5G',
    spec: '8GB RAM · 128GB · 6.6" Super AMOLED · 50MP',
    price: 2499, originalPrice: 2799,
    stock: 55, badge: 'sale',
    bulkMin: 10, bulkDiscount: 12,
    image: '/static/assets/p004.jpg' // ── INSERT: 'assets/products/a55.jpg'
  },
  {
    id: 'p005', category: 'phones',
    name: 'Samsung Galaxy A35 5G',
    spec: '6GB RAM · 128GB · 6.6" Super AMOLED · 50MP',
    price: 1799, originalPrice: null,
    stock: 0, badge: null,
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p005.jpg' // ── INSERT: 'assets/products/a35.jpg'
  },
  {
    id: 'p006', category: 'phones',
    name: 'Samsung Galaxy Z Fold6',
    spec: '12GB RAM · 256GB · 7.6" Foldable AMOLED',
    price: 9799, originalPrice: null,
    stock: 8, badge: 'hot',
    bulkMin: 3, bulkDiscount: 6,
    image: '/static/assets/p006.jpg', // ── INSERT: 'assets/products/zfold6.jpg'
    // Samsung Galaxy Z Fold6 (p006)
variants: [
  { label: '256GB', price: 9799 },
  { label: '512GB', price: 10999 },
],
  },
  {
    id: 'p007', category: 'phones',
    name: 'Samsung Galaxy Z Flip6',
    spec: '12GB RAM · 256GB · 6.7" Flip Foldable AMOLED',
    price: 6299, originalPrice: null,
    stock: 14, badge: 'new',
    bulkMin: 5, bulkDiscount: 7,
    image: '/static/assets/p007.jpg', // ── INSERT: 'assets/products/zflip6.jpg'
    // Samsung Galaxy Z Flip6 (p007)
variants: [
  { label: '256GB', price: 6299 },
  { label: '512GB', price: 6999 },
],
  },
  {
    id: 'p008', category: 'phones',
    name: 'Samsung Galaxy M55',
    spec: '8GB RAM · 128GB · 6.7" Super AMOLED · 50MP',
    price: 1499, originalPrice: 1699,
    stock: 70, badge: 'sale',
    bulkMin: 20, bulkDiscount: 15,
    image: '/static/assets/p008.jpg' // ── INSERT: 'assets/products/m55.jpg'
  },

  /* ── LAPTOPS & DESKTOPS ─────────────────────────────────── */
  {
    id: 'p009', category: 'laptops',
    name: 'Samsung Galaxy Book4 Ultra',
    spec: 'Intel Core Ultra 9 · 32GB RAM · 1TB SSD · 16" AMOLED',
    price: 12999, originalPrice: null,
    stock: 6, badge: 'new',
    bulkMin: 3, bulkDiscount: 5,
    image: '/static/assets/p009.jpg', // ── INSERT: 'assets/products/book4-ultra.jpg'
    // Galaxy Book4 Ultra (p009)
variants: [
  { label: '512GB SSD', price: 12999 },
  { label: '1TB SSD',   price: 14999 },
],
  },
  {
    id: 'p010', category: 'laptops',
    name: 'Samsung Galaxy Book4 Pro 360',
    spec: 'Intel Core Ultra 7 · 16GB RAM · 512GB SSD · 14" Touch',
    price: 8799, originalPrice: 9200,
    stock: 9, badge: 'sale',
    bulkMin: 3, bulkDiscount: 5,
    image: '/static/assets/p010.jpg' // ── INSERT: 'assets/products/book4-pro360.jpg'
  },
  {
    id: 'p011', category: 'laptops',
    name: 'Samsung Galaxy Book4',
    spec: 'Intel Core 5 · 8GB RAM · 256GB SSD · 15.6" FHD',
    price: 4299, originalPrice: null,
    stock: 18, badge: null,
    bulkMin: 5, bulkDiscount: 8,
    image: '/static/assets/p011.jpg', // ── INSERT: 'assets/products/book4.jpg'
    // Galaxy Book4 (p011)
variants: [
  { label: '256GB SSD', price: 4299 },
  { label: '512GB SSD', price: 4999 },
],
  },
  {
    id: 'p012', category: 'laptops',
    name: 'Samsung All-in-One PC (2024)',
    spec: 'Intel Core i7 · 16GB · 512GB SSD · 27" 4K Display',
    price: 7499, originalPrice: null,
    stock: 0, badge: null,
    bulkMin: 2, bulkDiscount: 4,
    image: '/static/assets/p012.jpg' // ── INSERT: 'assets/products/aio2024.jpg'
  },
  {
    id: 'p013', category: 'laptops',
    name: 'Samsung Galaxy Book3 360',
    spec: 'Intel Core i5 · 8GB RAM · 256GB SSD · 13.3" Touch',
    price: 3799, originalPrice: 4100,
    stock: 12, badge: 'sale',
    bulkMin: 5, bulkDiscount: 7,
    image: '/static/assets/p013.jpg' // ── INSERT: 'assets/products/book3-360.jpg'
  },

  /* ── CHARGERS ───────────────────────────────────────────── */
  {
    id: 'p014', category: 'chargers',
    name: 'Samsung 65W Super Fast Charger Duo',
    spec: 'USB-C + USB-A · Travel-ready · EP-TA865',
    price: 229, originalPrice: null,
    stock: 150, badge: null,
    bulkMin: 20, bulkDiscount: 15,
    image: '/static/assets/p014.jpg' // ── INSERT: 'assets/products/charger-65w.jpg'
  },
  {
    id: 'p015', category: 'chargers',
    name: 'Samsung 45W USB-C Fast Charger',
    spec: 'USB-C PD 3.0 · For Galaxy S & A Series · EP-TA845',
    price: 149, originalPrice: null,
    stock: 200, badge: null,
    bulkMin: 20, bulkDiscount: 15,
    image: '/static/assets/p015.jpg' // ── INSERT: 'assets/products/charger-45w.jpg'
  },
  {
    id: 'p016', category: 'chargers',
    name: 'Samsung 25W USB-C Charger',
    spec: 'Compact · PD · Compatible with Galaxy A & M Series',
    price: 89, originalPrice: null,
    stock: 320, badge: null,
    bulkMin: 30, bulkDiscount: 18,
    image: '/static/assets/p016.jpg' // ── INSERT: 'assets/products/charger-25w.jpg'
  },
  {
    id: 'p017', category: 'chargers',
    name: 'Samsung Wireless Charger Trio',
    spec: 'Charges Phone + Watch + Buds · EP-P6300',
    price: 399, originalPrice: 450,
    stock: 40, badge: 'sale',
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p017.jpg' // ── INSERT: 'assets/products/wireless-trio.jpg'
  },
  {
    id: 'p018', category: 'chargers',
    name: 'Samsung 15W Wireless Charger Stand',
    spec: 'Fast Wireless · Works with Qi devices · EP-N5200',
    price: 179, originalPrice: null,
    stock: 0, badge: null,
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p018.jpg' // ── INSERT: 'assets/products/wireless-stand.jpg'
  },
  {
    id: 'p019', category: 'chargers',
    name: 'Samsung 20,000mAh Power Bank',
    spec: '45W PD · Dual USB-C · LED Indicator · EB-P5300',
    price: 349, originalPrice: null,
    stock: 85, badge: null,
    bulkMin: 20, bulkDiscount: 12,
    image: '/static/assets/p019.jpg', // ── INSERT: 'assets/products/powerbank.jpg'
    // 20,000mAh Power Bank (p019)
variants: [
  { label: '10,000mAh', price: 199 },
  { label: '20,000mAh', price: 349 },
],
  },

  /* ── GADGETS ────────────────────────────────────────────── */
  {
    id: 'p020', category: 'gadgets',
    name: 'Samsung Galaxy Buds3 Pro',
    spec: 'ANC · 360° Audio · Up to 30hr battery · IP57',
    price: 1299, originalPrice: null,
    stock: 34, badge: 'new',
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p020.jpg' // ── INSERT: 'assets/products/buds3-pro.jpg'
  },
  {
    id: 'p021', category: 'gadgets',
    name: 'Samsung Galaxy Buds3',
    spec: 'Open-type · 360° Audio · Up to 30hr total',
    price: 799, originalPrice: null,
    stock: 60, badge: null,
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p021.jpg' // ── INSERT: 'assets/products/buds3.jpg'
  },
  {
    id: 'p022', category: 'gadgets',
    name: 'Samsung Galaxy Watch7',
    spec: '1.5" AMOLED · BioActive Sensor · Wear OS · 44mm',
    price: 1699, originalPrice: null,
    stock: 27, badge: 'new',
    bulkMin: 5, bulkDiscount: 8,
    image: '/static/assets/p022.jpg' // ── INSERT: 'assets/products/watch7.jpg'
  },
  {
    id: 'p023', category: 'gadgets',
    name: 'Samsung Galaxy Watch Ultra',
    spec: '1.5" AMOLED · Titanium · 47mm · Military Grade',
    price: 3499, originalPrice: null,
    stock: 10, badge: 'hot',
    bulkMin: 5, bulkDiscount: 7,
    image: '/static/assets/p023.jpg' // ── INSERT: 'assets/products/watch-ultra.jpg'
  },
  {
    id: 'p024', category: 'gadgets',
    name: 'Samsung Galaxy Ring',
    spec: 'Titanium · Health Tracking · Up to 9-day battery',
    price: 1399, originalPrice: null,
    stock: 0, badge: 'new',
    bulkMin: 5, bulkDiscount: 8,
    image: '/static/assets/p024.jpg' // ── INSERT: 'assets/products/galaxy-ring.jpg'
  },
  {
    id: 'p025', category: 'gadgets',
    name: 'Samsung Galaxy Tab S9 FE',
    spec: '6GB RAM · 128GB · 10.9" TFT LCD · IP68',
    price: 2299, originalPrice: 2599,
    stock: 22, badge: 'sale',
    bulkMin: 5, bulkDiscount: 10,
    image: '/static/assets/p025.jpg' // ── INSERT: 'assets/products/tabs9fe.jpg'
  },
  {
    id: 'p026', category: 'gadgets',
    name: 'Samsung SmartTag2',
    spec: 'Bluetooth + UWB · IP67 · Up to 6 months battery',
    price: 199, originalPrice: null,
    stock: 180, badge: null,
    bulkMin: 20, bulkDiscount: 15,
    image: '/static/assets/p026.jpg' // ── INSERT: 'assets/products/smarttag2.jpg'
  },
  {
    id: 'p027', category: 'gadgets',
    name: 'Samsung T7 Shield Portable SSD',
    spec: '2TB · USB 3.2 Gen2 · IP65 · 1050MB/s Read',
    price: 899, originalPrice: 1050,
    stock: 45, badge: 'sale',
    bulkMin: 10, bulkDiscount: 10,
    image: '/static/assets/p027.jpg', // ── INSERT: 'assets/products/t7-shield.jpg'
    variants: [
  { label: '500GB', price: 499  },
  { label: '1TB',   price: 699  },
  { label: '2TB',   price: 899  },
],
  },
];

/* ============================================================
   CURRENCY FORMATTER
   ============================================================ */
const formatGHS = (n) => 'GH₵ ' + n.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ============================================================
   LOCAL STORAGE HELPERS
   ============================================================ */
const LS = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} },
  del: (key) => { try { localStorage.removeItem(key); } catch {} },
};

/* ============================================================
   AUTH HELPERS
   ============================================================ */
const Auth = {
  getUsers:  () => LS.get('ss_users') || [],
  saveUsers: (u) => LS.set('ss_users', u),
  getSession: () => LS.get('ss_session') || { isLoggedIn: false, username: '' },
  setSession: (s) => LS.set('ss_session', s),
  clearSession: () => LS.del('ss_session'),
  isLoggedIn: () => Auth.getSession().isLoggedIn === true,
  username:   () => Auth.getSession().username || '',

  register(username, password) {
    const users = Auth.getUsers();
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) return { ok: false, msg: 'Username already taken.' };
    users.push({ username, password });
    Auth.saveUsers(users);
    Auth.setSession({ isLoggedIn: true, username });
    return { ok: true };
  },
  login(username, password) {
    const users = Auth.getUsers();
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
    if (!user) return { ok: false, msg: 'Incorrect username or password.' };
    Auth.setSession({ isLoggedIn: true, username: user.username });
    return { ok: true };
  },
  logout() {
    Auth.clearSession();
    window.location.href = '/';
  },
};

/* ============================================================
   CART HELPERS
   ============================================================ */
const Cart = {
  get:  () => LS.get('ss_cart') || [],
  save: (c) => LS.set('ss_cart', c),
  clear: () => LS.del('ss_cart'),

  add(productId, qty = 1, variantPrice = null, variantLabel = '') {
  const cart = Cart.get();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.stock === 0) return false;
  const maxQty = product.stock;
  const cartKey = productId + (variantLabel ? '_' + variantLabel : '');
  const existing = cart.find(i => i.cartKey === cartKey);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, maxQty);
  } else {
    cart.push({
      id: productId,
      cartKey,
      qty: Math.min(qty, maxQty),
      variantPrice: variantPrice || product.price,
      variantLabel
    });
  }
  Cart.save(cart);
  return true;
  },
  remove(productId) {
    const cart = Cart.get().filter(i => i.id !== productId);
    Cart.save(cart);
  },
  updateQty(productId, qty) {
    const cart = Cart.get();
    const product = PRODUCTS.find(p => p.id === productId);
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty = Math.max(1, Math.min(qty, product ? product.stock : qty));
    Cart.save(cart);
  },
 total() {
  return Cart.get().reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const price = item.variantPrice || (p ? p.price : 0);
    return sum + (price * item.qty);
  }, 0);
},
  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },
  items() {
  return Cart.get().map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return p ? {
      ...p,
      qty: i.qty,
      price: i.variantPrice || p.price,
      variantLabel: i.variantLabel || '',
      cartKey: i.cartKey || i.id
    } : null;
  }).filter(Boolean);
},
};

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
const Toast = {
  container: null,
  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  },
  show(msg, type = 'info', icon = '🔔') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${msg}</span>`;
    this.container.appendChild(el);
    setTimeout(() => {
      el.classList.add('toast-out');
      el.addEventListener('animationend', () => el.remove());
    }, 3400);
  },
  success: (m) => Toast.show(m, 'success', '✓'),
  error:   (m) => Toast.show(m, 'error', '✕'),
  info:    (m) => Toast.show(m, 'info', '🛒'),
};

/* ============================================================
   PRODUCT CARD RENDERER
   ============================================================ */
function stockStatus(product) {
  if (product.stock === 0) return { cls: 'stock-out', label: 'Out of Stock' };
  if (product.stock <= 10) return { cls: 'stock-low', label: `Only ${product.stock} left` };
  return { cls: 'stock-in', label: `${product.stock} in stock` };
}

function renderProductCard(product) {
  const { cls, label } = stockStatus(product);
  const outOfStock = product.stock === 0;
  const badgeHtml = product.badge ? `<span class="badge badge-${product.badge}">${product.badge}</span>` : '';
  const bulkHtml = product.bulkMin
    ? `<div class="bulk-note">📦 Buy ${product.bulkMin}+ and save ${product.bulkDiscount}%</div>` : '';
  const origPriceHtml = product.originalPrice
    ? `<span class="product-price-orig">${formatGHS(product.originalPrice)}</span>` : '';

  /* ── IMAGE SECTION ──────────────────────────────────────────
     If `product.image` is set, we show a real <img>.
     Otherwise we show a placeholder. To add your own images,
     set the `image` property in the PRODUCTS array above.
  ─────────────────────────────────────────────────────────── */
  const imgHtml = product.image
    ? `<img src="${product.image}" alt="${product.name} — Samsung ${categoryLabel(product.category)} available in Ghana" class="product-img" loading="lazy">`
    : `<div class="product-image-placeholder" role="img" aria-label="${product.name} image placeholder">
         <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
           <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
         <span class="img-label">📷 Add image: assets/products/${product.id}.jpg</span>
       </div>`;

  return `
    <article class="product-card" data-id="${product.id}" role="button" tabindex="0" aria-label="View ${product.name} details">
      <div class="product-image-wrap">
        ${imgHtml}
        <div class="badge-wrap">${badgeHtml}${product.bulkMin ? '<span class="badge badge-bulk">Bulk</span>' : ''}</div>
        <div class="stock-indicator ${cls}">
          <span class="stock-dot"></span>${label}
        </div>
        <button class="btn-quick-view" data-id="${product.id}" aria-label="Quick view">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Quick View
        </button>
      </div>
      <div class="product-body">
        <div class="product-category">${categoryLabel(product.category)}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-spec">${product.spec}</div>
        ${bulkHtml}
        <div class="product-pricing">
          <span class="product-price">${formatGHS(product.price)}</span>${origPriceHtml}
        </div>
      </div>
      <div class="product-foot">
        <button class="btn-add-cart" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          ${outOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
        <button class="btn-wishlist" data-id="${product.id}" data-name="${product.name}" title="Add to favourites">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    </article>`;
}

function categoryLabel(cat) {
  const map = { phones: 'Mobile Phones', laptops: 'Laptops & Desktops', chargers: 'Chargers & Power Banks', gadgets: 'Samsung Gadgets' };
  return map[cat] || cat;
}

/* ============================================================
   PAGE: INDEX.HTML (Auth)
   ============================================================ */
function initAuthPage() {
  if (Auth.isLoggedIn()) { window.location.href = '/store'; return; }

  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      forms.forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  /* ── SIGNUP ── */
  const signupForm = document.getElementById('form-signup');
  if (signupForm) {
    signupForm.querySelector('.btn-auth').addEventListener('click', () => {
      const username = signupForm.querySelector('[name=username]').value.trim();
      const password = signupForm.querySelector('[name=password]').value;
      const confirm  = signupForm.querySelector('[name=confirm]').value;
      let valid = true;

      clearErrors(signupForm);

      if (!username || username.length < 3) { showError(signupForm, 'username', 'Username must be at least 3 characters.'); valid = false; }
      if (!password || password.length < 6) { showError(signupForm, 'password', 'Password must be at least 6 characters.'); valid = false; }
      if (password !== confirm) { showError(signupForm, 'confirm', 'Passwords do not match.'); valid = false; }
      if (!valid) return;

      const res = Auth.register(username, password);
      if (res.ok) { Toast.init(); Toast.success('Account created! Redirecting…'); setTimeout(() => { window.location.href = '/store'; }, 800); }
      else { showError(signupForm, 'username', res.msg); }
    });
  }

  /* ── LOGIN ── */
  const loginForm = document.getElementById('form-login');
  if (loginForm) {
    loginForm.querySelector('.btn-auth').addEventListener('click', () => {
      const username = loginForm.querySelector('[name=username]').value.trim();
      const password = loginForm.querySelector('[name=password]').value;
      clearErrors(loginForm);
      if (!username) { showError(loginForm, 'username', 'Enter your username.'); return; }
      if (!password) { showError(loginForm, 'password', 'Enter your password.'); return; }
      const res = Auth.login(username, password);
      if (res.ok) { Toast.init(); Toast.success('Welcome back, ' + username + '!'); setTimeout(() => { window.location.href = '/store'; }, 700); }
      else { showError(loginForm, 'password', res.msg); }
    });

    /* Allow Enter key */
    loginForm.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') loginForm.querySelector('.btn-auth').click(); });
    });
  }

  function showError(form, name, msg) {
    const input = form.querySelector(`[name=${name}]`);
    if (input) input.classList.add('error');
    const err = form.querySelector(`[data-err=${name}]`);
    if (err) { err.textContent = msg; err.classList.add('show'); }
  }
  function clearErrors(form) {
    form.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(e => { e.textContent = ''; e.classList.remove('show'); });
  }
}

/* ============================================================
   PAGE: STORE.HTML
   ============================================================ */
function initStorePage() {
  if (!Auth.isLoggedIn()) { window.location.href = '/'; return; }

  Toast.init();

  /* Greeting */
  const greetEl = document.getElementById('nav-greeting');
  if (greetEl) greetEl.innerHTML = `Welcome, <strong>${Auth.username()}</strong>`;

  /* Logout — both navbar btn and side menu btn */
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
  await fetch('/api/logout', { method: 'POST' }).catch(() => {});
  Auth.clearSession();
  window.location.href = '/';
});

  /* Cart badge */
  updateCartBadge();

  /* Category filter */
  let activeCategory = 'all';
  let searchQuery = '';

  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderProducts();
      // Scroll to products section
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Mobile search syncs with desktop search
  const mobileSearch = document.getElementById('nav-search-mobile');
  if (mobileSearch) {
    mobileSearch.addEventListener('input', () => {
      searchQuery = mobileSearch.value.trim().toLowerCase();
      if (searchInput) searchInput.value = mobileSearch.value;
      renderProducts();
       if (searchQuery.length > 0) {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
  }

  // Product modal close
  document.getElementById('product-modal-close')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeProductModal();
  });

  /* Search */
  const searchInput = document.getElementById('nav-search-input');
  let searchTimer;
  if (searchInput) {
    // Support ?q= from profile page search again links
    const urlQ = new URLSearchParams(window.location.search).get('q');
    if (urlQ) { searchInput.value = urlQ; searchQuery = urlQ.toLowerCase(); }

    searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  renderProducts();
  // Scroll to products when user types
  if (searchQuery.length > 0) {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  clearTimeout(searchTimer);
  if (searchQuery.length > 1) {
    searchTimer = setTimeout(() => {
      const hist = JSON.parse(localStorage.getItem('ss_search_history') || '[]');
      if (!hist.includes(searchQuery)) {
        hist.unshift(searchQuery);
        localStorage.setItem('ss_search_history', JSON.stringify(hist.slice(0, 15)));
      }
    }, 1500);
  }
});
  }

  /* Product grid */
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  function renderProducts() {
    let list = PRODUCTS;
    if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
    if (searchQuery) list = list.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      p.spec.toLowerCase().includes(searchQuery) ||
      categoryLabel(p.category).toLowerCase().includes(searchQuery)
    );

   const countEl = document.getElementById('product-count');
if (countEl) {
  if (searchQuery) {
    countEl.textContent = `${list.length} result${list.length !== 1 ? 's' : ''} for "${searchQuery}"`;
    countEl.style.color = 'var(--blue)';
    countEl.style.fontWeight = '600';
  } else {
    countEl.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
    countEl.style.color = '';
    countEl.style.fontWeight = '';
  }
}

    if (!list.length) {
      grid.innerHTML = `<div class="no-results">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <p>No products found</p><small>Try a different category or search term</small>
      </div>`;
      return;
    }
    grid.innerHTML = list.map(renderProductCard).join('');
    attachAddToCartHandlers();
    attachWishlistHandlers();

    // Product card click → open modal
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-add-cart') || e.target.closest('.btn-wishlist')) return;
        openProductModal(card.dataset.id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openProductModal(card.dataset.id);
      });
    });

    // Quick view button
    grid.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductModal(btn.dataset.id);
      });
    });
  }

  renderProducts();

  /* Add to Cart handlers */
  function attachAddToCartHandlers() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        const added = Cart.add(id, 1);
        if (added) {
          Toast.success(`${product.name} added to cart`);
          updateCartBadge();
          if (cartDrawerOpen) renderCartDrawer();
        }
      });
    });
  }

  /* ── CART DRAWER ── */
  let cartDrawerOpen = false;
  const overlay = document.getElementById('cart-overlay');
  const drawer  = document.getElementById('cart-drawer');

  function openCart() {
    cartDrawerOpen = true;
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
  function closeCart() {
    cartDrawerOpen = false;
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('btn-open-cart')?.addEventListener('click', openCart);
  overlay?.addEventListener('click', closeCart);
  document.getElementById('btn-close-cart')?.addEventListener('click', closeCart);
  document.getElementById('btn-continue-cart')?.addEventListener('click', () => {
  closeCart();
  document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
  if (confirm('Are you sure you want to remove all items from your cart?')) {
    Cart.clear();
    updateCartBadge();
    renderCartDrawer();
    Toast.info('Cart cleared');
  }
});


  function renderCartDrawer() {
    const items = Cart.items();
    const body = document.getElementById('cart-body');
    const foot = document.getElementById('cart-foot');
    const subtotalEl = document.getElementById('cart-subtotal');

    if (!items.length) {
      body.innerHTML = `<div class="cart-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Your cart is empty</p>
        <small>Add some Samsung products to get started</small>
      </div>`;
      if (foot) foot.classList.add('hidden');
      return;
    }
    if (foot) foot.classList.remove('hidden');

    body.innerHTML = items.map(item => {
      const imgHtml = item.image
        ? `<img src="${item.image}" alt="${item.name}">`
        : `<div class="cart-item-img-placeholder">📷 ${item.id}.jpg</div>`;
      return `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">${imgHtml}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}${item.variantLabel ? ` <span style="font-size:.75rem;color:var(--blue-light);font-weight:600;">· ${item.variantLabel}</span>` : ''}</div>
          <div class="cart-item-sku">SKU: ${item.id.toUpperCase()}</div>
          <div class="cart-item-pricing">
            <span class="cart-unit-price">${formatGHS(item.price)}</span>
            <span class="cart-price-sep">×</span>
            <span class="cart-qty-label">${item.qty}</span>
            <span class="cart-price-sep">=</span>
            <span class="cart-item-price">${formatGHS(item.price * item.qty)}</span>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}" title="Remove">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>`;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = formatGHS(Cart.total());

    /* Cart item events */
    body.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = Cart.get().find(i => i.id === id);
        if (!item) return;
        Cart.updateQty(id, item.qty + (btn.dataset.action === 'inc' ? 1 : -1));
        updateCartBadge();
        renderCartDrawer();
      });
    });
    body.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.remove(btn.dataset.id);
        updateCartBadge();
        renderCartDrawer();
        Toast.info('Item removed from cart');
      });
    });

    /* Proceed to checkout */
    document.getElementById('btn-checkout')?.addEventListener('click', () => {
      closeCart();
      window.location.href = '/checkout';
    });
  }

  /* ── Hero CTA ── */
  document.getElementById('btn-hero-shop')?.addEventListener('click', () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('btn-hero-bulk')?.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    const bulkBtn = document.querySelector('[data-cat="all"]');
    if (bulkBtn) bulkBtn.classList.add('active');
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const count = Cart.count();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
  badge.classList.remove('pulse');
  void badge.offsetWidth;
  if (count > 0) badge.classList.add('pulse');
}

/* ============================================================
   PAGE: CHECKOUT.HTML
   ============================================================ */
function initCheckoutPage() {
  if (!Auth.isLoggedIn()) { window.location.href = '/'; return; }

  Toast.init();

  const items = Cart.items();
  if (!items.length) { window.location.href = '/store'; return; }

  /* Fill order summary */
  const orderLines = document.getElementById('order-lines');
  if (orderLines) {
    orderLines.innerHTML = items.map(item => {
      const imgHtml = item.image
        ? `<img src="${item.image}" alt="${item.name}">`
        : `📷`;
      return `<div class="order-line">
        <div class="order-line-img">${imgHtml}</div>
        <div class="order-line-info">
          <div class="order-line-name">${item.name}</div>
          <div class="order-line-meta">Qty: ${item.qty} × ${formatGHS(item.price)}</div>
        </div>
        <div class="order-line-price">${formatGHS(item.price * item.qty)}</div>
      </div>`;
    }).join('');
  }

  const subtotal   = Cart.total();
  const isNewUser  = !localStorage.getItem('ss_not_new_user');
  const shipping   = (isNewUser || subtotal >= 5000) ? 0 : 50;
  const tax        = subtotal * 0.05;   // 5% VAT
  const total      = subtotal + shipping + tax;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('ck-subtotal', formatGHS(subtotal));
  setEl('ck-shipping', shipping === 0 ? (isNewUser ? 'FREE 🎉' : 'FREE') : formatGHS(shipping));
  setEl('ck-tax', formatGHS(tax));
  setEl('ck-total', formatGHS(total));

  /* Pre-fill name */
  const nameInput = document.getElementById('ck-fullname');
  if (nameInput) nameInput.value = Auth.username();

  /* Payment method toggle — handles all 4 options */
  const payOptions = document.querySelectorAll('.payment-option');
  const cardFields = document.getElementById('card-fields');
  const momoFields = document.getElementById('momo-fields');
  const bankFields = document.getElementById('bank-fields');

  // Show momo fields by default since it's pre-selected
  if (momoFields) momoFields.classList.add('show');

  payOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      payOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
      const pay = opt.dataset.pay;
      if (cardFields) cardFields.classList.toggle('show', pay === 'card');
      if (momoFields) momoFields.classList.toggle('show', pay === 'momo');
      if (bankFields) bankFields.classList.toggle('show', pay === 'bank');
    });
  });

  /* Place order */
  document.getElementById('btn-place-order')?.addEventListener('click', placeOrder);

  function placeOrder() {
    const fullname  = document.getElementById('ck-fullname')?.value.trim();
    const email     = document.getElementById('ck-email')?.value.trim();
    const address   = document.getElementById('ck-address')?.value.trim();
    const payMethod = document.querySelector('.payment-option.selected')?.dataset.pay;

    if (!fullname || !email || !address) { Toast.error('Please fill in all delivery details.'); return; }
    if (!email.includes('@')) { Toast.error('Enter a valid email address.'); return; }

    if (payMethod === 'card') {
      const cardNum  = document.getElementById('ck-card-num')?.value.trim();
      const cardExp  = document.getElementById('ck-card-exp')?.value.trim();
      const cardCvv  = document.getElementById('ck-card-cvv')?.value.trim();
      if (!cardNum || !cardExp || !cardCvv) { Toast.error('Please complete all card details.'); return; }
    }
    if (payMethod === 'momo') {
      const momoNet  = document.getElementById('ck-momo-network')?.value;
      const momoNum  = document.getElementById('ck-momo-number')?.value.trim();
      if (!momoNet || !momoNum) { Toast.error('Please complete your Mobile Money details.'); return; }
    }
    if (payMethod === 'bank') {
      const bankName = document.getElementById('ck-bank-name')?.value;
      const bankAcc  = document.getElementById('ck-bank-account')?.value.trim();
      if (!bankName || !bankAcc) { Toast.error('Please complete your bank transfer details.'); return; }
    }

    /* Mark user as no longer new (removes free delivery promo) */
    localStorage.setItem('ss_not_new_user', '1');

    /* Show processing modal */
    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.add('open');

    setTimeout(() => {
      document.getElementById('modal-processing')?.classList.add('hidden');
      document.getElementById('modal-success')?.classList.remove('hidden');
      const ordNum = 'SAM-' + Date.now().toString().slice(-8).toUpperCase();
      const ordEl  = document.getElementById('order-number');
      if (ordEl) ordEl.textContent = 'Order #' + ordNum;
      Cart.clear();
    }, 2800);
  }

  document.getElementById('btn-continue-shopping')?.addEventListener('click', () => {
    window.location.href = '/store';
  });
  document.getElementById('btn-back-store')?.addEventListener('click', () => {
    window.location.href = '/store';
  });
}

/* ============================================================
   GLOBAL: PASSWORD EYE TOGGLE (runs on auth page)
   ============================================================ */
function initEyeToggles() {
  document.querySelectorAll('.eye-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.querySelector('.eye-show').classList.toggle('hidden', isHidden);
      btn.querySelector('.eye-hide').classList.toggle('hidden', !isHidden);
    });
  });
}

/* ============================================================
   GLOBAL: BACK-TO-TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   GLOBAL: FAVOURITES (wishlist heart button)
   ============================================================ */
const Favourites = {
  get:  () => LS.get('ss_favs') || [],
  save: (f) => LS.set('ss_favs', f),
  toggle(productId, productName) {
    const favs = Favourites.get();
    const idx  = favs.indexOf(productId);
    if (idx === -1) {
      favs.push(productId);
      Favourites.save(favs);
      Toast.show(`❤️ "${productName}" added to Favourites`, 'success');
      return true;   // added
    } else {
      favs.splice(idx, 1);
      Favourites.save(favs);
      Toast.show(`🤍 "${productName}" removed from Favourites`, 'info');
      return false;  // removed
    }
  },
  has: (productId) => Favourites.get().includes(productId),
};

function attachWishlistHandlers() {
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    const id   = btn.dataset.id;
    const name = btn.dataset.name;
    // Reflect saved state visually
    if (Favourites.has(id)) {
      btn.classList.add('wishlisted');
      btn.querySelector('path').setAttribute('fill', 'var(--danger)');
      btn.querySelector('path').setAttribute('stroke', 'var(--danger)');
    }
    btn.addEventListener('click', () => {
      const added = Favourites.toggle(id, name);
      const path  = btn.querySelector('path');
      if (added) {
        btn.classList.add('wishlisted');
        path.setAttribute('fill', 'var(--danger)');
        path.setAttribute('stroke', 'var(--danger)');
      } else {
        btn.classList.remove('wishlisted');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'currentColor');
      }
    });
  });
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */
function openProductModal(productId) {
  const product  = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  // Related: same category first, then complementary (e.g. phones → gadgets like buds/watches)
  const complementMap = { phones: 'gadgets', gadgets: 'phones', laptops: 'chargers', chargers: 'laptops' };
  const sameCategory  = PRODUCTS.filter(p => p.category === product.category && p.id !== productId && p.stock !== 0);
  const crossSell     = PRODUCTS.filter(p => p.category === complementMap[product.category] && p.stock !== 0);
  const related       = [...sameCategory, ...crossSell].slice(0, 4);
  const outOfStock = product.stock === 0;
  const { cls, label } = stockStatus(product);

  const imgHtml = product.image
    ? `<img src="${product.image}" alt="${product.name}" class="modal-product-img" loading="lazy">`
    : `<div class="modal-product-img-placeholder"><svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;

  const relatedHtml = related.length ? `
    <div class="modal-related">
      <div class="modal-related-title">Related Products</div>
      <div class="modal-related-grid">
        ${related.map(r => {
          const rImg = r.image
            ? `<img src="${r.image}" alt="${r.name}" loading="lazy">`
            : `<div class="modal-related-img-ph">📷</div>`;
          return `<div class="modal-related-card" data-id="${r.id}">
            <div class="modal-related-img">${rImg}</div>
            <div class="modal-related-name">${r.name}</div>
            <div class="modal-related-price">${formatGHS(r.price)}</div>
          </div>`;
        }).join('')}
      </div>
    </div>` : '';

  // Build variant selector for any product that has variants
const variantHtml = product.variants && product.variants.length ? `
  <div class="modal-options">
    <div class="modal-options-label">
      ${product.category === 'phones' || product.category === 'laptops' ? 'Storage' : 'Option'}
    </div>
    <div class="modal-options-btns">
      ${product.variants.map((v, i) => `
        <button class="modal-opt-btn ${i === 0 ? 'active' : ''}"
          data-price="${v.price}" data-label="${v.label}">
          ${v.label}
        </button>`).join('')}
    </div>
  </div>` : '';

  document.getElementById('product-modal-body').innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-product-gallery">
        ${imgHtml}
        <div class="modal-stock-badge ${cls}">
          <span class="stock-dot"></span>${label}
        </div>
      </div>
      <div class="modal-product-info">
        <div class="product-category">${categoryLabel(product.category)}</div>
        <h2 class="modal-product-name">${product.name}</h2>
        <div class="modal-product-spec">${product.spec}</div>
        ${variantHtml}
        <div class="modal-product-price">
          ${formatGHS(product.price)}
          ${product.originalPrice ? `<span class="product-price-orig">${formatGHS(product.originalPrice)}</span>` : ''}
        </div>
        ${product.bulkMin ? `<div class="bulk-note">📦 Buy ${product.bulkMin}+ and save ${product.bulkDiscount}%</div>` : ''}
        <div class="modal-product-actions">
          <button class="btn-add-cart modal-add-cart" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            ${outOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
          ${!outOfStock ? `<button class="btn-buy-now" data-id="${product.id}">Buy Now →</button>` : ''}
        </div>
        <div class="modal-meta">
          <span>🛡️ Genuine Samsung Warranty</span>
          <span>📦 ${product.stock > 0 ? product.stock + ' units available' : 'Out of stock'}</span>
        </div>
      </div>
    </div>
    ${relatedHtml}`;

  const overlay = document.getElementById('product-modal-overlay');
  const modal   = document.getElementById('product-modal');
  overlay.classList.add('open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';



  // Related product clicks
  modal.querySelectorAll('.modal-related-card').forEach(card => {
    card.addEventListener('click', () => {
      closeProductModal();
      setTimeout(() => openProductModal(card.dataset.id), 150);
    });
  });

  // Storage option buttons
 // Variant option buttons — update price dynamically
let selectedVariantPrice = product.variants && product.variants.length ? product.variants[0].price : product.price;
let selectedVariantLabel = product.variants && product.variants.length ? product.variants[0].label : '';

modal.querySelectorAll('.modal-opt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.querySelectorAll('.modal-opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedVariantPrice = parseInt(btn.dataset.price);
    selectedVariantLabel = btn.dataset.label;

    // Update displayed price instantly
    const priceEl = modal.querySelector('.modal-product-price');
    if (priceEl) {
      priceEl.innerHTML = `${formatGHS(selectedVariantPrice)}
        ${product.originalPrice ? `<span class="product-price-orig">${formatGHS(product.originalPrice)}</span>` : ''}`;
    }
  });
});

// Update Add to Cart to use selected variant price and label
modal.querySelector('.modal-add-cart')?.addEventListener('click', () => {
  const added = Cart.add(product.id, 1, selectedVariantPrice, selectedVariantLabel);
  if (added) {
    updateCartBadge();
    Toast.success(`${product.name} ${selectedVariantLabel ? '· ' + selectedVariantLabel : ''} added to cart`);
  }
});

modal.querySelector('.btn-buy-now')?.addEventListener('click', () => {
  Cart.add(product.id, 1, selectedVariantPrice, selectedVariantLabel);
  updateCartBadge();
  closeProductModal();
  window.location.href = '/checkout';
});
}

function closeProductModal() {
  document.getElementById('product-modal-overlay')?.classList.remove('open');
  document.getElementById('product-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   SIDE MENU
   ============================================================ */
function initSideMenu() {
  const menuBtn     = document.getElementById('btn-open-menu');
  const sideMenu    = document.getElementById('side-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeBtn    = document.getElementById('side-menu-close');

  function openMenu() {
    sideMenu?.classList.add('open');
    menuOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    sideMenu?.classList.remove('open');
    menuOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  // Populate username in side menu
  const username = Auth.username();
  const sideUser = document.getElementById('side-menu-user');
  if (sideUser && username) {
    sideUser.innerHTML = `
      <div class="side-menu-avatar">👤</div>
      <div class="side-menu-username">${username}</div>`;
  }

  // Logout from side menu
 document.getElementById('side-menu-logout')?.addEventListener('click', async () => {
  await fetch('/api/logout', { method: 'POST' }).catch(() => {});
  Auth.clearSession();
  window.location.href = '/';
});
}

/* ============================================================
   THEME TOGGLE (Light / Dark)
   ============================================================ */
function initTheme() {
  const saved = localStorage.getItem('ss_theme') || 'light';
  applyTheme(saved);

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next    = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('ss_theme', next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const label = document.getElementById('theme-label');
  const toggle = document.getElementById('theme-toggle');
  if (label) label.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  if (toggle) toggle.classList.toggle('dark', theme === 'dark');
}

/* ============================================================
   PROMO BANNER (new users free delivery)
   ============================================================ */
function initPromoBanner() {
  const banner  = document.getElementById('promo-banner');
  const closeBtn = document.getElementById('promo-banner-close');
  const dismissed = localStorage.getItem('ss_promo_dismissed');
  const isNew   = !localStorage.getItem('ss_not_new_user');

  if (!banner) return;
  if (dismissed || !isNew) { banner.style.display = 'none'; return; }

  banner.style.display = 'flex';

  closeBtn?.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('ss_promo_dismissed', '1');
  });

  // Mark as not new after first order
  // Called from checkout success
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function initNewsletter() {
  document.getElementById('btn-newsletter')?.addEventListener('click', () => {
    const email = document.getElementById('newsletter-email')?.value.trim();
    if (!email || !email.includes('@')) {
      Toast.error('Please enter a valid email address.');
      return;
    }
    // Save locally
    const subs = JSON.parse(localStorage.getItem('ss_newsletter') || '[]');
    if (!subs.includes(email)) { subs.push(email); localStorage.setItem('ss_newsletter', JSON.stringify(subs)); }
    Toast.success('✓ Subscribed! You\'ll hear from us soon.');
    if (document.getElementById('newsletter-email')) document.getElementById('newsletter-email').value = '';
  });
}

/* Global filterCategory used by footer links */
function filterCategory(cat) {
  const btn = document.querySelector(`[data-cat="${cat}"]`);
  if (btn) {
    btn.click();
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ============================================================
   ROUTER
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Toast.init();
  initEyeToggles();
  initBackToTop();
  initTheme();
  const page = document.body.dataset.page;
  if (page === 'auth')     initAuthPage();
  if (page === 'store')    { initStorePage(); initSideMenu(); initPromoBanner(); initNewsletter(); }
  if (page === 'checkout') { initCheckoutPage(); }
});