<template>
	<div>
		<!-- <input type="text"> -->
		<v-block :data-tree='dataTree' :plan-name='planName' @change-data='changeData'></v-block>
	</div>			
</template>
<script>
import vBlock from "./block"
export default{
	name:'defaultPlan',
	components:{
		vBlock
	},
	data(){
		return{
			planName:'',
			freezeDate:"",
			blockNumber:96,
			// routeName:this.$route.name,
			dataTree: [{
	          id: 1,
	          label: '一级 1',
	          children: [{
	            id: 4,
	            label: '二级 1-1',
	            children: [{
	              id: 9,
	              label: '三级 1-1-1'
	            }, {
	              id: 10,
	              label: '三级 1-1-2'
	            }]
	          }]
	        }, {
	          id: 2,
	          label: '一级 2',
	          children: [{
	            id: 5,
	            label: '二级 2-1'
	          }, {
	            id: 6,
	            label: '二级 2-2'
	          }]
	        }, {
	          id: 3,
	          label: '一级 3',
	          children: [{
	            id: 7,
	            label: '二级 3-1'
	          }, {
	            id: 8,
	            label: '二级 3-2'
	          }]
	        },
	        {
	          id: 3,
	          label: '一级 3',
	          children: [{
	            id: 7,
	            label: '二级 3-1'
	          }, {
	            id: 8,
	            label: '二级 3-2'
	          }]
	        },
	        {
	          id: 3,
	          label: '一级 3',
	          children: [{
	            id: 7,
	            label: '二级 3-1'
	          }, {
	            id: 8,
	            label: '二级 3-2'
	          }]
	        },
	        {
	          id: 3,
	          label: '一级 3',
	          children: [{
	            id: 7,
	            label: '二级 3-1'
	          }, {
	            id: 8,
	            label: '二级 3-2'
	          }]
	        },
	        {
	          id: 3,
	          label: '一级 3',
	          children: [{
	            id: 7,
	            label: '二级 3-1'
	          }, {
	            id: 8,
	            label: '二级 3-2'
	          }]
	        },
	        
	        {
	          id: 3,
	          label: '一级 3',
	          children: [{
	            id: 7,
	            label: '二级 3-1'
	          }, {
	            id: 8,
	            label: '二级 3-2'
	          }]
	        }],
	       
		}
	},

	mounted(){
		// var index = parseInt(this.$route.name)
		var routeName = this.$route.name

		var temp = this.$store.getters.getPlanList.filter(function(element){
			return (routeName == element.name)
		 });

		this.planName = temp[0].label
	},
	activated(){
		var routeName = this.$route.name

		var temp = this.$store.getters.getPlanList.filter(function(element){
			return (routeName == element.name)
		 });

		this.planName = temp[0].label
	},
	methods:{
		changeData(value){
			var that = this
	
			var routeName = this.$route.name

			this.$store.getters.getPlanList.forEach(function(element,index,array){
				if (element.name==routeName) {
	
					that.$store.getters.getPlanList[index].label = value
		
					return
				}
			})	
		}
	}


}
</script>

<style scoped>


</style>