// ===== Exercise 1
const personA = {
  fullName: "Alice Smith",
  mass: 68,      // kg
  height: 1.65,  // m
  bmi() { return this.mass / (this.height ** 2); }
};

const personB = {
  fullName: "Bob Jones",
  mass: 85,
  height: 1.80,
  bmi() { return this.mass / (this.height ** 2); }
};

function compareBMI(a, b) {
  const bmiA = a.bmi();
  const bmiB = b.bmi();
  if (bmiA > bmiB) {
    console.log(`${a.fullName} has the largest BMI (${bmiA.toFixed(2)}).`);
    return a;
  } else if (bmiB > bmiA) {
    console.log(`${b.fullName} has the largest BMI (${bmiB.toFixed(2)}).`);
    return b;
  } else {
    console.log(`Both have the same BMI (${bmiA.toFixed(2)}).`);
    return null;
  }
}

compareBMI(personA, personB);


// ===== Exercise 2
// Bonus version: one function calls the other

function average(grades) {
  if (grades.length === 0) return NaN;
  let sum = 0;
  for (let i = 0; i < grades.length; i++) sum += grades[i];
  return sum / grades.length;
}

function findAvg(gradesList) {
  const avg = average(gradesList);
  console.log(avg);
  if (!Number.isFinite(avg)) return;
  if (avg > 65) console.log("You passed");
  else console.log("You failed and must repeat the course");
  return avg;
}

// example
findAvg([70, 62, 88, 90, 55]);

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...
