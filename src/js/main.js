  $('.burger').on('click', function() {
      $(this).toggleClass('active');
      $('.burger-text').text() == "menu" ? $('.burger-text').text("close") : $('.burger-text').text("menu");
      $('nav .container').css('visibility') == 'visible' ? $('nav .container').css('visibility', 'hidden') : $('nav .container').css('visibility', 'visible');
      return false;
  });

  $('.burger').click(function() {
      $('.burger span:nth-child(1)').toggleClass('first');
      $('.burger span:nth-child(2)').toggleClass('middle');
      $('.burger span:nth-child(3)').toggleClass('last');
  });

  $('#menu-list').on('click', 'a', function(event) {
      event.preventDefault();
      let id = $(this).attr('href'),
          top = $(id).offset().top - 0 + 'px';
      $('body,html').animate({ scrollTop: top }, 1200);
  });


  $('.slides-slider').slick({
      arrows: true,
  });

  $('.about-slider').slick({
      arrows: true,
  });

  $('.testimonials-slider').slick({
      dots: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000
  });