

 $('.nav-toggle').click(function(event) {
    $('.nav').slideToggle(200);
    $('.navbar').toggleClass('open');
    $(this).toggleClass('open');
});

// Close navigation on mobile click
$('.nav li a').click(function(event) {
    if (parseInt($(window).width()) < 567) {
        $('.nav').slideToggle(200);
        $('.navbar').toggleClass('open');
        $('.nav-toggle').toggleClass('open');
    }
});