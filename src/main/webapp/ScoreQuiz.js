/**
$(document).ready(function(){
    // Bind opp tabellen mot rest-ressursen '/kunder'
    $('#myTable').DataTable( {
        ajax: {
            url: '/rest/Score/',
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'navn' }
        ]
    });

    $("#create").click(function () {
        $.ajax({
            url: 'rest/kunder/',
            type: 'POST',
            data: JSON.stringify({
                id: $("#newId").val(),
                navn: $("#newName").val(),
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(result) {
                $('#myTable').DataTable().ajax.reload();
            },
            error: function(result) {
                alert("Det eksisterer allerede en bruker med denne id'en");
            }
        });
    });
});
 */
/**
function createQuestionTable(){
    $.ajax({
        url: 'rest/Quiz',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (result) {

            data = result;
            console.log(result);
            var newData = JSON.stringify(data)
            var jsonData = JSON.parse(newData);
            var html = "";
            for (var i = 0; i < jsonData.length; i++) {
                html += "<tr><td>" + data[i].questions + "</td></tr>";
                console.log(html);
            }
            $("#questionSide").html(html);
        }
    }, 1000);

};



 $(document).ready(function(){
    $.ajax({
        url: 'rest/Quiz',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(result){
            data = result;
            console.log(result);
            var html="";
            for(var i=0; i<data.length;i++){
                html += "<tr><td><input type='radio' name='rightOrWrong'></td>"
                        + "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].questions[i].questions[i] + "</td></tr>";
            }
            $("#questionSide").html(html);
        }
    }, 1000);

});


 function radioPoeng(){
    var poengsum = 0;
    if(document.getElementsByName('rightOrWrong').checked){
        poengsum ++
    }
}


 function myFunction(i) {
        window.location = href="LiveSporsmalsside.html?i=" + i;
    }

 $(document).ready(function(){

        $.ajax({
            url: 'rest/Quiz',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(result){
                data = result;
                console.log(result);
                var html="";
                for(var i=0; i<data.length;i++){
                    html += "<tr><td>" + data[i].name + "</td><td>" + new Date(data[i].time) + "</td>" + "<td><button class ='btn btn-default' onclick = 'myFunction(" + i + ")' >" + 'Join!'+
                            "</button></td></tr>";
                }
                $("#table_cnt").html(html);
            }
        }, 1000);

    });

 var objects = [];

 objects.questions = [];
 objects.answers = [];
 objects.checkboxes = [];

 var tableQuestions = data.questions[i];
 var tableAnswers = data.answers;
 var tableCheckboxes = data.checkboxes;

 var ansTable = [];
 var checkTable = [];

 for(var i = 0; i < tableAnswers.length; i += 4){
                ansTable.get([
                    $(tableAnswers[i]).val(),
                    $(tableAnswers[i+1]).val(),
                    $(tableAnswers[i+2]).val(),
                    $(tableAnswers[i+3]).val()

                ]);

                checkTable.get([
                    $(tableCheckboxes[i]).is(":checked") ? 1 : 0,
                    $(tableCheckboxes[i+1]).is(":checked") ? 1 : 0,
                    $(tableCheckboxes[i+2]).is(":checked") ? 1 : 0,
                    $(tableCheckboxes[i+3]).is(":checked") ? 1 : 0
                ]);
            }

 var questionsTable = [];
 for(i = 0; i <questionsTable.length; i ++){
                questionsTable.get({
                    questions: $(tableQuestions).val(),
                    answers: ansTable[i],
                    checkboxes: checkTable[i]
                })
            }

 var newData = JSON.stringify(JSON.parse(questionsTable));
 console.log(questionsTable);

 var html = "";
 for (var i = 0; i < newData.length; i++) {
                html += "<tr><td>" + newData[i].answers + "</td></tr>";
            }
 $("#answerTable").html(html);
 }
 });
 */


