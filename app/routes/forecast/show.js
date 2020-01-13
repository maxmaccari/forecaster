import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ForecastShowRoute extends Route {
  @service openWeatherMap;

  model(params) {
    return this.openWeatherMap.getCurrentWeatherFrom(params.city);
  }
}
