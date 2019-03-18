function dwarfRollCall(dwarves) {
  var arr = [];
  for (let i = dwarves.length / 2; i < dwarves.length; i++) {
    arr.push(`${i+1}. ${dwarves[i]} `);
  }
  return arr.join('');  //empty string between elements            
}

function summonCaptainPlanet(planeteerCalls) {
  var arr = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase();
    arr.push(planeteerCalls[i] + '!');
  }
    return arr;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
      } else {
          return false;
        }
    }
}

var foods = ['apple', 'cheddar', 'camembert', 'ham']

function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i < foods.length; i++) {
    if (cheeses.includes(foods[i])) {
      return foods[i];
    }
  }
   return 'no cheese!';
}


function wordsWithB (words) {
  var arr = [];
  for (let i = 0; i < words.length; i++) {
  //determine if words start with begin
    if (words[i].toLowerCase().startsWith('b')) {
      arr.push(words[i]);
  }
  return arr;

  //return array containing words that begin with B
  //Sally and james - empty
  //Sally, bob, billy and james - bob and billy
  // Sally, bob, and james - bob 
}
}