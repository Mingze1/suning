
$(function(){

// nav 导航条划过显示 离开隐藏
    $('.wrap ul li').has('#list').mouseenter(function(){
        $(this).filter(':not(:animated)').find('#list').stop(true).slideDown(200);
    }).mouseleave(function() {
        $(this).filter(':not(:animated)').find('#list').stop(true).slideUp(100);
    });

// 放大镜开始
  $('.img-main').mouseover(function(){
     $('.square').show();
     $('.big').show();
     $('.img-main').mousemove(function(e){
        var l = e.pageX - $('.img-main').offset().left - $('.square').width()/2;
        var t = e.pageY - $('.img-main').offset().top - $('.square').height()/2;

        var disX = $('.img-main').width() - $('.square').width();
        var disY = $('.img-main').height() -$('.square').height();
        if(l<0){
           l = 0;
        }else if(l>disX){
           l = disX;
        }
        if(t<0){
           t = 0;
        }else if(t>disY){
           t = disY;
        }
        $('.square').css({left:l,top:t});

        $('.big a img').css({left:-l*3,top:-t*3});
     })
  }).mouseout(function(){
    $('.square').hide();
    $('.big').hide();
  })

    $('.thumb div').hover(function(){
            var imgUrl = $(this).find('img').attr('src');
            $('.img-main').find('img').attr('src',imgUrl);
            $('.big').find('img').attr('src',imgUrl);
       $(this).addClass('bor').siblings().removeClass('bor');
    })


    $('.dl-col dd ul li a').mouseover(function(){
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    })


})

// hover的时候加border


