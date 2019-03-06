
$(document).ready(function(){

// 头部广告进行显示隐藏
    $('.hover').click(function(){
        $('.ad').hide();
        $('.hide').show()
 })
    $('.hide').click(function(){
        $('.ad').show();
        $('.hide').hide()
    })
// nav 导航条划过显示 离开隐藏
    $('.wrap ul li').has('#list').mouseenter(function(){
        $(this).filter(':not(:animated)').find('#list').stop(true).slideDown(200);
    }).mouseleave(function() {
        $(this).filter(':not(:animated)').find('#list').stop(true).slideUp(100);
    });

// 获取搜索框焦点 显示下拉列表
    $('input[name=search]').focus(function(){
        $('.sub-list').show();
    }).blur(function(){
        $('.sub-list').hide();

    })

// 首页轮播特效
    var ImgLi = $('.banner-lunbo ul li a.big'),
        BtnL =  $('.carousel-left'),
        BtnR =  $('.carousel-right'),
        NumLi = $('.carousel-num li'),
        Box =   $('.banner-lunbo'),
        num = 0,
        timer,
        len = ImgLi.length;
        console.log(len);

    timer = setInterval(function(){
        play(num+1);
    },1000)
    Box.mouseover(function(){
        clearInterval(timer);
        BtnL.show();
        BtnR.show();
    })
    Box.mouseout(function(){
        BtnL.hide();
        BtnR.hide();
    timer = setInterval(function(){
        play(num+1);
    },1000)
    })

    NumLi.mouseover(function(){
        play($(this).index());
    })

    BtnL.click(function(){
        play(num-1);
    })
    BtnR.click(function(){
        play(num+1)
    })

   function play(n){
    if(n>len-1){
        n = 0;
    }
    if(n<0){
        n = len-1;
    }
    num = n;
    ImgLi.eq(num).fadeIn(600).parent().siblings().children('.big').fadeOut(600);
    NumLi.eq(num).addClass('active').siblings().removeClass('active');
  }

// 苏宁抢购倒计时
   var Time = $('.time');
    function run(){
            var c = new Date();
            var f = new Date('2019-02-05 00:00:00');
            var cTime = c.getTime();
            var fTime = f.getTime();
            var syTime = fTime -cTime;
            var  d = Math.floor(syTime / (24*60*60*1000));
            syTime =  syTime % (24*60*60*1000);
            var h = Math.floor(syTime /(60*60*1000));
            syTime = syTime % (60*60*1000);
            var i = Math.floor(syTime /(60*1000));
            syTime = syTime %(60*1000);
            var s = Math.floor(syTime / 1000);
            Time.innerHTML = ''+ d + '天' + h +'小时'+i+'分钟'+ s + '秒';
            Time.find('.th').html('0'+h+':');
            Time.find('.ti').html(i+':');
            Time.find('.ts').html(s+'');
    }
    setInterval(run,1000)





// banner图左边hover的时候显示内容
    $('.nav-list ul li').mouseover(function(){
        $(this).addClass('current').siblings().removeClass('current');
    })



// 苏宁抢购 hover 谁给谁加class样式
    $('.rush-con ul li').hover(function(){
        $(this).addClass('cur').siblings().removeClass('cur')
    })
    $('.rush-con ul .cur1').mouseover(function(){
        $('.tab').show().siblings('.tab1,.tab2').hide();
    })
    $('.rush-con ul .cur2').mouseover(function(){
        $('.tab1').show().siblings('.tab,.tab2').hide();
    })
    $('.rush-con ul .cur3').mouseover(function(){
        $('.tab2').show().siblings('.tab,.tab1').hide();
    })
// 苏宁抢购的无缝滚动
jQuery(function(){
   var RusLi = $('.rush-img li'),
            Rus = $('.rush-list'),
            RusR = $('.rush-you'),
            RusL = $('.rush-zuo'),
            Ul = $('.rush-img');
        var nu = 0,
            time,
            lenR = RusLi.length,
            wid = RusLi.first().width();
            RusLi.first().clone().appendTo(Ul);
            RusLi.last().clone().prependTo(Ul);
            Ul.css({marginLeft:-wid});
        Rus.mouseover(function(){
            RusL.show();
            RusR.show();
            clearInterval(time);
        }).mouseout(function(){
            RusL.hide();
            RusR.hide();

        })
        RusL.click(function(){
            play(nu-5);
        })
        RusR.click(function(){
            play(nu+5)
        })


        function play(m){
            if(!$(Ul).is(':animated')){
            var dir = m>nu?-1:1;
            var dis = Math.abs(m-nu);
            Ul.animate({
                marginLeft:'+='+wid*dir*dis
            },300,function(){
                if(m>lenR-1){
                    m = 0;
                    $(Ul).css({marginLeft:-wid});
                }
                if(m <0){
                    m = lenR-1;
                    $(Ul).css({marginLeft:-wid*lenR});
                }
                nu = m;

            })}
        }


})

    /* 判断滚动条出现*/
    console.log($(document).scrollTop());
    $(document).scroll(function(){
        if($(this).scrollTop() > 1350){
            $('.ad-fixed').slideDown(500)
        }else{
            $('.ad-fixed').slideUp(500)
        }
    })

    /* 频道hove的时候图片进行移动*/
    $('.channel-left ul li').mouseover(function(){
        $(this).find('img').css({right:'36px'})
    }).mouseout(function(){
        $(this).find('img').css({right:'20px'})
    })

    $('.channel .right-enter li').mouseover(function(){
        $(this).find('img').css({left:'-15px'})
    }).mouseout(function(){
        $(this).find('img').css({left:'0px'})
    })

// hover  楼层按钮的时候加样式

/* 实现楼层效果 */
    // 返回顶端效果
    $('.return').click(function(){
            $('body,html').animate({
                scrollTop:0
             },500);
        })
// 任意点击bar 到达对应的索引
    $('.index-bar ul li').click(function(){
        var index = $(this).index();
        var top = $('.level').eq(index).offset().top;
        $('body,html').stop(true).animate({
            scrollTop:top
        },500);
    })

// 用滚动条控制 楼层坐标
        $(window).scroll(function(){
            var scrollTop;
            $('.levelquan .level1').each(function(){
                //3.1 每个楼层的坐标
                var layerTop = $(this).offset().top;
                // 网页滚动条的坐标距离
                scrollTop = $(document).scrollTop();
                //3.2 判断条件：当滚动条滚动的距离和监听的某个楼层重合说明就在哪个楼层上(优化的条件：快重合,差100)
                if(layerTop - scrollTop < 200){
                    //3.3 给工具条中当前的标号项添加背景样式
                    $('.index-bar ul li').eq($(this).index()).addClass('on').siblings().removeClass('on');
                }
            })
            if(scrollTop > 2410){
                $('.bar').fadeIn(50);
            }else{
                $('.bar').fadeOut(50);
            }
        })


// 猜你喜欢实现预加载
     render();
    $(window).on('scroll',function () {//当页面滚动的时候绑定事件
        render();
    })
    function render(){
       setTimeout(function(){
        $('.like-content ul li a img').each(function () {//遍历所有的img标签
            if (checkShow($(this)) && !isLoaded($(this)) ){
                // 需要写一个checkShow函数来判断当前img是否已经出现在了视野中
                //还需要写一个isLoaded函数判断当前img是否已经被加载过了
                $(this).attr('src',$(this).attr('datasrc')); //符合上述条件之后，再写一个加载函数加载当前img
            }
        })
       },2000);
    }
    function checkShow($img) { // 传入一个img的jq对象
        var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
        var windowHeight = $(window).height(); // 浏览器自身的高度
        var offsetTop = $img.offset().top;  //目标标签img相对于document顶部的位置

        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //在2个临界状态之间的就为出现在视野中的
            return true;
        }
        return false;
    }
    function isLoaded ($img) {
        return $img.attr('datasrc') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
    }











        function Bubble(e){
           var e = e || window.event;
           if(e.cancelBubble){
               //IE下0
               e.cancelBubble = true;
           }else{
               e.stopPropagation();
           }
        }
})
