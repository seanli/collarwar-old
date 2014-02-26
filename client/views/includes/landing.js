Template.landing.events({
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
