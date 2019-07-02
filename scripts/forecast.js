const key = "Xj1lAVQBYtG65j5tfnG07Tyz1LxMx0Lh";

const getCity = async city => {
  const cityURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(cityURL + query);
  const data = await response.json();
  return data[0];
};

const getWeather = async cityKey => {
  const weatherURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${cityKey}?apikey=${key}`;
  const response = await fetch(weatherURL + query);
  const data = await response.json();
  //   console.log(data);
  return data;
};
