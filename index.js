function dwarfRollCall(dwarves) {
      var arr = [];
  for (let i = 0; i < dwarves.length; i++) {
    arr.push(`${i+1}. ${dwarves[i]} `);
  }
  return arr.join('');
}

function summonCaptainPlanet(planeteerCalls){
      var arr = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase();
    arr.push(planeteerCalls[i] + '!');
  }
    return arr;
}

function longPlaneteerCalls(words) {
      var arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
      } else {
          return false;
        }
    }
}

function findTheCheese (foods) {
      var cheeses = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i < foods.length; i++) {
    if (cheeses.includes(foods[i])) {
      return foods[i];
    }
    if (i == foods.length - 1) {
      return 'no cheese!';
    }
  }
}