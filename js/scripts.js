


//------------------------------------------------------ NAVBAR:


$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        $(".navbar-default").addClass("active");
        $(".navbar-brand h1").addClass("active2");
        $(".navbar-default .navbar-nav>li>a").addClass("active2");
        $(".navbar-default .navbar-nav>.active>a").addClass("active2");
        $(".navbar-default img").attr('src', 'img/logo_blanco.png');

    } else {
        //sacar la background property para que sea transparent again (defined in css)
       $(".navbar-default").removeClass("active");
       $(".navbar-brand h1").removeClass("active2");
       $(".navbar-default .navbar-nav>li>a").removeClass("active2");
       $(".navbar-default .navbar-nav>.active>a").removeClass("active2");
       $(".navbar-default img").attr('src', 'img/logo_negro.png');

    }
});


//------------------------------------------------------ WIENER DOG / LONG LIVE DESIGN ANIMATION:

var fullWidth = ($(window).width());

$(function() {
  var lastScrollTop = 0;

  $(window).on("resize scroll",function(e){
    var max = ($(window).width() / 2 - $(".long").width() + 15);
    var currLeft = parseInt($(".long").css("left"));
    var position = $(this).scrollTop();
    var move = currLeft-position/2;

    if (window.scrollTop < 0) {
      position = 0;
    }
    else if (position < fullWidth)  {
      position = 10 * position;
    }
    $(".stretch").width(position);


    if (position > lastScrollTop && currLeft > max) { // scroll down
      $(".long").css({left:+move});
    }
    lastScrollTop = position;
  });
});


$(function() {

  $(window).on("resize scroll",function(e){
    var maximo2 = ($(window).width() / 2 - $(".live").width() + 15);
    var x2 = $('.live').offset().left;
    var position2 = 0;
    position2 = $(this).scrollTop();

    if (window.scrollTop < 50) {
      position2 = 0 - 0 * position2;
    }
    else if (position2 < fullWidth)  {
      position2 = 0 + 10.0 * position2;
    }
    $(".stretch2").width(position2);


    if (position2 > 2820 && x2 > maximo2) {
      $(".live").css({left:2530-position2/2});
    }
  });
});


$(function() {

  $(window).on("resize scroll",function(e){
    var maximo3 = ($(window).width() / 2 - $(".design").width() + 15);
    var x3 = $('.design').offset().left;
    var position3 = 0;
    position3 = $(this).scrollTop();

    if (window.scrollTop < 50) {
      position3 = 0 - 0 * position3;
    }
    else if (position3 < fullWidth)  {
      position3 = 0 + 10.0 * position3;
    }
    $(".stretch3").width(position3);
    if (position3 > 2820 && x3 > maximo3) {
      $(".design").css({left:3530-position3/2});
    }
  });
});
