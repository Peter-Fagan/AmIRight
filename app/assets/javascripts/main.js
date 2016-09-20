var app = app || {};

$(document).ready(function() {
    var pv = new app.PageView();
    pv.render();

    // app.questions = new app.Questions();
    // app.questions.fetch().done(function() {
        app.router = new app.PageRouter();
        Backbone.history.start();
    // });

    window.setInterval( function () {
        app.questions.fetch();
    }, 3000);

});
