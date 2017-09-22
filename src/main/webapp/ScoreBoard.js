/**
 * Created by odasteinlandskaug on 21.09.2017.
 */

/**
$(document).ready(function () {
    $.getJSON(url,
        function (json) {
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + json[i].rank + "</td>");
                tr.append("<td>" + json[i].kallenavn + "</td>");
                tr.append("<td>" + json[i].score + "</td>");
                $('table').append(tr);
            }
        });
});
 */