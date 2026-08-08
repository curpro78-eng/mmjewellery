/* ============================================================
   MM JEWELLERY — HOMEPAGE APPLICATION LOGIC
   Vanilla JavaScript (ES6) implementation
   ============================================================ */

// WhatsApp business number for direct ordering and inquiries
const WA_NUMBER = "919942676753";

/* ---------- Icon Library (Jewellery Line-Art SVGs) ---------- */
const ICONS = {
  ring: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><circle cx="50" cy="62" r="26" fill="none" stroke="url(#g)" stroke-width="6"/><path d="M50 36 40 20 h20 z" fill="url(#g)"/><circle cx="50" cy="24" r="6" fill="#92003A"/></svg>`,
  necklace: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><path d="M20 20 Q50 65 80 20" fill="none" stroke="url(#g2)" stroke-width="4"/><circle cx="50" cy="68" r="10" fill="url(#g2)"/><path d="M50 78 42 92 h16 z" fill="#92003A"/></svg>`,
  earring: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><circle cx="50" cy="24" r="8" fill="none" stroke="url(#g3)" stroke-width="4"/><path d="M50 32 Q35 55 50 78 Q65 55 50 32" fill="none" stroke="url(#g3)" stroke-width="4"/><circle cx="50" cy="78" r="5" fill="#92003A"/></svg>`,
  bangle: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><circle cx="50" cy="50" r="34" fill="none" stroke="url(#g4)" stroke-width="10"/><circle cx="50" cy="50" r="34" fill="none" stroke="#92003A" stroke-width="1" stroke-dasharray="2 6"/></svg>`,
  bracelet: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><ellipse cx="50" cy="50" rx="36" ry="18" fill="none" stroke="url(#g5)" stroke-width="6"/><circle cx="20" cy="50" r="4" fill="#92003A"/><circle cx="80" cy="50" r="4" fill="#92003A"/></svg>`,
  chain: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><g fill="none" stroke="url(#g6)" stroke-width="5"><ellipse cx="35" cy="30" rx="10" ry="14" transform="rotate(20 35 30)"/><ellipse cx="55" cy="45" rx="10" ry="14" transform="rotate(-20 55 45)"/><ellipse cx="40" cy="62" rx="10" ry="14" transform="rotate(20 40 62)"/><ellipse cx="62" cy="76" rx="10" ry="14" transform="rotate(-20 62 76)"/></g></svg>`,
  pendant: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g7" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><circle cx="50" cy="22" r="6" fill="none" stroke="url(#g7)" stroke-width="4"/><path d="M50 46 68 74 32 74 Z" fill="none" stroke="url(#g7)" stroke-width="4" stroke-linejoin="round"/><circle cx="50" cy="60" r="5" fill="#92003A"/></svg>`,
  haram: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g8" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><path d="M12 16 Q50 78 88 16" fill="none" stroke="url(#g8)" stroke-width="3"/><path d="M22 24 Q50 68 78 24" fill="none" stroke="url(#g8)" stroke-width="3"/><circle cx="50" cy="70" r="9" fill="url(#g8)"/></svg>`,
  antique: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g9" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0D889"/><stop offset="1" stop-color="#A9812A"/></linearGradient></defs><path d="M50 15c-18 0-30 13-30 30 0 22 30 40 30 40s30-18 30-40c0-17-12-30-30-30Z" fill="none" stroke="url(#g9)" stroke-width="4"/><circle cx="50" cy="45" r="8" fill="url(#g9)"/></svg>`
};

function iconFor(cat) {
  const map = { 
    rings: 'ring', 
    necklace: 'necklace', 
    earrings: 'earring', 
    bangles: 'bangle', 
    bracelets: 'bracelet', 
    chains: 'chain', 
    pendants: 'pendant', 
    haram: 'haram', 
    antique: 'antique', 
    sets: 'pendant',
    'casting-ring': 'ring',
    'casting-earrings': 'earring',
    'casting-pendant': 'pendant',
    'casting-necklace': 'necklace'
  };
  return ICONS[map[cat] || 'ring'];
}

function getProductImageUrl(p) {
  if (!p) return null;
  if (Array.isArray(p.images) && p.images.length > 0 && p.images[0]) return p.images[0];
  if (typeof p.images === 'string' && p.images.trim()) return p.images.trim();
  if (typeof p.img === 'string' && p.img.trim()) return p.img.trim();
  if (typeof p.image === 'string' && p.image.trim()) return p.image.trim();
  return null;
}

/* ---------- Product Catalogue Data ---------- */
let PRODUCTS = [
  {
    "id": "AJ-CST-101",
    "name": "Royal Floral Casting Ring",
    "code": "AJ-CST-101",
    "category": "casting-ring",
    "cat": "casting-ring",
    "subCategory": "Casting Ring",
    "va": "8%",
    "valueAddition": "8%",
    "shortDesc": "Intricately cast 22K gold ring.",
    "desc": "BIS 916 hallmarked 22K yellow gold casting ring featuring elaborate micro-filigree details.",
    "grossWt": 6.4,
    "netWt": 6.1,
    "wt": "6.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 48000,
    "price": 44500,
    "availability": "Made to Order",
    "displayOrder": 1,
    "tag": "NEW",
    "images": ["images/classic_gold_ring.jpg"]
  },
  {
    "id": "AJ-CST-102",
    "name": "Devi Peacock Casting Earrings",
    "code": "AJ-CST-102",
    "category": "casting-earrings",
    "cat": "casting-earrings",
    "subCategory": "Casting Earrings",
    "va": "10%",
    "valueAddition": "10%",
    "shortDesc": "Designer peacock 22K casting earrings.",
    "desc": "Exquisite BIS 916 hallmarked 22K casting earrings inspired by royal peacock motifs.",
    "grossWt": 9.2,
    "netWt": 8.8,
    "wt": "9.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 69000,
    "price": 63800,
    "availability": "Made to Order",
    "displayOrder": 2,
    "tag": "NEW",
    "images": ["images/earrings.png"]
  },
  {
    "id": "AJ-CST-103",
    "name": "Lakshmi Divine Casting Pendant",
    "code": "AJ-CST-103",
    "category": "casting-pendant",
    "cat": "casting-pendant",
    "subCategory": "Casting Pendant",
    "va": "7%",
    "valueAddition": "7%",
    "shortDesc": "Temple motif 22K casting pendant.",
    "desc": "Sacred Goddess Lakshmi motif 22K BIS 916 hallmarked casting pendant with rich gold finish.",
    "grossWt": 7.8,
    "netWt": 7.5,
    "wt": "7.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 56000,
    "price": 51800,
    "availability": "Made to Order",
    "displayOrder": 3,
    "tag": "NEW",
    "images": ["images/pendant.png"]
  },
  {
    "id": "AJ-CST-104",
    "name": "Majestic Bridal Casting Necklace",
    "code": "AJ-CST-104",
    "category": "casting-necklace",
    "cat": "casting-necklace",
    "subCategory": "Casting Necklace",
    "va": "12%",
    "valueAddition": "12%",
    "shortDesc": "Heavy bridal 22K casting necklace.",
    "desc": "Opulent 22K BIS 916 hallmarked casting necklace with ornate traditional relief work.",
    "grossWt": 32.5,
    "netWt": 31.0,
    "wt": "32.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 245000,
    "price": 228000,
    "availability": "Made to Order",
    "displayOrder": 4,
    "tag": "NEW",
    "images": ["images/necklace.png"]
  },
  {
    "id": "AJ-101",
    "name": "Classic Gold Engagement Ring",
    "code": "AJ-101",
    "category": "rings",
    "cat": "rings",
    "subCategory": "Engagement Ring",
    "va": "8%",
    "valueAddition": "8%",
    "shortDesc": "Elegant 22K gold engagement ring.",
    "desc": "Beautifully crafted BIS 916 hallmarked 22K yellow gold engagement ring with a timeless finish suitable for everyday elegance.",
    "grossWt": 5.8,
    "netWt": 5.5,
    "wt": "5.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 42000,
    "price": 39500,
    "availability": "Made to Order",
    "displayOrder": 1,
    "tag": "NEW",
    "images": [
      "images/classic_gold_ring.jpg"
    ]
  },
  {
    "id": "AJ-102",
    "name": "Floral Designer Ring",
    "code": "AJ-102",
    "category": "rings",
    "cat": "rings",
    "subCategory": "Designer Ring",
    "shortDesc": "Floral inspired gold ring.",
    "desc": "Premium floral pattern ring made with 22K BIS hallmarked yellow gold for modern women.",
    "grossWt": 6.1,
    "netWt": 5.8,
    "wt": "6.1g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 45500,
    "price": 42900,
    "availability": "Made to Order",
    "displayOrder": 2,
    "tag": "NEW",
    "images": [
      "images/emerald_cut_ring.jpg"
    ]
  },
  {
    "id": "AJ-103",
    "name": "Twisted Gold Band",
    "code": "AJ-103",
    "category": "rings",
    "cat": "rings",
    "subCategory": "Band Ring",
    "shortDesc": "Minimal twisted band ring.",
    "desc": "Simple twisted yellow gold band with premium polish and BIS certification.",
    "grossWt": 4.9,
    "netWt": 4.6,
    "wt": "4.9g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 36500,
    "price": 34200,
    "availability": "Made to Order",
    "displayOrder": 3,
    "tag": "NEW",
    "images": [
      "images/diamond_solitaire.jpg"
    ]
  },
  {
    "id": "AJ-104",
    "name": "Traditional Peacock Ring",
    "code": "AJ-104",
    "category": "rings",
    "cat": "rings",
    "subCategory": "Temple Ring",
    "shortDesc": "Peacock engraved ring.",
    "desc": "Traditional temple style peacock ring crafted in 22K yellow gold.",
    "grossWt": 7.2,
    "netWt": 6.8,
    "wt": "7.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 53500,
    "price": 50500,
    "availability": "Made to Order",
    "displayOrder": 4,
    "tag": "NEW",
    "images": [
      "images/ring.png"
    ]
  },
  {
    "id": "AJ-105",
    "name": "Heart Shape Gold Ring",
    "code": "AJ-105",
    "category": "rings",
    "cat": "rings",
    "subCategory": "Fashion Ring",
    "shortDesc": "Stylish heart design ring.",
    "desc": "A trendy heart-shaped 22K gold ring suitable for gifting and daily wear.",
    "grossWt": 5.6,
    "netWt": 5.3,
    "wt": "5.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 41800,
    "price": 39200,
    "availability": "Made to Order",
    "displayOrder": 5,
    "tag": "NEW",
    "images": [
      "images/classic_gold_ring.jpg"
    ]
  },
  {
    "id": "AJ-106",
    "name": "Royal Bridal Necklace",
    "code": "AJ-106",
    "category": "necklace",
    "cat": "necklace",
    "subCategory": "Bridal Necklace",
    "shortDesc": "Grand bridal necklace.",
    "desc": "Luxurious bridal necklace crafted with intricate traditional gold work.",
    "grossWt": 48.5,
    "netWt": 46.8,
    "wt": "48.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 355000,
    "price": 339500,
    "availability": "Made to Order",
    "displayOrder": 6,
    "tag": "NEW",
    "images": [
      "images/choker_necklace.jpg"
    ]
  },
  {
    "id": "AJ-107",
    "name": "Elegant Gold Necklace",
    "code": "AJ-107",
    "category": "necklace",
    "cat": "necklace",
    "subCategory": "Daily Wear",
    "shortDesc": "Lightweight daily necklace.",
    "desc": "Modern lightweight necklace suitable for office and casual occasions.",
    "grossWt": 18.2,
    "netWt": 17.6,
    "wt": "18.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 136000,
    "price": 129500,
    "availability": "Made to Order",
    "displayOrder": 7,
    "tag": "NEW",
    "images": [
      "images/pearl_necklace.jpg"
    ]
  },
  {
    "id": "AJ-108",
    "name": "Temple Gold Necklace",
    "code": "AJ-108",
    "category": "necklace",
    "cat": "necklace",
    "subCategory": "Temple Jewellery",
    "shortDesc": "Traditional temple necklace.",
    "desc": "Classic temple-inspired necklace featuring premium handcrafted detailing.",
    "grossWt": 35.7,
    "netWt": 34.5,
    "wt": "35.7g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 258000,
    "price": 247500,
    "availability": "Made to Order",
    "displayOrder": 8,
    "tag": "NEW",
    "images": [
      "images/necklace.png"
    ]
  },
  {
    "id": "AJ-109",
    "name": "Classic Gold Haram",
    "code": "AJ-109",
    "category": "necklace",
    "cat": "necklace",
    "subCategory": "Long Necklace",
    "shortDesc": "Traditional long haram.",
    "desc": "Premium long gold haram with elegant handcrafted design.",
    "grossWt": 42.8,
    "netWt": 41.4,
    "wt": "42.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 310000,
    "price": 296000,
    "availability": "Made to Order",
    "displayOrder": 9,
    "tag": "NEW",
    "images": [
      "images/choker_necklace.jpg"
    ]
  },
  {
    "id": "AJ-110",
    "name": "Designer Gold Necklace",
    "code": "AJ-110",
    "category": "necklace",
    "cat": "necklace",
    "subCategory": "Designer",
    "shortDesc": "Contemporary gold necklace.",
    "desc": "Designer necklace combining traditional craftsmanship with modern styling.",
    "grossWt": 22.4,
    "netWt": 21.7,
    "wt": "22.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 168500,
    "price": 159900,
    "availability": "Made to Order",
    "displayOrder": 10,
    "tag": "NEW",
    "images": [
      "images/pearl_necklace.jpg"
    ]
  },
  {
    "id": "AJ-111",
    "name": "Daily Wear Gold Bangle",
    "code": "AJ-111",
    "category": "bangles",
    "cat": "bangles",
    "subCategory": "Daily Wear",
    "shortDesc": "Comfortable everyday bangle.",
    "desc": "Lightweight daily wear gold bangle with glossy finish.",
    "grossWt": 10.9,
    "netWt": 10.5,
    "wt": "10.9g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 76500,
    "price": 72900,
    "availability": "Made to Order",
    "displayOrder": 11,
    "tag": "",
    "images": [
      "images/gold_kadas.jpg"
    ]
  },
  {
    "id": "AJ-112",
    "name": "Casting Gold Bangle",
    "code": "AJ-112",
    "category": "bangles",
    "cat": "bangles",
    "subCategory": "Casting Bangle",
    "shortDesc": "Premium casting bangle.",
    "desc": "Crafted with precision casting technology for long-lasting shine.",
    "grossWt": 12.8,
    "netWt": 12.3,
    "wt": "12.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 89200,
    "price": 84800,
    "availability": "Made to Order",
    "displayOrder": 12,
    "tag": "",
    "images": [
      "images/bangle.png"
    ]
  },
  {
    "id": "AJ-113",
    "name": "Floral Gold Bangle",
    "code": "AJ-113",
    "category": "bangles",
    "cat": "bangles",
    "subCategory": "Designer Bangle",
    "shortDesc": "Elegant floral bangle.",
    "desc": "Intricate floral engraved yellow gold bangle with premium finish.",
    "grossWt": 13.7,
    "netWt": 13.2,
    "wt": "13.7g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 95800,
    "price": 91200,
    "availability": "Made to Order",
    "displayOrder": 13,
    "tag": "",
    "images": [
      "images/gold_kadas.jpg"
    ]
  },
  {
    "id": "AJ-114",
    "name": "Traditional Gold Kada",
    "code": "AJ-114",
    "category": "bangles",
    "cat": "bangles",
    "subCategory": "Kada",
    "shortDesc": "Traditional handcrafted kada.",
    "desc": "Classic gold kada suitable for festive and wedding occasions.",
    "grossWt": 16.5,
    "netWt": 15.9,
    "wt": "16.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 118500,
    "price": 113000,
    "availability": "Made to Order",
    "displayOrder": 14,
    "tag": "",
    "images": [
      "images/bangle.png"
    ]
  },
  {
    "id": "AJ-115",
    "name": "Premium Bridal Bangle",
    "code": "AJ-115",
    "category": "bangles",
    "cat": "bangles",
    "subCategory": "Bridal Bangle",
    "shortDesc": "Luxury bridal gold bangle.",
    "desc": "Premium bridal bangle designed with intricate traditional motifs.",
    "grossWt": 20.8,
    "netWt": 20.1,
    "wt": "20.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 149500,
    "price": 142000,
    "availability": "Made to Order",
    "displayOrder": 15,
    "tag": "",
    "images": [
      "images/gold_kadas.jpg"
    ]
  },
  {
    "id": "AJ-116",
    "name": "Classic Gold Bracelet",
    "code": "AJ-116",
    "category": "bracelets",
    "cat": "bracelets",
    "subCategory": "Men's Bracelet",
    "shortDesc": "Premium men's bracelet.",
    "desc": "Solid 22K gold bracelet designed for everyday luxury.",
    "grossWt": 15.4,
    "netWt": 14.8,
    "wt": "15.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 112000,
    "price": 106500,
    "availability": "Made to Order",
    "displayOrder": 16,
    "tag": "",
    "images": [
      "images/tennis_bracelet.jpg"
    ]
  },
  {
    "id": "AJ-117",
    "name": "Designer Gold Bracelet",
    "code": "AJ-117",
    "category": "bracelets",
    "cat": "bracelets",
    "subCategory": "Women's Bracelet",
    "shortDesc": "Elegant women's bracelet.",
    "desc": "Stylish handcrafted bracelet perfect for every occasion.",
    "grossWt": 9.6,
    "netWt": 9.2,
    "wt": "9.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 69800,
    "price": 66400,
    "availability": "Made to Order",
    "displayOrder": 17,
    "tag": "",
    "images": [
      "images/bracelet.png"
    ]
  },
  {
    "id": "AJ-118",
    "name": "Twisted Link Bracelet",
    "code": "AJ-118",
    "category": "bracelets",
    "cat": "bracelets",
    "subCategory": "Chain Bracelet",
    "shortDesc": "Modern twisted bracelet.",
    "desc": "Lightweight twisted chain bracelet with polished finish.",
    "grossWt": 11.1,
    "netWt": 10.7,
    "wt": "11.1g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 81200,
    "price": 77400,
    "availability": "Made to Order",
    "displayOrder": 18,
    "tag": "",
    "images": [
      "images/tennis_bracelet.jpg"
    ]
  },
  {
    "id": "AJ-119",
    "name": "Royal Gold Bracelet",
    "code": "AJ-119",
    "category": "bracelets",
    "cat": "bracelets",
    "subCategory": "Premium Bracelet",
    "shortDesc": "Luxury handcrafted bracelet.",
    "desc": "Premium handcrafted gold bracelet featuring elegant detailing.",
    "grossWt": 18.4,
    "netWt": 17.8,
    "wt": "18.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 132000,
    "price": 126500,
    "availability": "Made to Order",
    "displayOrder": 19,
    "tag": "",
    "images": [
      "images/bracelet.png"
    ]
  },
  {
    "id": "AJ-120",
    "name": "Classic Curb Bracelet",
    "code": "AJ-120",
    "category": "bracelets",
    "cat": "bracelets",
    "subCategory": "Curb Bracelet",
    "shortDesc": "Classic curb link bracelet.",
    "desc": "Stylish curb chain bracelet crafted in BIS 916 hallmarked yellow gold.",
    "grossWt": 13.3,
    "netWt": 12.8,
    "wt": "13.3g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 96500,
    "price": 91900,
    "availability": "Made to Order",
    "displayOrder": 20,
    "tag": "",
    "images": [
      "images/tennis_bracelet.jpg"
    ]
  },
  {
    "id": "AJ-121",
    "name": "Classic Rope Gold Chain",
    "code": "AJ-121",
    "category": "chains",
    "cat": "chains",
    "subCategory": "Rope Chain",
    "shortDesc": "Elegant rope-style gold chain.",
    "desc": "Beautifully crafted 22K BIS 916 hallmarked rope chain suitable for daily wear.",
    "grossWt": 14.2,
    "netWt": 13.8,
    "wt": "14.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 102500,
    "price": 97800,
    "availability": "Made to Order",
    "displayOrder": 21,
    "tag": "",
    "images": [
      "images/pearl_necklace.jpg"
    ]
  },
  {
    "id": "AJ-122",
    "name": "Box Link Gold Chain",
    "code": "AJ-122",
    "category": "chains",
    "cat": "chains",
    "subCategory": "Box Chain",
    "shortDesc": "Premium box link chain.",
    "desc": "Modern box link chain with smooth finish and premium craftsmanship.",
    "grossWt": 12.6,
    "netWt": 12.2,
    "wt": "12.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 91800,
    "price": 87400,
    "availability": "Made to Order",
    "displayOrder": 22,
    "tag": "",
    "images": [
      "images/chain.png"
    ]
  },
  {
    "id": "AJ-123",
    "name": "Singapore Gold Chain",
    "code": "AJ-123",
    "category": "chains",
    "cat": "chains",
    "subCategory": "Singapore Chain",
    "shortDesc": "Stylish twisted chain.",
    "desc": "Classic Singapore chain crafted from 22K yellow gold.",
    "grossWt": 9.8,
    "netWt": 9.4,
    "wt": "9.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 71200,
    "price": 67800,
    "availability": "Made to Order",
    "displayOrder": 23,
    "tag": "",
    "images": [
      "images/pearl_necklace.jpg"
    ]
  },
  {
    "id": "AJ-124",
    "name": "Flat Gold Chain",
    "code": "AJ-124",
    "category": "chains",
    "cat": "chains",
    "subCategory": "Flat Chain",
    "shortDesc": "Contemporary flat chain.",
    "desc": "Lightweight flat chain designed for everyday elegance.",
    "grossWt": 11.3,
    "netWt": 10.9,
    "wt": "11.3g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 82600,
    "price": 78900,
    "availability": "Made to Order",
    "displayOrder": 24,
    "tag": "",
    "images": [
      "images/chain.png"
    ]
  },
  {
    "id": "AJ-125",
    "name": "Designer Gold Chain",
    "code": "AJ-125",
    "category": "chains",
    "cat": "chains",
    "subCategory": "Designer Chain",
    "shortDesc": "Luxury designer chain.",
    "desc": "Premium handcrafted designer chain with polished finish.",
    "grossWt": 18.5,
    "netWt": 17.9,
    "wt": "18.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 135000,
    "price": 128500,
    "availability": "Made to Order",
    "displayOrder": 25,
    "tag": "",
    "images": [
      "images/pearl_necklace.jpg"
    ]
  },
  {
    "id": "AJ-126",
    "name": "Floral Gold Pendant",
    "code": "AJ-126",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Floral Pendant",
    "shortDesc": "Elegant floral pendant.",
    "desc": "Beautiful floral pendant crafted in BIS 916 hallmarked yellow gold.",
    "grossWt": 4.8,
    "netWt": 4.5,
    "wt": "4.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 34800,
    "price": 32900,
    "availability": "Made to Order",
    "displayOrder": 26,
    "tag": "",
    "images": [
      "images/ruby_pendant.jpg"
    ]
  },
  {
    "id": "AJ-127",
    "name": "Peacock Gold Pendant",
    "code": "AJ-127",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Temple Pendant",
    "shortDesc": "Traditional peacock pendant.",
    "desc": "Temple-inspired pendant featuring intricate peacock motifs.",
    "grossWt": 6.1,
    "netWt": 5.8,
    "wt": "6.1g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 44500,
    "price": 42100,
    "availability": "Made to Order",
    "displayOrder": 27,
    "tag": "",
    "images": [
      "images/pendant.png"
    ]
  },
  {
    "id": "AJ-128",
    "name": "Heart Gold Pendant",
    "code": "AJ-128",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Heart Pendant",
    "shortDesc": "Romantic heart pendant.",
    "desc": "Minimal heart-shaped pendant suitable for everyday wear.",
    "grossWt": 3.9,
    "netWt": 3.6,
    "wt": "3.9g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 28600,
    "price": 26900,
    "availability": "Made to Order",
    "displayOrder": 28,
    "tag": "",
    "images": [
      "images/ruby_pendant.jpg"
    ]
  },
  {
    "id": "AJ-129",
    "name": "Leaf Gold Pendant",
    "code": "AJ-129",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Nature Pendant",
    "shortDesc": "Nature-inspired pendant.",
    "desc": "Leaf pattern pendant with premium yellow gold finish.",
    "grossWt": 4.5,
    "netWt": 4.2,
    "wt": "4.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 33200,
    "price": 31500,
    "availability": "Made to Order",
    "displayOrder": 29,
    "tag": "",
    "images": [
      "images/pendant.png"
    ]
  },
  {
    "id": "AJ-130",
    "name": "Lakshmi Gold Pendant",
    "code": "AJ-130",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Religious Pendant",
    "shortDesc": "Sacred Lakshmi pendant.",
    "desc": "Traditional Lakshmi pendant crafted in pure 22K yellow gold.",
    "grossWt": 7.4,
    "netWt": 7,
    "wt": "7.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 53800,
    "price": 51200,
    "availability": "Made to Order",
    "displayOrder": 30,
    "tag": "",
    "images": [
      "images/ruby_pendant.jpg"
    ]
  },
  {
    "id": "AJ-131",
    "name": "Classic Gold Stud Earrings",
    "code": "AJ-131",
    "category": "earrings",
    "cat": "earrings",
    "subCategory": "Stud Earrings",
    "shortDesc": "Elegant daily wear studs.",
    "desc": "Classic round gold stud earrings with premium polish.",
    "grossWt": 3.8,
    "netWt": 3.5,
    "wt": "3.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 27600,
    "price": 25900,
    "availability": "Made to Order",
    "displayOrder": 31,
    "tag": "",
    "images": [
      "images/gold_jhumkas.jpg"
    ]
  },
  {
    "id": "AJ-132",
    "name": "Drop Gold Earrings",
    "code": "AJ-132",
    "category": "earrings",
    "cat": "earrings",
    "subCategory": "Drop Earrings",
    "shortDesc": "Elegant drop earrings.",
    "desc": "Stylish drop earrings suitable for festive occasions.",
    "grossWt": 5.9,
    "netWt": 5.5,
    "wt": "5.9g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 42900,
    "price": 40600,
    "availability": "Made to Order",
    "displayOrder": 32,
    "tag": "",
    "images": [
      "images/sapphire_earrings.jpg"
    ]
  },
  {
    "id": "AJ-133",
    "name": "Peacock Jhumka Earrings",
    "code": "AJ-133",
    "category": "earrings",
    "cat": "earrings",
    "subCategory": "Jhumka",
    "shortDesc": "Traditional gold jhumkas.",
    "desc": "Intricately handcrafted peacock jhumka earrings.",
    "grossWt": 10.8,
    "netWt": 10.2,
    "wt": "10.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 78500,
    "price": 74800,
    "availability": "Made to Order",
    "displayOrder": 33,
    "tag": "",
    "images": [
      "images/diamond_studs.jpg"
    ]
  },
  {
    "id": "AJ-134",
    "name": "Hoop Gold Earrings",
    "code": "AJ-134",
    "category": "earrings",
    "cat": "earrings",
    "subCategory": "Hoop Earrings",
    "shortDesc": "Modern gold hoops.",
    "desc": "Elegant hoop earrings with a glossy yellow gold finish.",
    "grossWt": 6.7,
    "netWt": 6.3,
    "wt": "6.7g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 48600,
    "price": 46200,
    "availability": "Made to Order",
    "displayOrder": 34,
    "tag": "",
    "images": [
      "images/earrings.png"
    ]
  },
  {
    "id": "AJ-135",
    "name": "Floral Gold Earrings",
    "code": "AJ-135",
    "category": "earrings",
    "cat": "earrings",
    "subCategory": "Designer Earrings",
    "shortDesc": "Designer floral earrings.",
    "desc": "Premium floral earrings perfect for weddings and celebrations.",
    "grossWt": 8.5,
    "netWt": 8.1,
    "wt": "8.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 61800,
    "price": 58900,
    "availability": "Made to Order",
    "displayOrder": 35,
    "tag": "",
    "images": [
      "images/gold_jhumkas.jpg"
    ]
  },
  {
    "id": "AJ-136",
    "name": "Royal Bridal Necklace Set",
    "code": "AJ-136",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Necklace Set",
    "shortDesc": "Luxury bridal jewelry set.",
    "desc": "Complete bridal necklace set handcrafted with traditional artistry.",
    "grossWt": 72.5,
    "netWt": 70.4,
    "wt": "72.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 525000,
    "price": 498000,
    "availability": "Made to Order",
    "displayOrder": 36,
    "tag": "",
    "images": [
      "1.jpg"
    ]
  },
  {
    "id": "AJ-137",
    "name": "Traditional Bridal Bangles",
    "code": "AJ-137",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Bangle Set",
    "shortDesc": "Premium bridal bangles.",
    "desc": "Handcrafted bridal bangle set featuring classic South Indian designs.",
    "grossWt": 45.8,
    "netWt": 44.2,
    "wt": "45.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 332000,
    "price": 316000,
    "availability": "Made to Order",
    "displayOrder": 37,
    "tag": "",
    "images": [
      "images/choker_necklace.jpg"
    ]
  },
  {
    "id": "AJ-138",
    "name": "Grand Bridal Haram",
    "code": "AJ-138",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Long Haram",
    "shortDesc": "Traditional bridal haram.",
    "desc": "Premium long bridal haram with intricate handcrafted work.",
    "grossWt": 64.2,
    "netWt": 62.1,
    "wt": "64.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 468000,
    "price": 446000,
    "availability": "Made to Order",
    "displayOrder": 38,
    "tag": "",
    "images": [
      "images/necklace.png"
    ]
  },
  {
    "id": "AJ-139",
    "name": "Designer Bridal Earrings",
    "code": "AJ-139",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Bridal Earrings",
    "shortDesc": "Luxury bridal earrings.",
    "desc": "Elegant bridal earrings with premium traditional finish.",
    "grossWt": 18.4,
    "netWt": 17.8,
    "wt": "18.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 134500,
    "price": 128000,
    "availability": "Made to Order",
    "displayOrder": 39,
    "tag": "",
    "images": [
      "1.jpg"
    ]
  },
  {
    "id": "AJ-140",
    "name": "Royal Bridal Pendant Set",
    "code": "AJ-140",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Pendant Set",
    "shortDesc": "Premium bridal pendant set.",
    "desc": "Beautiful bridal pendant set crafted in BIS 916 hallmarked yellow gold.",
    "grossWt": 24.6,
    "netWt": 23.8,
    "wt": "24.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 179500,
    "price": 171000,
    "availability": "Made to Order",
    "displayOrder": 40,
    "tag": "",
    "images": [
      "images/choker_necklace.jpg"
    ]
  },
  {
    "id": "AJ-141",
    "name": "Antique Lakshmi Necklace",
    "code": "AJ-141",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Temple Necklace",
    "shortDesc": "Traditional Lakshmi antique necklace.",
    "desc": "Intricately handcrafted antique Lakshmi necklace made from BIS 916 hallmarked 22K yellow gold with a premium matte finish.",
    "grossWt": 52.8,
    "netWt": 51.2,
    "wt": "52.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 385000,
    "price": 368500,
    "availability": "Made to Order",
    "displayOrder": 41,
    "tag": "",
    "images": [
      "3.webp"
    ]
  },
  {
    "id": "AJ-142",
    "name": "Antique Peacock Necklace",
    "code": "AJ-142",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Designer Necklace",
    "shortDesc": "Royal peacock antique necklace.",
    "desc": "Elegant antique necklace featuring detailed peacock craftsmanship.",
    "grossWt": 48.6,
    "netWt": 47.1,
    "wt": "48.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 352000,
    "price": 337000,
    "availability": "Made to Order",
    "displayOrder": 42,
    "tag": "",
    "images": [
      "images/antique.png"
    ]
  },
  {
    "id": "AJ-143",
    "name": "Temple Antique Bangle",
    "code": "AJ-143",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Temple Bangle",
    "shortDesc": "Traditional temple bangle.",
    "desc": "Premium antique temple bangle with handcrafted detailing.",
    "grossWt": 18.5,
    "netWt": 17.9,
    "wt": "18.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 136500,
    "price": 129900,
    "availability": "Made to Order",
    "displayOrder": 43,
    "tag": "",
    "images": [
      "3.webp"
    ]
  },
  {
    "id": "AJ-144",
    "name": "Antique Gold Kada",
    "code": "AJ-144",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Kada",
    "shortDesc": "Classic antique kada.",
    "desc": "Traditional antique kada inspired by South Indian heritage designs.",
    "grossWt": 22.4,
    "netWt": 21.8,
    "wt": "22.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 165000,
    "price": 157000,
    "availability": "Made to Order",
    "displayOrder": 44,
    "tag": "",
    "images": [
      "images/antique.png"
    ]
  },
  {
    "id": "AJ-145",
    "name": "Antique Jhumka Earrings",
    "code": "AJ-145",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Jhumka",
    "shortDesc": "Traditional antique jhumkas.",
    "desc": "Handcrafted antique jhumka earrings with temple-inspired motifs.",
    "grossWt": 12.6,
    "netWt": 12,
    "wt": "12.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 92500,
    "price": 87900,
    "availability": "Made to Order",
    "displayOrder": 45,
    "tag": "",
    "images": [
      "3.webp"
    ]
  },
  {
    "id": "AJ-146",
    "name": "Antique Lakshmi Pendant",
    "code": "AJ-146",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Religious Pendant",
    "shortDesc": "Lakshmi antique pendant.",
    "desc": "Beautiful Lakshmi pendant crafted with antique gold finishing.",
    "grossWt": 8.2,
    "netWt": 7.8,
    "wt": "8.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 59800,
    "price": 56900,
    "availability": "Made to Order",
    "displayOrder": 46,
    "tag": "",
    "images": [
      "images/antique.png"
    ]
  },
  {
    "id": "AJ-147",
    "name": "Temple Coin Necklace",
    "code": "AJ-147",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Coin Necklace",
    "shortDesc": "Traditional coin necklace.",
    "desc": "Premium antique coin necklace with heritage-inspired craftsmanship.",
    "grossWt": 38.7,
    "netWt": 37.5,
    "wt": "38.7g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 282000,
    "price": 269500,
    "availability": "Made to Order",
    "displayOrder": 47,
    "tag": "",
    "images": [
      "3.webp"
    ]
  },
  {
    "id": "AJ-148",
    "name": "Vintage Floral Ring",
    "code": "AJ-148",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Designer Ring",
    "shortDesc": "Vintage floral ring.",
    "desc": "Antique floral ring featuring elegant handcrafted patterns.",
    "grossWt": 6.4,
    "netWt": 6,
    "wt": "6.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 46800,
    "price": 44400,
    "availability": "Made to Order",
    "displayOrder": 48,
    "tag": "",
    "images": [
      "images/antique.png"
    ]
  },
  {
    "id": "AJ-149",
    "name": "Antique Gold Chain",
    "code": "AJ-149",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Designer Chain",
    "shortDesc": "Vintage style gold chain.",
    "desc": "Elegant antique chain crafted with traditional South Indian patterns.",
    "grossWt": 19.6,
    "netWt": 18.9,
    "wt": "19.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 143500,
    "price": 136900,
    "availability": "Made to Order",
    "displayOrder": 49,
    "tag": "",
    "images": [
      "3.webp"
    ]
  },
  {
    "id": "AJ-150",
    "name": "Royal Antique Bracelet",
    "code": "AJ-150",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Designer Bracelet",
    "shortDesc": "Luxury antique bracelet.",
    "desc": "Premium handcrafted antique bracelet with timeless elegance.",
    "grossWt": 16.8,
    "netWt": 16.2,
    "wt": "16.8g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 123800,
    "price": 118000,
    "availability": "Made to Order",
    "displayOrder": 50,
    "tag": "",
    "images": [
      "images/antique.png"
    ]
  },
  {
    "id": "AJ-151",
    "name": "Classic Gold Wedding Ring",
    "code": "AJ-151",
    "category": "rings",
    "cat": "rings",
    "subCategory": "Wedding Ring",
    "shortDesc": "Elegant wedding band.",
    "desc": "Simple yet premium wedding ring crafted in 22K yellow gold.",
    "grossWt": 5.2,
    "netWt": 4.9,
    "wt": "5.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 38600,
    "price": 36500,
    "availability": "Made to Order",
    "displayOrder": 51,
    "tag": "",
    "images": [
      "images/emerald_cut_ring.jpg"
    ]
  },
  {
    "id": "AJ-152",
    "name": "Designer Gold Pendant",
    "code": "AJ-152",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Designer Pendant",
    "shortDesc": "Modern designer pendant.",
    "desc": "Premium designer pendant suitable for everyday elegance.",
    "grossWt": 5.6,
    "netWt": 5.2,
    "wt": "5.6g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 40900,
    "price": 38800,
    "availability": "Made to Order",
    "displayOrder": 52,
    "tag": "",
    "images": [
      "images/pendant.png"
    ]
  },
  {
    "id": "AJ-153",
    "name": "Luxury Bridal Necklace",
    "code": "AJ-153",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Premium Necklace",
    "shortDesc": "Exclusive bridal necklace.",
    "desc": "Luxury bridal necklace with intricate handcrafted temple motifs.",
    "grossWt": 68.9,
    "netWt": 66.8,
    "wt": "68.9g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 499000,
    "price": 475000,
    "availability": "Made to Order",
    "displayOrder": 53,
    "tag": "",
    "images": [
      "images/necklace.png"
    ]
  },
  {
    "id": "AJ-154",
    "name": "Elegant Gold Bracelet",
    "code": "AJ-154",
    "category": "bracelets",
    "cat": "bracelets",
    "subCategory": "Daily Wear Bracelet",
    "shortDesc": "Minimal daily bracelet.",
    "desc": "Lightweight bracelet designed for everyday comfort and elegance.",
    "grossWt": 8.9,
    "netWt": 8.5,
    "wt": "8.9g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 64800,
    "price": 61800,
    "availability": "Made to Order",
    "displayOrder": 54,
    "tag": "",
    "images": [
      "images/bracelet.png"
    ]
  },
  {
    "id": "AJ-155",
    "name": "Premium Gold Chain",
    "code": "AJ-155",
    "category": "chains",
    "cat": "chains",
    "subCategory": "Premium Chain",
    "shortDesc": "Premium everyday chain.",
    "desc": "Elegant premium chain crafted in BIS 916 hallmarked yellow gold.",
    "grossWt": 17.2,
    "netWt": 16.6,
    "wt": "17.2g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 126500,
    "price": 120000,
    "availability": "Made to Order",
    "displayOrder": 55,
    "tag": "",
    "images": [
      "images/chain.png"
    ]
  },
  {
    "id": "AJ-156",
    "name": "Temple Gold Earrings",
    "code": "AJ-156",
    "category": "earrings",
    "cat": "earrings",
    "subCategory": "Temple Earrings",
    "shortDesc": "Traditional temple earrings.",
    "desc": "Temple-inspired earrings with intricate handcrafted detailing.",
    "grossWt": 9.4,
    "netWt": 9,
    "wt": "9.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 68600,
    "price": 65200,
    "availability": "Made to Order",
    "displayOrder": 56,
    "tag": "",
    "images": [
      "images/sapphire_earrings.jpg"
    ]
  },
  {
    "id": "AJ-157",
    "name": "Classic Casting Bangle",
    "code": "AJ-157",
    "category": "bangles",
    "cat": "bangles",
    "subCategory": "Casting Bangle",
    "shortDesc": "Elegant casting bangle.",
    "desc": "Premium casting bangle with a smooth polished yellow gold finish.",
    "grossWt": 13.5,
    "netWt": 13,
    "wt": "13.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 98500,
    "price": 93900,
    "availability": "Made to Order",
    "displayOrder": 57,
    "tag": "",
    "images": [
      "images/bangle.png"
    ]
  },
  {
    "id": "AJ-158",
    "name": "Royal Temple Pendant",
    "code": "AJ-158",
    "category": "pendants",
    "cat": "pendants",
    "subCategory": "Temple Pendant",
    "shortDesc": "Royal temple pendant.",
    "desc": "Premium temple pendant with exquisite handcrafted detailing.",
    "grossWt": 7.1,
    "netWt": 6.7,
    "wt": "7.1g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 51800,
    "price": 49200,
    "availability": "Made to Order",
    "displayOrder": 58,
    "tag": "",
    "images": [
      "images/ruby_pendant.jpg"
    ]
  },
  {
    "id": "AJ-159",
    "name": "Traditional Bridal Bangle Set",
    "code": "AJ-159",
    "category": "bridal",
    "cat": "bridal",
    "subCategory": "Bridal Bangles",
    "shortDesc": "Luxury bridal bangle set.",
    "desc": "Exclusive bridal bangle set crafted with intricate traditional patterns.",
    "grossWt": 42.5,
    "netWt": 41,
    "wt": "42.5g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 309000,
    "price": 294500,
    "availability": "Made to Order",
    "displayOrder": 59,
    "tag": "",
    "images": [
      "1.jpg"
    ]
  },
  {
    "id": "AJ-160",
    "name": "Heritage Antique Necklace",
    "code": "AJ-160",
    "category": "antique",
    "cat": "antique",
    "subCategory": "Heritage Collection",
    "shortDesc": "Premium heritage necklace.",
    "desc": "Exclusive heritage antique necklace crafted with timeless South Indian artistry and BIS 916 hallmarked 22K yellow gold.",
    "grossWt": 56.4,
    "netWt": 54.8,
    "wt": "56.4g",
    "purity": "22K/916",
    "metal": "Yellow Gold",
    "color": "Yellow",
    "hallmark": "BIS 916 Hallmarked",
    "mrp": 412000,
    "price": 394000,
    "availability": "Made to Order",
    "displayOrder": 60,
    "tag": "",
    "images": [
      "3.webp"
    ]
  }
];

const CHIP_ICONS = {
  all: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>`,
  new: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 2.6 6.3 6.9.7-5.2 4.6 1.6 6.7-5.9-3.5-5.9 3.5 1.6-6.7-5.2-4.6 6.9-.7z"/></svg>`,
  rings: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="14" r="7"/><path d="M12 7 9.5 4h5z" fill="currentColor"/><circle cx="12" cy="4" r="1.5" fill="currentColor"/></svg>`,
  necklace: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4c0 7 3.5 14 8 14s8-7 8-14"/><circle cx="12" cy="18" r="2.5" fill="currentColor"/></svg>`,
  earrings: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="5" r="2" fill="currentColor"/><path d="M12 7v3M7 14c0-3 2.2-4 5-4s5 1 5 4v2H7z"/><circle cx="9" cy="19" r="1" fill="currentColor"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/><circle cx="15" cy="19" r="1" fill="currentColor"/></svg>`,
  chains: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="7" y="3" width="10" height="7" rx="3.5" transform="rotate(-30 12 6.5)"/><rect x="7" y="14" width="10" height="7" rx="3.5" transform="rotate(-30 12 17.5)"/><path d="m9 10 6 4"/></svg>`,
  bangles: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5" stroke-width="1.5" stroke-dasharray="2 2"/></svg>`,
  bracelets: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="12" rx="9" ry="5"/><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="17" r="1.5" fill="currentColor"/></svg>`,
  pendants: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3 12 10 18 3"/><path d="M12 10v3"/><polygon points="12,13 17,20 7,20" fill="currentColor"/></svg>`,
  haram: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 4c0 7 4 14 9 14s9-7 9-14"/><path d="M6 4c0 5 2.7 10 6 10s6-5 6-10"/><circle cx="12" cy="18" r="2" fill="currentColor"/></svg>`,
  antique: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3c-4.5 0-7.5 3.3-7.5 7.5 0 5.5 7.5 10.5 7.5 10.5s7.5-5 7.5-10.5C19.5 6.3 16.5 3 12 3z"/><circle cx="12" cy="10.5" r="2.5" fill="currentColor"/></svg>`,
  sets: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`
};

const CATS = [
  { key: "all", label: "All", icon: CHIP_ICONS.all },
  { key: "new", label: "New Launch", icon: CHIP_ICONS.new },
  { key: "rings", label: "Rings", icon: CHIP_ICONS.rings },
  { key: "necklace", label: "Necklace", icon: CHIP_ICONS.necklace },
  { key: "earrings", label: "Earrings", icon: CHIP_ICONS.earrings },
  { key: "chains", label: "Chains", icon: CHIP_ICONS.chains },
  { key: "bangles", label: "Bangles", icon: CHIP_ICONS.bangles },
  { key: "bracelets", label: "Bracelets", icon: CHIP_ICONS.bracelets },
  { key: "pendants", label: "Pendant", icon: CHIP_ICONS.pendants },
  { key: "casting-ring", label: "Casting Ring", icon: CHIP_ICONS.rings },
  { key: "casting-earrings", label: "Casting Earrings", icon: CHIP_ICONS.earrings },
  { key: "casting-pendant", label: "Casting Pendant", icon: CHIP_ICONS.pendants },
  { key: "casting-necklace", label: "Casting Necklace", icon: CHIP_ICONS.necklace },
  { key: "haram", label: "Haram", icon: CHIP_ICONS.haram },
  { key: "antique", label: "Antique", icon: CHIP_ICONS.antique },
  { key: "sets", label: "Combo Sets", icon: CHIP_ICONS.sets }
];

const COLLECTIONS = [
  { key: "new", label: "New Launch", img: "images/new.png", icon: ICONS.pendant },
  { key: "rings", label: "Rings", img: "images/ring.png", icon: ICONS.ring },
  { key: "necklace", label: "Necklace", img: "images/necklace.png", icon: ICONS.necklace },
  { key: "bangles", label: "Bangles", img: "images/gold_kadas.jpg", icon: ICONS.bangle },
  { key: "bracelets", label: "Bracelets", img: "images/bracelet.png", icon: ICONS.bracelet },
  { key: "chains", label: "Chains", img: "images/chain.png", icon: ICONS.chain },
  { key: "pendants", label: "Pendant", img: "images/pendant.png", icon: ICONS.pendant },
  // { key: "Haram", label: "Haram", img: "images/haram.png", icon: ICONS.haram },
  { key: "earrings", label: "Earrings", img: "images/earrings.png", icon: ICONS.earring },
  { key: "haram", label: "Haram", img: "images/haram.png", icon: ICONS.haram },
  { key: "antique", label: "Antique", img: "images/antique.png", icon: ICONS.antique }
];

const TESTIMONIALS = [
  { name: "Revathi S.", loc: "Salem", stars: 5, msg: "The bangle I bought fit perfectly and the hallmark certificate gave me total peace of mind. Beautiful finish, beautifully packed." },
  { name: "Karthik M.", loc: "Coimbatore", stars: 5, msg: "Ordered a ring online, verified the price over WhatsApp before paying — genuinely transparent pricing and quick delivery." },
  { name: "Divya R.", loc: "Chennai", stars: 5, msg: "My bridal haram was even more detailed in person than in photos. The old gold exchange saved us a lot too." },
  { name: "Arjun P.", loc: "Salem", stars: 5, msg: "Been buying from MM for 3 generations now. This new site finally makes it easy to browse before visiting the store." },
  { name: "Meenakshi K.", loc: "Madurai", stars: 5, msg: "The 916 gold chain exceeded my expectations. The weight, shine, and craftsmanship are pure perfection." },
  { name: "Subhashini T.", loc: "Erode", stars: 5, msg: "Prompt response on WhatsApp and safe delivery. Highly trusted family jeweller with beautiful designs." },
  { name: "Priya N.", loc: "Trichy", stars: 5, msg: "The Antique Kundan Choker I received is absolutely majestic. Every guest at my daughter's wedding complemented it!" },
  { name: "Venkatesh K.", loc: "Salem", stars: 5, msg: "Exchanged our family's old gold for new bangles. Very transparent weighing process right in front of us." },
  { name: "Ananya S.", loc: "Bengaluru", stars: 5, msg: "Ordered a pair of daily wear gold studs. The packing was super safe with tamper-proof seal. Will order again!" },
  { name: "Lakshmi Ammal", loc: "Namakkal", stars: 5, msg: "Traditional craftsmanship combined with modern service. The staff on WhatsApp helped me pick the right size." },
  { name: "Gokul Krishnan", loc: "Salem", stars: 5, msg: "Bought a gold rope chain for my father's 60th birthday. Hallmark seal and purity test report included. Exceptional quality." },
  { name: "Deepika V.", loc: "Tiruppur", stars: 5, msg: "The 22K couple wedding rings we ordered fit like a dream. Custom engraving was done perfectly as requested." },
  { name: "Sangeetha R.", loc: "Karur", stars: 5, msg: "Best gold rates and very reasonable making charges compared to big corporate showrooms. Genuine 916 gold." },
  { name: "Bhavani M.", loc: "Salem", stars: 5, msg: "Bought temple design jhumkas for Navratri. The intricate detailing of Goddess Lakshmi is breathtaking!" },
  { name: "Kavitha P.", loc: "Chennai", stars: 5, msg: "Delivery to Chennai took only 2 days! The jewellery box is luxurious and includes a velvet pouch for safety." },
  { name: "Sundaramurthy N.", loc: "Salem", stars: 5, msg: "Our entire family has trusted MM Jewellery for over 25 years. Honest pricing and genuine hallmark guarantee." },
  { name: "Radhika G.", loc: "Coimbatore", stars: 5, msg: "The light-weight gold necklace collection is modern, comfortable to wear every day, and looks super stylish." },
  { name: "Vijay Anand", loc: "Hosur", stars: 5, msg: "Quick enquiry resolution on WhatsApp. Sent me real photos and videos of the chain before dispatch." },
  { name: "Saranya D.", loc: "Salem", stars: 5, msg: "The mango mala haram we purchased for our daughter's engagement is a masterpiece. Truly heirloom quality." },
  { name: "Janani K.", loc: "Madurai", stars: 5, msg: "Beautiful design variety and certified 916 purity. Purchasing gold from MM Jewellery gives complete satisfaction." }
];

const FAQS = [
  { q: "Is your jewellery 916 hallmark certified?", a: "Yes — every piece of gold jewellery we sell is BIS 916 hallmarked, and each order ships with a purity certificate." },
  { q: "Do you offer old gold exchange?", a: "Yes. Bring your old gold jewellery to our store for a free, transparent valuation and exchange it toward a new purchase at the day's market rate." },
  // { q: "Can I return or exchange a product?", a: "We offer a 7-day hassle-free return and exchange window on unused jewellery in original packaging with certificate and invoice." },
  { q: "How do I know a product's exact price?", a: "Prices shown include gold value and making charges at current rates. Tap the WhatsApp button on any product for a real-time, personalised quote." },
  // { q: "Do you ship across India?", a: "Yes, we offer free, insured shipping across India on all prepaid orders, with secure tamper-proof packaging." }
];

/* ---------- Application State ---------- */
let cart = []; // Array of { id, qty }
let activeFilter = "all";
let currentSort = "relevance";
let searchTerm = "";
let visibleCount = 1000;
let heroIndex = 0;
let heroTimer = null;
let testIndex = 0;
let testTimer = null;
let qvQty = 1;

/* ---------- Helper Utilities ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const rupee = n => (n && !isNaN(n) && Number(n) > 0) ? "₹" + Math.round(n).toLocaleString('en-IN') : "Price on Request";
const savePct = (mrp, price) => Math.round(((mrp - price) / mrp) * 100);
function waLink(text) { return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`; }

function showToast(msg) {
  const t = $('#toast');
  $('#toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- Drawer & Modal Management ---------- */
function openDrawer(id) {
  $('#drawerOverlay').classList.add('show');
  $('#' + id).classList.add('show');
  document.body.style.overflow = 'hidden';
  if (id === 'cartDrawer') renderCart();
}

function closeAllDrawers() {
  $('#drawerOverlay').classList.remove('show');
  $$('.drawer').forEach(d => d.classList.remove('show'));
  document.body.style.overflow = '';
}

function toggleAccordion(btn) {
  const panel = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  $$('.acc-trigger').forEach(b => { b.classList.remove('open'); b.nextElementSibling.style.maxHeight = null; });
  if (!isOpen) {
    btn.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
}

/* ---------- Header Scroll & Back to Top Listener ---------- */
window.addEventListener('scroll', () => {
  const siteHeader = $('#siteHeader');
  const topBtn = $('#topBtn');
  if (siteHeader) siteHeader.classList.toggle('scrolled', window.scrollY > 10);
  if (topBtn) topBtn.classList.toggle('show', window.scrollY > 500);
}, { passive: true });

/* ---------- Mega Menu (Desktop) ---------- */
function initMegaMenu() {
  $$('.nav-desktop [data-mega]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = 'mega-' + btn.dataset.mega;
      const isOpen = btn.classList.contains('open');
      $$('.nav-desktop [data-mega]').forEach(b => b.classList.remove('open'));
      $$('.mega').forEach(m => m.classList.remove('show'));
      if (!isOpen) {
        btn.classList.add('open');
        $('#' + id).classList.add('show');
      }
    });
  });

  document.addEventListener('click', () => {
    $$('.nav-desktop [data-mega]').forEach(b => b.classList.remove('open'));
    $$('.mega').forEach(m => m.classList.remove('show'));
  });

  $$('[data-filter]').forEach(a => a.addEventListener('click', e => {
    const filter = a.dataset.filter;
    if (filter) {
      setFilter(filter, true);
    }
  }));
}

/* ---------- Hero Slider ---------- */
function heroGo(i) {
  const slides = $$('.hero-slide');
  const dots = $$('.hero-dot');
  if (!slides.length) return;

  if (slides[heroIndex]) slides[heroIndex].classList.remove('active');
  if (dots[heroIndex]) dots[heroIndex].classList.remove('active');

  heroIndex = (i + slides.length) % slides.length;

  if (slides[heroIndex]) slides[heroIndex].classList.add('active');
  if (dots[heroIndex]) dots[heroIndex].classList.add('active');

  restartHeroTimer();
}

function heroMove(dir) {
  heroGo(heroIndex + dir);
}

function restartHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => heroMove(1), 5000);
}

