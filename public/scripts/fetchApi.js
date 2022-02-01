//////////moment.js date formatting/////////////////////////
const today = moment().format("YYYY-MM-DD");
const week = moment().add(7, "days").format("YYYY-MM-DD");
////////////////////////////////////////////////////////////
////////////Month moment.js/////////////////////////////////
const month = moment().add(1, "years").format("YYYY-MM-DD");
moment.addRealMonth = function addRealMonth(d) {
  const fm = moment(d).add(1, "M");
  const fmEnd = moment(fm).endOf("month");
  return d.date() != fm.date() && fm.isSame(fmEnd.format("YYYY-MM-DD"))
    ? fm.add(1, "d")
    : fm;
};
const futureMonth = moment.addRealMonth(moment());
const nextMonth = futureMonth.format("YYYY-MM-DD");
///////////////////////////////////////////////////////////
const year = moment().add(1, "years").format("YYYY-MM-DD");

console.log(today + " Today");
console.log(week + " Next Week");
console.log(nextMonth + " Next Month");
console.log(year + " Next Year");
////////////////////////////////////////////////////////////
//////////////////API Key & URL's///////////////////////////
const apiKey = "e9dc4830ffb24f1aac56a79ede1f1283";
const monthUrl = `https://api.rawg.io/api/games?&key=${apiKey}&dates=${today},${nextMonth}&ordering=-adding&page=1&page_size=15`;
const yearUrl = `https://api.rawg.io/api/games?key=${apiKey}&dates=${today},${year}&ordering=-adding&page=1&page_size=15`;

const gameSearchEl = document.getElementById("search-form");
const gameSearchInput = document.getElementById("search-addon");

const nameFormSubmitHandler = function (event) {
  event.preventDefault();

  const gameSearchVal = gameSearchInput.value.trim();
  console.log(gameSearchVal);
  if (gameSearchVal) {
    getByNameRAWG(gameSearchVal);
    gameSearchInput.value = "";
  } else if (!gameSearchInput.value) {
    alert("Cannot locate this title");
  } else {
    alert("You must enter a game title to search for!");
  }

  function getByNameRAWG(gameSearchVal) {
    const nameUrl = `https://api.rawg.io/api/games?search=${gameSearchVal}&key=${apiKey}&dates=${today},${year}&ordering=-adding&page=1&page_size=15`;

    fetch(nameUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        createCards(data);
        // for (let i = 0; i < data.results.length - 1; i++) {
        // const gData = data.results[i];
        // console.log(gData);
        // console.log(data.results[i].background_image);
        // console.log(data.results[i].name);
        // console.log(data.results[i].released);
        // platform info
        // for (let i = 0; i < gData.platforms.length; i++) {
        //  const gPlat = gData.platforms[i].platform;
        //  console.log(gPlat.name);
        //           }
        // }
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }
};
gameSearchEl.addEventListener("submit", nameFormSubmitHandler);

function createCards(data) {
  // Creates h2

  // Creates main div
  for (let i = 0; i < data.results.length - 1; i++) {
    // Creates main div
    const imgLink = toString(data.results[i].background_image);
    console.log(data.results[i].background_image);
    const gData = data.results[i];
    const mainContainer = document.querySelector("#search-results");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("row", "d-flex", "justify-content-center");
    const heading = document.createElement("h2");
    heading.classList.add("text-white", "text-center", "mt-5");
    heading.innerText = "Search Results";

    const gameCard = document.createElement("div");
    gameCard.classList.add("col-md-4", "game-card");

    // Creates div
    const gameCardDiv = document.createElement("div");
    gameCardDiv.classList.add("card", "m-5");
    gameCardDiv.setAttribute("style", "width", "25rem");

    // Creates image tag
    const img = document.createElement("img");
    // img.classList.add("card-img-top");
    img.setAttribute("src", data.results[i].background_image);
    img.alt = "Card with game data";

    // Creates div
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Creates h5 with game name
    const gameName = document.createElement("h5");
    gameName.classList.add("card-title");
    gameName.id = "game-name";
    gameName.innerText = gData.name;

    // Creates p tag with release date
    const releaseDate = document.createElement("p");
    releaseDate.classList.add("card-text");
    releaseDate.id = "game-release-date";
    releaseDate.innerText = data.results[i].released;

    // Creates a tag/button for card
    const button = document.createElement("a");
    button.classList.add("btn", "btn-primary");
    button.href = "/";
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-plus-circle");

    mainContainer.append(heading, mainDiv);
    mainDiv.append(gameCard);
    gameCard.append(gameCardDiv);
    gameCardDiv.append(cardBody, gameName, releaseDate, button);
    button.append(icon);
  }
}

function getByWeek() {
  const weekUrl = `https://api.rawg.io/api/games?&key=${apiKey}&dates=${today},${week}&ordering=-adding&page=1&page_size=15`;

  fetch(weekUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        const gData = data.results[i];
        console.log(gData);
        console.log(data.results[i].background_image);
        console.log(data.results[i].name);
        console.log(data.results[i].released);
        //platform info
        for (let i = 0; i < gData.platforms.length; i++) {
          const gPlat = gData.platforms[i].platform;
          console.log(gPlat.name);
        }
      }
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function getByMonth() {
  fetch(monthUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        const gData = data.results[i];
        console.log(gData);
        console.log(data.results[i].background_image);
        console.log(data.results[i].name);
        console.log(data.results[i].released);
        //platform info
        for (let i = 0; i < gData.platforms.length; i++) {
          const gPlat = gData.platforms[i].platform;
          console.log(gPlat.name);
        }
      }
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function getByYear() {
  fetch(yearUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        const gData = data.results[i];
        console.log(gData);
        console.log(data.results[i].background_image);
        console.log(data.results[i].name);
        console.log(data.results[i].released);
        //platform info
        for (let i = 0; i < gData.platforms.length; i++) {
          const gPlat = gData.platforms[i].platform;
          console.log(gPlat.name);
        }
      }
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
