const printFilms = require("./printFilms");

describe("printFilms", () => {
  test("GIVEN an array of films THEN it prints the films title and release date", () => {
    const spy = jest.spyOn(console, "log");

    const testData = [
      { title: "The Wind Rises", release_date: 2013 },
      { title: "Ponyo", release_date: 2008 },
      { title: "Howl's Moving Castle", release_date: 2004 },
      { title: "Spirited Away", release_date: 2001 },
      { title: "Princess Mononoke", release_date: 1997 },
      { title: "Porco Rosso", release_date: 1992 },
      { title: "Kiki's Delivery Service", release_date: 1989 },
      { title: "My Neighbor Totoro", release_date: 1988 },
      { title: "Castle in the Sky", release_date: 1986 },
    ];

    printFilms(testData);

    testData.forEach(({ title, release_date }) =>
      expect(spy).toHaveBeenCalledWith(`${title} (${release_date})`)
    );

    spy.mockRestore();
  });
});