function initHero() {
  const slides = $$('.hero-slide');
  const dots = $$('.hero-dot');
  if (!slides.length) return;

  dots.forEach((dot, idx) => {
    dot.onclick = () => heroGo(idx);
  });

  restartHeroTimer();

  // Touch swipe support for hero slider
  const hero = $('.hero');
  if (hero) {
    let sx = 0;
    hero.addEventListener('touchstart', e => {
      sx = e.touches[0].clientX;
    }, { passive: true });

    hero.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) {
        heroMove(dx < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  // Floating particles generator
  spawnParticles();
}

function spawnParticles() {
  const box = $('#particles');
  if (!box) return;
  box.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = 2 + Math.random() * 4;
    p.style.width = s + 'px';
    p.style.height = s + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-10px';
    p.style.animationDelay = (Math.random() * 9) + 's';
    p.style.animationDuration = (7 + Math.random() * 6) + 's';
    box.appendChild(p);
  }
}

/* ---------- Collections Component Render ---------- */
function renderCollections() {
  const el = $('#collectionScroll');
  if (!el) return;
  el.innerHTML = COLLECTIONS.map(c => `
    <div class="coll-item" onclick="setFilter('${c.key}'); document.getElementById('products').scrollIntoView({behavior:'smooth'});">
      <div class="coll-circle">
        <img src="${c.img}" alt="" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="coll-svg-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; background:linear-gradient(135deg, var(--maroon-deep), var(--maroon)); color:var(--gold-light);">
          ${c.icon}
        </div>
      </div>
      <span>${c.label}</span>
    </div>`).join('');
}

/* ---------- Filter Chips Component Render ---------- */
function renderChips() {
  const row = $('#chipRow');
  if (!row) return;
  row.innerHTML = CATS.map(c => {
    let count = 0;
    if (c.key === 'all') {
      count = PRODUCTS.length;
    } else if (c.key === 'new') {
      count = PRODUCTS.filter(p => p.tag === 'NEW' || (p.tag && p.tag.toUpperCase() === 'NEW')).length;
    } else {
      const k = c.key.toLowerCase().replace(/[-_]/g, ' ');
      count = PRODUCTS.filter(p => {
        const catVal = (p.cat || p.category || '').toLowerCase();
        const subCatVal = (p.subCategory || p.subCat || '').toLowerCase();
        return catVal === k || subCatVal === k || subCatVal.includes(k) || catVal.includes(k);
      }).length;
    }
    return `<button class="chip ${activeFilter === c.key ? 'active' : ''}" data-key="${c.key}"><span class="chip-icon">${c.icon}</span><span>${c.label}</span><span class="count">${count}</span></button>`;
  }).join('') + `
  <div class="sort-wrap">
    <select id="sortSelect">
      <option value="relevance">Sort: Featured</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
      <option value="new">Newest First</option>
    </select>
  </div>`;

  $$('.chip').forEach(ch => {
    ch.addEventListener('click', (e) => {
      e.preventDefault();
      setFilter(ch.dataset.key, true);
    });
  });

  const sortSel = $('#sortSelect');
  if (sortSel) {
    sortSel.value = currentSort;
    sortSel.addEventListener('change', e => {
      currentSort = e.target.value;
      visibleCount = 10;
      renderGrid();
    });
  }
}

function setFilter(key, autoScroll = false) {
  activeFilter = key;
  visibleCount = 10;
  renderChips();
  renderGrid();

  // Keep active chip centered in filter bar
  setTimeout(() => {
    const activeChip = $(`.chip[data-key="${key}"]`);
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, 50);

  // Smooth scroll to product grid when clicked
  if (autoScroll) {
    const prodSec = $('#products');
    if (prodSec) {
      const topOffset = window.innerWidth >= 900 ? 110 : 160;
      const y = prodSec.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  }
}

/* ---------- Comprehensive Search Matching ---------- */
function matchProduct(p, term) {
  if (!p || !term) return false;
  const t = String(term).toLowerCase().trim();
  if (!t) return false;

  const name = String(p.name || '').toLowerCase();
  const code = String(p.code || '').toLowerCase();
  const sku = String(p.sku || p.id || '').toLowerCase();
  const cat = String(p.category || p.cat || '').toLowerCase();
  const subCat = String(p.subCategory || p.subCat || '').toLowerCase();
  const tag = String(p.tag || p.tags || '').toLowerCase();
  const desc = String(p.desc || p.description || p.shortDesc || '').toLowerCase();
  const availability = String(p.availability || '').toLowerCase();
  const purity = String(p.purity || '').toLowerCase();
  const metal = String(p.metal || '').toLowerCase();

  return name.includes(t) ||
         code.includes(t) ||
         sku.includes(t) ||
         cat.includes(t) ||
         subCat.includes(t) ||
         tag.includes(t) ||
         desc.includes(t) ||
         availability.includes(t) ||
         purity.includes(t) ||
         metal.includes(t);
}

/* ---------- Product Grid Logic & Render ---------- */
function getFiltered() {
  let list = PRODUCTS.slice();
  if (activeFilter === 'new') {
    list = list.filter(p => p.tag === 'NEW' || (p.tag && p.tag.toUpperCase() === 'NEW'));
  } else if (activeFilter !== 'all') {
    const filterKey = activeFilter.toLowerCase().replace(/[-_]/g, ' ');
    list = list.filter(p => {
      const catVal = (p.cat || p.category || '').toLowerCase();
      const subCatVal = (p.subCategory || p.subCat || '').toLowerCase();
      return catVal === filterKey ||
             subCatVal === filterKey ||
             subCatVal.includes(filterKey) ||
             filterKey.includes(subCatVal) ||
             catVal.includes(filterKey) ||
             filterKey.includes(catVal);
    });
  }
  if (searchTerm) {
    list = list.filter(p => matchProduct(p, searchTerm));
  }
  if (currentSort === 'low') list.sort((a, b) => a.price - b.price);
  else if (currentSort === 'high') list.sort((a, b) => b.price - a.price);
  else if (currentSort === 'new') list.sort((a, b) => (b.tag === 'NEW') - (a.tag === 'NEW'));
  return list;
}

function cardHtml(p) {
  const category = (p.cat || p.category || 'rings').toLowerCase();
  const mrpVal = parseFloat(p.mrp || p.originalPrice || p.price || 0);
  const priceVal = parseFloat(p.price || p.salePrice || 0);

  const imgUrl = (p.images && p.images.length && p.images[0])
    ? p.images[0]
    : (p.img || p.image || null);

  const mediaHtml = imgUrl
    ? `<img src="${imgUrl}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" style="width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0;">
       <div class="p-svg-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; background:linear-gradient(135deg, var(--maroon-deep), var(--maroon)); color:var(--gold-light);">${iconFor(category)}</div>`
    : iconFor(category);

  let badgeHtml = p.tag ? `<span class="p-badge">${p.tag}</span>` : '';

  let actionButtonsHtml = `
    <button class="p-add" onclick="addToCart('${p.id}',1); rippleFx(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 2H2" stroke-linecap="round"/></svg>Order
    </button>
    <button class="p-ask" onclick="askWhatsapp('${p.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 21l2.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>Ask
    </button>`;

  return `
  <div class="p-card reveal in" data-id="${p.id}">
    <div class="p-media">
      ${badgeHtml}
      ${mediaHtml}
      <button class="p-quick" onclick="openQuickView('${p.id}')">Quick View</button>
    </div>
    <div class="p-body">
      <span class="p-cat">${category}</span>
      <span class="p-name">${p.name}</span>
      <div class="p-price-row">
        <span class="p-price">${rupee(priceVal)}</span>
        ${(mrpVal > priceVal && priceVal > 0) ? `<span class="p-strike">${rupee(mrpVal)}</span>` : ''}
      </div>
      <div class="p-actions">
        ${actionButtonsHtml}
      </div>
    </div>
  </div>`;
}

function renderGrid() {
  const list = getFiltered();
  const grid = $('#productGrid');
  const loadBtn = $('#loadMoreBtn');
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="grid-empty">No pieces match your search — try another keyword or category.</div>`;
    if (loadBtn) loadBtn.style.display = 'none';
    return;
  }
  const shown = list.slice(0, visibleCount);
  grid.innerHTML = shown.map(cardHtml).join('');
  if (loadBtn) loadBtn.style.display = visibleCount < list.length ? 'inline-flex' : 'none';
}

function loadMore() {
  visibleCount += 10;
  renderGrid();
}

function rippleFx(e) {
  const btn = e.currentTarget;
  const r = document.createElement('span');
  r.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  r.style.left = (e.clientX - rect.left) + 'px';
  r.style.top = (e.clientY - rect.top) + 'px';
  r.style.width = r.style.height = '14px';
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
}

/* ---------- Search (Desktop & Mobile) ---------- */
function searchResults(term) {
  if (!term || !term.trim()) return [];
  return PRODUCTS.filter(p => matchProduct(p, term)).slice(0, 8);
}

function ddItemHtml(p) {
  const category = p.cat || p.category || 'rings';
  const imgUrl = getProductImageUrl(p);
  const thumbHtml = imgUrl
    ? `<img src="${imgUrl}" alt="${p.name}" class="dd-img" onerror="this.onerror=null; this.src='logo.png';">`
    : iconFor(category);
  return `<div class="dd-item" onclick="pickSearchResult('${p.id}')">
    <div class="dd-thumb">${thumbHtml}</div>
    <div><b>${p.name}</b><span>${category} · ${rupee(p.price)} · <span style="color:#2e7d32; font-weight:600; font-size:11px;">Made to Order</span></span></div>
  </div>`;
}

function pickSearchResult(id) {
  const p = PRODUCTS.find(x => String(x.id) === String(id));
  if (!p) return;
  searchTerm = p.name;
  $('#deskSearch').value = p.name;
  $('#mobileSearchInput').value = p.name;
  $('#deskDropdown').classList.remove('show');
  $('#mobDropdown').classList.remove('show');
  activeFilter = 'all';
  renderChips();
  visibleCount = 10;
  renderGrid();
  $('#products').scrollIntoView({ behavior: 'smooth' });
}

function liveSearch() {
  const val = $('#deskSearch').value;
  const clearBtn = $('#deskSearchClear');
  if (clearBtn) clearBtn.style.display = val.length ? 'flex' : 'none';

  const res = searchResults(val);
  const dd = $('#deskDropdown');
  dd.innerHTML = res.length ? res.map(ddItemHtml).join('') : (val ? `<div style="padding:14px; font-size:12.5px; color:var(--ink-soft);">No results for "${val}"</div>` : '');
  dd.classList.toggle('show', val.length > 0);
}

function clearDesktopSearch() {
  const input = $('#deskSearch');
  if (input) {
    input.value = '';
    input.focus();
  }
  const clearBtn = $('#deskSearchClear');
  if (clearBtn) clearBtn.style.display = 'none';
  const dd = $('#deskDropdown');
  if (dd) dd.classList.remove('show');
  searchTerm = '';
  renderGrid();
}

function mobStickySearch() {
  const val = $('#mobileSearchInput').value;
  const clearBtn = $('#mobSearchClear');
  if (clearBtn) clearBtn.style.display = val.length ? 'flex' : 'none';

  const res = searchResults(val);
  const dd = $('#mobDropdown');
  dd.innerHTML = res.length ? res.map(ddItemHtml).join('') : (val ? `<div style="padding:14px; font-size:12.5px; color:var(--ink-soft);">No results for "${val}"</div>` : '');
  dd.classList.toggle('show', val.length > 0);
}

function clearMobileSearch() {
  const input = $('#mobileSearchInput');
  if (input) {
    input.value = '';
    input.focus();
  }
  const clearBtn = $('#mobSearchClear');
  if (clearBtn) clearBtn.style.display = 'none';
  const dd = $('#mobDropdown');
  if (dd) dd.classList.remove('show');
  searchTerm = '';
  renderGrid();
}

function mobDoSearch() {
  searchTerm = $('#mobileSearchInput').value;
  visibleCount = 10;
  activeFilter = 'all';
  renderChips();
  renderGrid();
  $('#mobDropdown').classList.remove('show');
  $('#products').scrollIntoView({ behavior: 'smooth' });
}

function initSearchListeners() {
  const deskInput = $('#deskSearch');
  const mobInput = $('#mobileSearchInput');

  if (deskInput) {
    deskInput.addEventListener('input', liveSearch);
    deskInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        searchTerm = e.target.value;
        visibleCount = 10;
        activeFilter = 'all';
        renderChips();
        renderGrid();
        $('#deskDropdown').classList.remove('show');
        $('#products').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (mobInput) {
    mobInput.addEventListener('input', mobStickySearch);
    mobInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') { mobDoSearch(); }
    });
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-desktop')) $('#deskDropdown').classList.remove('show');
    if (!e.target.closest('.mobile-search-bar')) $('#mobDropdown').classList.remove('show');
  });
}

/* ---------- Cart Logic & Render ---------- */
function addToCart(id, qty) {
  const existing = cart.find(c => String(c.id) === String(id));
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  updateCartBadge();
  showToast('Added to bag');
}

function updateCartBadge() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const badge = $('#cartBadge');
  if (badge) badge.textContent = count;
}

function changeQty(id, delta) {
  const item = cart.find(c => String(c.id) === String(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => String(c.id) !== String(id));
  updateCartBadge();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => String(c.id) !== String(id));
  updateCartBadge();
  renderCart();
}

function clearCart(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  cart = [];
  updateCartBadge();
  renderCart();
  showToast('Bag cleared');
}

function renderCart() {
  const list = $('#cartList');
  const summary = $('#cartSummary');
  if (!list) return;
  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty">
      <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="currentColor" stroke-width="1.4" style="margin:0 auto 14px; opacity:.4;"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 2H2" stroke-linecap="round"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>
      Your bag is empty.<br>Add a piece you love.</div>`;
    if (summary) summary.style.display = 'none';
    return;
  }
  list.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => String(x.id) === String(c.id));
    if (!p) return '';
    const category = p.cat || p.category || 'rings';
    const imgUrl = getProductImageUrl(p);
    const thumbHtml = imgUrl
      ? `<img src="${imgUrl}" alt="${p.name}" class="ci-img" onerror="this.onerror=null; this.src='logo.png';">`
      : iconFor(category);
    return `<div class="cart-item">
      <div class="ci-thumb">${thumbHtml}</div>
      <div class="ci-info">
        <b>${p.name}</b><span class="ci-cat">${category} · ${rupee(p.price)} · <span style="color:#2e7d32; font-weight:600; font-size:10.5px;">Made to Order</span></span>
        <div class="ci-row">
          <div class="qty-mini">
            <button onclick="changeQty('${p.id}',-1)">−</button><span>${c.qty}</span><button onclick="changeQty('${p.id}',1)">+</button>
          </div>
          <button class="ci-remove" onclick="removeFromCart('${p.id}')">Remove</button>
        </div>
      </div>
    </div>`;
  }).filter(Boolean).join('');

  const subtotal = cart.reduce((s, c) => { const p = PRODUCTS.find(x => String(x.id) === String(c.id)); return s + (p ? p.price * c.qty : 0); }, 0);
  const mrpTotal = cart.reduce((s, c) => { const p = PRODUCTS.find(x => String(x.id) === String(c.id)); return s + (p ? (p.mrp || p.price) * c.qty : 0); }, 0);
  $('#sumSubtotal').textContent = rupee(subtotal);
  $('#sumSaving').textContent = '−' + rupee(mrpTotal - subtotal);
  $('#sumTotal').textContent = rupee(subtotal);
  if (summary) summary.style.display = 'block';
}

