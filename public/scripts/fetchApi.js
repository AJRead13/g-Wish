
//set our values for RAWG query parameters

const today = moment().format("YYYY-MM-DD");
console.log(today);
const year = moment().add(1, "years").format("YYYY-MM-DD");
console.log(year);
const apiKey = "e9dc4830ffb24f1aac56a79ede1f1283";
const urlRAWG = `https://api.rawg.io/api/games?key=${apiKey}&dates=${today},${year}&ordering=-adding&page=1&page_size=15`;

// console.log(urlRAWG);

fetch(urlRAWG)
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


  function createCards(data) {
    const mainContainer = document.querySelector("#search-results");
    
    // Creates h2
    const heading = document.createElement("h2");
    heading.classList.add("text-white text-center mt-5");
    heading.innerText = "Search Results"
    
    // Creates main div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("row d-flex justify-content-center")
    
      for (let i = 0; i < data.results.length; i++) {
      // Creates main div
      const gameCard = document.createElement("div")
      gameCard.classList.add("col-md-4 game-card");
      
      // Creates div
      const gameCardDiv = document.createElement("div")
      gameCardDiv.classList.add("card m-5")
      gameCardDiv.style.setAttribute("width", "25rem");
      
      // Creates image tag
      const img = document.createElement("img")
      img.classList.add("card-img-top");
      // img.src = data.results[i].background_image
      img.alt = "Card with game data"

      // Creates div
      const cardBody = document.createElement("div")
      cardBody.classList.add("card-body")

      // Creates h5 with game name
      const gameName = document.createElement("h5")
      gameName.classList.add("card-title")
      gameName.id = "game-name"
      // gameName.innerText(data.results[i].name)
      

      // Creates p tag with release date
      const releaseDate = document.createElement("p")
      releaseDate.classList.add("card-text")
      releaseDate.id = "game-release-date"
      // releaseDate.innerText(data.results[i].released)

      // Creates a tag/button for card
      const button = document.createElement("a")
      button.classList.add("btn btn-primary")
      button.href = "/"
      const icon = button.createElement("i")
      icon.classList.add("fas fa-plus-circle")

      mainContainer.append(heading, mainDiv)
      mainDiv.append(gameCard)
      gameCard.append(gameCardDiv)
      gameCardDiv.append(cardBody, img, gameName, releaseDate, button)
      button.append(icon)
    }
  }