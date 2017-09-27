<template>
	<div class="all">
		<div class="conditionSelecti">
			<div class="nameSelect">
				<span>姓名</span>
				<input type="text" v-model.lazy="name" @change="selectChange">
			</div>
			<div class="departmentSelect">
				<span>部门</span>
				<input type="text" v-model.lazy="department" @change="selectChange">
			</div>
		</div>

		<div class="table-list">
			<table>
				<tr>
					<th v-for="head in tableHead">{{head.label}}</th>
					<th>操作</th>
				</tr>
				<tr v-for="(item,index) in showData">
					<td v-for="head in tableHead">{{item[head.key]}}</td>
					<td>
						<div class="sureBtn">通过</div>
						<div class="cancelBtn">取消</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
export default{
	name:'staffCheck',
	data(){
		return{
			name:"",
			department:"",
			showData:null,
			tableHead:[
			{
				label:"姓名",
				key:"name",
			},
			{
				label:"电话",
				key:"phone",
			},
			{
				label:"部门",
				key:"department",
			},
			{
				label:"状态",
				key:"state",
			},
			{
				label:"指纹",
				key:"fingerprint",
			},
			],
			applyDetails:[
			{
				name:"张三",
				phone:"15627285173",
				department:"人事部",
				state:"健康",
				fingerprint:"有"
			},
			{
				name:"李四",
				phone:"15627285174",
				department:"研发部",
				state:"健康",
				fingerprint:"有"
			},
			{
				name:"王五",
				phone:"15624285175",
				department:"采购部",
				state:"健康",
				fingerprint:"有"
			},
			{
				name:"陈六",
				phone:"15627275172",
				department:"人事部",
				state:"健康",
				fingerprint:"有"
			}]
		}
	},
	mounted(){
		this.showData = this.applyDetails;
	},
	methods:{
		selectChange:function(){
			var that = this
			var temp = this.applyDetails
			if (that.name !="") {
				// statement
				that.showData = temp.filter(function(element){
					return (element.name == that.name)
				})

				temp = that.showData
			}else {
				that.showData = temp;
			}

			if (that.department !="") {
				// statement
				that.showData = temp.filter(function(element){
					return (element.department == that.department)
				})

				temp = that.showData
			}else {
				that.showData = temp;
			}

		}
	}

}
</script>
<style scoped>

.all{
	color: #fff;
}

.table-list {
  width: 900px;
  margin: 20px auto;
  /* color: #fff; */
}

.table-list table {
  width: 100%;
  /* background: #fff; */
  background: rgba(0, 0, 0, 0);
  color: #fff;
}

.table-list td,
.table-list th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
  width: 200px;
  background: rgba(0, 0, 0, 0)

}

.table-list th {
  background: #00d5c3;
  color: #fff;
  border: 1px solid #00d5c3;

}


.conditionSelecti{
	display: flex;
	align-items: center;
	padding: 40px 0 20px 50px;
}

.nameSelect{
	margin-right: 40px;
}

.sureBtn,
.cancelBtn{
	width: 60px;
	text-align: center;
	height: 24px;
	line-height: 24px;
	border:1px solid #00d5c3;
  	background: #00d5c3;
  	color: #fff;
  	cursor: pointer;
  	border-radius: 5px;
  	display: inline-block;
}

.cancelBtn{
	border:1px solid red;
	background: red;
}
</style>