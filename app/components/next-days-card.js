import Component from '@glimmer/component';
import moment from 'moment';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NextDaysCardComponent extends Component {
  @service router;

  get date() {
    return moment(this.args.weather.date).format('dddd D');
  }

  get entry() {
    const bestWeatherIndex = this.args.weather.weathers.findIndex((weather) => {
      return weather.dt_txt.includes('12:00:00');
    });

    if (bestWeatherIndex === -1) {
      return this.args.weather.weathers[0];
    }

    return this.args.weather.weathers[bestWeatherIndex];
  }

  @action
  goToForecastDay() {
    this.router.transitionTo(
      'forecast.details',
      this.router.currentRoute.params.city,
      this.args.weather.date
    );
  }
}
