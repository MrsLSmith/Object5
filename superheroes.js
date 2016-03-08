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

function showTable() {
  for(var i=0; i < 3; i++) {
    document.getElementById('results2').innerHTML += "<tr>";
    document.getElementById('results2').innerHTML += "<td>" + superheroes[i].Name + "</td>" + "<td>" + superheroes[i].Color + "</td>" + "<td>"+ superheroes[i].Superpower + "</td>";
    document.getElementById('results2').innerHTML += "</tr>";
  }
};

function listHeroes() {
  for (var i = 0; i < 3; i++) {
 document.getElementById('results1').innerHTML += superheroes[i].Name + "<p></p>";
  }
};

function listHeadings() {
  var headings = superheroes[0];
  var list = "";
  for (var key in headings) {
   list += "<p>" + key + "</p>";
  }
  document.getElementById('headings').innerHTML = list;
}