Template.home.rendered = function () {
  if (Meteor.user()) {
    Meteor.call('getUserFriendsData', function (err, friends) {
      Meteor.users.update({_id: Meteor.user()._id}, {$set: {'profile.friends': friends}});
    });
  }
};

Template.home.events({
  'click #btn-facebook': function (e) {
    Meteor.loginWithFacebook({
      requestPermissions: ['email', 'publish_actions']
    }, function (err) {
      if (err) {
        alert(err);
      } else {
        alert('Success!');
      }
    });
  }
});
