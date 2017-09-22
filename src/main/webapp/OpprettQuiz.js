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

/**
function save(){
    // Get all checkbox inputs
    var inputs = document.querySelectorAll('input[type="text"');
    var arrData = [];
    // For each inputs...
    inputs.forEach(function(input){
        // ... save what you want (but 'ID' and 'checked' values are necessary)
        arrData.push({ name: input.quizName, time: input.quizTime , question: input.quizQuestion, answer: input.answer});
    });
    // Save in localStorage
    localStorage.setItem('inputsQuiz', JSON.stringify(arrData));

    console.log(JSON.stringify(arrData));
    // [
    //   {
    //     'id': 'ch1',
    //     'checked': false  // or true
    //   },
    //   ... and so on
    // ]
}


function load(){
    var inputs = JSON.parse(localStorage.getItem('inputs'));
    // For each inputs...
    inputs.forEach(function(input){
        // Set the 'checked' value
        document.getElementById(input.id).checked = input.checked;
    });
}


$(document).ready(function(){
    // Bind opp tabellen mot rest-ressursen '/kunder'
    $('#myTable').DataTable( {
        ajax: {
            url: '/rest/kunder/',
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'navn' }
        ]
    });

*/
/**
    $("#done_quiz").click(function () {
        $.ajax({
            url: 'rest/kunder/',
            type: 'POST',
            data: JSON.stringify({
                name: $("#quizname").val(),
                question: $("#quizQuestion").val(),
                answer: $("#quizAnswer").val(),
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(result) {
                $('#').DataTable().ajax.reload();
            },
            error: function(result) {
                alert("Det eksisterer allerede en bruker med denne id'en");
            }
        });
    });
*/



/**
$("#done_quiz").click(function () {

    var o = {};
    o.quizName = $("input[name=quizName]").val();
    o.quizTime = $("input[name=quizTime]").val();

    o.quest_ans = [
        $("input[name=quizQuestion]").val(),
        $("input[name=checkbox]").is(":checked"),
        $("input[name=answer]").val()
    ]

    JSON.stringify(o);
    $.ajax({
        type: 'POST',
        data: o,
        url: '/rest/Quiz',
        success: function (data) {
           $('#quizTabel').DataTable().ajax.reload();
        },
        error: function(data){
            alert("Det eksisterer alt en quiz med dette navnet");
        }
    });
});

*/
