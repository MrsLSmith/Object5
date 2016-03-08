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

function listHeadings() {
  var headings = superheroes[0];
  var list = "";
  for (var key in headings) {
   list += "<p>" + key + "</p>";
  }
  alert(list);
  document.getElementById('headings').innerHTML = list;
}