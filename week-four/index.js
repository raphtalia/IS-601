const getFilms = require("./getFilms");
const printFilms = require("./printFilms");

console.log("What are all the films directed by Hayao Miyazaki?");

(async () => {
  printFilms((await getFilms("Hayao Miyazaki")).sort((a, b) => b.release_date - a.release_date));
})();
