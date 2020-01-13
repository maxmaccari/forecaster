import { helper } from '@ember/component/helper';

export default helper(function capitalize(params) {
  return params[0]
    .split(' ')
    .map((string) => string[0].toUpperCase() + string.substr(1))
    .join(' ');
});
