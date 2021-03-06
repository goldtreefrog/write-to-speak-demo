const spellDataInitial = {
  visible: false,
  misspelledWords: [
    { word: "ppp", suggestions: ["pup", "puppy", "pop", "pope", "poppy", "pip", "pap", "pappy"] },
    { word: "jry", suggestions: ["jury", "Jerry", "jewelry", "dry"] }
  ],
  minIndex: 0,
  maxIndex: 4
};

const spellingArea = {
  visible: false,
  misspelledWords: [
    { word: "jry", suggestions: ["jury", "Jerry", "jewelry", "dry"] },
    { word: "ppp", suggestions: ["pup", "puppy", "pop", "pope", "poppy", "pip", "pap", "pappy"] }
  ],
  wordSuggestions: ["jury", "Jerry", "jewelry", "dry"],
  minIndex: 0,
  maxIndex: 4
};

const misspelledWords = [
  { word: "jry", suggestions: ["jury", "Jerry", "jewelry", "dry"] },
  { word: "ppp", suggestions: ["pup", "puppy", "pop", "pope", "poppy", "pip", "pap", "pappy"] }
];
const activeSnippetId = "3";
export { spellDataInitial, spellingArea, misspelledWords, activeSnippetId };
