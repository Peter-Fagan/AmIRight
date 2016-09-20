var app = app || {};

app.QuestionView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showQuestion'
  },
  showQuestion: function () {
    app.router.navigate( "/questions/" + this.model.get("id"), true);
  },
  render: function() {
    var content = this.model.get("content");
    this.$el.text(content);
    this.$el.prependTo("#questions");
  }
});
