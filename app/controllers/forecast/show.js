import Controller from '@ember/controller';

export default class ForecastShowController extends Controller {
  get weather() {
    if (this.model.weather[0]) return this.model.weather[0];

    return null;
  }
}
