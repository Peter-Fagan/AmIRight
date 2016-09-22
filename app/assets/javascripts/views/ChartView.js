var app = app || {};

app.ChartView = Backbone.View.extend({
    el: "#myChart",

    events: {
        // 'click button': 'updateVotes',
    },

    createChart: function(contentsArray, votesArray) {
        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: contentsArray,
                datasets: [{
                    label: '# of Votes',
                    data: votesArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    },

    render: function() {
        console.log("chart view rendered");
        var chartViewTemplate = $("#chartView").html();
        this.$el.html(chartViewTemplate);
        this.$el.find('myChart').focus();
    }
});



// app.OutputViewAnswers = Backbone.View.extend({
//     el: "#answers",
//
//     events: {
//         'click li': 'updateVotes',
//     },
//
//     updateVotes: function(e){
//         var $clickedListItem = $(e.currentTarget);
//         var id = $clickedListItem.data("answerID");
//         var answer = app.answers.get( id );
//         console.log(answer.get("value"));
//         if ( !answer.get("value") ) {
//             answer.set("value", 0);
//         }
//         answer.set({
//             value: parseInt(answer.get("value")) + 1
//         });
//         var view = this;
//         answer.save().done(function () {
//             view.render();
//         });
//     },
//
//     render: function() {
//         this.$el.html('');
//         _.each(this.collection, function (answer) {
//             var content = answer.get("content");
//             var votes = answer.get("value");
//
//             var $li = $("<li></li>").text(content);
//             $li.data({
//                 answerID: answer.get("id")
//             });
//
//             $("#answers").append($li);
//             $("#answers").append( "<span>" + votes + "</span>" );
//             $("#answers").append( "<br />" );
//             console.log( answer.toJSON() );
//         });
//
//
//
//     }
// });