function checkoutWhatsapp() {
  if (!cart.length) return;
  let items = [];
  let msg = "Hello MM Jewellery, I'd like to order:\n";
  cart.forEach(c => {
    const p = PRODUCTS.find(x => String(x.id) === String(c.id));
    if (p) {
      items.push({ id: p.id, name: p.name, code: p.code, price: p.price, qty: c.qty });
      msg += `• ${p.name} (${p.code}) x${c.qty} — ${rupee(p.price * c.qty)}\n`;
    }
  });
  const subtotal = cart.reduce((s, c) => { const p = PRODUCTS.find(x => String(x.id) === String(c.id)); return s + (p ? p.price * c.qty : 0); }, 0);
  msg += `Total: ${rupee(subtotal)}\nPlease confirm availability and delivery details.`;

  // Send order payload to Firebase API
  if (typeof saveOrderToFirebase === 'function') {
    saveOrderToFirebase({ items, total: subtotal, type: 'WhatsApp Order' });
  }

  window.open(waLink(msg), '_blank');
}

function askWhatsapp(id) {
  const p = PRODUCTS.find(x => String(x.id) === String(id));
  if (!p) return;
  const msg = `Hello, MM Jewellery\nI'm interested in ${p.name} (${p.code})\nPrice: ${rupee(p.price)}\nPlease provide more details.`;

  // Log product inquiry to Firebase API
  if (typeof saveOrderToFirebase === 'function') {
    saveOrderToFirebase({ productId: p.id, name: p.name, code: p.code, price: p.price, type: 'Product Inquiry' });
  }

  window.open(waLink(msg), '_blank');
}

