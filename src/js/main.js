  $('.burger, .scrollto').on('click', function() {
      $(this).toggleClass('active');
      $('.burger-text').text() == "menu" ? $('.burger-text').text("close") : $('.burger-text').text("menu");
      $('.scrollto').css('visibility') == 'visible' ? $('.scrollto').css('visibility', 'hidden') : $('.scrollto').css('visibility', 'visible');
      return false;
  });

  $('.burger, .scrollto').click(function() {
      $('.burger span:nth-child(1)').toggleClass('first');
      $('.burger span:nth-child(2)').toggleClass('middle');
      $('.burger span:nth-child(3)').toggleClass('last');
  });

  $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
  });

  $(window).scroll(function() {
      if ($(window).scrollTop() >= 300) {
          $('header').addClass('fixed-header');
          $('.scrollto').addClass('fixed-nav');

      } else {
          $('header').removeClass('fixed-header');
          $('.scrollto').removeClass('fixed-nav');

      }
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