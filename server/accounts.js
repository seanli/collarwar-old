Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    options.profile.facebookId = user.services.facebook.id;
    options.profile.email = user.services.facebook.email;
    options.profile.firstName = user.services.facebook.first_name;
    options.profile.lastName = user.services.facebook.last_name;
    options.profile.username = user.services.facebook.username;
    options.profile.gender = user.services.facebook.gender;
    options.profile.price = 100
    options.profile.bank = 1000
    user.profile = options.profile;
  }
  return user;
});
