var app = app || {};

app.OutputViewAnswers = Backbone.View.extend({
    tagName: "li",

    events: {
        // 'click button': 'updateVotes',
    },

    render: function() {
        _.each(this.collection, function (answer) {
            var content = answer.get("content");
            $("#answers").append( content );
            $("#answers").append( "<br />" );
            console.log( answer.toJSON() );
        });
    }
});

// $("body").html("You are on /questions/" + id + ". Show a view now!");
