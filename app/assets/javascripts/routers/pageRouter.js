var app = app || {};

app.PageRouter = Backbone.Router.extend({
    routes: {
        '': 'initializeQuestions'
    },

    initializeQuestions: function() {
        var pv = new app.PageView();
        pv.render;
    }
});
