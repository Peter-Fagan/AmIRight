var app = app || {};

app.PageView = Backbone.View.extend({

    el: '#page',

    render: function() {
        var pageViewTemplate = $("#pageViewTemplate").html();
        this.$el.html(pageViewTemplate);

        var inputView = new app.InputView();
        inputView.render();
    }

});
