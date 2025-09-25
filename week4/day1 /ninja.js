const mergeWords = (string) => (nextString) =>
  nextString === undefined ? string : mergeWords(string + " " + nextString);

// Exemple d’utilisation
console.log(mergeWords("Hello")()); 
// "Hello"

console.log(mergeWords("There")("is")("no")("spoon.")()); 
// "There is no spoon."
