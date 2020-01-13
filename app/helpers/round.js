import { helper } from '@ember/component/helper';

export default helper(function round(params) {
  return Math.round(params[0]);
});
