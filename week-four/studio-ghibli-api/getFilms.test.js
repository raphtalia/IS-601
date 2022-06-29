const getFilms = require("./getFilms");

describe("printFilms", () => {
  test("", async () => {
    const films = await getFilms("Hayao Miyazaki");

    const props = [
      "id",
      "title",
      "original_title",
      "original_title_romanised",
      "image",
      "movie_banner",
      "description",
      "director",
      "producer",
      "release_date",
      "running_time",
      "rt_score",
      "people",
      "species",
      "locations",
      "vehicles",
      "url",
    ];

    expect(films.length).toBeGreaterThanOrEqual(9);

    films.forEach((film) => {
      props.forEach((prop) => {
        expect(film).toHaveProperty(prop);
      });
    });
  });
});
