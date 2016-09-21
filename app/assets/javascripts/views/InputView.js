var app = app || {};

app.InputView = Backbone.View.extend({
    el: "#inputQuestion",

    events: {
        'click button': 'createQuestion',
        'keydown textarea': 'checkForEnter',
        'click p.newAnswer': 'createNewInput'
    },

    createNewInput: function () {
        if ( $(".answer").length <= 3 ) {
            var $newInput = this.$el.find(".answer").eq(0).clone();
            $newInput.val('');
            this.$el.find(".answers").append( $newInput );
        } else {
            $(".newAnswer").hide();
        }
    },

    checkForEnter: function(e) {
        var ENTER_KEY = 13;
        if (event.which === ENTER_KEY) {
            e.preventDefault();
            this.createQuestion(e);
        }
    },

    createQuestion: function(e) {
        var newQuestion = new app.Question();
        var userInputQuestion = this.$el.find(".question").val();
        var answers = [];
        this.$el.find(".answer").each(function () {
            var answer = $(this).val();
            answers.push( answer );
        });
        newQuestion.set({
            content: userInputQuestion,
            answers: answers
        });
        // console.log(newQuestion.toJSON());
        newQuestion.save().done(function () {
            console.log("This has been saved!");
            $(".answer").val("");
            $(".question").val("");
        });
        this.$el.find("inputView").val('').focus();
    },

    render: function() {
        var inputViewTemplate = $("#inputView").html();
        this.$el.html(inputViewTemplate);
        this.$el.find('inputQuestion').focus();
    }
});
