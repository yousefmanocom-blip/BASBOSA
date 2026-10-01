// ===== SIZE GUIDE (edit the numbers to match your real pieces) =====
// Each row: [size, bust, waist, hip] in cm. Edit any section separately.
const STD = [
  ["S",  "84-88",   "66-70", "90-94"],
  ["M",  "88-92",   "70-74", "94-98"],
  ["L",  "92-96",   "74-78", "98-102"],
  ["XL", "96-102",  "78-84", "102-108"],
  ["XXL","102-108", "84-90", "108-114"]
];
// Kids: sizes by age. Edit freely.
const KIDS = [
  ["2-3Y","52-55","50-52","54-57"],
  ["4-5Y","56-59","52-54","58-61"],
  ["6-7Y","60-63","54-56","62-66"],
  ["8-9Y","64-67","56-58","68-72"]
];
KIDS.head = { en:["Size","Chest","Waist","Hip"], ar:["المقاس","الصدر","الوسط","الأرداف"] };
const SIZE_GUIDE = {
  casual:     STD,
  lingerie:   STD,
  kids:       KIDS,
  sport:      STD
};
