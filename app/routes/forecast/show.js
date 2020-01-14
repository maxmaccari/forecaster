import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { action } from '@ember/object';

export default class ForecastShowRoute extends Route {
  @service openWeatherMap;

  model(params) {
    return hash({
      currentWeather: this.openWeatherMap.getCurrentWeatherFrom(params.city),
      forecast: this.openWeatherMap.getForecastFrom(params.city),
    });
  }

  @action
  async loading(transition, originRoute) {
    let controller = this.controllerFor('index');
    controller.set('loading', true);
    controller.set('cityName', 'Loading...');
    transition.promise.finally(function() {
      controller.set('loading', false);
      controller.set('cityName', '');
    });
  }
}
