//exos1
let landscape = function() {
  let result = "";

  let flat = function(x) {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  }

  let mountain = function(x) {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  }

  flat(4);
  mountain(4);
  flat(4);

  return result;
}

landscape();



//exos2
13
//exos3
31
//exos4
17
//exos5
16

