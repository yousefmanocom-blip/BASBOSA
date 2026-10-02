// ===== SIZE GUIDE (edit the numbers to match your real pieces) =====
// Each row: [size, bust, waist, hip] in cm. Edit any section separately.
const STD = [
  ["S",  "84-88",   "66-70", "90-94"],
  ["M",  "88-92",   "70-74", "94-98"],
  ["L",  "92-96",   "74-78", "98-102"],
  ["XL", "96-102",  "78-84", "102-108"],
  ["XXL","102-108", "84-90", "108-114"]
];
// Babywear: height in cm (approximate, edit freely). Columns can be anything: just change .head.
const BABY = [
  ["6-9M","68-74"],["9-12M","74-80"],["12-18M","80-86"],["18-24M","86-92"],
  ["2-3Y","92-98"],["3Y","98-104"],["4Y","104-110"],["5Y","110-116"],["6Y","116-122"],
  ["7Y","122-128"],["8Y","128-134"],["9Y","134-140"],["10Y","140-146"],["11Y","146-152"],
  ["12Y","152-158"],["13Y","158-164"]
];
BABY.head = { en:["Size","Height (cm)"], ar:["المقاس","الطول (سم)"] };
const SIZE_GUIDE = {
  casual:     STD,
  lingerie:   STD,
  babywear:   BABY,
  sport:      STD
};
