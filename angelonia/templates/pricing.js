$(document).ready(function () {
    var i, j, len, el_len,
        tbodys = document.getElementsByTagName('tbody'),
        elements;
    for (i = 0, len = tbodys.length; i < len; i += 1) {
        elements = tbodys[i].getElementsByTagName('tr');
        for (j = 1, el_len = elements.length; j < el_len; j += 2) {
            elements[j].className = "even";
        }
    }
});
