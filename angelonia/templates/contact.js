/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  Stéphane Nahmani (sholby@sholby.net),
			  Stéphane Raimbault <stephane.raimbault@gmail.com> */
jQuery(function($){
	$.datepicker.regional.fr = {
		closeText: 'Fermer',
		prevText: 'Précédent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
		'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
		monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin',
		'Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
		dayNamesMin: ['D','L','M','M','J','V','S'],
		weekHeader: 'Sem.',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional.fr);
});

function leadingZero(number, figureNumber) {
    var ret = "";
    zeros = figureNumber === undefined ? 2 : figureNumber;
    if (number.toString().length < zeros) {
        for (var i = 0; i < zeros - number.toString().length; i++) {
            ret += "0";
        }
        return ret + number.toString();
    } else {
        return number.toString();
    }
}

Date.prototype.frenchFormat = function () {
    var curr_date = this.getDate(),
        curr_month = this.getMonth() + 1,
        curr_year = this.getFullYear();
    return leadingZero(curr_date) + "/" + leadingZero(curr_month) + "/" + curr_year;
};

$(document).ready(function () {
    $.datepicker.setDefaults($.datepicker.regional.fr);
    $('.datepicker[name=start_date]').datepicker({
        minDate: new Date(),
        defaultDate: +1,
        gotoCurrent: true
    });
    $('.datepicker[name=start_date]').val();
    $('.datepicker[name=end_date]').datepicker({
        minDate: new Date(),
        defaultDate: +6,
        gotoCurrent: true
    });
    $('.datepicker[name=end_date]').val($('.datepicker[name=end_date]')
        .datepicker( "getDate" ));

    $('form[name=contact]').submit(function () {
        $.ajax({
            cache: false,
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function (response) {
                if (response.status) {
                    alert('ok');
                } else {
                    alert('not ok');
                }
            }
        });
        return false;
    });

    $('input, textarea').placeholder();
});

