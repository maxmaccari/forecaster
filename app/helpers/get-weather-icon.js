import { helper } from '@ember/component/helper';
import iconMapper from '../utils/iconMapper';

export default helper(function getWeatherIcon(params) {
  return iconMapper(params[0]);
});
