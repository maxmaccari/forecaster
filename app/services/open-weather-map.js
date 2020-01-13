import ENV from 'forecaster/config/environment';
import Service from '@ember/service';

export default class OpenWeatherMapService extends Service {
  apiKey = ENV.apiKey;

  getForecastFrom(cityName) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.apiKey}&units=metric`
    ).then((response) => response.json());
  }

  getCurrentWeatherFrom(cityName) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=metric`
    ).then((response) => response.json());
  }
}
