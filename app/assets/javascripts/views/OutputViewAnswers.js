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
        var view = this;
        answer.save().done(function () {
            view.render();
        });
    },

    render: function() {
        this.$el.html('');
        var contentsArray = [];
        var votesArray = [];
        _.each(this.collection, function (answer) {
            var content = answer.get("content");
            var votes = answer.get("value");

            contentsArray.push(content);

            votesArray.push(votes);

            var $li = $("<li></li>").text(content);
            $li.data({
                answerID: answer.get("id")
            });

            $("#answers").append($li);
            $("#answers").append( "<span>" + votes + "</span>" );
            $("#answers").append( "<br />" );
            console.log( answer.toJSON() );
        });


        var chartView = new app.ChartView();
        chartView.createChart(contentsArray, votesArray);
        chartView.render();
    }
});

// $("body").html("You are on /questions/" + id + ". Show a view now!");
