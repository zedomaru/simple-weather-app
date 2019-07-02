const key = "Xj1lAVQBYtG65j5tfnG07Tyz1LxMx0Lh";

const getCity = async city => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return data[0];
};

getCity("Bandung")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
