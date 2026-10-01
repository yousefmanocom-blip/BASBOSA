// ===== EDIT THIS FILE TO MANAGE THE STORE =====
const WHATSAPP = "201016373118";
const LINKS = {
  group: "https://chat.whatsapp.com/H17QQ5Q3WVCE8BEhQ7azGG?mode=gi_t",
  instagram: "https://www.instagram.com/basbosa_store?igsh=MWFzNDM5NHg5NWV5dQ==",
  tiktok: "https://www.tiktok.com/@basbosa.store65?_r=1&_t=ZS-9AC2nnQJDue"
};
// Credit at the very bottom of the site. Leave name "" to hide it. Add or remove links freely.
const CREDIT = {
  name: "Youssef Mahmoud",
  links: [
    { icon: "fa-solid fa-phone",      label: "Call",      url: "tel:01006267386" },
    { icon: "fa-brands fa-whatsapp",  label: "WhatsApp",  url: "https://wa.me/201006267386" },
    { icon: "fa-brands fa-facebook-f",label: "Facebook",  url: "https://www.facebook.com/share/14qwP3skNkE/" },
    { icon: "fa-brands fa-telegram",  label: "Telegram",  url: "https://t.me/Jack31347" },
    { icon: "fa-brands fa-instagram", label: "Instagram", url: "https://www.instagram.com/_toxic_j0o_?stkn=bHI3cnM3dWltc3Bw" }
  ]
};
// Defaults for every product in a section. folder = images/<folder>/1.png ... <count>.png
const CATEGORIES = {
  casual:     { en: "Casual",     ar: "خروج",         count: 17, price: 0, sizes: ["S","M","L","XL"],         colors: ["Black","White","Beige"] },
  lingerie:   { en: "Lingerie",   ar: "لانجري",       count: 17, price: 0, sizes: ["S","M","L","XL"],         colors: ["Black","Nude","Red"] },
  loungewear: { en: "Loungewear", ar: "ملابس منزلية", count: 17, price: 0, sizes: ["M","L","XL","XXL"],       colors: ["Pink","Grey","Cream"] },
  sport:      { en: "Sport",      ar: "اسبورت",       count: 17, price: 0, sizes: ["S","M","L","XL"],         colors: ["Black","Grey","Navy"] }
};
// ---- DUMMY DATA: replace with your real products ----
const OVERRIDES = {
  // ---- casual ----
  "casual-1": { name: "Satin Dress", price: 700, sizes: ["S", "M", "L", "XL"], colors: ["Olive", "Black"] },
  "casual-2": { name: "Wide-Leg Trousers", price: 450, sizes: ["S", "M", "L"], colors: ["Black", "Beige"] },
  "casual-3": { name: "Linen Shirt", price: 700, sizes: ["S", "M", "L"], colors: ["White", "Black", "Navy"] },
  "casual-4": { name: "Pleated Skirt", price: 450, sizes: ["S", "M", "L"], colors: ["Olive", "Black"] },
  "casual-5": { name: "Blazer Set", price: 750, sizes: ["S", "M", "L"], colors: ["White", "Black", "Navy"] },
  "casual-6": { name: "Wrap Dress", price: 500, sizes: ["Free Size"], colors: ["Black", "Beige"] },
  "casual-7": { name: "Knit Cardigan", price: 500, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Beige"] },
  "casual-8": { name: "Midi Skirt", price: 750, sizes: ["S", "M", "L"], colors: ["White", "Black", "Navy"] },
  "casual-9": { name: "Evening Gown", price: 450, sizes: ["S", "M", "L", "XL"], colors: ["Pink", "Cream"] },
  "casual-10": { name: "Silk Blouse", price: 750, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Beige"] },
  "casual-11": { name: "Jumpsuit", price: 650, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Beige"] },
  "casual-12": { name: "Maxi Dress", price: 600, sizes: ["M", "L", "XL"], colors: ["Black", "Beige"] },
  "casual-13": { name: "Tailored Coat", price: 500, sizes: ["S", "M", "L"], colors: ["White", "Black", "Navy"] },
  "casual-14": { name: "Puff-Sleeve Top", price: 800, sizes: ["Free Size"], colors: ["Pink", "Cream"] },
  "casual-15": { name: "Co-ord Set", price: 800, sizes: ["Free Size"], colors: ["Pink", "Cream"] },
  "casual-16": { name: "Denim Jacket", price: 650, sizes: ["S", "M", "L", "XL"], colors: ["White", "Black", "Navy"] },
  "casual-17": { name: "Floral Dress", price: 600, sizes: ["S", "M", "L"], colors: ["Pink", "Cream"] },
  // ---- lingerie ----
  "lingerie-1": { name: "Lace Bralette", price: 700, sizes: ["M", "L", "XL"], colors: ["Nude", "Burgundy"] },
  "lingerie-2": { name: "Satin Robe", price: 550, sizes: ["S", "M", "L"], colors: ["Black", "Nude"] },
  "lingerie-3": { name: "Lace Set", price: 650, sizes: ["S", "M", "L", "XL"], colors: ["White", "Pink"] },
  "lingerie-4": { name: "Silk Chemise", price: 450, sizes: ["Free Size"], colors: ["Nude", "Burgundy"] },
  "lingerie-5": { name: "Babydoll", price: 350, sizes: ["S", "M", "L"], colors: ["White", "Pink"] },
  "lingerie-6": { name: "Bridal Set", price: 600, sizes: ["M", "L", "XL"], colors: ["Nude", "Burgundy"] },
  "lingerie-7": { name: "Cotton Briefs", price: 700, sizes: ["S", "M", "L"], colors: ["Black", "Nude"] },
  "lingerie-8": { name: "Padded Bra", price: 550, sizes: ["Free Size"], colors: ["Black", "Nude"] },
  "lingerie-9": { name: "Night Slip", price: 350, sizes: ["M", "L", "XL"], colors: ["Nude", "Burgundy"] },
  "lingerie-10": { name: "Lace Bodysuit", price: 550, sizes: ["Free Size"], colors: ["White", "Pink"] },
  "lingerie-11": { name: "Kimono Robe", price: 350, sizes: ["Free Size"], colors: ["White", "Pink"] },
  "lingerie-12": { name: "Mesh Set", price: 450, sizes: ["S", "M", "L"], colors: ["Nude", "Burgundy"] },
  "lingerie-13": { name: "Satin Camisole", price: 350, sizes: ["S", "M", "L", "XL"], colors: ["White", "Pink"] },
  "lingerie-14": { name: "Everyday Set", price: 450, sizes: ["S", "M", "L", "XL"], colors: ["Nude", "Burgundy"] },
  "lingerie-15": { name: "Sleep Set", price: 650, sizes: ["Free Size"], colors: ["Black", "Nude"] },
  "lingerie-16": { name: "Corset Top", price: 450, sizes: ["Free Size"], colors: ["Nude", "Burgundy"] },
  "lingerie-17": { name: "Short Robe", price: 550, sizes: ["S", "M", "L", "XL"], colors: ["Nude", "Burgundy"] },
  // ---- loungewear ----
  "loungewear-1": { name: "Cozy Pajama Set", price: 600, sizes: ["Free Size"], colors: ["Beige", "Brown"] },
  "loungewear-2": { name: "Soft Hoodie Set", price: 700, sizes: ["S", "M", "L", "XL"], colors: ["Grey", "Black"] },
  "loungewear-3": { name: "Fleece Robe", price: 450, sizes: ["S", "M", "L", "XL"], colors: ["Grey", "Black"] },
  "loungewear-4": { name: "Jogger Set", price: 550, sizes: ["S", "M", "L", "XL"], colors: ["Pink", "Cream"] },
  "loungewear-5": { name: "Waffle Set", price: 750, sizes: ["S", "M", "L", "XL"], colors: ["Beige", "Brown"] },
  "loungewear-6": { name: "Satin Pajamas", price: 600, sizes: ["S", "M", "L"], colors: ["Grey", "Black"] },
  "loungewear-7": { name: "Home Dress", price: 700, sizes: ["M", "L", "XL"], colors: ["Beige", "Brown"] },
  "loungewear-8": { name: "Knit Lounge Set", price: 500, sizes: ["S", "M", "L"], colors: ["Lilac", "White"] },
  "loungewear-9": { name: "Cotton Tee Set", price: 700, sizes: ["Free Size"], colors: ["Lilac", "White"] },
  "loungewear-10": { name: "Long Cardigan", price: 700, sizes: ["S", "M", "L"], colors: ["Lilac", "White"] },
  "loungewear-11": { name: "Wide Pants Set", price: 700, sizes: ["S", "M", "L"], colors: ["Grey", "Black"] },
  "loungewear-12": { name: "Terry Set", price: 450, sizes: ["S", "M", "L", "XL"], colors: ["Lilac", "White"] },
  "loungewear-13": { name: "Sleep Shirt", price: 500, sizes: ["S", "M", "L"], colors: ["Beige", "Brown"] },
  "loungewear-14": { name: "Pajama Shorts", price: 400, sizes: ["S", "M", "L"], colors: ["Pink", "Cream"] },
  "loungewear-15": { name: "Cloud Sweatshirt", price: 500, sizes: ["S", "M", "L"], colors: ["Beige", "Brown"] },
  "loungewear-16": { name: "Rib Set", price: 400, sizes: ["S", "M", "L"], colors: ["Grey", "Black"] },
  "loungewear-17": { name: "Hooded Robe", price: 700, sizes: ["S", "M", "L", "XL"], colors: ["Beige", "Brown"] },
  // ---- sport ----
  "sport-1": { name: "Seamless Leggings", price: 970, sizes: ['S', "M","L", "XL"], colors: ["Beige",'Gray', "Black"] },
  "sport-2": { name: "Sports Bra", price: 430, sizes: ["S", "M", "L"], colors: ["Olive", "Black"] },
  "sport-3": { name: "Training Set", price: 730, sizes: ["Free Size"], colors: ["Olive", "Black"] },
  "sport-4": { name: "Yoga Top", price: 580, sizes: ["S", "M", "L"], colors: ["Navy", "Black"] },
  "sport-5": { name: "Biker Shorts", price: 430, sizes: ["M", "L", "XL"], colors: ["Pink", "White"] },
  "sport-6": { name: "Zip Jacket", price: 730, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Grey"] },
  "sport-7": { name: "Track Pants", price: 530, sizes: ["M", "L", "XL"], colors: ["Navy", "Black"] },
  "sport-8": { name: "Tennis Skirt", price: 380, sizes: ["M", "L", "XL"], colors: ["Black", "Grey"] },
  "sport-9": { name: "Running Tee", price: 580, sizes: ["M", "L", "XL"], colors: ["Navy", "Black"] },
  "sport-10": { name: "Ribbed Set", price: 630, sizes: ["S", "M", "L", "XL"], colors: ["Pink", "White"] },
  "sport-11": { name: "Cropped Hoodie", price: 530, sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Black"] },
  "sport-12": { name: "Gym Bodysuit", price: 680, sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Black"] },
  "sport-13": { name: "Tank Top", price: 730, sizes: ["M", "L", "XL"], colors: ["Black", "Grey"] },
  "sport-14": { name: "Windbreaker", price: 380, sizes: ["M", "L", "XL"], colors: ["Olive", "Black"] },
  "sport-15": { name: "Warm-up Set", price: 580, sizes: ["S", "M", "L", "XL"], colors: ["Pink", "White"] },
  "sport-16": { name: "Flare Pants", price: 730, sizes: ["M", "L", "XL"], colors: ["Pink", "White"] },
  "sport-17": { name: "Sport Dress", price: 430, sizes: ["S", "M", "L", "XL"], colors: ["Black", "Grey"] },
};
