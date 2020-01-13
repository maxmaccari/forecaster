import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function hour(params) {
  return moment
    .utc(params[0])
    .local()
    .format('h:mm A');
});
