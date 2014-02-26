Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {
    path: '/'
  });
  this.route('login', {
    path: '/login'
  });
  this.route('signup', {
    path: '/signup'
  });
});
