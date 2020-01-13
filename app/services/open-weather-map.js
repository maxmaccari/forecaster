import Service from '@ember/service';

export default class OpenWeatherMapService extends Service {
  apiKey = 'faa4af87e4918eba4c099e4223f88913';

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
