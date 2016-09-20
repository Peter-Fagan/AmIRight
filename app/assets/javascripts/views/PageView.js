var app = app || {};

app.PageView = Backbone.View.extend({

    el: '#page',

    render: function() {
        var pageViewTemplate = $("#pageViewTemplate").html();
        this.$el.html(pageViewTemplate);

        this.collection.each(function ( question ) {
            var inputView = new app.InputView({ model: question });
            inputView.render();

        })


    }

});
