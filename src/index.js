import './style.css';
import apiStuff from './api.js';

const formInput = document.querySelector('input');

const fillStuff = (function() {
  const mtemp = document.querySelector('.major-cur > .temp-cur');
  const HLtemp = document.querySelector('.major-cur > .high-low-temp');
  const description = document.querySelector('.major-cur > .cur-description');
  const mainIcon = document.querySelector('.major-cur > .icon');
  const feelsLike = document.querySelector('.major-cur > .feels-like');
  const willRain = document.querySelector('.major-cur > .rain');

  function fillMain(obj) {
    mtemp.innerHTML = `${Math.round(Number(obj.current.temp_c))}&deg;`;
    HLtemp.innerHTML = `High: ${obj.forecast[0].maxTemp_c}&deg; &#x2022; Low: ${obj.forecast[0].minTemp_c}&deg;`;
    description.innerHTML = `${obj.current.text}`;
    mainIcon.style = `background-image: url(https:${obj.current.icon})`;
    feelsLike.innerHTML = `Feels like ${obj.current.feelslike_c}&deg;`;
    if (obj.forecast[0].willRain) {
      willRain.style = 'display: grid;';
    } else {
      willRain.style = 'display: none';
    }
  };

  const windValue = document.querySelector('.conditions-cur > .wind > .value');
  const windDes = document.querySelector('.conditions-cur > .wind > .info');
  const humidValue = document.querySelector('.conditions-cur > .humidity > .value');
  const humidDes = document.querySelector('.conditions-cur > .humidity > .info');
  const pressureValue = document.querySelector('.conditions-cur > .pressure > .value');
  const uvValue = document.querySelector('.conditions-cur > .uvIndex > .value');
  const uvDes = document.querySelector('.conditions-cur > .uvIndex > .info');

  function fillConditions(obj) {
    windValue.innerHTML = `${obj.current.wind_kph} <span class="unit">km/h</span>`;
    let windDirection = '';
    let windDescription = '';
    switch (obj.current.wind_direction) {
      case 'N':
        windDirection = 'North';
        break;
      case 'NNE':
        windDirection = 'North North East';
        break;
      case 'NNW':
        windDirection = 'North North West';
        break;
      case 'S':
        windDirection = 'South';
        break;
      case 'SSW':
        windDirection = 'South South West';
        break;
      case 'SSE':
        windDirection = 'South South East';
        break;
      case 'E':
        windDirection = 'East';
        break;
      case 'ENE':
        windDirection = 'East North East';
        break;
      case 'ESE':
        windDirection = 'East South East';
        break;
      case 'W':
        windDirection = 'West';
        break;
      case 'WNW':
        windDirection = 'West North West';
        break;
      case 'WSW':
        windDirection = 'West South West';
        break;
      case 'NE':
        windDirection = 'North East';
        break;
      case 'NW':
        windDirection = 'North West';
        break;
      case 'SE':
        windDirection = 'South East';
        break;
      case 'SW':
        windDirection = 'South West';
        break;
      default:
        break;
    };
    if (Number(obj.current.wind_kph) < 11) {
      windDescription = 'Light';
    } else if (Number(obj.current.wind_kph) < 19) {
      windDescription = 'Gentle';
    } else if (Number(obj.current.wind_kph) < 28) {
      windDescription = 'Moderate';
    } else if (Number(obj.current.wind_kph) < 49) {
      windDescription = 'Strong';
    } else {
      windDescription = 'Storm';
    }
    windDes.innerHTML = `${windDescription} &#x2022; From ${windDirection}`;
    humidValue.innerHTML = `${obj.current.humidity} <span class="unit">%`;
    humidDes.innerHTML = 'Nice! you found the easter egg!';
    pressureValue.innerHTML = `${obj.current.pressure_mbar} <span class="unit"></span>`;
    uvValue.innerHTML = `${obj.current.UVIndex} <span class="unit"></span>`;
    let uvDescription = '';
    if (obj.current.UVIndex < 3) {
      uvDescription = 'Low';
    } else if (obj.current.UVIndex < 9) {
      uvDescription = 'Medium';
    } else {
      uvDescription = 'Extreme';
    }
    uvDes.innerHTML = uvDescription;
  }

  const sunriseTime = document.querySelector('.sunrise-set-cur > div > .time1');
  const sunsetTime = document.querySelector('.sunrise-set-cur > div > .time2');

  function fillSunriseSet(obj) {
    console.log(obj.forecast[0].sunrise, obj.forecast[0].sunset);
    sunriseTime.innerHTML = `${obj.forecast[0].sunrise} <span class="units">AM</span>`;
    sunsetTime.innerHTML = `${obj.forecast[0].sunset} <span class="units">PM</span>`;
  }

  function fillPlaceHolder(obj) {
    formInput.placeholder = obj.location.name;
  }

  function fillLeft(obj) {
    fillPlaceHolder(obj);
    fillConditions(obj);
    fillMain(obj);
    fillSunriseSet(obj);
  }


  return {
    fillMain,
    fillConditions,
    fillSunriseSet,
    fillLeft,
    fillPlaceHolder,
  };
})();

// apiStuff.getCurrentWeather('kampala');
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  formInput.placeholder = 'Loading'; // hack fix
  apiStuff.getForecastWeather(formInput.value.trim()).then(function(data) {
    console.log(data);
    fillStuff.fillLeft(data);
  });
  form.reset();
});
