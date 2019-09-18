<template>
<div class="bgm">
  <div class="footer">
     <ul class="nav mb-3 ">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="../../public/img/icon1.png">
            <h5 class="text-muted mt-4">正版保障</h5>
          </a>
          <div class="b_title text-muted">
                <span>100%正版保障</span><br>
                <span>侵权赔付最高额</span>
            </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="../../public/img/icon2.png">
            <h5 class="text-muted  mt-4">价格优势</h5>          
          </a>
          <div class="b_title text-muted">
                <span>图片价格低至2元/张</span><br>
            </div>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">
            <img src="../../public/img/icon3.png">
            <h5 class="text-muted  mt-4">私人订制</h5>
          </a>
          <div class="b_title text-muted">
                <span>看您心情</span><br>
                <span>随意切换图片</span>
            </div>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">
            <img src="../../public/img/icon4.png">
            <h5 class=" text-muted mt-4">授权证明</h5>
          </a>
          <div class="b_title text-muted">
                <span>每张图片自动生成图片授权书</span><br>
                <span>支持多个子账号</span>
          </div>
        </li>
      </ul>  
    </div>
    <div class="about_me">
      <div class="">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item :to="{ path: '/' }">关于我们</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">联系我们</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">代理合作</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/" style="color:#000">使用帮助</a></el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      </div>
      <div>
        <img src="../../public/img/erweima.png" alt=""><br>
        <span>扫码下载APP</span>
      </div>  
  </div>
</template>
<script>
export default {
  
}
</script>
<style  scoped>
 .bgm{
   background-image: url("../../public/img/bd_img6.jpeg");
    background-size: 100%;
 }
  .footer{
    margin-top: 20px;
    
    opacity: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  ul{
    margin-top: 40px;
  }

  ul li{
    background-color: rgba(80, 80, 80, 0.2);
    margin-right:10px ;
    width: 200px;
    height: 200px;
   
  }
 
  .b_title{
    font-size: 14px;
  }
  .about_me{
    display: flex;
    justify-content: center;
    margin-bottom:20px ;

  }
</style>
