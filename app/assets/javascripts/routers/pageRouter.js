var app = app || {};

app.PageRouter = Backbone.Router.extend({
    routes: {
        '': 'initializeQuestions',
        'questions/:id': 'showQuestion' // app.router.navigate("/questions/1", true);
    },

    showQuestion: function (id) {
        console.log(id);
        $("#inputQuestion").remove();
        $("#questions").remove();
        var ov = new app.OutputView({
            model: app.questions.get(id)
        });
        ov.render();

        // remove any divs that might be on the page that you don't want displaying
        // create a new instance of some kind of view that shows a question
        // create a new template in your displayPage
        // I don't think you want to actually clear the html content of the body - you probably want to retain that #page element and render shit inside that.
        // $("body").html("You are on /questions/" + id + ". Show a view now!");
    },

    initializeQuestions: function() {
        app.questions = new app.Questions();
        app.questions.fetch().done(function() {
            console.log("Questions complete");
        });
        // var pv = new app.PageView();
        // pv.render();
    // },
    //
    // initializeAnswers: function() {
    //     app.answers = new app.Answers();
    //     app.answers.fetch().done(function() {
    //         console.log("Answers complete");
    //     });
    }
});
