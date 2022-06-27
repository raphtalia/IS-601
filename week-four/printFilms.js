module.exports = function printFilms(films) {
  films.forEach(({ title, release_date }) => {
    console.log(`${title} (${release_date})`);
  });
};
