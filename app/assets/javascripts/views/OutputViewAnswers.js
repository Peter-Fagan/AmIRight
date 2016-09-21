var app = app || {};

app.OutputViewAnswers = Backbone.View.extend({
    el: "#answers",

    events: {
        'click li': 'updateVotes',
    },

    updateVotes: function(e){
        var $clickedListItem = $(e.currentTarget);
        var id = $clickedListItem.data("answerID");
        var answer = app.answers.get( id );
        console.log(answer.get("value"));
        if ( !answer.get("value") ) {
            answer.set("value", 0);
        }
        answer.set({
            value: parseInt(answer.get("value")) + 1
        });
        answer.save();
        // var votes = this.collection.get('value');
        // votes += 1;
        // console.log(votes);
        // console.log("click click");
        // console.log( id, answer.toJSON() );
    },

    render: function() {
        _.each(this.collection, function (answer) {
            var content = answer.get("content");

            var $li = $("<li></li>").text(content);
            $li.data({
                answerID: answer.get("id")
            });

            $("#answers").append($li);
            // $("#answers").append( value );
            $("#answers").append( "<br />" );
            console.log( answer.toJSON() );
        });
    }
});

// $("body").html("You are on /questions/" + id + ". Show a view now!");
