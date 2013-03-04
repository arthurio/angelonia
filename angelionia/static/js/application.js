// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require slider
//

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

    var path_name = document.location.pathname.replace('/','');
    if (path_name === "" ) {
        path_name = "home";
    }
    $('#nav li').click(function () {
        document.location = $(this).attr('data-href');
        return false;
    });

    $('#nav li.' + path_name).addClass('active');

    var s = new Slider({
        container: $("#slider"),
        current: 0,
        duration: 2000,
        circle: false,
        property: 'height',
        timeoutDuration: 7000,
        auto: true
    });

    $('.slider .break').click(function () {
        s.auto = !s.auto;
        if (s.auto) {
            $(this).find('img').attr('src', 'static/images/caroussel/pause.png');
            s.next();
            s.loop();
        } else {
            $(this).find('img').attr('src', 'static/images/caroussel/play.png');
            clearTimeout(s.timeout);
        }
        return false;
    });

    $('#caroussel .slider').mouseover(function () {
        $(this).find('a').css('z-index', '1');
    });

    $('#caroussel .slider').mouseout(function () {
        $(this).find('a').css('z-index', '-2');
    });

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
    $('.datepicker[name=end_date]').val($('.datepicker[name=end_date]').datepicker( "getDate" ));

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

});
