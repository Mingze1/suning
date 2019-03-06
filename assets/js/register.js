$(function(){


// 正则判断正确手机号
    function Phone(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
    }

// 失去焦点时候 判断 手机号是否正确
    $('input[name="ipone"]').blur(function(){
        $(this).attr('placeholder','请输入手机号');
         if(Phone($(this).val()) == false){
            $('#phone').nextAll('.pd-ipone0').css({ visibility:'visible'})
        }else if(Phone($(this).val()) == true){
            $('#phone').prev('.ok').show();
        }
        if($('input[name="ipone"]').val() == '13969576576'){
           $('.pd-ipone').css({visibility:'visible'})
        }else{
           $('.pd-ipone').css({visibility:'hidden'})
        }

        // ajax 判断用户是否被占用
          // var user = $('input[name=ipone]').val();
          // console.log(user);
          // var xhr = new XMLHttpRequest();
          // var Ipone = $('.pd-ipone')
          // xhr.open('post','assets/php/1.php',true);
          // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          // xhr.send('username'+user);
          // xhr.onreadystatechange = function(){
          //    if(xhr.readyState == 4 && xhr.status ==200){
          //      $('.pd-ipone').html(xhr.responseText);
          //    }
          // }

    })

    // 获取焦点时显示
      $('input[name="ipone"]').focus(function(){
         $('#phone').nextAll('.pd-ipone0').css({ visibility:'hidden'})
          $('#phone').nextAll('.pd-ipone1').css({ visibility:'hidden'})
            $('#phone').prev('.ok').hide();
           $(this).attr('placeholder','');

      })
       $('input[name="yz"]').focus(function(){
        $(this).attr('placeholder','');
      })
      $('input[name="yz"]').blur(function(){
        $(this).attr('placeholder','请输入手机验证码');
      })
      var timer = 0;
      // 点击 验证码判断倒计时 和 手机号是否为空
      $('.send-msg').click(function(){
        var inputval = $('input[name="ipone"]').val();
        if(inputval == 0){
            $('#phone').nextAll('.pd-ipone1').css({ visibility:'visible'})
            $('#phone').nextAll('.pd-ipone0').css({ visibility:'hidden'})
        }
        var sed = $(this);
        if(Phone($('#phone').val()) == true){
            // alert(1)
              // 判断倒计时验证码 并且显示 下面提示
             timer = 61;
            var dsq =  setInterval(function(){
               timer--;
                sed.attr('disabled',true);
                sed.val("重新发送(" + timer + ")");
                sed.nextAll('.yzm').css({visibility:'visible'});
                sed.nextAll('.voice').find('span,a').css({visibility:'visible'});
                if(timer == 0){
                sed.attr('disabled',false);
              sed.val('获取短信验证码')
                  clearInterval(dsq);
                  $('.sed').nextAll('.yzm').hide();
                  sed.nextAll('.yzm').css({visibility:'hidden'});
                  sed.nextAll('.voice').find('span,a').css({visibility:'hidden'});
                }

          $('.submit').click(function(e){
            if($('input[name="yz"]').val() == '123456'){
              // alert(1)
               $('.yzm').text('验证码正确').css({color:'red'})
            }else{
               $('.yzm').text('参数错误').css({color:'red'})
               e.preventDefault();
            }
            if($('input[name="yz"]').val().length == ' '){
               $('.yzm').text('请输入6位数验证码').css({color:'red'})
              e.preventDefault();
            }

            })

             },1000)

          }
      })
// 密码设置 正则判断
      $('input[name="password"]').bind("input propertychange",function(){
        var as = /^[0-9A-Za-z]{4,16}$/;
        var mid = /^(?=.{6,16})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$/;
        var str = /^(?=.{6,16})([0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*){2,}$/;
          if(str.test($(this).val()) == true){
            // alert(3)
             $('.s1').css({ background:'#FFAA00'});
             $('.s2').css({ background:'#FFAA00'});
             $('.s3').css({ background:'#FFAA00'});
             $('.level').show();
          }
          if(mid.test($(this).val()) == true){
            // alert(2)
            $('.s1').css({background:'#FFAA00'});
            $('.s2').css({background:'#FFAA00'});
            $('.s3').css({background:'#CACACA'});
            $('.level').show();
          }
          if(as.test($(this).val()) == true){
            // alert(1)
            $('.s1').css({background:'#FFAA00'});
            $('.s2').css({background:'#CACACA'});
            $('.s3').css({background:'#CACACA'});
            $('.level').show();
          }
          if($(this).val().length <= 5){
              $('.level').hide();
             $('.s2').css({background:'#CACACA'});
             $('.s2').css({background:'#CACACA'});
             $('.s2').css({background:'#CACACA'});
          }

          $('.eay').show()
             // function checkStrong(val) {
             //        var modes = 0;

             //        if (val.length < 6) return 0;
             //        // val 长度小于0时 返回0
             //        if (/\d/.test(val)) modes++; //数字 返回0+1

             //        if (/[a-z]/.test(val)) modes++; //小写 返回1+1

             //        if (/[A-Z]/.test(val)) modes++; //大写 返回 2+1

             //        if (/\W/.test(val)) modes++; //特殊字符 返回 3+1
             //        // if (val.length > 12) return 4;
             //        //  长度大于12时 返回4
             //        return modes;
             //    };
             //    $('input[name="password"]').keyup(function(){
             //        var pass = $(this).val();
             //        // console.log(pass);
             //        var str = checkStrong(pass);
             //        if(str == 1){
             //          $('.level').find('.s1').attr('class','on');
             //          $('.level').show();
             //        }else if(str < 1){
             //          $('.level').hide();
             //        }
             //        if(str == 2){
             //          $('.level').find('.s2').css({
             //            background:'#FFAA00'
             //          })
             //        }
             //        if(str < 2){
             //          // alert(2);
             //          $('.level').find('.s2').css({
             //          background:'#CACACA'
             //        })
             //        }

             //        if(str == 4){
             //         $('.level').find('.s3').css({
             //            background:'#FFAA00'
             //          });
             //        }else if(str < 4){
             //          $('.level').find('.s3').css({
             //          background:'#CACACA'
             //        });
             //        }
             //    })
})

// 弹出框 同意隐藏
  $('.btn').click(function(){
    $('.wrap').hide();
    $(this).attr('name','btn');
  })
  // 弹出框的协议进行 可以拖动
$('.wrap').mousedown(function(e){
      //1.1 盒子的初始的坐标位置
      var bx = $(this).offset().left;
      var by = $(this).offset().top;
      //1.2.鼠标按钮时的初始坐标位置
            var mx = e.clientX;
            var my = e.clientY;
            // 1.3. 鼠标相对盒子的偏移距离
            var posx = mx - bx;
            var posy = my - by;
             //2. 鼠标移动
             $(document).mousemove(function(e){
              //2.1 鼠标的新的坐标位置
              var newx = e.clientX;
              var newy = e.clientY;
              //2.2 移动后盒子的新坐标
                var l = newx - posx;
                var t = newy - posy;
            //
            // var W = $('.wrap').offsetWidth;
            // var H = $('.wrap').offsetHeight;
            var maxW = $(this).width() - $('.wrap').outerWidth();
            var maxH = $(this).height() - $('.wrap').outerHeight();
              if(l <= 0){
                l = 0;
              }else if(l > maxW){
                l = maxW;
              }
              if(t <= 0){
                t =0;
              }else if(t > maxH){
                t = maxH;
              }
              // 3. 更改盒子的坐标位置
              $('.wrap').css({left:l+293+'px',top:t+210+'px'});
             })
             // 4. 鼠标抬起
      $(document).mouseup(function(){
               // 取消鼠标移动
               $(this).unbind('mousemove');
               $(this).unbind('mouseup');
      });
    });
// 密码 加密 与不加密
        $('.eay').click(function(){
              $(this).hide()
              $('.eay1').show();
              $('input[name="password"]').attr('type','text')
      })
        $('.eay1').click(function(){
              $(this).hide()
              $('.eay').show();
               $('input[name="password"]').attr('type','password')
        })
// 判断 提交按钮 都输入正确后 跳转地址
      $('.submit').click(function(e){
        if(Phone($('input[name="ipone"]').val()) == true && $('input[name="yz"]').val() == '123456' && $('input[name="password"]').val().length >= '6' && $('.btn').attr('name') == 'btn'){
          window.open('login.html')
        }else{
          e.preventDefault();
        }
        if($('input[name="password"]').val().length <= '6'){
            e.preventDefault();
            $('.pd-pas0').text('不能少于6个字符').css({display:'block',color:'red'})
      }
      var inputval = $('input[name="ipone"]').val();
        if(inputval == 0){
            $('#phone').nextAll('.pd-ipone1').css({ visibility:'visible'})
            $('#phone').nextAll('.pd-ipone0').css({ visibility:'hidden'})
        }
        if($('.btn').attr('name') != 'btn'){
            e.preventDefault();
            $('.pd-pas1').text('你没有同意协议哟').css({display:'block',color:'red'})
        }



        })
      // 判断 设置密码 获取焦点时候 显示下面提示
      $('input[name="password"]').focus(function(){
        $(this).nextAll('.pd-pas').show()
        $('.pd-pas0').hide().css({color:'red'})
        $(this).attr('placeholder','');
      })
      $('input[name="password"]').blur(function(){
        $(this).nextAll('.pd-pas').hide()
         $(this).attr('placeholder','请输入密码');
      })
         function Bubble(e){
           var e = e || window.event;
           if(e.cancelBubble){
               //IE下
               e.cancelBubble = true;
           }else{
               e.stopPropagation();
           }
        }

})