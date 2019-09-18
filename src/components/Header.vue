<template>
    <div class="container-fulit">
        <div class="header d-flex">
            <div class="d-flex">
                <img class="w-20" src="../../public/img/sign.png" alt="">
                <p class="title p-0 mb-0">Xinfeg</p>
                <ul class="list-unstyled d-flex  my-title mt-5">
                    <li>
                        <span class="iconfont">&#xe62a;</span>
                        <a href="">首页</a>
                    </li>
                    <li >
                        <span class="iconfont">&#xe635;</span>
                        <a href="">电脑壁纸</a>
                    </li>
                    <li >
                        <span class="iconfont">&#xe636;</span>
                        <a href="">手机壁纸</a>
                    </li>
                    <li >
                        <span class="iconfont">&#xe62e;</span>
                        <a href="">美女图片</a>
                    </li>
                </ul>
            </div>
            <div class="my_icon">
                    <span class="span_size">图片合集</span>
                <div>
                    <input style=" border-radius: 15px;" type="text" placeholder="请输入您要搜索的内容">
                </div>
                <div>
                    <img src="../../public/img/header.png" alt="">
                </div>
                <div>
                    <a href="">登陆</a>
                    <a href="">注册</a>
                </div>
            </div>
                
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
   .header {
    background-image: url("../../public/img/bd_img2.jpeg");
    background-size: 100%;
    opacity: 100%;
    width: 100%;
    height: 150px;
    justify-content: space-between;
}

.title {
    font: 40px Calibri !important;
    clear: both;
    margin-top: 105px;
    margin-left: -30px;
    color: #fff;
}
ul li {
    margin-right: 40px;
}

ul li a {
    color: #000;
}
.my_icon {
    margin-top:50px; 
    display:flex;
    justify-content: right;
    color: #000;
    margin-right:40px 
}
.my_icon a{
     color: #000;
     margin-left:10px; 
    
}
.my_icon  img {
    width: 25px;
    height: 25px;
    margin-left:10px; 
}
.span_size{
    margin-top: 5px;
    margin-right: 10px
}
</style>