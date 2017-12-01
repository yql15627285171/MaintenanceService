<template>
  <div id="app">
    <div class="header">
      <el-row>
        <el-col :span="1" :offset="1">
          <div class="grid-content">
            <img src="./assets/MFALogo.png" alt="" class="logo">
          </div>
        </el-col>
         <el-col :span="17">
          <div class="grid-content logoText">
            智能电网运维服务平台
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content userName">
            姓名：泰瑞捷
          </div>
        </el-col>
      </el-row>
    </div>


    <!-- <div class="navigation">
      <ul>
        <router-link v-for="item in navigation" :to="{name:item.name}" tag="li" active-class="active">{{item.label}}</router-link>

        <router-link v-for="item in navigation" :to="{name:item.name}" active-class="active">{{item.label}}</router-link>

        <el-row>
        </el-row>
      </ul>
    </div> -->
      

  <el-row class="tac" >
    <el-col :span="4" :offset='1' class='leftContent'>
      <el-menu
        :default-active="active"

        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#ffffff">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>方案管理</span>
          </template>
          <router-link v-for='(item,index) in plan' :to='{name:item.name}' >
            <el-menu-item :index="item.index" @click='clickPlan(item)'>{{item.label}}</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-printer"></i>
            <span>信息管理</span>
          </template>
          <router-link v-for='item in information' :to='{name:item.name}' >
            <el-menu-item :index="item.index">{{item.label}}</el-menu-item>
          </router-link>
        </el-submenu>
        
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>统计查询</span>
          </template>
          <router-link v-for='item in statistics' :to='{name:item.name}' >
            <el-menu-item :index="item.index">{{item.label}}</el-menu-item>
          </router-link>
        </el-submenu>

    </el-menu>
    </el-col>
    <el-col :span='18' class="rightContent">
      <keep-alive>
       <router-view :check='check' @change-name="changeName" @delete-plan="deletePlan" @add-plan='addPlan'></router-view>
     </keep-alive>
    </el-col>
  </el-row>

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
      oldCheck:'',
      check:{},
      active:'1-1',
      plan:[
        {
          label:'增加方案',
          name:'0',
          paht:'/plan/0',
          index:'1-1'
        },
        {
          label:'默认方案',
          name:'1',
          paht:'/plan/1',
          index:'1-2'
        }
      ],
      information:[
      {
          label:"公司/部门管理",
          name:'companyManager',
          path:'/information/companyManager',
          index:'2-1'
      },
      {
          label:"设备验收",
          name:'equipAcceptance',
          path:'/information/equipAcceptance',
          index:'2-2'
      },
       {
          label:"设备分配",
          name:'equipDistribute',
          path:'/information/equipDistribute',
          index:'2-3'
      },
      {
          label:"分配明细列表",
          name:'distributeDetails',
          path:'/information/distributeDetails',
          index:'2-4'
      },
      {
          label:"人员申请审核",
          name:'staffCheck',
          path:'/information/staffCheck',
          index:'2-5'
      }

      ],

      statistics:[
      {
          label:"电表分布",
          name:'meterArea',
          path:'/statistics/meterArea',
          index:'3-1'
      },
      {
          label:"当前出勤情况",
          name:'nowWorking',
          path:'/statistics/nowWorking',
          index:'3-2'
      },
      {
          label:"实时服务地点",
          name:'nowServicePlace',
          path:'/statistics/nowServicePlace',
          index:'3-3'
      },
      {
          label:"故障类型统计",
          name:'troubleType',
          path:'/statistics/troubleType',
          index:'3-4'
      },
      {
          label:"故障分布统计",
          name:'troubleArea',
          path:'/statistics/troubleArea',
          index:'3-5'
      },
      {
          label:"巡检途径",
          name:'checkPath',
          path:'/statistics/checkPath',
          index:'3-6'
      }
      ]
    //   navigation:[
    //   {
    //     label:"方案管理",
    //     name:'plan',
    //     path:"/plan"
    //   },
    //   {
    //     label:"信息管理",
    //     name:'information',
    //     path:"/information"
    //   },
    //   {
    //     label:"统计查询",
    //     name:'statistics',
    //     path:"/statistics"
    //   }
    // ]
    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      // 点击方案列表
      clickPlan(item){
        this.oldCheck = item.label
        this.check = {name:item.label}
      },

      changeName(value){
      var that = this
      
      this.plan.forEach( function(element, index) {
          if (element.label == that.oldCheck) {
            // statement
            that.plan[index].label = value


            return
          }

      });

    },

    deletePlan(){
      var len = this.plan.length

      this.plan.forEach( (element, index,array) =>{
          
          if (element.label == this.oldCheck) {
            array.splice(index, 1)

            for (var i = index; i < len - 1; i++) {
            
              this.plan[index].index = '1-'+ i
            }

            // this.active = '1-1'
            // this.$router.push({path:'/'})
            window.location.reload();
            
          }
      })
      console.log(this.plan)
    

      // this.$store.getters.getPlanList.forEach( (element, index,array) =>{
      //   // console.log(this.activeLi)
      //   // statements
      //   if (element.label==this.oldCheck.name) {
      //     // statement
      //     array.splice(index, 1)  
      //     // 取消被点的
      //     this.activeLi.splice(index, 1)
      //     // 删除方案后返回第一个界面
      //     this.$router.go(-1)
      //     this.activeLi[0]=true

      //     return
      //   }
      // });
    },


    // 增加方案
    addPlan(planLabel){
      var len = this.plan.length + 1
      var aPlan = {
        label:planLabel,
        name:'1',
        paht:'/plan/1',
        index:'1-' + len
      }
      this.plan.push(aPlan)
    }
  },
  mounted(){
    this.$router.push({path:'/'})
  }
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

/*element-UI分布样式*/
.leftContent{
  height: 700px;
  overflow: auto;
  background-color: #fff;
}
.rightContent{
  height: 700px;
  background-color: #fff;
  margin-left: 10px;
  overflow: hidden;
}
/**/

.header{
  background-color: #00d5c3;
  height: 80px;
  line-height: 80px;
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
  float: right;

  margin-top: 15px;
}

.logoText{
  /*float: left;*/
  margin-left: 20px;
  font-size: 28px;
  color: #fff;
}

.userName{
  /*float: right;*/
   color: #fff;
   text-align: right;
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
 /* background: rgba(0, 0, 0, 0.7); */
  float: left;
  background: #fff;
 
}

.left li{
  color: #000;

}

/* .left .active{
  background: #00d5c3;
} */
/* .left li:hover{
  background: #369;
} */

.right{
  width: 1000px;
  /* width: 80%; */
  height: 700px;
  float: right;
  /* background-image: url('./assets/bg.png'); */
  color: #000;
  background: #fff;
}

</style>
