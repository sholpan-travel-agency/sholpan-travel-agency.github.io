$(document).ready(function () {
   $("a.topLink").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1100,
         easing: "swing"
      });
      return false;
   });

   $('.menu-toggle').click(function () {
      $(this).toggleClass('active')
      $('.menu').slideToggle(400)
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
         $('#toTop').fadeIn();
      } else {
         $('#toTop').fadeOut();
      }
   });

   $('#toTop').click(function () {
      $('body,html').animate({scrollTop: 0}, 800);
   });
});

let offers = [
  {
    img: './img/tour-1.jpg',
    title: 'Turkey',
    info: 'Istanbul, Antalya, Ephesus • 8 days',
    date: 14,
  },
  {
    img: './img/tour-2.jpg',
    title: 'Spain',
    info: 'Madrid, Andalucia, Barcelona • 9 days',
    date: 14,
  },
  {
    img: './img/tour-3.jpg',
    title: 'Eastern Europe',
    info: 'Slovenia, Hungary, Poland • 10 days',
    date: 17,
  },
  {
    img: './img/tour-4.jpg',
    title: 'United Kingdom',
    info: 'England, Scotland, Wales • 13 days',
    date: 12,
  },
];