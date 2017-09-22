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