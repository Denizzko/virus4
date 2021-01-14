$('.epidemic-body').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  dots: false,
  speed: 1500,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        dots: true,
        arrows: false,
      },
    },
     {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});



$('.table-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 1500,
});



$(document).ready(function(event){
  $('.ham').click(function(event){
    $('.menu-mobile').toggleClass('menu-mobile-active');
  });
})

$(document).ready(function(event){
  $('.menu__link').click(function(event){
    $('.menu-mobile').removeClass('menu-mobile-active');
    $('.hamRotate').removeClass('active');
  })
})

$('.choice-btn1').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn1').css('background', '#019973');
   $('.choice-btn1').css('border', '2px solid transparent');
   $('.choice-btn1').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart1').css('display', 'block');
});

$('.choice-btn2').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn2').css('background', '#019973');
   $('.choice-btn2').css('border', '2px solid transparent');
   $('.choice-btn2').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart2').css('display', 'block');
});


$('.choice-btn3').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn3').css('background', '#019973');
   $('.choice-btn3').css('border', '2px solid transparent');
   $('.choice-btn3').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart3').css('display', 'block');
});

$('.choice-btn4').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn4').css('background', '#019973');
   $('.choice-btn4').css('border', '2px solid transparent');
   $('.choice-btn4').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart4').css('display', 'block');
});

$('.choice-btn5').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn5').css('background', '#019973');
   $('.choice-btn5').css('border', '2px solid transparent');
   $('.choice-btn5').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart5').css('display', 'block');
});

$('.choice-btn6').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn6').css('background', '#019973');
   $('.choice-btn6').css('border', '2px solid transparent');
   $('.choice-btn6').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart6').css('display', 'block');
});

$('.choice-btn7').click(function(){
   $('.choice-btn').css('background', 'transparent');
   $('.choice-btn').css('border', '2px solid #019973');
   $('.choice-btn').css('color', '#484848');
   $('.choice-btn7').css('background', '#019973');
   $('.choice-btn7').css('border', '2px solid transparent');
   $('.choice-btn7').css('color', 'white');
   $('.chart').css('display', 'none');
   $('.chart7').css('display', 'block');
});





$('.symptoms-btn1').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn1').css('background', '#019973');
   $('.symptoms-btn1').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body1').css('display', 'flex');
});

$('.symptoms-btn2').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn2').css('background', '#019973');
   $('.symptoms-btn2').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body2').css('display', 'flex');
});

$('.symptoms-btn3').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn3').css('background', '#019973');
   $('.symptoms-btn3').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body3').css('display', 'flex');
});

$('.symptoms-btn4').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn4').css('background', '#019973');
   $('.symptoms-btn4').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body4').css('display', 'flex');
});

$('.symptoms-btn5').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn5').css('background', '#019973');
   $('.symptoms-btn5').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body5').css('display', 'flex');
});

$('.symptoms-btn6').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn6').css('background', '#019973');
   $('.symptoms-btn6').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body6').css('display', 'flex');
});

$('.symptoms-btn7').click(function(){
   $('.symptoms-btn').css('background', 'transparent');
   $('.symptoms-btn').css('border', '2px solid #019973');
   $('.symptoms-btn7').css('background', '#019973');
   $('.symptoms-btn7').css('border', '2px solid transparent');
   $('.symptoms-body').css('display', 'none');
   $('.symptoms-body7').css('display', 'flex');
});


document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }

$(document).ready(function(){
  $('.question-btn1').click(function(){
    $('.answer1').text('Правильный ответ : 1');
  })
});

$(document).ready(function(){
  $('.question-btn2').click(function(){
    $('.answer2').text('Правильный ответ : 2');
  })
});

$(document).ready(function(){
  $('.question-btn3').click(function(){
    $('.answer3').text('Правильный ответ : 2');
  })
});

$(document).ready(function(){
  $('.question-btn4').click(function(){
    $('.answer4').text('Правильный ответ : 2');
  })
});

$(document).ready(function(){
  $('.question-btn5').click(function(){
    $('.answer5').text('Правильный ответ : 1');
  })
});