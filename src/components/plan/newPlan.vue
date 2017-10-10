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
				<el-input v-model="planName" placeholder="请输入内容" style="width:250px;"></el-input>
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
			<el-button type="success" @click="addPlan">添加方案</el-button>
			</div>

		</el-col>
	</el-row>
	
</div>						
</template>
<script>

export default{
	name:'newPlan',
	data(){
		return{
			planName:"",
			freezeDate:"",
			blockNumber:96,
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
        },
		}
	},
	methods:{
		addPlan(){
			if (this.planName.length > 0) {
				// statement
				// console.log(this.$route)
				
				var index = this.$store.getters.getPlanList.length

				// 修改list
				var plan = {label:this.planName,name:index.toString()}
				this.$store.dispatch('addPlan',plan)


					// 添加路由
				// var comp = {
				// 	path:"/plan/"+index.toString(),
				// 	name:index.toString(),
				// 	component:defaultPlan
				// }

				// this.$router.options.routes[1].children.push(comp)
				// console.log(this.$route)
				// this.$router.addRoutes(comp)

 				



			}
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
	height: 715px;
	background:rgba(0,0,0,0)
}

.alertInfo{
	background: #58B7FF
}
</style>