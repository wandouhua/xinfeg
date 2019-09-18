<template>
  <div>
  <my-header></my-header>
    <div class="floor-title">
    <hr>
    <div class="floor">
        <img src="../../public/img/details.png"  alt="">图片详情
     </div>
    <hr>
  </div>    
     <div class="details">
      <div class="demo-image__preview">
        <el-image class="details_imgs"  :src="url"  :preview-src-list="srcList"></el-image>
      </div>
      <div class="details_desc" >
         <h4 class="mt-3">春日里的粉色桃花</h4> <br>
         <span >桃林蓓蕾初绽,密密的枝丫上好像挂满了银色的微型的灯泡,<br> 串串洁白的花苞珍珠似的晶莹闪耀</span><br>
         <div class="button">
        <el-button type="success" round>设置壁纸</el-button> 
        <el-button type="success" round>下载图片</el-button> 
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        </div>
      </div>
    </div>
  <my-footer></my-footer>    

</div>
</template>
   <script>
  export default {
    data() {
      return {
        url: 'https://pic.superbed.cn/item/5d521165451253d178641074.jpg',
        srcList: [
          'https://pic.superbed.cn/item/5d521165451253d178641074.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
  .details_imgs{
     width: 408.90px;
     height: 274px;
     /* display: flex;
     justify-content: left; */
     margin-top:20px;
     margin-left:200px;  
   }
   .floor {
    text-align: left;
    margin-top:20px;
    margin-left: 20px;
    border: 1px 
  }
   .floor img{
    width: 35px;
    height: 30px;
    margin-right: 20px;
  }
 .details{
    display: flex;
    justify-content:left ;
    margin-top: 40px;
    margin-bottom: 40px;
 }
 .details_desc{
    margin-left: 50px;
    font: Comic Sans MS;
 }
 .button{
   margin-top:40px; 
 }
  
  
 .floor-title{
      display: flex;
    }
  .floor-title  hr{
      width: 100%;
      border:1px solid black;
      height: 0;
    }
   .floor-title .floor{
      width: 400px;
      text-align: center;
      margin-top:5px; 
    }

</style>