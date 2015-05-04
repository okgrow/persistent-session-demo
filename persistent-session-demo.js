if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.demo.helpers({
    default: function () {
      return Session.get('default');
    },
    temporary: function () {
      return Session.get('temporary');
    },
    persistent: function () {
      return Session.get('persistent');
    },
    auth: function () {
      return Session.get('auth');
    }
  });

  Template.demo.events({
    'change .default': function () {
      var val = $(".default").val();
      Session.set('default', val);
    },
    'change .temporary': function () {
      var val = $(".temporary").val();
      Session.setTemporary('temporary', val);
    },
    'change .persistent': function () {
      var val = $(".persistent").val();
      Session.setPersistent('persistent', val);
    },
    'change .auth': function () {
      var val = $(".auth").val();
      Session.setAuth('auth', val);
    },
    'click .clear': function() {
      Session.clear();
    },
    'click .multiset': function() {
      Session.setPersistent({
        auth: "multi-auth",
        persistent: "multi-persist",
        temporary: "multi-temp",
        default: "multi-def"
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
