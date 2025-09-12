// ===== Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7];

for (const n of numbers) {
  console.log(n % 3 === 0);
}


// ===== Exercise 2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

const input = prompt("What's your name?");
const name = (input || "").trim();
const key = name.toLowerCase();

if (key && key in guestList) {
  console.log(`Hi! I'm ${name}, and I'm from ${guestList[key]}.`);
} else {
  console.log("Hi! I'm a guest.");
}

// ===== Exercise 3
let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log(sum);

let max = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) max = age[i];
}
console.log(max);

// ===== Exercise 4

// ===== Exercise ...
