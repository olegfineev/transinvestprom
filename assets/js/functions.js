function initPage(){

	// steickyHeader function
  var stickyHeader;
  window.wh = $(window).height() - 80;
  $(window).bind("resize", function() {
    window.wh = $(window).height() - 80;
  });

  stickyHeader = function() {
    var $elem, current_position, offset;
    $elem = $('#header');
    current_position = $(window).scrollTop();
    offset = 40;
    if (current_position > offset && $elem.hasClass('top')) {
      $elem.removeClass('top').addClass('sticky');
    } else if (current_position <= offset && $elem.hasClass('sticky')) {
      $elem.removeClass('sticky').addClass('top');
    }
  };

  $(window).on('scroll', function() {
    var pos_offset, y;
    y = $(this).scrollTop();
    pos_offset = 40;
    $('ul#menu li > a').each(function(event) {
      var _target, _target_position;
      _target = $($(this).attr('href'));
      _target_position = _target.offset().top - ($(window).height() / 2);
      if (_target_position < 0) {
        _target_position = 0;
      }
      if (_target.length > 0 && y >= _target_position - pos_offset) {
        $('ul#menu li > a').not(this).removeClass('selected');
        $(this).addClass('selected');
      }
    });
    stickyHeader();
  });

  $(document).on('click', 'a[href^="#"]:not([href="#"])', function(e) {
    var animate_length, current_top, offset, pos_offset, target, target_top, time_for_animate;
    e.preventDefault();
    pos_offset = 40;
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length > 0) {
        time_for_animate = 1500;
        current_top = window.scrollY;
        offset = target.offset();
        target_top = offset ? offset.top : 0;
        animate_length = Math.abs(target_top - current_top);
        if (animate_length < 1500) {
          time_for_animate = animate_length;
        }
        $('html,body').animate({
          scrollTop: target_top - pos_offset
        });
      }
    }
  });


};