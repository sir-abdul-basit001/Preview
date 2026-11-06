// Food image URLs
const FOOD_IMAGES = {
  Nihari:
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=85",

  "Nalli Nihari":
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",

  Channay:
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&q=85",

  "Mutton Channay":
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",

  "Halwa Puri Plate":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",

  "Chicken Biryani":
    "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=900&q=85",

  "Beef Biryani":
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&q=85",

  Biryani:
    "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=900&q=85",

  Haleem:
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=85",

  "Aloo Samosa":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",

  "Chicken Samosa":
    "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=900&q=85",

  Pakora:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",

  Kachori:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",

  "Pathora Plate":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",

  "Sweet Lassi":
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=900&q=85",

  "Salted Lassi":
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=900&q=85",

  "Malai Lassi":
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=900&q=85",

  "Mango Lassi":
    "https://images.unsplash.com/photo-1546173159-315724a31696?w=900&q=85",

  "Fresh Milk":
    "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=900&q=85",

  Yogurt:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85",

  Cream:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85",

  "Gulab Jamun":
    "https://images.unsplash.com/photo-1666190092159-7e3b4e5f8c3b?w=900&q=85",

  Jalebi:
    "https://images.unsplash.com/photo-1601303516534-9b4e5f4d8e2c?w=900&q=85",

  Barfi:
    "https://images.unsplash.com/photo-1605197161470-5d9c4e5c7a2d?w=900&q=85",

  "Signature Dish":
    "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85",

  "House Special":
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",

  Sides: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85",

  Drinks:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=85",
}

// General fallback images
const DEFAULT_IMAGES = {
  Main: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85",

  Bread:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=85",

  Sides: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85",

  Drinks:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=85",

  Sweet:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85",

  Sweets:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85",

  Snacks:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",

  Dairy: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=900&q=85",

  Lassi:
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=900&q=85",

  Breakfast:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",
}

// Menu sets: Category|Name|Description
const S = {
  nihari:
    "Main|Nihari|Slow cooked gravy;Main|Nalli Nihari|Bone marrow style;Bread|Naan|Fresh bread;Bread|Khameeri Roti|Soft leavened bread;Sides|Ginger and Lemon|Classic garnish;Sides|Fresh Salad|Onion and cucumber",

  chanay:
    "Main|Channay|Traditional breakfast bowl;Main|Mutton Channay|Rich and hearty;Bread|Kulcha|Fresh baked;Bread|Puri|Fried bread;Drinks|Doodh Patti Chai|Milky tea;Drinks|Lassi|Chilled yogurt drink",

  halwapuri:
    "Main|Halwa Puri Plate|Puri, channay and halwa;Main|Nihari|Slow cooked gravy;Sweet|Suji Halwa|Warm semolina sweet;Bread|Puri|Fresh fried;Drinks|Chai|Hot tea;Drinks|Lassi|Chilled yogurt drink",

  biryani:
    "Main|Chicken Biryani|Spiced rice and chicken;Main|Beef Biryani|Aromatic and rich;Sides|Raita|Cool yogurt;Sides|Salad|Fresh cut;Drinks|Cold Drink|Chilled",

  haleem:
    "Main|Haleem|Slow cooked lentils and meat;Main|Biryani|Spiced rice;Sides|Lemon and Fried Onion|Classic toppings;Sides|Raita|Cool yogurt;Bread|Naan|Fresh bread",

  samosa:
    "Snacks|Aloo Samosa|Crisp potato filling;Snacks|Chicken Samosa|Spiced filling;Snacks|Pakora|Fried fritters;Sides|Imli Chutney|Sweet and tangy;Drinks|Chai|Hot tea",

  lassi:
    "Lassi|Sweet Lassi|Chilled and creamy;Lassi|Salted Lassi|Classic savory;Lassi|Malai Lassi|With cream;Lassi|Mango Lassi|Fruity;Drinks|Cold Drinks|Chilled",

  dairy:
    "Dairy|Fresh Milk|Daily dairy;Dairy|Yogurt|Set fresh;Dairy|Cream|Rich malai;Drinks|Flavored Milk|Chilled;Drinks|Lassi|Chilled",

  sweets:
    "Sweets|Gulab Jamun|Soft syrup sweet;Sweets|Jalebi|Crisp and sweet;Sweets|Barfi|Milk sweet;Breakfast|Halwa Puri|Morning plate;Drinks|Chai|Hot tea",

  pathora:
    "Main|Pathora Plate|Desi breakfast;Main|Channay|Traditional bowl;Bread|Puri|Fresh fried;Drinks|Lassi|Chilled;Drinks|Chai|Hot tea",

  kachori:
    "Main|Kachori|Crisp and spiced;Main|Halwa Puri|Morning plate;Sides|Aloo Curry|Savory;Drinks|Lassi|Chilled;Drinks|Chai|Hot tea",

  general:
    "Main|Signature Dish|Edit after owner confirms;Main|House Special|Edit after owner confirms;Sides|Sides|Edit after owner confirms;Drinks|Drinks|Edit after owner confirms",
}

