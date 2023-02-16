export const FirstLetterOfPhraseUpercase = (string) => {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
};
