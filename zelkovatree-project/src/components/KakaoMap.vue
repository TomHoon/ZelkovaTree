<template>
	<div>
		<div id="map" style="width:1000px;height:800px; margin:0 auto"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			map: null
		}
	},
	mounted() {
			this.loadMap();
		
		// if (window.kakao && window.kakao.maps) {
		// 	this.loadMap();
		// } else {
		// 	this.loadScript();
		// }
	},
	methods: {
		loadScript() {
			// const script = document.createElement("script");
			// script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=a2b9f2de2132bbe005b7d6ace2a0694c?autoload=false"
			// script.onload = () => window.kakao.maps.load(this.loadMap);

			// document.head.appendChild(script);
		},
		loadMap() {
			const container = document.getElementById("map");
			const options = {
				center: new kakao.maps.LatLng(37.5444708418383, 127.203704468217),
				level: 3
			};

			this.map = new kakao.maps.Map(container, options);

			// // 마커가 표시될 위치입니다 
			// let markerPosition  = new kakao.maps.LatLng(37.5474242451781, 127.204628996167); 

			// // 마커를 생성합니다
			// let marker = new kakao.maps.Marker({
			// 		position: markerPosition
			// });

			// // 마커가 지도 위에 표시되도록 설정합니다
			// marker.setMap(this.map);

			// // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
			// // marker.setMap(null);    

		// 마커를 표시할 위치와 title 객체 배열입니다 
		let positions = [
				{
						title: '느티나무', 
						latlng: new kakao.maps.LatLng(37.5474242451781, 127.204628996167)
				},
				{
						title: '하남교회', 
						latlng: new kakao.maps.LatLng(37.5465317740474, 127.204700110361)
				},
				{
						title: '하남시청', 
						latlng: new kakao.maps.LatLng(37.5419015378666, 127.206464400472)
				},

		];

		// 마커 이미지의 이미지 주소입니다
		let imageSrcArr = ['/church.png', '/church.png', '/train-regular-120.png']
				
		for (let i = 0; i < positions.length; i ++) {
				
				// 마커 이미지의 이미지 크기 입니다
				let imageSize = new kakao.maps.Size(100, 100); 
				
				// 마커 이미지를 생성합니다    
				let markerImage = new kakao.maps.MarkerImage(imageSrcArr[i], imageSize); 
				
				// 마커를 생성합니다
				let marker = new kakao.maps.Marker({
						map: this.map, // 마커를 표시할 지도
						position: positions[i].latlng, // 마커를 표시할 위치
						title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
						image : markerImage // 마커 이미지 
				});
		}
		}
	}
}
</script>