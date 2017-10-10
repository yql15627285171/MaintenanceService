<template>
  <div id="app">
    <div class="header">
      <div class="wrap">
        <img src="./assets/MFALogo.png" alt="" class="logo">
        <div class="logoText">智能电网运维服务平台</div>
        <div class="userName">姓名：泰瑞捷</div>
      </div>
    </div>
    <div class="navigation">
      <div class="wrap">
      <ul>
        <router-link v-for="item in navigation" :to="{name:item.name}" tag="li" active-class="active">{{item.label}}</router-link>
        <!-- <li v-for="item in navigation">{{item.name}}</li> -->
      </ul>
      </div>
      
    </div>

       <router-view></router-view>
   

    <div class="footer">
      <p>CopyRight © 2017 深圳市航天泰瑞捷电子有限公司 版权所有</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      navigation:[
      {
        label:"方案管理",
        name:'plan',
        path:"/plan"
      },
      {
        label:"信息管理",
        name:'information',
        path:"/information"
      },
      {
        label:"统计查询",
        name:'statistics',
        path:"/statistics"
      }
    ]
    }
  },

}
</script>

<style>
html, body, div, span, applet, object, iframe, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}

.header{
  background-color: #00d5c3;
  height: 90px;
  line-height: 90px;
  width: 100%;
}

.wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.footer{
  text-align: center;
  height: 80px;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  /* margin-top: 30px; */
}

.logo{
  float: left;
  margin-top: 20px;
}
.logoText{
  float: left;
  margin-left: 20px;
  font-size: 28px;
  color: #fff;
}

.userName{
  float: right;
   color: #fff;
}

.navigation{
  height: 60px;
  background:rgba(0, 0, 0, 1);
/*   width: 1200px;
  margin: 0 auto; */
}
.navigation li{
  display: inline-block;
  color: white;
  height: 60px;
  line-height: 60px;
  margin: 0 60px;
}

.navigation .active,.navigation li:hover{
  color: red;
  cursor: pointer;
}

.container{
  height: 700px;
}

.left{
  height: 700px;
  width: 200px;
  /* width: 20%; */
 /*  background: -webkit-linear-gradient(left top,rgba(0, 0, 0, 8.0),#55617b,rgba(0, 0, 0, 8.0)); */
 background: rgba(0, 0, 0, 0.7);
  float: left;
 
}

.left li{
  color: white;
  margin: 10px 0;
  padding: 10px 30px;
  cursor: pointer;

}

.left .active{
  background: #00d5c3;
}
.left li:hover{
  background: #369;
}

.right{
  width: 1000px;
  /* width: 80%; */
  height: 700px;
  float: right;
  background-image: url('./assets/bg.png');
}

</style>
