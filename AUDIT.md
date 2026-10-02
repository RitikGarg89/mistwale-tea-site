# SEO & Technical Metadata Audit

## 1. Page Title
**Issue:** The page title is too generic and lacks brand identity.
**Why it matters:** The `<title>` tag is a primary ranking factor for search engines and is the most prominent text shown in search results and browser tabs. "Home" provides no context to users or crawlers.
**Current implementation:** `<title>Home</title>`
**Recommended fix:** Update the title to include the brand name and tagline, keeping it within the 50-60 character limit. Example: `<title>Mistvale Tea Co. | Hill-grown tea, honestly made.</title>`

## 2. Meta Description
**Issue:** The page is missing a `<meta name="description">` tag.
**Why it matters:** Meta descriptions serve as the summary snippet in search engine results. A missing description forces search engines to guess and extract random page text, which can hurt click-through rates.
**Current implementation:** Missing entirely from the `<head>`.
**Recommended fix:** Add a descriptive meta tag within the 120-160 character limit. Example: `<meta name="description" content="Discover Mistvale Tea Co. Premium, hand-picked whole-leaf teas honestly made in Siliguri. Shop our curated selection for your quiet morning ritual.">`

## 3. Canonical URL
**Issue:** The page is missing a canonical link tag.
**Why it matters:** Canonical tags prevent duplicate content issues if the site is accessed via different parameters, HTTP/HTTPS, or www/non-www prefixes.
**Current implementation:** Missing.
**Recommended fix:** Add `<link rel="canonical" href="https://mistvale.example/" />` to the `<head>`.

## 4. Open Graph & Twitter Metadata
**Issue:** Social sharing tags (Open Graph and Twitter Cards) are missing.
**Why it matters:** Without these tags, links shared on social media (WhatsApp, Instagram, Twitter) will lack formatted rich previews (title, description, and hero image), severely reducing engagement.
**Current implementation:** Missing.
**Recommended fix:** Add standard `og:title`, `og:description`, `og:url`, `og:image`, and `og:type="website"` tags. Also add `twitter:card="summary_large_image"` tags.

## 5. JSON-LD Structured Data (Organization/OnlineStore, Product, FAQPage)
**Issue:** The site lacks structured data markup for search engines.
**Why it matters:** JSON-LD allows Google to understand the brand's facts, display rich product snippets (price, stock, ratings), and show FAQ accordions directly in search results.
**Current implementation:** No `<script type="application/ld+json">` blocks exist.
**Recommended fix:** Inject three JSON-LD scripts into the `<head>`:
1. **OnlineStore**: Include name ("Mistvale Tea Co."), url ("https://mistvale.example"), logo, and contactPoint (phone and email) using facts from BRAND.md.
2. **Product**: A list of the 8 teas mapping name, description, image, offers (price in INR, InStock/OutOfStock based on current inventory), and aggregateRating (only for Darjeeling First Flush and Masala Chai Blend).
3. **FAQPage**: Map the 6 approved Q&A from BRAND.md into `Question` and `Answer` schema.

## 6. Heading Hierarchy & H1 Usage
**Issue:** The single `<h1>` tag contains the tagline instead of the brand name, and some structure is fragmented (e.g. Quick view and Cart use `<h2>`).
**Why it matters:** H1 tells search engines the main topic of the page. While having exactly one H1 is correct, not including the brand name is a missed SEO opportunity.
**Current implementation:** `<h1>Hill-grown tea,<br>honestly made.</h1>`
**Recommended fix:** The current implementation correctly features exactly one H1 and logical subsequent H2/H3s for sections. However, for better SEO, consider visually hiding an H1 with the brand name or combining the brand name with the tagline (e.g., `<h1>Mistvale Tea Co. — Hill-grown tea, honestly made.</h1>`).

## 7. Image Alt Text
**Issue:** Verification of image accessibility.
**Why it matters:** Alt text is required for screen readers and helps search engines understand image content.
**Current implementation:** The HTML logo (`<img src="images/logo.png" alt="Mistvale Tea Co.">`) and the JavaScript-injected product images (`<img src="' + p.image + '" alt="' + p.name + '">`) both correctly utilise descriptive `alt` attributes. The hero image is applied via CSS background, which is acceptable for decorative elements.
**Recommended fix:** No fix required. Alt text is correctly implemented.

<br>
<hr>
<br>

# Image & Asset Audit

## 1. Format & Web Optimization
**Image/Asset:** All images (hero, products, logo)
**Current state:** All images in the `images/` directory are encoded in `.png` format.
**Requirement:** Images must be in web-ready formats like WebP or AVIF.
**Issue:** The current `.png` formats are unoptimized and cause unnecessary bandwidth consumption.
**Recommended action:** Convert all `.png` files to `.webp` or `.avif`.

## 2. File Sizes
**Image/Asset:** All images
**Current state:** The `hero-banner.png` is ~724 KB. The 8 product images range from ~408 KB to ~932 KB. The logo is ~1.5 KB.
**Requirement:** Hero image must be under 250 KB. Product images must be under 150 KB each.
**Issue:** Every image (except the logo) drastically exceeds the maximum allowed file sizes according to the BRAND.md performance rules.
**Recommended action:** Compress and resize the images (preferably while converting to WebP/AVIF) to ensure they meet the strict file size limits (<250 KB for hero, <150 KB for products).

## 3. Product Image Dimensions & Framing
**Image/Asset:** Product images (`p101` to `p108`)
**Current state:** Product images have completely inconsistent dimensions and aspect ratios (e.g. `p101`: 520x400, `p102`: 400x600, `p103`: 640x640, `p107`: 700x500). Only 2 of the 8 images (103 and 105) are 1:1 square.
**Requirement:** The same framing and aspect ratio must be used for all 8 product images (square, 1:1 recommended).
**Issue:** 6 out of 8 images are not 1:1, breaking the visual alignment rule.
**Recommended action:** Crop or pad all product images to a consistent 1:1 aspect ratio (e.g., 600x600px).

## 4. Asset Completeness & Paths
**Image/Asset:** All images
**Current state:** All 8 product images, the `hero-banner.png`, and the `logo.png` are present in the `images/` directory. The references in `index.html` correctly map to these existing files.
**Requirement:** All required product, hero, and logo images must be present and correctly used. No placeholders.
**Issue:** None. All required images are accounted for and no incorrect/placeholder images are being used.
**Recommended action:** Maintain accurate file paths during the WebP/AVIF format conversion, and update the references in `index.html` accordingly.