let currentQuickViewId = null;

function openQuickView(id, isSoftRefresh = false) {
  const p = PRODUCTS.find(x => String(x.id) === String(id));
  if (!p) return;
  currentQuickViewId = String(p.id);

  if (!isSoftRefresh) {
    qvQty = 1;
  }
  const category = (p.cat || p.category || 'rings').toLowerCase();
  const imageSrc = getProductImageUrl(p) || (category === 'necklace' ? 'images/choker_necklace.jpg' : (category === 'rings' ? 'images/classic_gold_ring.jpg' : (category === 'earrings' ? 'images/gold_jhumkas.jpg' : (category === 'bangles' ? 'images/gold_kadas.jpg' : 'logo.png'))));

  const mrpVal = parseFloat(p.mrp || p.originalPrice || p.price || 0);
  const priceVal = parseFloat(p.price || p.salePrice || 0);

  let primaryRowHtml = `
    <button class="qv-btn-bag" onclick="qvAddToCart('${p.id}')">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 2H2" stroke-linecap="round"/></svg>
      Add to Bag
    </button>
    <button class="qv-btn-buy" onclick="qvBuyNow('${p.id}')">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 21l2.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>
      Buy Now
    </button>`;

  $('#qvSheet').innerHTML = `
    <!-- Close Button Top Right -->
    <button class="qv-close-btn" onclick="closeQuickView()" aria-label="Close modal">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12" stroke-linecap="round"/></svg>
    </button>

    <div class="qv-body-grid">
      <!-- Left Column: Product Media Card -->
      <div class="qv-media-col">
        <div class="qv-media-card">
          ${p.tag ? `<span class="qv-badge">${p.tag}</span>` : ''}
          <img src="${imageSrc}" alt="${p.name}" class="qv-img" onerror="this.onerror=null; this.src='logo.png';">
          <button class="qv-zoom-btn" onclick="showToast('Zoom view')" title="Zoom preview" aria-label="Zoom preview">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="6"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>

      <!-- Right Column: Product Information & Actions -->
      <div class="qv-info-col">
        <div class="qv-cat-code">${category.toUpperCase()} · ${p.code}</div>
        <h2 class="qv-title">${p.name}</h2>

        <div class="qv-price-row">
          <span class="qv-price">${rupee(priceVal)}</span>
          ${(mrpVal > priceVal && priceVal > 0) ? `<span class="qv-mrp-strike">${rupee(mrpVal)}</span>` : ''}
        </div>

        <div class="qv-specs-grid">
          <div class="qv-spec-box">
            <span class="spec-lbl">GROSS WEIGHT</span>
            <span class="spec-val">${p.wt || (p.grossWt ? p.grossWt + 'g' : 'N/A')}</span>
          </div>
          <div class="qv-spec-box">
            <span class="spec-lbl">V.A (VALUE ADDITION)</span>
            <span class="spec-val" style="color:var(--maroon); font-weight:700;">${p.va || p.valueAddition || 'N/A'}</span>
          </div>
          <div class="qv-spec-box">
            <span class="spec-lbl">PURITY</span>
            <span class="spec-val">${p.purity || '22K/916'}</span>
          </div>
          <div class="qv-spec-box">
            <span class="spec-lbl">METAL</span>
            <span class="spec-val">${p.metal || 'Yellow Gold'}</span>
          </div>
          <div class="qv-spec-box">
            <span class="spec-lbl">AVAILABILITY</span>
            <span class="spec-val green">Made to Order</span>
          </div>
        </div>

        <p class="qv-desc">${p.desc} Each piece undergoes rigorous quality checks and is certified 916 BIS hallmark for guaranteed purity. Care instructions: store separately in a soft pouch, avoid contact with perfumes and moisture.</p>

        <div class="qv-qty-row">
          <span class="qty-lbl">Quantity</span>
          <div class="qv-qty-stepper">
            <button onclick="qvChangeQty(-1)" aria-label="Decrease quantity">−</button>
            <span id="qvQtyVal">${qvQty}</span>
            <button onclick="qvChangeQty(1)" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <!-- 3 Secondary Action Buttons -->
        <div class="qv-sec-actions">
          <button class="qv-sec-btn" onclick="askWhatsapp('${p.id}')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 21l2.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>
            <span>WhatsApp</span>
          </button>
          <a href="tel:+91${WA_NUMBER.slice(2)}" class="qv-sec-btn" aria-label="Call store">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            <span>Call Store</span>
          </a>
          <!-- <button class="qv-sec-btn" onclick="shareProduct('${p.id}')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="m8.4 10.6 7.2-4.2M8.4 13.4l7.2 4.2"/></svg>
            <span>Share</span>
          </button> -->
        </div>

        <!-- Primary Action Footer -->
        <div class="qv-primary-row">
          ${primaryRowHtml}
        </div>
      </div>
    </div>`;

  if (!isSoftRefresh) {
    $('#qvOverlay').classList.add('show');
    $('#qvSheet').classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuickView() {
  currentQuickViewId = null;
  $('#qvOverlay').classList.remove('show');
  $('#qvSheet').classList.remove('show');
  document.body.style.overflow = '';
}

function qvChangeQty(d) {
  qvQty = Math.max(1, qvQty + d);
  const qvVal = $('#qvQtyVal');
  if (qvVal) qvVal.textContent = qvQty;
}

function qvAddToCart(id) {
  addToCart(id, qvQty);
  closeQuickView();
}

function qvBuyNow(id) {
  addToCart(id, qvQty);
  closeQuickView();
  openDrawer('cartDrawer');
}

function shareProduct(id) {
  const p = PRODUCTS.find(x => String(x.id) === String(id));
  if (!p) return;
  const shareData = {
    title: `${p.name} — MM Jewellery`,
    text: `Check out ${p.name} (${p.code}) for ${rupee(p.price)} at MM Jewellery!`,
    url: window.location.href
  };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('Product link copied to clipboard');
    }).catch(() => {
      showToast('Link copied — share with loved ones');
    });
  } else {
    showToast('Link copied — share with loved ones');
  }
}

