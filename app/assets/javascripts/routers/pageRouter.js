var app = app || {};

app.PageRouter = Backbone.Router.extend({
    routes: {
        '': 'initializeQuestions',
        'questions/:id': 'showQuestion' // app.router.navigate("/questions/1", true);
    },

    showQuestion: function (id) {
        console.log(id);
        // alert("You are on /questions/" + id + ". Show a view now!");
        $("body").html("You are on /questions/" + id + ". Show a view now!");
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
