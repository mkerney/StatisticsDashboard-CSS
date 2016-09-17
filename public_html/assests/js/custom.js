
$(document).ready(function () {
    $('.navbar-right div a').click(function () {
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            $('.navbar-right div').removeClass('open');
            $(this).parent().addClass('open');
        }
    });
});


