Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('login', {
    path: '/login'
  });
  this.route('signup', {
    path: '/signup'
  });
});
