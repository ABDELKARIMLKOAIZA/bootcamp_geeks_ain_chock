// ====== Daily Challenge 1
let sentence = "This dinner is not that bad ! You cook well";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

let result =
  wordNot !== -1 && wordBad !== -1 && wordBad > wordNot
    ? sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3)
    : sentence;

console.log("Your string is :", sentence);
console.log("--> the result is :", result);

// tests
const fix = s => {
  const i = s.indexOf("not"), j = s.indexOf("bad");
  return (i !== -1 && j !== -1 && j > i) ? s.slice(0,i) + "good" + s.slice(j+3) : s;
};
["This dinner is not that bad ! You cook well",
 "This movie is not so bad !",
 "This dinner is bad !"].forEach(s => {
  console.log(`Your string is : '${s}'`);
  console.log(`--> the result is : '${fix(s)}'\n`);
});

// ====== Daily Challenge 2

// ====== Daily Challenge 3
