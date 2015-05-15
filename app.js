var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus' } );
  this.resource('products', function() {
    this.resource('product', { path: '/:product_id' } );
  });
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
    return this.store.findAll('product');
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('product'. params.product_id);
  }
});

App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true})
});

App.Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  products: DS.belongsTo('product')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product.FIXTURES = [
  {
    id: 1,
    title: 'Flint',
    description: 'Flint is...',
    isOnSale: true,
    image: 'flint.png',
    reviews: [100,101]
  },
  {
    id: 2,
    title: 'Tinder',
    description: 'Tinder is...',
    isOnSale: false,
    image: 'tinder.png',
    reviews: [100,101]
  }
];

App.Review.FIXTURES = [
  { id: 100,
    product: 1,
    text: 'A thing'
  },
  { id: 101,
    product: 1,
    text: 'Another thing'
  }];
