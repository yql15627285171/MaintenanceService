<template>
	<div id="map"></div>	
</template>
<script>
export default{
	name:"checkPath",
	data(){
		return{
			path:[
			{	x:116.301934,
				y:39.977552
			},
			{
				x:116.408328,
				y:39.947552
			},
			{
				x:116.508328,
				y:39.919141
			},
			{
				x:116.608328,
				y:39.889141
			},
			{
				x:116.701934,
				y:39.859141
			},
			{
				x:116.801934,
				y:39.829141
			},
			{
				x:116.908328,
				y:39.799141
			}]
		}
	},
	methods:{

	},
	mounted(){
		var map = new BMap.Map("map");
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
		map.enableScrollWheelZoom(true);
		// 数据准备
		var temp = this.path;
		var start = temp.shift();
		var last = temp.pop();

		var startPoint = new BMap.Point(start.x,start.y)
		var endPoint = new BMap.Point(last.x,last.y)

		var tempPath = new Array();
		for (var i = 0; i < temp.length; i++) {
			var point = new BMap.Point(temp[i].x,temp[i].y)
			tempPath.push(point);
		}
		// 图标
		var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/Mario.png", new BMap.Size(32, 70), {    //小车图片
			//offset: new BMap.Size(0, -5),    //相当于CSS精灵
			imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
		});

		// 途经点描画
		var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
		driving.search(startPoint, endPoint,{waypoints:tempPath});

		// 沿线运动
		temp.push(endPoint);
		temp.unshift(startPoint);

		

	
		driving.setSearchCompleteCallback(function(){
		var allPTS =  new Array();
		for (var i = 0; i < temp.length - 1; i++) {
			var pts = driving.getResults().getPlan(0).getRoute(i).getPath(); 
			allPTS = allPTS.concat(pts)
		}
		 
		// console.log(driving.getResults().getPlan(0).getRoute(5).getPath()) 
		var paths = allPTS.length;    //获得有几个点
		console.log(allPTS[880])
		var carMk = new BMap.Marker(allPTS[0],{icon:myIcon});
		map.addOverlay(carMk);
		i=0;
		function resetMkPoint(i){
			carMk.setPosition(allPTS[i]);
			if(i < paths){
				setTimeout(function(){
					i++;
					resetMkPoint(i);
				},10);
			}
		}
		setTimeout(function(){
			resetMkPoint(0);
		},10)
	})



	
	}
}

</script>
<style scoped>
#map{
	height: 760px;
}
</style>