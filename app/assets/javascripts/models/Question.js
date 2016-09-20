var app = app || {};

app.Question = Backbone.Model.extend({

  urlRoot: "/questions",
  defaults: {
    content: "Ask your question here, I dare you!"
  }

});
