export const firstLetterOfPhraseUpercase = (string) => {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
};
