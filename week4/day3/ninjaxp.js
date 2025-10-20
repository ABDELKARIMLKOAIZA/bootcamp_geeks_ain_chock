class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super(); // calls Bird constructor
  }
}

const pet = new Flamingo(); 
// Output:
// I'm pink. 🌸
// I'm a bird. 🦢
