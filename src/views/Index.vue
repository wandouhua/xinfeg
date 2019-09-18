<template>
  <div class="Index">
  <my-header></my-header>
  <!-- 一楼 -->
  <div class="floor">
  <img src="../../public/img/floor.png"  alt="">首页推荐 / 1F
  </div>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item   v-for="item in imgs"  :key="item.id"   >
      <img  class="medium" :src="item.src"/>
    </el-carousel-item>
  </el-carousel>
  <hr>
  <!-- 二楼 -->
  <div class="floor">
  <img src="../../public/img/floor.png"  alt="">热图推荐 / 2F
  </div>
  <!-- 图组一 -->
    <div class="img_title" >自然风光</div>
    <el-row :gutter="20" >
      <el-col :span="6" style="margin-top:20px;" v-for="(item,index) of Hotimgs"  :key="index"><div class="grid-content bg-purple">
           <img  style="width:460px;height:210px" :src="img_index" alt=""></div></el-col> 
    </el-row>
   <el-button type="primary" :loading="true"> 点击加载更多</el-button>
     <div class="img_title" >日系人像</div>
    <el-row :gutter="20" >
      <el-col :span="6" style="margin-top:20px;" v-for="(item,index) of personimgs"  :key="index"><div class="grid-content bg-purple">
        <img  style="width:460px;height:210px" :src="img_index" alt=""></div></el-col> 
    </el-row>
   <el-button type="primary" :loading="true">点击加载更多</el-button>
   <my-footer></my-footer>
  </div>  
</template>
<script>
export default {
    data(){
      return{
        imgs:[{src:"https://pic.superbed.cn/item/5d521203451253d178641c5d.jpg"},
              {src:"https://pic.superbed.cn/item/5d521203451253d178641c55.jpg"},               
              {src:"https://pic.superbed.cn/item/5d52119d451253d17864145e.jpg"},
              {src:"https://pic.superbed.cn/item/5d5211ed451253d17864195d.jpg"}],
        Hotimgs:[],
      personimgs:[{src:"https://icweiliimg6.pstatp.com/weili/ms/579853939706822680.webp"},
                  {src:"https://icweiliimg1.pstatp.com/weili/ms/579873928483569666.webp"},
                  {src:"https://weiliicimg1.pstatp.com/weili/ms/579847145068560399.webp"},
                  {src:"https://weiliicimg6.pstatp.com/weili/ms/579862100143636490.webp"},
                  {src:"https://icweiliimg1.pstatp.com/weili/ms/579849103568535552.webp"},
                  {src:"https://icweiliimg9.pstatp.com/weili/ms/579862667075256320.webp"},
                  {src:"https://icweiliimg1.pstatp.com/weili/ms/579860682804428806.webp"},
                  {src:"https://icweiliimg9.pstatp.com/weili/ms/579862624130695178.webp"},
                  {src:"https://icweiliimg1.pstatp.com/weili/ms/579861163840765974.webp"},
                  {src:"https://weiliicimg6.pstatp.com/weili/ms/579853037763690497.webp"},
                  {src:"https://weiliicimg1.pstatp.com/weili/ms/579853347001335810.webp"},
                  {src:"https://weiliicimg6.pstatp.com/weili/ms/579862383612526631.webp"},


      ]}
    },
    created(){//组件创建周期的路由钩子
      this.load();//创建完就马上调用这个函数
    },
    methods:{
      load(){//发送请求给后台获取相应图片路径，并保持到data对应变量中
        this.axios.get("").then(result=>{
          this.imgs=result.data.data.img_index;
          this.Hotimgs=result.data.data.img_index;
          this.personimgs=result.data.data.personimgs;
        })
      }
    }
}
</script>


<style scoped >
  .floor {
    text-align: left;
    margin-top:20px;
    margin-left: 20px;
  }
  .floor img{
    width: 35px;
    height: 30px;
    margin-right: 20px;
  }
  .el-carousel__item   img {
    width:100%;
    height:400px
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  el-button{
    margin-top:10px;
    margin-right:10px ; 
  }
  .img_title{
    font-size: 25px;
    text-align: center;
    margin-top:10px;
    margin-left: 72px 
  }
  
</style>
