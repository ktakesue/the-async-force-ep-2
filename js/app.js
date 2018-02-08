console.log("SHITTINITY CHECK");
// VARIABLES //
// make variable to access selection menu //
const menu = document.getElementById("resourceType");
// make variable to access input ids //
const inputId = document.getElementById("resourceId");
// make button variable to add click function //
const requestResourceButton = document
  .getElementById("requestResourceButton")
  .addEventListener("click", checkInput);

// create a function for checking if input is valid //
function checkInput(user) {
  console.log("button work?");
  const input = parseFloat(user.value);
  console.log(input);
  if (isNaN(input)) {
    alert("This is not a valid input, young padawan. Try again");
  } else {
    showInfo(input);
  }
}

// create function accessing info from API for value of person, planet, & starship //
function showInfo(num) {
  // accessing API for people selected //
  if (menu.value === "people") {
    const people = new XMLHttpRequest();
    people.addEventListener("load", getPeople);
    people.open("GET", "https://swapi.co/api/people/" + num);
    people.send();

    function getPeople() {
      // - Name, in an `<h2>` tag
      // - Gender, in an `<p>` tag
      // - Species (only get the first species if there are multiple) (only display the name), in an `<p>` tag
    }
    // accessing API for planets when selected //
  } else if (menu.value === "planets") {
    const planets = new XMLHttpRequest();
    planets.addEventListener("load", getPlanets);
    planets.open("GET", "https://swapi.co/api/planets/" + num);
    planets.send();

    function getPlanets() {
      // - Name, in an `<h2>` tag
      // - Terrain, in an `<p>` tag
      // - Population, in an `<p>` tag
      // - a list of all Film names that this planet appeared in `<li>` tags wrapped in `<ul>`
    }
    // accessing API for starships when selected //
  } else if (menu.value === "starships") {
    const starships = new XMLHttpRequest();
    starships.addEventListener("load", getStarships);
    starships.open("GET", "https://swapi.co/api/starships/" + num);
    starships.send();

    function getStarships() {
      // - Name, in an `<h2>` tag
      // - Manufacturer, in an `<p>` tag
      // - Starship Class, in an `<p>` tag
      // - a list of all Film names that this starship appeared in `<li>` tags wrapped in `<ul>`
    }
  }
}
