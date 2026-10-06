# Mistvale Tea Co. 🍃

> **Hill-grown tea, honestly made.**  
> A modern, artisanal e-commerce web application crafted for a heritage tea brand from the Darjeeling hills. Built with React 19, Vite, and Tailwind CSS v4.

---

## 🍵 About The Project

**Mistvale Tea Co.** is an independent specialty tea brand founded in 2019, bringing whole-leaf teas, authentic spiced blends, and herbal infusions directly from Himalayan and Nilgiri estates to tea lovers across India.

This project transforms the digital storefront into a serene, editorial, and trustworthy e-commerce experience. It emphasizes thoughtful design, accessibility, fluid interactivity, and strict adherence to tea-store business rules.

---

## ✨ Key Features

### 🛍️ Dynamic Tea Catalog & Shopping Experience
- **Interactive Filtering**: Filter teas effortlessly by category (*All teas*, *Black*, *Green*, *Herbal*, *Gifts*).
- **Multi-attribute Search**: Instant real-time search across tea names and flavor tasting notes.
- **Smart Sorting**: Sort by *Featured*, *Price: Low to High*, *Price: High to Low*, *Name: A–Z*, and *Name: Z–A*.
- **Business Logic Enforcement**:
  - Sold-out teas (e.g., *Hibiscus Rose Infusion*) are clearly badged and automatically sorted to the end of every view.
  - Transparent pricing shown in Indian Rupees (₹) with GST included.
- **Product Cards & Quick View**: Clean 1:1 aspect ratio cards with hover micro-interactions, stock indicators, and quick-action triggers.

### 🚚 Pincode Delivery Estimator
- Instant serviceable checker for Indian pincodes (6-digit validation).
- Interactive states including idle, checking, serviceable delivery confirmation, and unserviceable alerts.

### 🌿 Brand & Editorial Storytelling
- **Editorial Hero**: Rich atmospheric visuals paired with calm typography and a prominent *Shop the teas* call-to-action.
- **Trust Strip**: Clear promises emphasizing hill-grown authenticity, honest sourcing, and Pan-India delivery.
- **Notes from Tea Drinkers**: Authentic customer reviews and testimonials from tea lovers in Pune, Bengaluru, and Kochi.
- **Interactive FAQ Accordion**: Clean, accessible accordion answering essential questions regarding shipping timelines, 7-day unopened returns, storage tips, and gift boxes.
- **Letters from Mistvale (Newsletter)**: Inline newsletter subscription with regex email validation and feedback states.

### 🎨 Brand-Centric Visual Design
- **Earthy Color Palette**: Built strictly upon Mistvale's brand tokens (Tea Green `#1f3d2b`, Leaf `#4f7942`, Cream `#f6f1e7`, Parchment `#ebe2cf`, Saffron `#d9962b`, and Ink `#1b1b1b`).
- **Refined Typography**: Editorial pairing of **Fraunces** (display serif for headings) and **Inter** (clean sans-serif for UI/body text).
- **Fully Responsive**: Mobile-first design engineered from 360px mobile viewports up to large desktop monitors without horizontal scrolling.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Typography**: Google Fonts (*Fraunces* & *Inter*)
- **Icons & Graphics**: Custom inline SVG vectors & optimized WebP assets

---

## 📁 Project Structure

```text
mistwale-tea-site/
├── public/
│   └── images/                  # Optimized WebP assets & SVG brand logos
│       ├── hero-banner.webp
│       ├── logo.svg
│       ├── logo-cream.svg
│       └── product-101-*.webp   # Individual product imagery
├── src/
│   ├── Components/
│   │   ├── Delivery/            # Pincode delivery checking section
│   │   │   └── Delivery.jsx
│   │   ├── FAQ/                 # Accessible FAQ accordion
│   │   │   └── FAQ.jsx
│   │   ├── Footer/              # Brand contacts, links & legal notes
│   │   │   └── Footer.jsx
│   │   ├── Header/              # Sticky navigation, logo & cart access
│   │   │   └── Header.jsx
│   │   ├── Hero/                # Editorial hero banner & trust highlights
│   │   │   └── Hero.jsx
│   │   ├── Logo/                # Scalable brand emblem & wordmark SVG
│   │   │   └── Logo.jsx
│   │   ├── NewsPaper/           # Newsletter signup component
│   │   │   └── NewsPaper.jsx
│   │   ├── ProductCard/         # Individual tea card component
│   │   │   └── ProductCard.jsx
│   │   ├── Review/              # Customer reviews / social proof
│   │   │   └── Review.jsx
│   │   └── Shop/                # Catalog, search, filters & sort engine
│   │       └── Shop.jsx
│   ├── App.jsx                  # Main page assembler & root layout
│   ├── index.css                # Tailwind CSS imports & global styles
│   └── main.jsx                 # React root DOM rendering
├── BRAND.md                     # Brand guidelines, color tokens & design rules
├── NOTES.md                     # Implementation records & audit notes
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 18 or newer recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RitikGarg89/mistwale-tea-site.git
   cd mistwale-tea-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches the local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run preview` | Locally serves the production build for testing. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 📋 Product Lineup

| ID | Product Name | Category | Price (INR) | Availability |
|---|---|---|---|---|
| `101` | Assam Breakfast Black Tea | Black | ₹349 | In Stock (40) |
| `102` | Darjeeling First Flush | Black | ₹1,299 | In Stock (12) |
| `103` | Kashmiri Kahwa | Green | ₹549 | In Stock (25) |
| `104` | Masala Chai Blend | Black | ₹399 | In Stock (60) |
| `105` | Nilgiri Green Tea | Green | ₹449 | In Stock (30) |
| `106` | Chamomile & Tulsi | Herbal | ₹499 | In Stock (18) |
| `107` | Hibiscus Rose Infusion | Herbal | ₹599 | **Sold Out** (0) |
| `108` | Tea Lover's Sampler Gift Box | Gifts | ₹1,899 | In Stock (9) |

---

## 🌿 Brand Guidelines & Rules

All styling and business implementations adhere to the brand guidelines laid out in [`BRAND.md`](file:///c:/Users/ritik/Desktop/Dev/DEVELOPER/Web%20Practice/Web-Development-Practice/React%20Projects/@17-Mistwale-tea-store/mistwale-tea-site/BRAND.md):
- **Voice**: Warm, specific, unhurried, and grounded in craftsmanship.
- **Color Values**:
  - Primary (Tea Green): `#1f3d2b`
  - Secondary Accent (Leaf): `#4f7942`
  - Page Background (Cream): `#f6f1e7`
  - Surface Background (Parchment): `#ebe2cf`
  - Sparingly Accent (Saffron): `#d9962b`
  - Body Text (Ink): `#1b1b1b`
- **Typography**: Fraunces (Headings) & Inter (Body UI).

---

## 📄 License

This project is open-source and intended for portfolio, learning, and demonstration purposes.