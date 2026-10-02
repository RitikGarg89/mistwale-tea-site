# Visual and Design Audit: Mistvale Tea Co.

## 1. What already matches the design
* **Core Sections Present**: The page generally includes the Header, Hero, Shop (filters, search, grid), Delivery check, Reviews, and Footer.
* **Product Content**: The product grid correctly renders the data from `PRODUCTS`, respecting the original product names, prices, and stock statuses.
* **Legal Footer**: The footer correctly includes the required company facts, contact details, and the uneditable legal text exactly as requested.
* **Component Concepts**: The page has buttons, product cards, a cart drawer, and a quick view overlay which function logically, forming a foundation to be restyled.

## 2. What visually needs improvement
* **Typography**: The site currently uses `Comic Sans MS` alongside imports for Pacifico, Oswald, Lato, and Roboto. This must be replaced with exactly two approved fonts (e.g., Playfair Display for headings and Inter for body text) using a fluid type scale (`clamp()`).
* **Color Palette**: The site relies on generic hex codes and named colors (purple, hot pink, lime green, yellow, red, #888). It needs to transition entirely to CSS custom properties using the approved earthy palette (Tea green, Leaf, Cream, Parchment, Saffron, Ink, Error). 
* **Header & Navigation**: Needs an aligned, calm layout. The cart icon should be an inline SVG instead of Font Awesome.
* **Hero Section**: The hero uses a garish text-shadow, loud copy ("BEST TEA IN THE WORLD!!!"), and an unapproved badge ("SHARK TANK INDIA"). It needs a single clear value proposition, one primary CTA, and a calm background.
* **Animations & Motion**: `animate.css`, `<marquee>`, `.blink`, and aggressive hover effects (`rotate(-2deg) scale(1.15)`) violate the brand's requirement for purposeful, subtle motion. Global transitions (`transition: all`) must be removed.
* **Newsletter & UI Intrusions**: The newsletter is currently an aggressive popup. It must be moved inline to the bottom of the page.
* **Icons**: Font Awesome 4.7 is imported and used. The brand requires inline SVGs with consistent stroke widths.
* **Spacing and Layout**: The site uses a hardcoded `.wrapper { width: 1200px; }` with random margins. It needs to adopt an 8px spacing scale, fluid width up to 1200px, and responsive padding.
* **Missing Sections**: The "Trust strip" (between Hero and Shop) and the accessible "FAQ" section (before the Newsletter) are completely missing.
* **Voice and Tone**: The copy is currently shouting with exclamation marks, all-caps sentences, and unprovable claims. It must be rewritten to sound calm, specific, and honest.

## 3. The highest-priority visual changes
1. **Remove Fixed Widths for Responsiveness**: The hardcoded `1200px` wrapper breaks mobile devices completely. Implementing responsive CSS (e.g., a 2-column mobile product grid and `max-width: 1200px` with padding) is critical given users are "mostly on phones".
2. **Implement Brand Colors and Typography**: Overhauling the CSS to use the designated color palette variables (e.g., Cream background, Ink body text) and replacing the chaotic font stack with the approved dual-font system.
3. **Remove Aggressive Motion and Popups**: Deleting the `<marquee>`, `.blink` keyframes, `animate.css` dependency, and the newsletter popup. These completely undermine the "premium, calm" brand voice.
4. **Rewrite Copy to Brand Voice**: Eliminate shouting, exclamation marks, and fake reviews/badges in the announcement bar, hero section, and review headers.

## 4. Any visual issues that could affect usability or accessibility
* **Focus States Disabled**: The CSS contains `*:focus { outline: none !important; }`, which completely destroys keyboard navigation accessibility.
* **Color Contrast Failures**: Several current color combinations fail WCAG AA contrast requirements (e.g., `#ffff00` yellow text in the hero, `#888` gray text on white backgrounds, and the `.badge-oos` contrast).
* **Missing Form Labels**: Inputs (Search, Pincode, Newsletter, Cart Coupon) rely entirely on `placeholder` text without visible `<label>` elements or accessible `aria-labels`.
* **Mobile Usability**: Because the layout isn't responsive, mobile users are forced to horizontally scroll to see content, making the shop practically unusable on small screens.
* **Image Accessibility**: The product images and hero images lack descriptive `alt` text. 
* **Accessibility Hierarchy**: The page lacks proper HTML5 landmarks and heading structures (e.g., using `<h5>` for product titles directly under `<h1>` sections).
