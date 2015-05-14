var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus' } );
  this.resource('products');
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: '/images/logo.png',
  time: function() {
    return(new Date()).toDateString()
  }.property()
});