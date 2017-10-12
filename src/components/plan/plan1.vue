<template>
	<div>
		<!-- <input type="text"> -->
		<!-- <v-block :data-tree='dataTree' :plan-name='planName' @change-data='changeData'></v-block> -->
		<el-row :gutter='20'>
			<el-col :span="6" :offset='1'>
				<div class="tree">
				<el-tree
	  			:data="dataTree"
	  			show-checkbox
	  			default-expand-all
	  			node-key="id"
	  			ref="tree"
	  			:props="defaultProps"
	  			style="background:rgba(0,0,0,0);color:#fff;border:none;">
				</el-tree>
				</div>
				
			</el-col>
			<el-col :span="8" :offset="2">
				<div class="line">
					<span>方案名字</span>
					<el-input v-model="check.name" placeholder="请输入内容" style="width:250px;"></el-input>
				</div>
				<div class="line">
					<span>冻结日期</span>
					<el-date-picker
      					v-model="freezeDate"
      					type="date"
				      	placeholder="选择日期"
				     	:picker-options="pickerOptions"
				     	style="width:250px;">
    				</el-date-picker>
				</div>
				<div class="line">
					<span>模块数量</span>
					<el-input 
						v-model="blockNumber" 
						placeholder="请输入数量"
						style="width:250px;">
					</el-input>
				</div>
				<div class="line">
    			<el-button type="info" style="margin:0 60px;" @click="sureChange">确定修改</el-button>
    			<el-button type="danger" @click="deletePlan">删除方案</el-button>
    			<!-- <el-button type="danger" @click="getCheckedKeys">获取</el-button> -->
				</div>

			</el-col>
		</el-row>
	</div>			
</template>
<script>
// import vBlock from "./block"
export default{
	name:'defaultPlan',
	// components:{
	// 	vBlock
	// },
	props:{
		'check':[Object]
	},
	data(){
		return{
			planName:this.$store.getters.getPlanName,
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
	         defaultProps: {
	          children: 'children',
	          label: 'label'
	        },
	        pickerOptions: {
          		disabledDate(time) {
           	 return time.getTime() < Date.now() - 8.64e7;
          	}
          }
	       
		}
	},

	// activated(){
	// 	// console.log(this.$route.params.item.name)
	// },
	mounted(){
		// var index = parseInt(this.$route.name)
		// var routeName = this.$route.name

		// var temp = this.$store.getters.getPlanList.filter(function(element){
		// 	return (routeName == element.name)
		//  });

		// this.planName = temp[0].label
		// console.log(this.$route.params.item.name)
		
		// console.log('mounted')
	},
	methods:{
		sureChange(){
			this.$emit('change-name',this.check.name)
		},
		deletePlan(){
			this.$emit('delete-plan')
		},
		getCheckedKeys(){
			console.log(this.$refs.tree.getCheckedKeys());
		}
		// changeData(value){
		// 	var that = this
	
		// 	var routeName = this.$route.name

		// 	this.$store.getters.getPlanList.forEach(function(element,index,array){
		// 		if (element.name==routeName) {
	
		// 			that.$store.getters.getPlanList[index].label = value
		
		// 			return
		// 		}
		// 	})	
		// }
	}


}
</script>

<style scoped>
.all{
	color: #fff
}

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;

  }
  .row-bg {
    padding: 10px 0;
  }

.line{
	padding-bottom: 40px;
	color: #fff;
}

.line:last-child{
	text-align: center;
}

.line:first-child{
	margin-top: 50px;
}

.line span{
	margin-right: 10px;
}

.tree{
	overflow: scroll;
	height: 715px;
	/* background:rgba(0,0,0,0) */
}

</style>