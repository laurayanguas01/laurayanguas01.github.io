//
// $(function() {
//   $(window).scroll(function() {
//     if (window.pageYOffset > 200) {
//       $(".stretch").width(300);
//     }
//     console.log(pageYOffset);
//     // alert( "Thanks for visiting!" );
//   });
// });



// $(function() {
//
//     $('.stretch').css({
//         top: ($(window).height() - $('.stretch').outerHeight()) / 2
//     });
//
//
//
//
// // To initially run the function:
//
//
// var $scrollingDiv = $(".stretch");
//
// $(window).scroll(function() {
//     var winScrollTop = $(window).scrollTop() + 0,
//         zeroSizeHeight = $(document).height() - $(window).height(),
//         newSize = 82 * (1 - (winScrollTop / zeroSizeHeight));
//
//     $scrollingDiv.css({
//         width: newSize,
//     }, 500, 'easeInOutSine');
// });
// });


//
//
// var fullwidth = ($(window).width() /2);
// var smallwidth = 1100;
//
// $(window).scroll( $.throttle( 600, animate ) );
//
// function animate() {
//     var navi = $('.stretch');
//     //we're adding .wide class to avoid multiple runs of this animation.
//     if (window.pageYOffset > 100 && !navi.hasClass('wide')) {
//         navi.addClass("wide").stop().animate({width: fullwidth}, 3000);
//     }
//
// }




// var fullWidth = ($(window).width() / 2);
// var position = 0;
// $(function() {
//   $(window).scroll(function() {
//     position = $(this).scrollTop();
//
//     if (window.scrollTop < 50) {
//       position = 0 - 0 * position;
//     }
//     else if (position < fullWidth)  {
//         position = 0 + 1.4 * position;
//     }
//
//     console.log(position);
//     $(".stretch").width(position);
//   });
// });



var fullWidth = ($(window).width());
var position = 0;
$(function() {
  $(window).scroll(function() {
    position = $(this).scrollTop();
    if (window.scrollTop < 50) {
      position = 0 - 0 * position;
    }
    else if (position < fullWidth)  {
        position = 0 + 4.0 * position;
    }
    console.log(position);
    $(".stretch").width(position);
  });
});



var fullWidth = ($(window).width() /2);
var position2 = 0;
$(function() {
  $(window).scroll(function() {
    position2 = $(this).scrollTop();
    if (window.scrollTop < 50) {
      position2 = 0 - 0 * position2;
    }
    else  {
        position2 = 0 + 5.0 * position2;
    }
    console.log(position2);
    $(".stretch2").width(position2);
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
        position3 = 0 + 5.0 * position3;
    }
    console.log(position3);
    $(".stretch3").width(position3);
  });
});









//
// $("body").dblclick(function() {
//
//   $(".stretch3").animate(animations, 500, "linear");
// });












//
// var fullwidth = ($(window).width() /2);
// var lastScrollTop = 0;
//
// $("window").scroll(function () {
//     var navi = $('.stretch');
//     lastScrollTop = $(this).scrollTop();
//     //we're adding .wide class to avoid multiple runs of this animation.
//     if (st > lastScrollTop && !navi.hasClass('wide')) {
//         navi.addClass("wide").stop().animate({width: fullwidth}, 3000);
//     } else {
//         // navi.removeClass("wide").stop();
//     }
//     lastScrollTop = st;
// });


//
// var fullWidth = ($(window).width() / 2);
// var scroll_pos = 0;
// $(window).scroll(function() {
//     scroll_pos = $(this).scrollTop();
//
//     if ($(window).scrollTop() < 50) {
//         scroll_pos = 0-0*scroll_pos;
//     }
//     else if (scroll_pos < fullWidth)  {
//         scroll_pos = 0+1.2*scroll_pos;
//     }
//     $(".stretch").width(scroll_pos);
// });










// var fullWidth = ($(window).width());
// var scroll_pos = 0;
// $(window).scroll(function() {
//     scroll_pos = $(this).scrollTop();
//     if ($(window).scrollTop() < 50) {
//         scroll_pos = 0-0*scroll_pos;
//     }
//     else if (window.pageYOffset > 1200) {
//         scroll_pos = 0+2.0*scroll_pos;
//     }
//     console.log(scroll_pos);
//     $(".stretch2").width(scroll_pos);
// });








// var fullwidth = ($(window).width() /2);
//
//
//
// $("window").scroll(function (event) {
//
//
//
// if (st > lastScrollTop) {
//     $('.stretch').animate({width: fullwidth}, 3000);
// } else {
//     $('.stretch').animate({width: fullwidth}, 3000);
// }
// lastScrollTop = st;
//
// });




//
//
// var fullwidth = $(window).width();
// var smallwidth = 1100;
//
// $(window).scroll( $.throttle( 600, animate ) );
//
// function animate() {
//     var navi = $('.stretch');
//     //we're adding .wide class to avoid multiple runs of this animation.
//     if (window.pageYOffset > 0 && !navi.hasClass('wide')) {
//         navi.addClass("wide").stop().animate({width: fullwidth}, 13000);
//     }
//     if (window.pageYOffset === 0 ) {
//         console.clear();
//         console.log(smallwidth);
//         navi.stop().animate({width: smallwidth}, 13000, function() {
//             $(this).removeClass('wide');
//         });
//     }
// }