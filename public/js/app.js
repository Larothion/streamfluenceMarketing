// run test on resize of the window
$(window).resize(function () {
    if ($(window).width() < 768 && $(window).scrollTop() < 120) {
        $('#brand-corner').hide();
        $('#brand-bottom-corner').hide();
        $(".navbar-brand").show();
    } else {
        $('#brand-corner').show();
        $('#brand-bottom-corner').show();
        $(".navbar-brand").hide();
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    // Show large or small logo
    if (y < 120 && $(window).width() > 767) {
        $('#brand-corner').show();
        $(".navbar-brand").hide();
    } else {
        $('#brand-corner').hide();
        $(".navbar-brand").show();
    }
    // Show Top button
    if (y > 30) {
        $("#myBtn").show();
    } else {
        $("#myBtn").hide();
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo(0, 0);
}