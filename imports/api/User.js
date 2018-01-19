import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
    // We still want the default hook's 'profile' behavior.
    if (options.profile) {
        user.profile = options.profile;
    }

    if (options.first_name) {
        user.first_name = options.first_name;
    }
    if (options.last_name) {
        user.last_name = options.last_name;
    }
    if (options.email) {
        user.email = options.email;
    }
    if (options.phone_number) {
        user.phone_number = options.phone_number;
    }

    // Don't forget to return the new user object at the end!
    return user;
});

export const User = {
  get: function() {
    return Meteor.user() || {};
  },

  id: function() {
    return Meteor.userId();
  },

  isLoggedIn: function() {
    return !! Meteor.userId();
  },

  isLoggedOut: function() {
    return ! User.isLoggedIn();
  },

  profile: function() {
    return User.get().profile;
  },

  create: function(opts, callback) {
    Accounts.createUser(opts, callback);
  }
};
