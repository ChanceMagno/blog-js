import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('add-new-article');
  this.route('single-article', {path: '/single-article/:car_id'});
});

export default Router;
