import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default class ForecastDetailsController extends Controller {
  @service router;

  get cityName() {
    return this.router.currentRoute.params.city;
  }

  get dateParam() {
    return this.router.currentRoute.params.date;
  }

  get currentDate() {
    return moment(this.dateParam).format('dddd D');
  }

  get weather() {
    const bestWeatherIndex = this.model.list.findIndex((weather) => {
      return weather.dt_txt.includes(`${this.dateParam} 12:00:00`);
    });

    if (bestWeatherIndex === -1) {
      return this.model.list[0];
    }

    return this.model.list[bestWeatherIndex];
  }

  get todayForecast() {
    return this.model.list.filter((weather) => {
      return weather.dt_txt.substr(0, 10) === this.dateParam;
    });
  }

  get hasErrors() {
    return !!this.model.cod;
  }
}
