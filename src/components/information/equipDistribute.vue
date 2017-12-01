<template>
<div>
	<h3>选择分配</h3>
	<div class="match">

		<div class="selectConpany">
			<span>服务公司( {{company.length}}家 )</span>
			<v-select :options="company" class="company"></v-select>
		</div>
		<div class="selectEquip">
			<span>可分配设备( {{notDistributeEquip.length}}台 )</span>
			<v-select multiple v-model="selected" :options="notDistributeEquip" class="notselect"></v-select>
		</div>
		<div class="sure">确定分配</div>
	</div>
	<h3>自动分配</h3>
	<div class="match">
		<div class="autoDistribute">
			<span class="autoSpan">自动分配数量</span>
			<input type="text" class="input">
			<div class="autoSure">自动分配</div>
		</div>
	</div>
	
</div>
	
</template>
<script>
import vSelect from "vue-select"
export default{
	name:'equipDistribute',
	components: {vSelect},
	data(){
		return{
			selected:null,
			notDistributeEquip:['设备1','设备2','设备3','设备4','设备5','设备6','设备7','设备8','设备9','设备10','设备11','设备12','设备13','设备14','设备15','设备16','设备17','设备18','设备19','设备20','设备21','设备22','设备23','设备24'],
			company:["公司1","公司2","公司3","公司4","公司5","公司6"],
			details:[
			{
				name:"公司1",
				distributedEquip:[]
			},
			{
				name:"公司2",
				distributedEquip:[]
			},
			{
				name:"公司3",
				distributedEquip:[]
			},
			{
				name:"公司4",
				distributedEquip:[]
			},
			{
				name:"公司5",
				distributedEquip:[]
			},
			{
				name:"公司6",
				distributedEquip:[]
			},
			]
		}
	},
	watch:{
		selected:function(val){
			console.log(val)
		}
	}
}
</script>
<style scoped>

h3{
	padding:10px 60px;
	background: #00d5c3;
	/* color: #fff; */
}
.match{
	margin: 30px 0 0 100px;
	/* color: #fff; */
}

.selectConpany,
.selectEquip,
.autoDistribute{
	display: flex;
	align-items: center;
}

.selectEquip{
	margin-top: 20px;
}

/* v-select{
	display: inline-block;
	height: 30px;
} */

span{
	width: 140px;
}

.autoSpan{
	width: auto;
}

.notselect,
.company{
	/* background: #fff; */
	margin-left: 20px;
}

.input{
	margin: 20px;
	height: 30px;
	width: 150px;
}

.sure,
.autoSure{
	width: 80px;
	text-align: center;
	height: 35px;
	line-height: 35px;
	border:1px solid #00d5c3;
  	background: #00d5c3;
  	color: #fff;
  	cursor: pointer;
  	border-radius: 5px;
}

.sure{
	margin: 30px 0	30px 100px;
}


</style>