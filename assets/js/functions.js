function initPage(){

	// steickyHeader function
  var stickyHeader;
  window.wh = $(window).height() - 80;
  $(window).bind("resize", function() {
    return window.wh = $(window).height() - 80;
  });

  stickyHeader = function() {
    var $elem, current_position, offset;
    $elem = $('#header');
    current_position = $(window).scrollTop();
    offset = 40;
    if (current_position > offset && $elem.hasClass('top')) {
      return $elem.removeClass('top').addClass('sticky');
    } else if (current_position <= offset && $elem.hasClass('sticky')) {
      return $elem.removeClass('sticky').addClass('top');
    }
  };

  $(window).on('scroll', function() {
    return stickyHeader();
  });

};