import Component from '@glimmer/component';
import moment from 'moment';

export default class NextDaysCardComponent extends Component {
  get date() {
    return moment(this.args.weather.date).format('dddd D');
  }

  get weather() {
    const bestWeatherIndex = this.args.weather.weathers.findIndex((weather) => {
      return weather.dt_txt.includes('12:00:00');
    });

    if (bestWeatherIndex === -1) {
      return this.args.weather.weathers[0];
    }

    return this.args.weather.weathers[bestWeatherIndex];
  }
}
