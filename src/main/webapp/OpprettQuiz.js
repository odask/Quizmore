/**
 * Created by odasteinlandskaug on 17.09.2017.
 */

$(function () {
    var question_div = $("#qstion").html();
    $("#qstion").remove();
    $("#super_div").append("<div>" + question_div + "</div>");
    $("#button_repeat").click(function() {
        $("#super_div").append("<div>" + question_div + "</div>");
    });
});
