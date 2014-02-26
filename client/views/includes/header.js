Template.header.rendered = function () {
  $('.ui.dropdown').dropdown();
}

Template.header.helpers({
  activeRouteClass: function (/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    var active = _.any(args, function (name) {
      return Router.current().route.name === name
    });
    return active && 'active';
  }
});

Template.header.events({
  'click #link-logout' : function (e) {
    Meteor.logout();
    Router.go('/');
  }
});

