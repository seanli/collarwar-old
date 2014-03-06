Meteor.publish('lite_users', function() {
  return LiteUsers.find();
});
