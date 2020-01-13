import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ForecastDetailsController extends Controller {
  @service router;

  get cityName() {
    return this.router.currentRoute.params.city;
  }
}
