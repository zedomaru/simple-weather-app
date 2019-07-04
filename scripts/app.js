const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

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
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});

const updateUI = data => {
  const { cityDetail, weatherDetail } = data;

  //update detail template
  details.innerHTML = `
    <h5 class="my-3">${cityDetail.EnglishName}</h5>
    <div class="my-3">${weatherDetail[0].WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherDetail[0].Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;

  //add icon
  const iconSource = `images/icons/${weatherDetail[0].WeatherIcon}.svg`;
  icon.setAttribute("src", iconSource);

  //add images
  const timeSource = weatherDetail[0].IsDayTime
    ? "images/day.svg"
    : "images/night.svg";
  time.setAttribute("src", timeSource);

  //remove d-none
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