// Restaurant data
// slug, name, phone, category, menuSet, tagline,
// bg, ink, accent, surface, layout, font, identity

const RAW = [
  [
    "kala-khan",
    "Kala Khan Nihari House",
    "0323 5214554",
    "Nihari and traditional Pakistani food",
    "nihari",
    "Heritage nihari for your table",
    "#2a0d14",
    "#f6ead0",
    "#d4a63a",
    "#3d1620",
    0,
    0,
    "Traditional, premium, heritage-inspired.",
  ],

  [
    "sufi-chanay",
    "Sufi Khoye Wale Chanay",
    "0300 8508540",
    "Khoya channay",
    "chanay",
    "Traditional Punjabi breakfast",
    "#f6ecd6",
    "#3b2a1a",
    "#2f6b3a",
    "#ead9b8",
    1,
    0,
    "Traditional Punjabi breakfast look.",
  ],

  [
    "khabay-khalifa",
    "Khabay Khalifa JEE dy",
    "0307 8622008",
    "Traditional food",
    "general",
    "Authentic Pakistani flavors",
    "#0f3d2a",
    "#f3ead2",
    "#c9a24a",
    "#17513a",
    2,
    0,
    "Authentic Pakistani branding in green and gold.",
  ],

  [
    "hafiz-mutton-chanay",
    "Hafiz Khoy Walay Mutton Chanay",
    "0324 5491213",
    "Mutton channay",
    "chanay",
    "Mutton channay, premium breakfast",
    "#2b1a10",
    "#f2e4cf",
    "#c8793a",
    "#3b2517",
    0,
    0,
    "Premium traditional breakfast in copper tones.",
  ],

  [
    "lahore-zero-kilometer",
    "Lahore 0 Kilometer",
    "0306 5509393",
    "Pakistani food",
    "general",
    "Lahore street food, made modern",
    "#141414",
    "#fff3e0",
    "#ff7a1a",
    "#232323",
    1,
    1,
    "Modern Lahore street-food identity.",
  ],

  [
    "kashmir-milk",
    "Kashmir Milk Shop",
    "0302 5133482",
    "Milk and dairy products",
    "dairy",
    "Fresh dairy and traditional drinks",
    "#f4fbff",
    "#123a4a",
    "#23834a",
    "#dcf0f7",
    2,
    1,
    "Fresh dairy, cream and beverages.",
  ],

  [
    "data-nihari",
    "Data Nihari House",
    "0315 7075964",
    "Nihari",
    "nihari",
    "Rich, traditional nihari",
    "#0b0b0b",
    "#f5efe0",
    "#d6ad4c",
    "#3a0c0c",
    0,
    0,
    "Black, deep red and gold.",
  ],

  [
    "zaiqa-nihari",
    "Zaiqa Nihari Stop",
    "0335 5776923",
    "Nihari",
    "nihari",
    "Street-style nihari stop",
    "#2a2a2e",
    "#fbf1e2",
    "#ff8a2b",
    "#38383d",
    1,
    1,
    "Modern street-food restaurant.",
  ],

  [
    "gujranwala-halwapuri",
    "Gujranwala Halwa Puri & Nihari Center",
    "0321 5093474",
    "Halwa puri and nihari",
    "halwapuri",
    "Punjabi breakfast, the classic way",
    "#fff6d8",
    "#4a1410",
    "#b3261e",
    "#ffe9a0",
    2,
    0,
    "Golden yellow and traditional red.",
  ],

  [
    "al-ghani-pathora",
    "Al Ghani Pathora House",
    "0300 9780669",
    "Pathora and traditional breakfast",
    "pathora",
    "Authentic desi breakfast",
    "#f3ebdc",
    "#3a2a1a",
    "#4d6b2f",
    "#e2d3b5",
    0,
    2,
    "Earthy brown and green.",
  ],

  [
    "gujranwala-sweets",
    "Gujranwala Sweets & Halwa Puri",
    "0332 5912346",
    "Sweets and breakfast",
    "sweets",
    "Sweets and Punjabi hospitality",
    "#fff0f3",
    "#4a1f2c",
    "#c2386a",
    "#fadde5",
    1,
    0,
    "Pink, cream and golden accents.",
  ],

  [
    "karachi-biryani",
    "Karachi Biryani Center",
    "0300 8930819",
    "Biryani",
    "biryani",
    "Karachi-inspired biryani",
    "#0e3b2c",
    "#fbf1d8",
    "#f0b429",
    "#165040",
    2,
    1,
    "Deep green with saffron.",
  ],

  [
    "karachi-haleem",
    "Karachi Ghota Haleem & Biryani",
    "0314 0209563",
    "Haleem and biryani",
    "haleem",
    "Karachi street-food haleem",
    "#2a0f12",
    "#f4e6cc",
    "#e0b04a",
    "#1d1a1a",
    0,
    1,
    "Maroon, gold and charcoal.",
  ],

  [
    "classic-samosa",
    "Classic Samosa Point",
    "0300 9747435",
    "Samosas and snacks",
    "samosa",
    "Crisp samosas and snacks",
    "#fff3d6",
    "#1d4a2a",
    "#d9570f",
    "#ffe2a0",
    1,
    1,
    "Modern Pakistani snack brand.",
  ],

  [
    "sheikh-lassi",
    "Sheikh Lassi Master",
    "0324 5235188",
    "Lassi and traditional beverages",
    "lassi",
    "Refreshing traditional lassi",
    "#fbf6e8",
    "#0f4a4a",
    "#0e8a86",
    "#d5efe9",
    2,
    2,
    "Cream, turquoise and fresh green.",
  ],

  [
    "billa-kachori",
    "Billa Kachori and Halwa Puri Center",
    "0333 5544149",
    "Kachori and halwa puri",
    "kachori",
    "Kachori and halwa puri breakfast",
    "#fff1c9",
    "#4b2a12",
    "#8a4b14",
    "#f7dc8a",
    0,
    0,
    "Traditional breakfast specialist.",
  ],

  [
    "al-madina-milk",
    "Al Madina Milk Shop",
    "0304 5893644",
    "Milk and dairy products",
    "dairy",
    "Clean, trustworthy dairy",
    "#ffffff",
    "#123a2c",
    "#0f7a55",
    "#eaf4ef",
    1,
    1,
    "White, emerald and silver.",
  ],

  [
    "raja-abrar",
    "Raja Abrar",
    "0301 5131771",
    "Restaurant, speciality to be verified",
    "general",
    "Your restaurant, online",
    "#0f1c3a",
    "#f7efdc",
    "#d4af5a",
    "#172a52",
    2,
    0,
    "Flexible concept, identity stays editable.",
  ],
]

// Font families
export const FONTS = [
  "Georgia, 'Times New Roman', serif",
  "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  "'Trebuchet MS', Verdana, sans-serif",
]

// WhatsApp message
export const WA_MESSAGE = encodeURIComponent(
  "Assalam-o-Alaikum! I would like to know more about your menu and food items.",
)

// Create restaurant objects
export const restaurants = RAW.map((a) => {
  const items = S[a[4]].split(";").map((x) => {
    const [cat, name, desc] = x.split("|")

    return {
      cat,
      name,
      desc,
      image: FOOD_IMAGES[name] || DEFAULT_IMAGES[cat] || DEFAULT_IMAGES.Main,
    }
  })

  return {
    slug: a[0],
    name: a[1],
    phone: a[2],
    category: a[3],
    tagline: a[5],
    bg: a[6],
    ink: a[7],
    accent: a[8],
    surface: a[9],
    layout: a[10],
    font: a[11],
    identity: a[12],

    wa: "92" + a[2].replace(/\s/g, "").slice(1),

    heroImage: items[0]?.image,
    items,
  }
})
