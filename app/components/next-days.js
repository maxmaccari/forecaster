import Component from '@glimmer/component';

export default class NextDaysComponent extends Component {
  get weathers() {
    const dates = this.args.forecast.list
      .map((weather) => weather.dt_txt.substr(0, 10))
      .filter((v, i, a) => a.indexOf(v) === i);

    return dates.map((date) => {
      const forecastWeathers = this.args.forecast.list.filter((weather) => {
        return weather.dt_txt.substr(0, 10) === date;
      });

      return { date, weathers: forecastWeathers };
    });
  }
}
