  $('.burger').on('click', function() {
      $(this).toggleClass('active');
      $('.burger-text').text() == "menu" ? $('.burger-text').text("close") : $('.burger-text').text("menu");
      $('nav').css('visibility') == 'visible' ? $('nav').css('visibility', 'hidden') : $('nav').css('visibility', 'visible');
      return false;
  });

  $('.burger').click(function() {
      $('.burger span:nth-child(1)').toggleClass('first');
      $('.burger span:nth-child(2)').toggleClass('middle');
      $('.burger span:nth-child(3)').toggleClass('last');
  });