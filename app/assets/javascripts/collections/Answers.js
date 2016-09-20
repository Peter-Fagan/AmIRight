var app = app || {};

app.Answers = Backbone.Collection.extend({
  url: '/answers',
  model: app.Answer,
  initialize: function() {

    this.on("add", function( answer ) {
      var answerView = new app.AnswerView({
        model: answer
      });
      answerView.render();
    });
  }
});
