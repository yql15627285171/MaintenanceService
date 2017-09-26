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
	name:'plan',
	data(){
		return{
			list:[
			{
				label:'默认巡查方案',
				name:'defaultPlan',
				path:''
			},
			{
				label:'定期巡检方案A',
				name:'planA',
				path:''
			},
			{
				label:'定期巡检方案B',
				name:'planB',
				path:''
			},
			{
				label:'定期巡检方案C',
				name:'planC',
				path:''
			},
			{
				label:'临时执行方案',
				name:'tempPlan',
				path:''
			},
			{
				label:'新增方案',
				name:'newPlan',
				path:''
			},
			]
		}
	}
}
</script>

<style scoped>

</style>