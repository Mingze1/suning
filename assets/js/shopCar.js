
$(function(){

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

// 三级联动 效果

        var value1,value2;
        // 1.将省名称加载
        var link1 = '<option value="">---请选择---</option>';
        for(i in GP){
             link1 +='<option value="'+i+'">---'+GP[i]+'---</option>';
        }
        $('#pro').html(link1);

        // 2.改变(change事件)省加载市
        $('#pro').change(function(){
            // 通过change省名称获得省对应的下标编号
            value1 = $(this).val()//.attr('value');
            // GT 二维数组  GT[3] 对应一维
            var link2 = '<option value="">---请选择---</option>';
            for(i in GT[value1]){
                 link2 += '<option value="'+i+'">---'+GT[value1][i]+'---</option>';
            }
            $('#city').html(link2);
        })

        // 3. 改变市加载县区
        $('#city').change(function(){
            //通过change市名称获得市对应的下标编号
            value2 = $(this).val();
            //GC 三维数组 GC[3] 对应二维 GC[3][0] 对应一维
            var link3 ='<option value="">---请选择---</option>';
            for(i in GC[value1][value2]){
                link3 += '<option value="'+i+'">---'+GC[value1][value2][i]+'---</option>';
            }
            $('#block').html(link3);
        })
// 购物车效果
/* $('.all').click(function(){
    var checks = $('input[type="checkbox"]');
    if($(this).is(':checked')){
       checks.prop("checked",true);
    }else{
        checks.prop("checked",false);
    }
    total();
 })



    $('.shop .item').click(function(){
        var goodsLen = $('.onesp').length;
        var num = 0;
        $('.onesp').each(function(){
            if($(this).is(':checked')){
              num++;
            }
        })

        if(num == goodsLen){
            $('.all').prop("checked",true);
        }else{
            $('.all').prop("checked",false);
        }
        total();
    })




$('.jia').click(function(){
    var num = parseInt($(this).prev('.num').val())+1;
    $(this).prev('.num').val(num);
    total()
})

$('.jian').click(function(){
    var jian = $(this).next('.num');
    if(parseInt(jian.val()) <= 1){
        jian.val(1)
        return false;
    }
    var num = parseInt(jian.val()-1);
    jian.val(num);
    total()
})


function total(){
       var total = 0;
       var count = 0;
       $('.shop').each(function(i){

            var input=  $(this).find('.onesp').is(':checked');
            console.log(input);
            if(input){
                var onlyprice = parseFloat($(this).find('.price_one').html().replace('￥',''));
                var num = parseInt($(this).find('.num').val());
                //console.log(onlyprice,num);
                var smallprice =onlyprice *num;
                $(this).find('.price_two').html('￥'+smallprice.toFixed(2));

            total += smallprice;
            count += num;
            }
       })
       $('.total').html(total.toFixed(2));
       $('.totalcount').html(count);

    }
    // 初始结算
    total();




// 是否删除
$('.del').click(function(){
    $('.box').show();
})

$('.btn1').click(function(){
    $('.store').hide();
    $('.box').hide()
})
$('.btn2').click(function(){
    $('.box').hide()
});*/

    //1.全局全选不选与单个商品的关系
    $('#all input').click(function () {
        var $checkboxs = $('.alllist input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
        } else {
            $checkboxs.prop("checked", false);
        }
        total(); // 并且重新计算总价格和商品个数
    });

    //2./*判断:每个产品选中的长度是否等于产品总长度*/

    function sum(){
                //判断：所有单个商品是否勾选
                var len = $('.goodscheckinput').length;
                var num = 0;
                $('.goodscheckinput').each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $('#all input').prop("checked", true);

                }else {
                   //单个商品取消勾选，全局全选取消勾选
                    $('#all input').prop("checked", false);
                }
                total();
    }

  //3.点击店铺全选每个店铺的商品。判断选中的产品个数是否等于每个产品的总个数,是勾选全局全选
   $('.typeall input').click(function(){
        var $list_input=$(this).parents('.goodslist').find('.goodscheckinput');
        if ($(this).is(':checked')) {
            $list_input.prop("checked",true);

        }else{
            $list_input.prop("checked",false);

        }
        sum();

})
/*4.选中的产品是否等于每个店铺的总个数,是否勾选店铺，再判断全局全选*/
// 多个店铺点击
$(".goodslist").click(function(){
        var $ul_input=$(this).find('.typecheck'); //店铺全选
                var len = $(this).find('.goodscheckinput').length;
                var num = 0;
                $(this).find('.goodscheckinput').each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $ul_input.prop("checked",true);
                }else{
                    $ul_input.prop("checked",false);
                }
        sum();
})

