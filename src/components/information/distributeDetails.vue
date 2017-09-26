<template>
	<div>
		<div class="companySelect">
			<span>服务公司</span>
			<v-select v-model='selected' :options="company" class="select"></v-select>    
		</div>
		<div class="table-list">
		<table>
			<tr>
				<th v-for="head in heads">{{head.label}}</th>
				<th>操作</th>
			</tr>
			<template v-for="(item,itemIndex) in showData">
				<tr v-for="(equip,equipIndex) in item.equips">
					<td>{{item.company}}</td>
					<td>{{equip}}</td>
					<td><div class="deleteBtn" @click="removeRelation(itemIndex,equipIndex)">解除</div></td>
				</tr>
			</template>
		</table>
			
		</div>
	</div>
</template>
<script>
import vSelect from "vue-select"
export default{
	name:"distributeDetails",
	components:{vSelect},
	data(){
		return{
			selected:null,
			company:["公司1","公司2","公司3"],
			showData:null,
			details:[
			{
				company:'公司1',
				equips:['设备1','设备2','设备3']
			},
			{
				company:'公司2',
				equips:['设备4','设备5','设备6']
			},
			{
				company:'公司3',
				equips:['设备7','设备8','设备9']
			},
			],
			heads:[
			{
				label:"服务公司",
				key:'company'
			},
			{
				label:"设备名",
				key:'equips'
			}]
		}
	},
	mounted(){
		this.showData = this.details
	},
	methods:{
		removeRelation:function(itemIndex,equipIndex){
			this.showData[itemIndex].equips.splice(equipIndex, 1);
		},
		
	},
	watch:{
		selected:function(val){
			if (val) {
				this.showData = this.details.filter(function(element){
				return (element.company == val)
			})
			}else {
				this.showData = this.details
			}
		
		}
	}

} 
</script>
<style scoped>
.companySelect{
	margin: 30px 80px;
	display: flex;
	align-items: center;
	color: #fff;
}

.select{
	background: #fff;
	margin-left: 20px;
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

.deleteBtn{
	width: 80px;
	text-align: center;
	height: 25px;
	line-height: 25px;
	border:1px solid red;
  	background: red;
  	color: #fff;
  	cursor: pointer;
  	border-radius: 5px;
  	display: inline-block;
}

</style>