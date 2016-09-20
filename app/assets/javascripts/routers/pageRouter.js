var app = app || {};

app.PageRouter = Backbone.Router.extend({
    routes: {
        '': 'initializeQuestions',
        'questions/:id': 'showQuestion' // app.router.navigate("/questions/1", true);
    },

    showQuestion: function (id) {
        console.log(id);
    },

    initializeQuestions: function() {
        console.log("initialized")
        app.questions = new app.Questions();
        app.questions.fetch().done(function() {
            console.log("Questions complete");
        });
        // var pv = new app.PageView();
        // pv.render();
    }
});
