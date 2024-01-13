import './style.css';
import apiStuff from './api.js';

// apiStuff.getCurrentWeather('kampala');
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  apiStuff.getForecastWeather(document.querySelector('input').value.trim());
  form.reset();
});
