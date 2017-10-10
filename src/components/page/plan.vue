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
			list:this.$store.getters.getPlanList
		}
	},
	mounted(){
		// 网络请求，获取列表
		// this.$store.getters.getPlanList添加数据
		// 成功添加后，添加路由
	}
}
</script>

<style scoped>

</style>