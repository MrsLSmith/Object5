var superheroes = [{
  Name: "Incredible Hulk",
  Color: "Green",
  Superpower: "Strength"
}, {
  Name: "Superman",
  Color: "Blue",
  Superpower: "Flying"
}, {
  Name: "Hawkeye",
  Color: "Purple",
  Superpower: "Archery"
}];

function listHeroes() {
  for (var i = 0; i < 3; i++) {
 document.getElementById('results').innerHTML += superheroes[i].Name + "<p></p>";
  }
}