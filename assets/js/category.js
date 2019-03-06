$(function(){

    $('.wrap ul li').has('#list').mouseenter(function(){
        $(this).filter(':not(:animated)').find('#list').stop(true).slideDown(200);
    }).mouseleave(function() {
        $(this).filter(':not(:animated)').find('#list').stop(true).slideUp(100);
    });


    $(document).scroll(function(){
        if($(this).scrollTop() > 35){
            $('.mat-header').addClass('mat-header1')
        }else{
            $('.mat-header').removeClass('mat-header1')
        }
        if($(this).scrollTop() >60){
            $('.ms-time').addClass('ms-time1')
            $('.top_fix').fadeIn(500)
        }else{
            $('.ms-time').removeClass('ms-time1');
            $('.top_fix').fadeOut(500);
        }
    })

    // 点击 prev 实现 让上一个含有 class样式的 向上一个添加样式 并且清空其他样式
    $('.palam-time .prev').click(function(){
        $('.palam-time ul li.ative').prev().addClass('ative').siblings().removeClass('ative')
        $('.pbl').find('li').not('li:hidden').remove();
        var thsi = $('.palam-time li.ative').index();
        pb(thsi+1);
    })
    // 点击 next 实现 让上一个含有 class样式的 向下一个添加样式 并且清空其他样式
    $('.palam-time .next').click(function(){
        $('.palam-time ul li.ative').next().addClass('ative').siblings().removeClass('ative')
        $('.pbl').find('li').not('li:hidden').remove();
        var thsi = $('.palam-time li.ative').index();
        pb(thsi+1);
    })

    $('.palam-time ul li').click(function(){
        $(this).addClass('ative').siblings().removeClass('ative');
        // 瀑布流 下面的li 除了隐藏的 其他的全部清除
        $('.pbl ul').find('li.list').not('li:hidden').remove();
        var thsi = $(this).index();
        pb(thsi+1);
    })


    // 瀑布流方法实现1
    function pb(cate){
        var page = 1;
        var c = cate;
        show(c);
        function show(c){
            var uls = document.querySelectorAll('.pbl ul'),
                lis = document.querySelectorAll('.pbl ul li');
            // console.log(lis);
                $.get('assets/php/page.php',{p:page,cate:c},function(data){
                    for(var i in data){
                        var li = lis[0].cloneNode(true);
                        li.style.display='block';
                        li.children[0].children[0].children[0].children[0].setAttribute('src',data[i]['pic']);
                        li.children[0].children[0].children[1].children[0].innerHTML = data[i]['title'];
                        li.children[0].children[0].children[1].children[1].children[0].children[0].style.width = data[i]['num']+"%";
                         li.children[0].children[0].children[1].children[1].children[1].children[2].innerHTML = data[i]['num']+"%";
                        li.children[0].children[0].children[1].children[3].children[0].children[1].innerHTML = data[i]['money'];
                        var index = i % uls.length;
                        uls[index].appendChild(li);
                    }
                    // console.log(data);
                },'json')
        }

        window.onscroll=function(){
            var zh =document.body.scrollHeight || document.documentElement.scrollHeight,
                kh= document.documentElement.clientHeight,
                hd = document.body.scrollTop || document.documentElement.scrollTop;
                if(zh-kh-hd<=2000){
                    page++;
                    show(c);
                }

        }
    }
    pb(4);
        // 点击li 实现对应的li 添加class 样式


})