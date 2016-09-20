var app = app || {};

app.InputView = Backbone.View.extend({
    el: "#inputView",

    events: {
        'click button': 'createQuestion',
        'keydown textarea': 'checkForEnter'
    },

    checkForEnter: function(e) {
        var ENTER_KEY = 13;
        if (event.which === ENTER_KEY) {
            e.preventDefault();
            this.createQuestion();
        }
    },

    createQuestion: function(e) {
        var newQuestion = new app.Question();
        var userInputQuestion = this.$el.find("inputView").val();
        newQuestion.set("content", userInputQuestion );
        newQuestion.save();
        //Add new question to collection - hense 'questions'
        app.questions.add(newQuestion);
        // Empty the contents of the textarea and put the browser focus back on that area.
        this.$el.find("inputView").val('').focus();
    },

    render: function() {
        var inputViewTemplate = $("#inputViewTemplate").html();
        this.$el.html(inputViewTemplate);
        this.$el.find('inputQuestion').focus();
    }
});
