
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