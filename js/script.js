//ハンバーガーメニュー
$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});
$("#g-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});

//料金プラン
//アコーディオンをクリックした時の動作
$('.plan-detail').on('click', function() {
  var findElm = $(this).next();
  $(findElm).slideToggle();
      
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});

//よくあるご質問
//アコーディオンをクリックした時の動作
$('.faq-q').on('click', function() {
  var findElm = $(this).next(".faq-a");
  $(findElm).slideToggle();
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});

//ページトップボタン
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){
      $('#page-top').removeClass('RightMove');
      $('#page-top').addClass('LeftMove');
    }else{
      if(
        $('#page-top').hasClass('LeftMove')){
        $('#page-top').removeClass('LeftMove');
        $('#page-top').addClass('RightMove');
      }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0}, 500);
    return false;
});


//タブ
//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.sol-wrapper .tab li').find('a').each(function() {
      var idName = $(this).attr('href');  
      if(idName == hashIDName){ 
        var parentElm = $(this).parent(); 
        $('.sol-wrapper .tab li').removeClass("active"); 
        $(parentElm).addClass("active"); 
        //表示させるエリア設定
        $(".area").removeClass("is-active"); 
        $(hashIDName).addClass("is-active"); 
      }
    });
  }
}

//タブをクリックしたら
$('.sol-wrapper .tab a').on('click', function() {
  var idName = $(this).attr('href');  
  GethashID (idName);
  return false;
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.sol-wrapper .tab li:first-of-type').addClass("active"); 
    $('.area:first-of-type').addClass("is-active"); 
  var hashName = location.hash; 
  GethashID (hashName);
});