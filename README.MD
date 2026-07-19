# Samsung Dealer Store — MVP

## Files
```
samsung-store/
├── index.html      → Auth page (Login / Sign Up)
├── store.html      → Product catalog storefront
├── checkout.html   → Checkout & payment
├── style.css       → All styling (responsive, mobile-first)
├── app.js          → All logic, auth, cart, products, routing
└── assets/         ← CREATE THIS FOLDER for your images
    ├── favicon.ico
    ├── samsung-logo-white.png   (navbar logo, white version)
    ├── hero-galaxy.png          (hero banner product image)
    └── products/
        ├── p001.jpg   → Samsung Galaxy S24 Ultra
        ├── p002.jpg   → Samsung Galaxy S24+
        ├── p003.jpg   → Samsung Galaxy S24
        ├── p004.jpg   → Samsung Galaxy A55 5G
        ├── p005.jpg   → Samsung Galaxy A35 5G
        ├── p006.jpg   → Samsung Galaxy Z Fold6
        ├── p007.jpg   → Samsung Galaxy Z Flip6
        ├── p008.jpg   → Samsung Galaxy M55
        ├── p009.jpg   → Samsung Galaxy Book4 Ultra
        ├── p010.jpg   → Samsung Galaxy Book4 Pro 360
        ├── p011.jpg   → Samsung Galaxy Book4
        ├── p012.jpg   → Samsung All-in-One PC 2024
        ├── p013.jpg   → Samsung Galaxy Book3 360
        ├── p014.jpg   → Samsung 65W Super Fast Charger Duo
        ├── p015.jpg   → Samsung 45W USB-C Fast Charger
        ├── p016.jpg   → Samsung 25W USB-C Charger
        ├── p017.jpg   → Samsung Wireless Charger Trio
        ├── p018.jpg   → Samsung 15W Wireless Charger Stand
        ├── p019.jpg   → Samsung 20,000mAh Power Bank
        ├── p020.jpg   → Samsung Galaxy Buds3 Pro
        ├── p021.jpg   → Samsung Galaxy Buds3
        ├── p022.jpg   → Samsung Galaxy Watch7
        ├── p023.jpg   → Samsung Galaxy Watch Ultra
        ├── p024.jpg   → Samsung Galaxy Ring
        ├── p025.jpg   → Samsung Galaxy Tab S9 FE
        ├── p026.jpg   → Samsung SmartTag2
        └── p027.jpg   → Samsung T7 Shield Portable SSD
```

## How to Add Product Images

1. Create an `assets/products/` folder inside `samsung-store/`
2. Add your product images named exactly as above (e.g. `p001.jpg`)
3. In **app.js**, find the product entry and set its `image` field:
   ```js
   image: 'assets/products/p001.jpg'
   ```
4. Alternatively, use the full custom filename:
   ```js
   image: 'assets/products/s24-ultra.jpg'
   ```
   The `image` property is already labelled with comments showing the recommended filename.

## How to Add Logo

In **index.html** and **store.html**, find the comment:
```html
<!-- ── INSERT LOGO IMAGE: ... -->
```
Replace the text logo div with:
```html
<img src="assets/samsung-logo-white.png" alt="Samsung" width="130">
```

## Features
- ✅ Auth (sign up / login) with localStorage
- ✅ 27 Samsung products across 4 categories
- ✅ Real stock numbers (some out of stock)
- ✅ Bulk order discounts shown on cards
- ✅ Category filter + live search
- ✅ Cart drawer with qty controls
- ✅ Checkout with 4 payment options (MoMo, Card, Bank, CoD)
- ✅ Payment simulation with spinner + success screen
- ✅ Toast notifications
- ✅ Fully responsive (mobile-first)
- ✅ All pages linked together

## Running Locally
Open `index.html` in any modern browser.  
For best results, serve with a local server:
```bash
npx serve .
# or
python3 -m http.server 8080
```
Then visit http://localhost:8080