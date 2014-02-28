function Facebook (accessToken) {
  this.fb = Meteor.require('fbgraph');
  this.accessToken = accessToken;
  this.fb.setAccessToken(this.accessToken);
  this.options = {
    timeout: 3000,
    pool: {maxSockets: Infinity},
    headers: {connection: "keep-alive"}
  }
  this.fb.setOptions(this.options);
}

Facebook.prototype.query = function (query, method) {
  var self = this;
  var method = (typeof method === 'undefined') ? 'get' : method;
  var data = Meteor.sync(function (done) {
    self.fb[method](query, function (err, res) {
      done(null, res);
    });
  });
  return data.result;
}

Facebook.prototype.getUserData = function () {
  return this.query('me')['data'];
}

Facebook.prototype.getUserFriendsData = function () {
  var query = 'SELECT uid, first_name, last_name, mutual_friend_count FROM user WHERE uid in (SELECT uid2 FROM friend WHERE uid1=me()) ORDER BY mutual_friend_count DESC';
  return this.query(query, 'fql')['data'];
}

Meteor.methods({
  getUserData: function () {
    var fb = new Facebook(Meteor.user().services.facebook.accessToken);
    var data = fb.getUserData();
    return data;
  },
  getUserFriendsData: function () {
    var fb = new Facebook(Meteor.user().services.facebook.accessToken);
    var data = fb.getUserFriendsData();
    return data;
  }
});
