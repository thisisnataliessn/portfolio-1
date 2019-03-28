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
