$(document).ready(function () {
  $('.buttn[filter = "wd"]').click(function () {
    if ($(this).attr('val') == 'off') {
      $('.buttn[filter]').attr('val', 'off')
      $(this).attr('val', 'on');

      $('.buttn[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').hide(300);
      $('.filter > div[filter = "wd"]').show(300);
    }
  })

  $('.buttn[filter = "ud"]').click(function () {
    if ($(this).attr('val') == 'off') {
      $('.buttn[filter]').attr('val', 'off')
      $(this).attr('val', 'on');

      $('.buttn[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').hide(300);
      $('.filter > div[filter = "ud"]').show(300);
    }
  })

  $('.buttn[filter = "moc"]').click(function () {
    if ($(this).attr('val') == 'off') {
      $('.buttn[filter]').attr('val', 'off')
      $(this).attr('val', 'on');

      $('.buttn[filter]').removeClass('focused');
      $(this).addClass('focused');


      $('.filter > div').hide(300);
      $('.filter > div[filter = "moc"]').show(300);
    }
  })

  $('.buttn[filter = "all"]').click(function () {
    if ($(this).attr('val') == 'off') {
      $('.buttn[filter]').attr('val', 'off')
      $(this).attr('val', 'on');

      $('.buttn[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').show(300);
    }
  })

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    dotsClass: 'dots-style'
  });
});

const navigation = document.querySelector('.col-xl-8 > nav');

if (document.documentElement.clientWidth < 424) {
  navigation.style.display = 'none';
}

window.addEventListener('resize', function() {
  if (document.documentElement.clientWidth < 424) {
    navigation.style.display = 'none';
  } else {
    navigation.style.display = 'block';
  }
});