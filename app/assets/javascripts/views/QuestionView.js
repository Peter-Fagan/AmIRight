var app = app || {};

app.QuestionView = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    var content = this.model.get("content");
    this.$el.text(content);
    console.log(content)
    console.log(this.$el)
    this.$el.prependTo("#questions");
  }
});
