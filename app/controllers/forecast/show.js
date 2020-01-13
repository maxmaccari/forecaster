import Controller from '@ember/controller';
import moment from 'moment';

export default class ForecastShowController extends Controller {
  get weather() {
    if (this.model.currentWeather.weather[0])
      return this.model.currentWeather.weather[0];

    return null;
  }

  get currentDate() {
    return moment(this.weather.dt_txt).format('dddd D');
  }
}
