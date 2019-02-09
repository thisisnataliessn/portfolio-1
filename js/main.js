$(function(){
    let backgroundColor = $('.title-section').css('background-color');
    $('footer').css({
        'background-color': backgroundColor
    })
})




$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });