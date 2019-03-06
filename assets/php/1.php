<?php
    $user = $_POST['username'];
    $arr = ['13969576576','13999999999','18888888888','13333333333'];
    if(in_array($user,$arr)){
        echo '用户名被占用';
    }else {
        echo '用户可以使用';
    }
    ?>