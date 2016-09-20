var app = app || {};

app.QuestionView = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    var content = this.model.get("content");
    this.$el.text(content);
    this.$el.prependTo("#questions");
  }
});
