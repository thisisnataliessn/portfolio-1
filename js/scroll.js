//credit: emmag.design
// When the user scrolls the page, execute myFunction
"use strict";
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
$(function () {
    $('nav-link').on('click', function () {
        $(this).toggleClass('700');
    });
});
// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
// ===== STOP SCROLL UP AT FOOTER ====
$(document).scroll(function() {
    checkOffset();
});
function checkOffset() {
    if($('#return-to-top').offset().top + $('#return-to-top').height()
                                           >= $('#footer').offset().top - 10)
        $('#return-to-top').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
        $('#return-to-top').css('position', 'fixed'); // restore when you scroll up
}
