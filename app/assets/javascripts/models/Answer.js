var app = app || {};

app.Answer = Backbone.Model.extend({

  urlRoot: "/answers",

  defaults: {
    value: 0
  }

});
