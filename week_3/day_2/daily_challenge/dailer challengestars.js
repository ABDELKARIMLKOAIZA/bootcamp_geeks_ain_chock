const n = 6;

// 1) Une seule boucle
let row = "";
for (let i = 1; i <= n; i++) {
  row += "* ";
  console.log(row.trim());
}

// 2) Deux boucles imbriquées
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) line += "* ";
  console.log(line.trim());
}

