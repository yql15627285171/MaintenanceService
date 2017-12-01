<template>
		<div class="">
		<div class="left">
		
			<ul>
				<li v-for="(item,index) in list" @click="checkPlan(item,index)" :class="{'active':activeLi[index]}">
				<router-link  :to="{name:item.name}">{{item.label}}</router-link>
				</li>
				<!-- <router-link v-for="item in list" :to="{name:item.name}" tag="li">{{item.label}}</router-link> -->
			</ul>
		</div>
		<div class="right">
			<keep-alive>
				<router-view :check='check' @change-name="changeName" @delete-plan="deletePlan"></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>


export default{
	name:'plan',
	data(){
		return{
			list:this.$store.getters.getPlanList,
			oldCheck:{},
			check:{},
			activeLi:[]

		}
	},
	mounted(){
		// 网络请求，获取列表
		// this.$store.getters.getPlanList添加数据
		// 成功添加后，添加路由
	},
	methods:{
		checkPlan(item,index){
			// 控制点击的背景
			for (var i = 0; i < this.list.length; i++) {
				if (index == i) {
					this.activeLi[i] = true;
				}else{
					this.activeLi[i] = false
				}
			}
			this.oldCheck = {name:item.label}
			this.check = {name:item.label}
			
		},

		changeName(value){
			var that = this
			
			// var routeName = this.$route.name

			this.$store.getters.getPlanList.forEach(function(element,index,array){
				if (element.label==that.oldCheck.name) {
	
					that.$store.getters.getPlanList[index].label = value
					// 重新更新oldCheck
					that.oldCheck = {name:value}
					return
				}
			})	
		},

		deletePlan(){

			this.$store.getters.getPlanList.forEach( (element, index,array) =>{
				// console.log(this.activeLi)
				// statements
				if (element.label==this.oldCheck.name) {
					// statement
					array.splice(index, 1)	
					// 取消被点的
					this.activeLi.splice(index, 1)
					// 删除方案后返回第一个界面
					this.$router.go(-1)
					this.activeLi[0]=true

					return
				}
			});
		}
		
	}
}
</script>

<style scoped>
.active{
	background: #00d5c3
}
.left a{
	display: block;
  /* color: white; */
  margin: 10px 0;
  padding: 10px 30px;
  cursor: pointer;

}
</style>