function closeQuickView() {
  $('#qvOverlay').classList.remove('show');
  $('#qvSheet').classList.remove('show');
  document.body.style.overflow = '';
}

/* ---------- Testimonials Render & Responsive Auto Slider (5s Interval - 5 Dots) ---------- */
function getTestPerPage() {
  return 4; // 20 cards / 4 per page = exactly 5 pages & 5 dots
}

function updateTestDots() {
  const dotsEl = $('#testDots');
  if (!dotsEl) return;
  const totalPages = 5; // Always exactly 5 maroon pagination dots

  dotsEl.innerHTML = Array.from({ length: totalPages }, (_, idx) => `
    <div class="test-dot ${idx === 0 ? 'active' : ''}" onclick="testGo(${idx})" role="button" aria-label="Page ${idx + 1}"></div>
  `).join('');
}

function testGo(page) {
  const track = $('#testScroll');
  const dots = $$('.test-dot');
  if (!track) return;

  const totalPages = 5;
  testIndex = (page + totalPages) % totalPages;

  const shiftPercent = testIndex * 100;
  track.style.transform = `translateX(-${shiftPercent}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === testIndex);
  });

  restartTestTimer();
}

function testMove(dir) {
  testGo(testIndex + dir);
}

function restartTestTimer() {
  clearInterval(testTimer);
  testTimer = setInterval(() => testMove(1), 5000);
}

function renderTestimonials() {
  const el = $('#testScroll');
  if (!el) return;

  const perPage = getTestPerPage();
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const starIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>`;

  let html = '';
  for (let p = 0; p < totalPages; p++) {
    const pageItems = TESTIMONIALS.slice(p * perPage, (p + 1) * perPage);
    html += `<div class="test-page-group">`;
    html += pageItems.map(t => `
      <div class="test-card-slide">
        <div class="stars">${starIcon.repeat(t.stars)}</div>
        <p>"${t.msg}"</p>
        <div class="test-who">
          <div class="test-avatar">${t.name.charAt(0)}</div>
          <div class="test-who-info">
            <b>${t.name}</b>
            <span>${t.loc} · Verified Purchase</span>
          </div>
        </div>
      </div>`).join('');
    html += `</div>`;
  }

  el.innerHTML = html;
  updateTestDots();
  testGo(0);

  // Swipe support for testimonials
  const container = $('.test-slider-container');
  if (container && !container.dataset.swipeBound) {
    container.dataset.swipeBound = "true";
    let sx = 0;
    container.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    container.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 35) testMove(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
}

window.addEventListener('resize', () => {
  if ($('#testScroll')) {
    renderTestimonials();
  }
});

/* ---------- FAQ Render & Toggle ---------- */
function renderFaq() {
  const list = $('#faqList');
  if (!list) return;
  list.innerHTML = FAQS.map(f => `
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">${f.q}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
}

function toggleFaq(btn) {
  const panel = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  btn.classList.toggle('open');
  panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
}

/* ---------- Newsletter Subscription ---------- */
function subscribeNews() {
  const input = $('#newsEmail');
  if (!input) return;
  const val = input.value.trim();
  if (!val || !val.includes('@')) {
    showToast('Enter a valid email');
    return;
  }
  input.value = '';
  showToast('Subscribed! Welcome to MM Jewellery.');
}

/* ---------- Dynamic WhatsApp Link for Floating Button ---------- */
function initWhatsappFab() {
  const fabWa = $('#fabWa');
  if (fabWa) {
    fabWa.href = waLink("Hello MM Jewellery, I'd like to know more about your collection.");
  }
}

/* ---------- Scroll Reveal via IntersectionObserver ---------- */
function initReveal() {
  const els = $$('.reveal:not(.in)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ---------- Sync Live Uploaded Products (Firestore & LocalStorage) ---------- */
function mergeProducts(newItems) {
  if (!Array.isArray(newItems)) return;

  const liveList = newItems.map(item => {
    const idStr = String(item.id !== undefined && item.id !== null ? item.id : Date.now());
    const rawCat = item.cat || item.category || 'rings';
    const category = rawCat.toLowerCase();
    // Normalize Firestore Timestamp to string
    let createdAt = item.createdAt || '';
    if (typeof createdAt === 'object' && typeof createdAt.toDate === 'function') {
      createdAt = createdAt.toDate().toISOString();
    } else if (typeof createdAt === 'object' && createdAt.seconds) {
      createdAt = new Date(createdAt.seconds * 1000).toISOString();
    }
    return {
      id: item.id !== undefined && item.id !== null ? item.id : idStr,
      name: item.name || 'Untitled Piece',
      code: item.code || 'AJ-100',
      cat: category,
      category: category,
      subCategory: item.subCategory || '',
      va: item.va || item.valueAddition || '',
      valueAddition: item.va || item.valueAddition || '',
      price: parseFloat(item.price) || 0,
      mrp: parseFloat(item.mrp || item.originalPrice || item.price) || 0,
      wt: item.wt || (item.grossWt ? `${item.grossWt}g` : '4g'),
      purity: item.purity || '22K/916',
      metal: item.metal || 'Yellow Gold',
      availability: 'Made to Order',
      isVisible: item.isVisible !== false,
      tag: item.tag || (item.subCategory ? item.subCategory.toUpperCase() : ''),
      desc: item.desc || item.description || item.shortDesc || '',
      images: Array.isArray(item.images) && item.images.length ? item.images : (item.img ? [item.img] : (item.image ? [item.image] : [])),
      createdAt: createdAt
    };
  });

  // Filter out products where isVisible is explicitly set to false
  PRODUCTS = liveList.filter(item => item.isVisible !== false);
  renderGrid();
  renderChips();
  renderCollections();
  updateCartBadge();
  renderCart();

  // If Quick View modal is open, refresh it or close if hidden
  if (currentQuickViewId && $('#qvOverlay') && $('#qvOverlay').classList.contains('show')) {
    const activeP = PRODUCTS.find(x => String(x.id) === String(currentQuickViewId));
    if (activeP) {
      openQuickView(activeP.id, true);
    } else {
      closeQuickView();
      showToast('This product is no longer available');
    }
  }
}

function syncLiveProductsFromFirestoreAndLocal() {
  // 1. Sync from LocalStorage
  try {
    const saved = localStorage.getItem('MM_PRODUCTS');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) {
        mergeProducts(parsed);
      }
    }
  } catch (e) {}

  // 2. Listen for cross-tab storage changes
  window.addEventListener('storage', e => {
    if (e.key === 'MM_PRODUCTS' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed) && parsed.length) {
          mergeProducts(parsed);
        }
      } catch (err) {}
    }
  });

  // 3. Sync from Firestore in real-time
  if (typeof firebase !== 'undefined') {
    if ((!isFirebaseInitialized || !db) && typeof initFirebase === 'function') {
      initFirebase();
    }
    const firestoreDb = db || (firebase.apps && firebase.apps.length ? firebase.firestore() : null);
    if (firestoreDb) {
      try {
        firestoreDb.collection('products').onSnapshot(snapshot => {
          const liveList = [];
          snapshot.forEach(doc => {
            liveList.push({ id: doc.id, ...doc.data() });
          });
          if (liveList.length) {
            mergeProducts(liveList);
          }
        }, err => console.warn("Customer page Firestore product sync notice:", err.message));
      } catch (err) {
        console.warn("Firestore listener notice:", err.message);
      }
    }
  }
}

/* ---------- Live Gold & Silver Rates Component ---------- */
function initLiveRatesListener() {
  const marqueeTrack = $('#ratesMarqueeTrack');
  if (!marqueeTrack) return;

  function renderMarquee(data) {
    const gold22 = data.gold22k || data.gold22 || 7842;
    const gold24 = data.gold24k || data.gold24 || 8550;
    const silver = data.silver || 98;
    const timeStr = data.updatedAt
      ? new Date(data.updatedAt).toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      : new Date().toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    const itemContent = `
      <div class="rates-item">
        <span class="rate-icon">⚡</span>
        <span class="rate-label">LIVE RATES</span>
        <span class="rate-divider">|</span>
        <span class="rate-label">Gold 22K:</span> <span class="rate-val">${rupee(gold22)}/g</span>
        <span class="rate-divider">•</span>
        <span class="rate-label">Gold 24K:</span> <span class="rate-val">${rupee(gold24)}/g</span>
        <span class="rate-divider">•</span>
        <span class="rate-label">Silver:</span> <span class="rate-val">${rupee(silver)}/g</span>
        <span class="rate-divider">•</span>
        <span class="rate-time">Updated: ${timeStr}</span>
      </div>`;

    // Duplicate content 4 times for smooth continuous loop animation
    marqueeTrack.innerHTML = itemContent.repeat(4);
  }

  // Initial render from local cache or default
  try {
    const cached = localStorage.getItem('MM_RATES');
    if (cached) renderMarquee(JSON.parse(cached));
    else renderMarquee({ gold22k: 7842, gold24k: 8550, silver: 98 });
  } catch (e) {
    renderMarquee({ gold22k: 7842, gold24k: 8550, silver: 98 });
  }

  // Real-time Firestore sync
  if (typeof firebase !== 'undefined') {
    if ((!isFirebaseInitialized || !db) && typeof initFirebase === 'function') {
      initFirebase();
    }
    const firestoreDb = db || (firebase.apps && firebase.apps.length ? firebase.firestore() : null);
    if (firestoreDb) {
      try {
        firestoreDb.collection('rates').doc('latest').onSnapshot(doc => {
          if (doc.exists) {
            const data = doc.data();
            renderMarquee(data);
            try { localStorage.setItem('MM_RATES', JSON.stringify(data)); } catch (e) {}
          }
        }, err => console.warn("Live rates Firestore sync notice:", err.message));
      } catch (err) {
        console.warn("Live rates listener notice:", err.message);
      }
    }
  }
}

/* ---------- Android Edge Swipe Navigation ---------- */
function initAndroidSwipeNavigation() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  document.addEventListener('touchstart', e => {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const duration = Date.now() - touchStartTime;

    // Ignore slow swipes or heavy vertical scrolling
    if (duration > 600 || Math.abs(deltaY) > 80) return;

    const screenWidth = window.innerWidth;
    const isLeftEdgeStart = touchStartX <= 40;
    const isRightEdgeStart = touchStartX >= screenWidth - 40;

    // Swipe from Left Edge -> Back
    if (isLeftEdgeStart && deltaX > 50) {
      if ($('#qvOverlay') && $('#qvOverlay').classList.contains('show')) {
        closeQuickView();
        return;
      }
      if ($('#drawerOverlay') && $('#drawerOverlay').classList.contains('show')) {
        closeAllDrawers();
        return;
      }
      if (window.history.length > 1) {
        window.history.back();
      }
    }

    // Swipe from Right Edge -> Forward
    if (isRightEdgeStart && deltaX < -50) {
      if (window.history.length > 1) {
        window.history.forward();
      }
    }
  }, { passive: true });
}

/* ---------- Application Entry Point ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initMegaMenu();
  initSearchListeners();
  initWhatsappFab();

  renderCollections();
  renderChips();
  renderGrid();
  renderTestimonials();
  renderFaq();
  updateCartBadge();
  initReveal();
  initLiveRatesListener();
  initAndroidSwipeNavigation();

  syncLiveProductsFromFirestoreAndLocal();
});
