Template.home.rendered = function () {
  if (Meteor.user()) {
    Meteor.call('getUserFriendsData', function (err, friends) {
      Meteor.users.update({_id: Meteor.user()._id}, {$set: {'profile.friends': friends}});
    });
  }
  var container = document.querySelector('#friend-list');
  var masonry = new Masonry(container, {
    itemSelector: 'img',
    columnWidth: 200,
    isFitWidth: true
  });
};

Template.home.events({
  'click #btn-facebook': function (e) {
    Meteor.loginWithFacebook({
      requestPermissions: ['email', 'publish_actions']
    }, function (err) {
      if (err) {
        alert(err);
      } else {}
    });
  }
});
