<template>
	<div id="meterMap"></div>
</template>
<script>
export default{
	name:'meterArea',
	data(){
		return{
			meterNum:'00000032',
			address:"北京大学",
			checkPerson:'trj001',
			lastTime:"2017-10-01",
			points:[
			{
				x:114.105355,
				y:22.505355
			},
			{
				x:114.205355,
				y:22.54605355
			},
			{
				x:114.205355,
				y:22.7
			},
			{
				x:114.105355,
				y:22.54605355
			},
			{
				x:114.405355,
				y:22.546045
			},
			{
				x:114.505355,
				y:22.5464
			},
			{
				x:114.605355,
				y:22.705355
			},
			{
				x:114.805355,
				y:22.54605355
			},
			{
				x:114.0205355,
				y:22.105355
			},
			{
				x:114.905355,
				y:22.5405355
			},]
		}
	},
	mounted(){
		var that = this
		var map = new BMap.Map("meterMap");    // 创建Map实例
		var center = new BMap.Point(114.02597366,22.54605355)
		map.centerAndZoom(center, 11);  // 初始化地图,设置中心点坐标和地图级别
		
		// 设置中心城市
		map.setCurrentCity("深圳"); 
		map.enableScrollWheelZoom(true); 

		// 添加版权信息
		var cr = new BMap.CopyrightControl({anchor: BMAP_ANCHOR_TOP_RIGHT});   //设置版权控件位置
		map.addControl(cr); //添加版权控件

		var bs = map.getBounds();   //返回地图可视区域
		cr.addCopyright({id: 1, content: "<div style='font-size:16px;color:blue;margin-top:5px;'>©深圳市航天泰瑞捷电子有限公司</div>", bounds: bs});

		//添加城市选择列表
		var size = new BMap.Size(10, 5);
		map.addControl(new BMap.CityListControl({
		    anchor: BMAP_ANCHOR_TOP_LEFT,
		    offset: size,
		    // 切换城市之间事件
		    // onChangeBefore: function(){
		    //    alert('before');
		    // },
		    // 切换城市之后事件
		    // onChangeAfter:function(){
		    //   alert('after');
		    // }
		}))




		for (var i = 0; i < this.points.length; i++) {
			var target = new BMap.Point(this.points[i].x,this.points[i].y)

			var marker = new BMap.Marker(target)
			map.addOverlay(marker)


			marker.addEventListener("click", function(e){          
				that.openInfo(map,e)
			})

		}

		// 转成百度坐标
		// var convertor = new BMap.Convertor();
  //       convertor.translate(that.BPoint, 1, 5, function(data){
  //       	if (data.status == 0) {
  				
  //       	}
  //       })

		
	},

	methods:{
		openInfo:function(map,e){
			var that = this;
			var p = e.target
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);	

			var msg =	"<h4>电表信息：</h4>" +
						"<div>表号：" + this.meterNum +"</div>"+
						"<div style='margin-top:10px'>地址:"+this.address +"</div>" +
						"<div style='margin-top:10px'>检验员："+this.checkPerson+"</div>"+
						"<div style='margin-top:10px'>最近检验时间："+this.lastTime+"</div>"

			var infoWindow = new BMap.InfoWindow(msg); 
			map.openInfoWindow(infoWindow,point); 
		}

	}
}
</script>
<style scoped>
#meterMap{
	height: 750px;
}


</style>