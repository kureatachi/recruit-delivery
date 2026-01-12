$(function () {
  var setElm = $('.loop-slider'),
    slideSpeed = 10000;

  setElm.each(function () {
    var self = $(this),
      selfWidth = self.innerWidth(),
      findUl = self.find('ul'),
      findLi = findUl.find('li'),
      listWidth = findLi.outerWidth(),
      listCount = findLi.length,
      loopWidth = listWidth * listCount;

    findUl.wrapAll('<div class="loop-slider_wrap" />');
    var selfWrap = self.find('.loop-slider_wrap');

    if (loopWidth > selfWidth) {
      findUl.css({
        width: loopWidth
      }).clone().appendTo(selfWrap);

      selfWrap.css({
        width: loopWidth * 2
      });

      function loopMove() {
        selfWrap.animate({
          left: '-' + (loopWidth) + 'px'
        }, slideSpeed * listCount, 'linear', function () {
          selfWrap.css({
            left: '0'
          });
          loopMove();
        });
      };
      loopMove();

      setElm.hover(function () {
        selfWrap.pause();
      }, function () {
        selfWrap.resume();
      });
    }
  });
});
