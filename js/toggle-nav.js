// toggleNav

$(function () {
  $('.menu,.menu-under').on('click', function () {
    $('.menu__line').toggleClass('active');
    // Use faster animation for better performance
    $('.nav-cover').fadeToggle(200);
  });
});
