$(function () {


  $(".drawer_nav a").click(function () {
    $(".drawer_button").trigger("click")
  })


  $('.drawer_button').click(function () {
    $(this).toggleClass('active');
    $('.drawer_bg').fadeToggle();
    $('nav').toggleClass('open');
  })
  $('.drawer_bg').click(function () {
    $(this).fadeOut();
    $('.drawer_button').removeClass('active');
    $('nav').removeClass('open');
  });
})
