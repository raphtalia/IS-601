const axios = require("axios");
const baseURl = "https://ghibliapi.herokuapp.com";

module.exports = async function getFilms(director) {
  return (await axios.get(`${baseURl}/films?director=${director}`)).data;
};
