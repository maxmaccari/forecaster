import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ForecastShowRoute extends Route {
  @service openWeatherMap;

  model(params) {
    return hash({
      currentWeather: this.openWeatherMap.getCurrentWeatherFrom(params.city),
      forecast: this.openWeatherMap.getForecastFrom(params.city),
    });
  }
}
