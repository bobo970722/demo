<template>
  <div class="a">
    <el-container>
    <el-header style="height:10%;">大宝贝<p class="el-icon-circle-close-outline"></p></el-header>
    </el-container>
    <div id="b">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="主页" name="first">
      <div id="c">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="视频">
      <div class="a">
        <div id="aa">
          <mt-cell>
        <video id="l" width="100" height="80">
          <source src="../video/1.mp4" type="video/mp4">
        </video>
          <p id="ff">啊哈哈哈啊哈笑死</p>
          <div class="tt">
          <p id="ee">3/12</p>
          </div>
          <div class="icon"><router-link to="/video" class="el-icon-arrow-right" @click="handlePlay"></router-link></div>
          </mt-cell>
        </div>
        <div id="bb">
          <mt-cell>
        <video id="k" width="100" height="80">
          <source src="../video/2.mp4" type="video/mp4">
        </video>  
        <p class="ff">
          小裙子( •̀ ω •́ )y耶
        </p>
        <div id="ui">
        <p class="ee">
          3/30
        </p>
        </div>
          </mt-cell>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane id="fff" label="相册">
      <el-tag @click="handleShow">最新</el-tag>
      <el-tag>最多查看</el-tag>
      <el-tag>最喜欢</el-tag>
      <el-tag>最多评论</el-tag>
      <img src="../img/1.png">
      <img src="../img/2.jpg">
      <img src="../img/3.jpg">
    </el-tab-pane>
  </el-tabs>
    </div>
    </el-tab-pane>
    <el-tab-pane label="动态" name="second"></el-tab-pane>
    <el-tab-pane label="收藏" name="third"></el-tab-pane>
    <el-tab-pane label="好友" name="third"></el-tab-pane>
    <el-tab-pane label="评论" name="third"></el-tab-pane>
    <el-tab-pane label="其他" name="third"></el-tab-pane>
    </el-tabs>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'first',
      tabPosition: 'left'
    }
  },
  methods:{
    handleClick(tab,event){
      console.log(tab,event)
    },
    handlePlay(){
      var video=document.getElementById("l");
      video.play();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon{
  float:top;
  margin-bottom: 13%;
}
.el-icon-arrow-right{
  color: black;
}
#fff{
  height:800px;
}
img{
  margin-top:10%;
  text-align: left;
  width:30%;
  height:10%;
}
.ff{
  color: black;
  margin-top:0px;
  margin-left:1%;
  text-align: left;
}
.tt{
  margin-bottom:0px;
  margin-top:15%;
}
#ui{
  margin-bottom:0px;
  margin-top:15%;
}
#ee{
  margin-bottom:0px;
}
#ff{
  margin-left:1%;
  margin-top:0px;
  text-align: left;
  color: black;
}
video{
  float: left;
  margin-left: 0%;
  margin-right: 1%;
}
p{
  float:right;
  margin-top:1%;
}
a.el-header{
  margin-top:0px;
  height:55px;
}

</style>
