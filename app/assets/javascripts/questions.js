$(document).ready(function () {
  $("p.addAnswer").on("click", function () {
    var $newInput = $("input.base_answer").eq(0).clone();
    $newInput.appendTo( "div.answers" );
  });
});
