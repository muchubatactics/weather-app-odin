import processStuff from './process.js';

const apiStuff = function() {
  const ky = 'a21a520a8ece4a8bb1c73708241101';
  const base = 'http://api.weatherapi.com/v1';

  // not necessary, wrote it because I can!!
  async function getCurrentWeather(location) {
    let data = await fetch(`${base}/current.json?key=${ky}&q=${location}`, {
      mode: 'cors',
    });
    data = await data.json();
    console.log(data);
  };

  function getForecastWeather(location) {
    return fetch(`${base}/forecast.json?key=${ky}&q=${location}&days=3`, {
      mode: 'cors',
    }).then(function(response) {
      if (!response.ok) {
        throw new Error(`${response.statusText}, ${response.status}`);
      }
      return response.json();
    }).then(function(data) {
      console.log(data);
      return processStuff.getDataObj(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

  return {
    getCurrentWeather,
    getForecastWeather,
  };
}();

export default apiStuff;
