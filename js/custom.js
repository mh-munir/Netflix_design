$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(100);
            $(".plusminus").css('transform',' rotate(0deg)');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(100);
            $(this).children(".plusminus").css('transform',' rotate(0deg)');
        } else {
            $(this).next(".accordion_body").slideDown(100);
            $(this).children(".plusminus").css('transform',' rotate(45deg)');
        }
    });
});