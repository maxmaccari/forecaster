import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('credits');

  this.route('forecast', function() {
    this.route('show', { path: '/:city_name' });
  });
});
