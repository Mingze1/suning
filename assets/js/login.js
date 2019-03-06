 $(function(){
    // 判断点击扫码登录 和账户登录
            $('.tab_item').click(function(){
                $(this).addClass('on').siblings().removeClass('on');
                $(this).children('i').addClass('hover').parent().siblings().find('i').removeClass('hover');
                $('.login_inp li').eq($(this).index()).show().siblings().hide();
            })

            // 触碰二维码时 出现另一张图
            $('.er').mouseenter(function(){
                $(this).find('.qr').stop(true).animate({
                      left:35
                },200,function(){
                    $('.ipone').show('fast');
                })

            }).mouseleave(function(){
                $(this).find('.qr').stop(true).animate({
                      left:113
                },200)
                 $('.ipone').hide('fast');
            });

        //     $('label').click(function(e){
        //         $(this).hide()

        //         Bubble()
        //     })

        //     $('html,body').click(function(){
        //         $('label').show();
        //     })
        // 判断账户登录 和手机验证码登录
         $('.switch').click(function(){
              $('.Mobile').show();
              $('.User').hide();
              $(this).hide();
              $('.user-login').show();
         })
         $('.user-login').click(function(){
            $('.Mobile').hide();
            $('.User').show();
            $(this).hide();
            $('.switch').show();
         })
         // 调用冒泡函数
            function Bubble(e){
           var e = e || window.event;
           if(e.cancelBubble){
               //IE下
               e.cancelBubble = true;
           }else{
               e.stopPropagation();
           }
        }
        // 判断获取焦点时 取消placeholder内容
        $('input').focus(function(){
            $(this).attr('placeholder','');
            if($(this).attr('name') == 'user'){
            $(this).next('i').attr('class','user-icon2')
        }else if($(this).attr('name') == 'password'){
            $(this).next('i').attr('class','pas-icon2')
        }
         Bubble()
        })
        // 判断 input 标签 on事件 在输入中时 的事件
        $("input").on('input',function(){
            $(this).nextAll('em').addClass('clear').show();
            if($(this).val() == ''){
                $(this).nextAll('em').removeClass('clear').hide();
            }
        })
        // 判断 input 失去焦点的事件
        $('input').blur(function(){
            // if判断 input 加入placeholder 内容 和修改class样式
            if($(this).attr('name') == 'user'){
            $(this).attr('placeholder','用户名/手机/邮箱/门店会员卡号');
             $(this).next('i').attr('class','user-icon')
            }else if($(this).attr('name') == 'password'){
            $(this).attr('placeholder','密码');
            $(this).next('i').attr('class','pas-icon')
        }
        // 判断input 的value值 不等于0 的时候 进行添加 进行显示
        // else 等于0的时候 进行删除并且隐藏
           if($(this).val().length != 0){
                $(this).nextAll('em').addClass('clear').show()

           }else{
             $(this).nextAll('em').removeClass('clear').hide();
           }
        })
        // 判断点击em  差号 的时候 进行 移除 class样式 并且清除value值
        $('em').click(function(){
           $(this).prevAll('input').val('');
           $(this).removeClass('clear')
        })
        // 点击 .submit 登录 的时候进行判断 val 里面的值
        $('.submit').click(function(e){
            var user = $('input[name="user"]').val();
            var pas = $('input[name="password"]').val();
            console.log(pas);
            if(user == '' || user== ' '){
                $('.reg').css({visibility:'visible'}).find('span').text('请输入用户名/邮箱/手机号');
                e.preventDefault();
                Bubble();
            }else if(pas == '' || pas== ' '){
                 $('.reg').css({visibility:'visible'}).find('span').text('请输入密码');
                 e.preventDefault();
                  Bubble();
            }else if(user != 'admin'){
                $('.reg').css({visibility:'visible'}).find('span').text('账号错误');
                 e.preventDefault();
                 Bubble();
            }else if(pas != '123'){
                $('.reg').css({visibility:'visible'}).find('span').text('密码错误');
                 e.preventDefault();
                 Bubble();
            }else{
                window.open('index.html')
            }

        })
    // 点击body html 除了 submit的时候 进行吧 判断显示出来的字清除
        $('body,html:not(".submit")').click(function(){

             $('.reg').css({visibility:'hidden'}).find('span').html('');

             Bubble();

        })

        })
