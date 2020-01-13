import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ForecastDetailsRoute extends Route {
  @service openWeatherMap;

  model(params) {
    return this.openWeatherMap.getForecastFrom(params.city);
  }
}
