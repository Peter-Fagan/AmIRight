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
            alert("Too many answers!");
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
        console.log(newQuestion.toJSON());

        // Set all attributes for the answers here
        newQuestion.save().done(function () {
            alert("This has been saved!");
        });
        //Add new question to collection - hense 'questions'
        // Empty the contents of the textarea and put the browser focus back on that area.
        this.$el.find("inputView").val('').focus();
    },

    // createAnswer: function(e) {
    //     var newAnswer = new app.Answer();
    //     var userInputAnswer = this.$el.find(".answer").val();
    //     newAnswer.set("content", userInputAnswer )//, ("question_id", this.$el.find(".question"));
    //     newAnswer.save();
    //     this.$el.find("inputView").val('').focus();
    // },

    render: function() {
        var inputViewTemplate = $("#inputView").html();
        this.$el.html(inputViewTemplate);
        this.$el.find('inputQuestion').focus();
    }
});
