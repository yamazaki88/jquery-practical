$('.mainpic').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplayspeed:8000,
  speed: 1000,
  fade: true,
  arrows:false,
});
$(function () {
  // ボタンアニメーション
  $('.home').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    });
  });
   $('.home').on('mouseout', function () {
     $(this).animate({
       opacity: 1.0,
     });
   });


$('.menuabout').on('mouseover',function(){
  $(this).animate({
    opacity:0.5,
  });
});
$('.menuabout').on('mouseout',function(){
  $(this).animate({
    opacity:1,
  });
});
$('.menuworks').on('mouseover',function(){
  $(this).animate({
    opacity:0.5,
  });
});
$('.menuworks').on('mouseout',function(){
  $(this).animate({
    opacity:1,
  });
});
});


$(function(){
  var pagetop = $('#back-btn');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
 // スクロールしたときにセクション内の要素をフェードイン
 $(window).scroll(function() {
  $('.fade-in-target').each(function() {
    const imgPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > imgPos - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
});
// modal
$('.item').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.bigimg').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  $('body,html').css('overflow-y', 'hidden');
  return true;
});

$('.close-btn').click(function() {
  $('.modal').fadeOut();
  $('body,html').css('overflow-y', 'visible');
  return false
});