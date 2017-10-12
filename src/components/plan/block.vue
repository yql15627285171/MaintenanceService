<template>
	<div class="all">
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
					<el-input v-model="name" placeholder="请输入内容" style="width:250px;"></el-input>
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
    			<el-button type="info" @click="sureChange" style="margin:0 60px;">确定修改</el-button>
    			<el-button type="danger">删除方案</el-button>
				</div>

			</el-col>
		</el-row>
		
	</div>						
</template>
<script>
export default{
	name:'defaultPlan',
	props:{
		'dataTree':[Array],
		'planName':[String]
	},
	data(){
		return{
			// planName:"",
			freezeDate:"",
			blockNumber:96,
			name:this.planName,
	        defaultProps: {
	          children: 'children',
	          label: 'label'
	        },
	        pickerOptions: {
          		disabledDate(time) {
           	 return time.getTime() < Date.now() - 8.64e7;
          	}
        },
		}
	},
	activated(){

		this.name = this.planName
		console.log(this.planName)		
	},
	mounted(){
		// this.name = this.planName
		console.log(this.planName)
	},
	
	methods:{
		sureChange(){

			this.$emit('change-data',this.name)	
		}
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
	height: 750px;
	background:rgba(0,0,0,0)
}
</style>