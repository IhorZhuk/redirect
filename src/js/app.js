const initSmoothScrolling = () => {
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}


const initSubForm = () => {
  $('.js-subform').submit((e) => {
    e.preventDefault();

    let url = "https://online.us20.list-manage.com/subscribe/post-json?u=175b164b9365ec49bafe78ac5&amp;id=ff08a38ed9&EMAIL=";
    url = url + encodeURIComponent($('.js-subrom-email').val());

    $.ajax({
      url: url,
      jsonp: 'callback',
      dataType: 'jsonp',
      success(res) {}
    });

    $('.js-subrom-email').val('');
    $('<div class="subsribe-notify">Thank you for subsribing!</div>').appendTo('body').hide().fadeIn();
    setTimeout(() => {
      $('.subsribe-notify').fadeOut().remove();
    }, 4000)

  })
}

$(document).ready(() => {
  initSmoothScrolling();
  initSubForm();
})