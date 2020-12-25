import EmberRouter from '@ember/routing/router';
import config from 'selling-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('product', {path: '/products/:product_id'});
  this.route('cart');
});
