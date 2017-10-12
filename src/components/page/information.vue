<template>
	<div class="wrap">
		<div class="left">
			<ul>
				<router-link v-for="item in list" :to="{name:item.name}" tag="li" active-class="active">{{item.label}}</router-link>
			</ul>
		</div>
		<div class="right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default{
	name:'information',
	data(){
		return{
			list:[
			{
				label:"公司/部门管理",
				name:"companyManager",
				path:"",
			},
			{
				label:"设备验收",
				name:"equipAcceptance",
				path:"",
			},
			{
				label:"设备分配",
				name:"equipDistribute",
				path:"",
			},
			{
				label:"分配明细列表",
				name:"distributeDetails",
				path:"",
			},
			{
				label:"人员申请审核",
				name:"staffCheck",
				path:"",
			}
			]
		}
	}
}
</script>

<style scoped>
.left .active{
  background: #00d5c3;
}
.left li{
  color: white;
  margin: 10px 0;
  padding: 10px 30px;
  cursor: pointer;

}
</style>