/*5点击加一*/
$('.jia').click(function(){
        if($(this).prev('.num').val()>100){
            $(this).prev('.num').val(100);
            $('.alert').show().val('超出库存了！');
            setTimeout(function(){$('.alert').hide();},2000);
            return false;
        }else{
            $(this).prev('.num').val(parseInt($(this).prev('.num').val())+1);
        }

            /*计算总钱数*/
            total();
            /*计算总钱数*/

})

/*6点击减一*/
$('.jian').click(function(){
        if($(this).next('.num').val()<=1)
            $(this).next('.num').val(1);
        else
            $(this).next('.num').val(parseInt($(this).next('.num').val())-1);
        /*计算总钱数*/
        total();
        /*计算总钱数*/

})

$('.num').keyup(function () {
        var $count = 0;
        if($(this).val()==''){
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,'1'));
        $count = $(this).val();
        $(this).val($count);
        total();
    })

/*计算总钱数*/
function total(){
        var S=0; // 总的价格
        var tnum =0;//总的个数
        // 循环遍历每个店铺的小计：
        $.each($('.total'), function() {
            var $ul_total=$(this).prev('.list').find(".goodscheckinput");
            var s=0; // 每个店铺的小计
            var n1=0;// 每个店铺的商品个数
            $.each($(this).prev('.list').find(".num"), function(i) {
                if($ul_total.eq(i).is(":checked")){
                    //  当前店铺 每个商品*对应的每个单价
                    s=s+parseInt($(this).val())*parseInt($(this).parent().prev().html().replace("￥",""));
                    n1=n1+parseInt($(this).val());
                }
            });
            // 添加 每个店铺的小计和 每个店铺的商品个数
            $(this).children("span").html("￥"+s.toFixed(2));
            $(this).children("number").html(n1);

            // 所有店铺的小计累加得到总价格和总个数
            S=S+s;
            tnum = tnum + n1;
        });
    $("#totalmoney").html(S.toFixed(2));
    $("#checkedNum").html(tnum);
}
// 初始化
total();


// 点击按钮删除 显示遮罩层
    var condel,
            door,
            news;
        $('.handle div').click(function(){
            // 3.1 找对应按钮的当前产品
            condel = $(this).parents('.goodsdetails')
            news = $(this).parents('.list')
            // 3.2 对应店铺
            door  = $(this).parents('.goodslist');
            $('.model').fadeIn(300);
            $('.bg').fadeIn(300);
        })
        // 2. 点击 X 或者 取消 关闭面
        $('.close').click(function(){
            del();
        })
        $('.cancel').click(function(){
            del();
        })

        function del(){
            $('.model').fadeOut(300);
            $('.bg').fadeOut(300);
        }

        // 3. 点击确认按钮
        $('.sure').click(function(){
             //3.3 将当前选择的删除按钮的对应产品删除
             condel.remove();
             // 3.4 判断 当前店铺的商品是否空如果为空删除当前店铺
             //console.log(news.find('div').length);
             //console.log(door);
             if(news.find('div').length==0){
                door.remove();
             }
             del();

        })


})