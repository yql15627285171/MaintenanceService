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
	name:'statistic',
	data(){
		return{
			list:[
			{
				label:"电表分布",
				name:"meterArea",
			},
			{
				label:"当前出勤情况",
				name:"nowWorking",
			},
			{
				label:"实时服务地点",
				name:"nowServicePlace",
			},
			{
				label:"故障类型统计",
				name:"troubleType",
			},
			{
				label:"故障分布统计",
				name:"troubleArea",
			},
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