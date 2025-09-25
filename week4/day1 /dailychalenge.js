let client = "John";

const groceries = {
  fruits : ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice : "20$",
  other : {
    paid : true,
    meansOfPayment : ["cash", "creditCard"]
  }
}

// 1. Fonction qui affiche les fruits
const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();
// Résultat : pear, apple, banana


// 2. Fonction qui clone
const cloneGroceries = () => {
  // copie du client (string → type primitif → par valeur)
  let user = client;

  // on change client
  client = "Betty";
  console.log("client:", client); // Betty
  console.log("user:", user);     // John
  // → pas modifié car primitif passé par valeur

  // copie de groceries (objet → par référence)
  let shopping = groceries;

  // modifier totalPrice
  shopping.totalPrice = "35$";
  console.log("groceries.totalPrice:", groceries.totalPrice); 
  // Résultat : 35$ (modifié car objet par référence)

  // modifier paid
  shopping.other.paid = false;
  console.log("groceries.other.paid:", groceries.other.paid); 
  // Résultat : false (idem par référence)
};

// 3. Appeler la fonction
cloneGroceries();
