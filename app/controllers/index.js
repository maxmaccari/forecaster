import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked cityName = '';
  @tracked loading = false;

  @action
  goToForecast() {
    this.transitionToRoute('forecast.show', this.cityName);
    this.cityName = '';
  }

  get buttonDisabled() {
    return !this.cityName || this.loading;
  }
}
