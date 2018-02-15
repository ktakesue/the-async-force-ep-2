console.log("SHITTINITY CHECK");
// VARIABLES //
// make variable to access selection menu //
const menu = document.getElementById("resourceType");
// make button variable to add click function //
const requestResourceButton = document
  .getElementById("requestResourceButton")
  .addEventListener("click", function () {
    // make variable to access input ids //
    const inputId = document.getElementById("resourceId");
    // incorporate the checkInput function into the click function //
    checkInput(inputId);
  });

// create a function for checking if input is valid //
function checkInput(inputId) {
  console.log("button work?");
  const input = parseFloat(inputId.value);
  console.log(input);
  if (isNaN(input)) {
    alert("This is not a valid input, young padawan. Try again");
  } else {
    showInfo(input);
  }
}
// helper function creating dom elements //
function makeElem(elem, label, inside) {
  const container = document.createElement(elem);
  container.id = label;
  container.innerHTML = inside;

  return container;
}
// create function accessing info from API for value of person, planet, & starship //
function showInfo(num) {
  // accessing API for people when selected //
  if (menu.value === "people") {
    const people = new XMLHttpRequest();
    people.addEventListener("load", getPeople);
    people.open("GET", "https://swapi.co/api/people/" + num);
    people.send();

    function getPeople() {
      console.log("getPeople callback fired");
      const person = JSON.parse(this.responseText);
      // - Name, in an `<h2>` tag
      const name = makeElem("h2", "name", person.name);
      document.getElementById("contentContainer").appendChild(name);
      // - Gender, in an `<p>` tag
      const gender = makeElem("p", "gender", person.gender);
      document.getElementById("contentContainer").appendChild(gender);
      // - Species (only get the first species if there are multiple) (only display the name), in an `<p>` tag
      // create another req for species //
      const speciesReq = new XMLHttpRequest();
      speciesReq.addEventListener("load", getSpecies);
      speciesReq.open("GET", person.species[0]);
      speciesReq.send();

      function getSpecies() {
        const speciesName = JSON.parse(this.responseText);
        const species = makeElem("p", "species", speciesName.name);
        document.getElementById("contentContainer").appendChild(species);
      }
    }
    // accessing API for planets when selected //
  } else if (menu.value === "planets") {
    const planets = new XMLHttpRequest();
    planets.addEventListener("load", getPlanets);
    planets.open("GET", "https://swapi.co/api/planets/" + num);
    planets.send();

    function getPlanets() {
      console.log("getPlanets callback fired");
      const planet = JSON.parse(this.responseText);
      // - Name, in an `<h2>` tag
      const planetName = makeElem("h2", "planetName", planet.name);
      document.getElementById("contentContainer").appendChild(planetName);
      // - Terrain, in an `<p>` tag
      const terrain = makeElem("p", "terrain", planet.terrain);
      document.getElementById("contentContainer").appendChild(terrain);
      // - Population, in an `<p>` tag
      const population = makeElem("p", "population", planet.population);
      document.getElementById("contentContainer").appendChild(population);
      // - a list of all Film names that this planet appeared in `<li>` tags wrapped in `<ul>`
    }
    // accessing API for starships when selected //
  } else if (menu.value === "starships") {
    const starships = new XMLHttpRequest();
    starships.addEventListener("load", getStarships);
    starships.open("GET", "https://swapi.co/api/starships/" + num);
    starships.send();

    function getStarships() {
      console.log("getStarships callback fired");
      const starship = JSON.parse(this.responseText);
      // - Name, in an `<h2>` tag
      const starshipName = makeElem("h2", "starshipName", starship.name);
      document.getElementById("contentContainer").appendChild(starshipName);
      // - Manufacturer, in an `<p>` tag
      const manufacturer = makeElem("p", "manufacturer", starship.manufacturer);
      document.getElementById("contentContainer").appendChild(manufacturer);
      // - Starship Class, in an `<p>` tag
      const starship_class = makeElem("p", "starship_class", starship.starship_class);
      document.getElementById("contentContainer").appendChild(starship_class);
      // - a list of all Film names that this starship appeared in `<li>` tags wrapped in `<ul>`
    }
  }
}