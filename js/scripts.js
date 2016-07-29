


//------------------------------------------------------ NAVBAR:


$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        $(".navbar-default").addClass("active");
        $(".navbar-default .navbar-nav>li>a").addClass("active2");
        $(".navbar-default .navbar-nav>.active>a").addClass("active2");
    } else {
        //sacar la background property para que sea transparent again (defined in css)
       $(".navbar-default").removeClass("active");
       $(".navbar-default .navbar-nav>li>a").removeClass("active2");
       $(".navbar-default .navbar-nav>.active>a").removeClass("active2");
    }
});

//------------------------------------------------------ WIENER DOG / LONG LIVE DESIGN ANIMATION:

var fullWidth = ($(window).width());

$(function() {
  var lastScrollTop = 0;

  $(window).on("resize scroll",function(e){
    var max = ($(window).width() / 2 - $(".live").width() + 15);
    var currLeft = parseInt($(".live").css("left"));
    var position = $(this).scrollTop();
    var move = currLeft-position/2;

    if (window.scrollTop < 0) {
      position = 0;
    }
    else if (position < fullWidth)  {
      position = 10 * position;
    }
    $(".stretch").width(position);

    // // console.log("fullwidth: " + fullWidth);
    // console.log("X-------->: " + currLeft);
    // console.log("MAX----------> " + max);
    // // console.log("last scroll top -------" + lastScrollTop);
    // // console.log("position--------" + position);
    // console.log("moveeeeeeeeeeeee " + move);
    // // console.log("x------>" + x);

    if (position > lastScrollTop && currLeft > max) { // scroll down
      $(".live").css({left:+move});
    }
    else if (position < lastScrollTop && currLeft < 730 ) { // scroll up
      console.log("currLeft: " + currLeft);
      $(".live").css({left:-move});
    }
    lastScrollTop = position;
  });

});













$(function() {

  $(window).on("resize scroll",function(e){
    var maximo2 = ($(window).width() / 2 - $(".design").width() + 15);
    var x2 = $('.design').offset().left;
    var position2 = 0;
    position2 = $(this).scrollTop();

    if (window.scrollTop < 50) {
      position2 = 0 - 0 * position2;
    }
    else if (position2 < fullWidth)  {
      position2 = 0 + 10.0 * position2;
    }
    $(".stretch2").width(position2);

    // console.log("fullwidth: " + fullWidth);
    // console.log("X2-------->: " + x2);
    // console.log("MAXIMO2----------> " + maximo2);

    if (position2 > 2820 && x2 > maximo2) {
      $(".design").css({left:2530-position2/2});
    }




  });
});


var fullWidth = ($(window).width() /2);
var position3 = 0;
$(function() {
  $(window).scroll(function() {
    position3 = $(this).scrollTop();
    if (window.scrollTop < 50) {
      position3 = 0 - 0 * position3;
    }
    else  {
      position3 = 0 + 12.0 * position3;


    }
    console.log(position3);
    $(".stretch3").width(position3);
  });
});
