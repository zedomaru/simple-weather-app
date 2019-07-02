const cityForm = document.querySelector("form");
const card = document.querySelector("card");
const detail = document.querySelector(".details");

const updateCity = async city => {
  const cityDetail = await getCity(city);
  const weatherDetail = await getWeather(cityDetail.Key);
  //console.log(city);
  return { cityDetail: cityDetail, weatherDetail: weatherDetail };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update ui
  updateCity(city)
    .then(data => {
      updateUI(data);
    })
    .catch(err => {
      console.log(err);
    });
});

const updateUI = data => {};
