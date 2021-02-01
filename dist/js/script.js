$(document).ready(function () {
    var navToggler = $(".nav-toggler");
  $(navToggler).each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

$(document).ready(function(){
  $('.client-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: true,
  });

  $('.slider').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1.2,
    focusOnSelect: true,
    mobileFirst: true,
    initialSlide: 1,
  
  });
});