$(document).ready(function () {

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
