<template>
<div>
	<div class="operation">
		<div class="operation-name">
			<span>单位名称</span>
			<input type="text" v-model="companyName">
		</div class='operation-area'>
		<div class="operation-area">
			<span>服务地区</span>
			<input type="text" v-model="serviceArea">
		</div>
	
		<div class="operation-add" @click="addDetails">增加</div>
		<div class="operation-alert" @click="sureAlert">修改</div>
	</div>
	<el-row>
		<el-col :span='24'>
			<div class="table-list">
				<table>
					<tr>
						<th>序号</th>
						<th v-for="head in tableHeads">{{head.label}}</th>
						<th>操作</th>
					</tr>
					<tr v-for="(item,index) in details" @dblclick="alertDetails(index)">
						<td>{{index+1}}</td>
						<td v-for="head in tableHeads">{{item[head.key]}}</td>
						<td><div class="operation-delete" @click="deleteItem(index)">删除</div></td>
					</tr>
				</table>
			</div>
		</el-col>
	</el-row>
</div>
</template>
<script>
export default{
	name:"companyManager",
	data(){
		return{
			companyName:"",
			serviceArea:"",
			alertNum:0,
			tableHeads:[
			// {
			// 	label:'序号',
			// 	key:'number',
			// 	first:true

			// }
			{
				label:'单位名称',
				key:'name'
			},
			{
				label:'服务地区',
				key:'area'
			},
			// {
			// 	label:'操作',
			// 	last:true
			// }
			],
			details:[
			{

				name:'泰瑞捷电子有限公司',
				area:'深圳莲塘'
			},
			{
				name:'泰瑞捷电子有限公司',
				area:'深圳福永'
			},
			{
				name:'泰瑞捷电子有限公司',
				area:'福建'
			}
			]
		}
	},
	methods:{
		deleteItem:function(index){
			this.details.splice(index, 1);
			this.companyName = "";
			this.serviceArea = "";		
		},
		alertDetails:function(index){
			this.companyName = this.details[index].name;
			this.serviceArea = this.details[index].area;
			this.alertNum = index;
		},
		addDetails:function(){
			console.log('dkoa');
			if (this.companyName.length > 0 && this.serviceArea.length > 0) {
				// statement
				var item ={
					name:this.companyName,
					area:this.serviceArea
				}

				this.details.push(item)
			}
		},
		sureAlert:function(){
			if (this.companyName.length > 0 && this.serviceArea.length > 0) {
				// statement
				this.details[this.alertNum].name = this.companyName
				this.details[this.alertNum].area = this.serviceArea
			}
		}

	}
}	
</script>
<style scoped>
.operation{
	display: flex;
	align-items: center;
	/* color: white; */
	margin: 30px;
	justify-content: center
}

.operation-name,
.operation-area,
.operation-add,
.operation-alert{
	margin-right: 30px;
}




input{
	width: 200px;
	height: 18px;
	/* margin-left: 5px; */
	/* -webkit-appearance: none; */
	/* border-image: none; */
}

.operation-add,
.operation-alert,
.operation-delete
{
	width: 80px;
	text-align: center;
	height: 25px;
	line-height: 25px;
	border:1px solid #00d5c3;
  	background: #00d5c3;
  	color: #fff;
  	cursor: pointer;
  	border-radius: 5px;
}

.operation-delete{
	background: red;
	border:1px solid red;
	display: inline-block;

}

.table-list {
  width: 95%;
  margin: 20px auto;
  /* color: white; */
}

.table-list table {
  width: 100%;
  background: rgba(0, 0, 0, 0);
}

.table-list td,
.table-list th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}

.table-list th {
  background: #00d5c3;
  color: #fff;
  border: 1px solid #00d5c3;
  cursor:auto;
}
</style>