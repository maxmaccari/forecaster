import Component from '@glimmer/component';

export default class ForecastDailyComponent extends Component {
  get dailyList() {
    const morning = this.args.forecast.list[0];
    const afternoon = this.args.forecast.list[2];
    const night = this.args.forecast.list[4];

    return [morning, afternoon, night];
  }
}
