// ===== Exercise 1
// --- Version simple : divisible par 23 ---
function displayNumbersDivisible() {
    let sum = 0;
    let outcome = [];

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            outcome.push(i);
            sum += i;
        }
    }

    console.log("Outcome :", outcome.join(" "));
    console.log("Sum :", sum);
}

// Appel de la fonction
displayNumbersDivisible();


// --- Version bonus : paramètre divisor ---
function displayNumbersDivisibleBy(divisor) {
    let sum = 0;
    let outcome = [];

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            outcome.push(i);
            sum += i;
        }
    }

    console.log(`Outcome (divisible by ${divisor}) :`, outcome.join(" "));
    console.log("Sum :", sum);
}

// Exemples d'appels
displayNumbersDivisibleBy(3);   // tous les multiples de 3
displayNumbersDivisibleBy(45);  // tous les multiples de 45


// ===== Exercise 2
const stock = {
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
};

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
};

// --- Liste d’achats ---
const shoppingList = ["banana", "orange", "apple"];

// --- Fonction principale ---
function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    // Vérifier si l'article est en stock
    if (item in stock && stock[item] > 0) {
      // Ajouter le prix
      total += prices[item];

      // BONUS : décrémenter le stock
      stock[item] -= 1;
    } else {
      console.log(`${item} is out of stock!`);
    }
  }

  console.log("Total bill:", total);
  return total;
}

// --- Exécution ---
myBill();

// Pour vérifier la décrémentation du stock
console.log("Updated stock:", stock);

// ===== Exercise 3

function changeEnough(itemPrice, amountOfChange) {
  // Valeurs des pièces : quarters, dimes, nickels, pennies
  const values = [0.25, 0.10, 0.05, 0.01];

  // Calcul du total
  let total = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }

  // Comparaison
  return total >= itemPrice;
}

// --- Exemples ---
console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 








// ===== Exercise 4
// 1. Fonction hotelCost
function hotelCost() {
  let nights;
  do {
    nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
  } while (isNaN(nights) || nights <= 0);

  return nights * 140;
}

// 2. Fonction planeRideCost
function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?").trim();
  } while (!isNaN(destination) || destination === "");

  if (destination.toLowerCase() === "london") {
    return 183;
  } else if (destination.toLowerCase() === "paris") {
    return 220;
  } else {
    return 300;
  }
}

// 3. Fonction rentalCarCost
function rentalCarCost() {
  let days;
  do {
    days = parseInt(prompt("How many days would you like to rent the car?"));
  } while (isNaN(days) || days <= 0);

  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95; // réduction de 5%
  }
  return cost;
}

// 4. Fonction totalVacationCost
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  const total = hotel + plane + car;

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  console.log(`Total vacation cost: $${total}`);

  return total;
}

// 5. Appel
totalVacationCost();

// ===== Exercise ...

// 1. Récupérer le div et l'afficher
const div = document.getElementById("container");
console.log(div);

// 2. Changer le nom "Pete" en "Richard"
const lists = document.querySelectorAll("ul.list li");
lists[1].textContent = "Richard";

// 3. Supprimer le deuxième <li> du deuxième <ul>
const secondUl = document.querySelectorAll("ul.list")[1];
secondUl.removeChild(secondUl.children[1]);

// 4. Changer le premier <li> de chaque <ul> par ton nom
document.querySelectorAll("ul.list").forEach(ul => {
  ul.firstElementChild.textContent = "Abdelkarim";
});

// 5. Ajouter une classe student_list aux deux <ul>
document.querySelectorAll("ul.list").forEach(ul => {
  ul.classList.add("student_list");
});

// 6. Ajouter les classes university et attendance au premier <ul>
document.querySelector("ul.list").classList.add("university", "attendance");

// 7. Ajouter un fond bleu clair et du padding au <div>
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// 8. Ne pas afficher le <li> contenant "Dan"
const lastLi = secondUl.lastElementChild;
if (lastLi.textContent === "Dan") {
  lastLi.style.display = "none";
}

// 9. Ajouter une bordure au <li> contenant "Richard"
lists[1].style.border = "2px solid red";

// 10. Changer la taille de police de tout le body
document.body.style.fontSize = "18px";

// 11. Bonus : si le fond du div est bleu clair, afficher un message
if (div.style.backgroundColor === "lightblue") {
  const users = document.querySelectorAll("ul.list li");
  alert(`Hello ${users[0].textContent} and ${users[1].textContent}`);
}

// exesrcie

// 1. Création du tableau allBooks
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false
  }
];

// 2. Récupérer la section
const section = document.querySelector(".listBooks");

// 3. Afficher chaque livre
allBooks.forEach(book => {
  // Créer un div pour chaque livre
  const bookDiv = document.createElement("div");

  // Titre + auteur
  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  // Image
  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  // Si le livre est déjà lu, texte en rouge
  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  // Ajouter au div
  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImg);

  // Ajouter à la section
  section.appendChild(bookDiv);
});




