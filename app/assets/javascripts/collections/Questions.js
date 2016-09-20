var app = app || {};

app.Questions = Backbone.Collection.extend({
  url: '/questions',
  model: app.Question,
  initialize: function() {

    this.on("add", function( question ) {
      var questionView = new app.QuestionView({
        model: question
      });
      questionView.render();
    });
  }
});
