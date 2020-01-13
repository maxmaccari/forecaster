import { helper } from '@ember/component/helper';

const iconMappings = {
  '01d': '021-sun',
  '01n': '021-night-2',
  '02d': '021-cloudy-1',
  '02n': '021-night',
  '03d': '021-cloud',
  '03n': '021-cloud',
  '04d': '021-cloud',
  '04n': '021-cloud',
  '09d': '021-rain-2',
  '09n': '021-rain-2',
  '10d': '021-rain-1',
  '10n': '021-rain-3',
  '11d': '021-storm',
  '11n': '021-storm',
  '13d': '021-snowing',
  '13n': '021-snowing-2',
  '50d': '021-mist',
  '50n': '021-mist',
};

export default helper(function getWeatherIcon(params) {
  return iconMappings[params[0]];
});
