/***********************
 * Exercice 1 — Nested functions (version fléchée)
 * Prédiction : "____/''''\____"
 * (Dans le code source, le "\" s’écrit "\\")
 ***********************/
const landscape = () => {
  let result = "";

  const flat = x => {
    for (let i = 0; i < x; i++) result += "_";
  };

  const mountain = x => {
    result += "/";
    for (let i = 0; i < x; i++) result += "'";
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

// Vérification Ex.1
console.log("// Exercice 1 ->", landscape()); // attendu: ____/''''\____



/***********************
 * Exercice 2 — Closure
 * const addTo = x => y => x + y;
 * const addToTen = addTo(10);
 * addToTen(3)  === 13
 ***********************/
const addTo = x => y => x + y;
const addToTen = addTo(10);

// Vérification Ex.2
console.log("// Exercice 2 ->", addToTen(3)); // attendu: 13



/***********************
 * Exercice 3 — Currying
 * const curriedSum = a => b => a + b;
 * curriedSum(30)(1) === 31
 ***********************/
const curriedSum1 = a => b => a + b;

// Vérification Ex.3
console.log("// Exercice 3 ->", curriedSum1(30)(1)); // attendu: 31



/***********************
 * Exercice 4 — Currying (partielle)
 * const curriedSum = a => b => a + b;
 * const add5 = curriedSum(5);
 * add5(12) === 17
 ***********************/
const curriedSum2 = a => b => a + b;
const add5 = curriedSum2(5);

// Vérification Ex.4
console.log("// Exercice 4 ->", add5(12)); // attendu: 17



/***********************
 * Exercice 5 — Composition
 * const compose = (f, g) => a => f(g(a));
 * add1(num) = num + 1; add5(num) = num + 5;
 * compose(add1, add5)(10) === add1(add5(10)) === 16
 ***********************/
const compose = (f, g) => a => f(g(a));
const plus1 = n => n + 1;
const plus5 = n => n + 5;

// Vérification Ex.5
console.log("// Exercice 5 ->", compose(plus1, plus5)(10)); // attendu: 16

