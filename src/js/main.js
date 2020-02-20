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

  $('.slides-slider').slick({
      arrows: true,
  });

  $('.about-slider').slick({
      arrows: true,
  });