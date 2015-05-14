var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus' } );
  this.resource('products');
  this.resource('product', { path: 'products/:title' } );
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: '/images/logo.png',
  time: function() {
    return(new Date()).toDateString()
  }.property()
});


App.ProductsRoute = Ember.Route.extend({
  model: function() {
  return App.PRODUCTS;
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return App.PRODUCTS.findBy('title'. params.title);
  }
});

App.PRODUCTS = [
  {
    title: 'Flint',
    description: 'Flint is...',
    isOnSale: true,
    image: 'flint.png'
  },
  {
    title: 'Tinder',
    description: 'Tinder is...',
    isOnSale: false,
    image: 'tinder.png'
  }
];


