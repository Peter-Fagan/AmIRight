var app = app || {};

app.OutputView = Backbone.View.extend({
    el: "#outputQuestion",

    events: {
        // 'click button': 'updateVotes',
    },


    render: function() {
        console.log("output view rendered");
        var question = this.model.get('content');
        this.$el.html(question);
    }
});

// $("body").html("You are on /questions/" + id + ". Show a view now!");
