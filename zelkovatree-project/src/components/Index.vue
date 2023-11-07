<template>
	<div class="wrap">
		<!-- <div class="fixed-menu-wrapper">
			<div class="top-cover">
	
			</div>
			<div class="header">
				<div class="header-wrapper">
					<a href="" class="header-left">
						<img src="./assets/img/느티나무마을아이콘_최종.png" alt="">
					</a>
					<div class="ul-wrapper">
						<ul class="header-right">
							<li @click="goPage('guide')">이용안내</li>
							<li>사업안내</li>
							<li>느티나무소식</li>
							<li>기관소개</li>
							<li>후원&자원봉사</li>
							<li @click="goPage('board')">게시판</li>
						</ul>
					</div>
				</div>
			</div>
	
		</div> -->
		<Header/>
	<!--	<hr>-->
		<div class="main-imgs">
<!--			<img src="../assets/img/slick-img.jpg" alt="">-->
      <div class="main-banner-wrapper">
			  <img class="main-banner-img" src="../assets/img/느티나무카페배너.png" alt="">
      </div>
		</div>
	<!--	<hr>-->
	
	
		<div class="main-wrapper">
			<div class="main-area">
				<div class="main-icons">
					<ul class="main-icons-ul">
						<li @click="goPage('Guide', 0)">
							<a href="">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
									<path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path>
									<path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path>
									<path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"></path>
									<path fill="#D84315" d="M18 28H30V44H18z"></path>
									<path fill="#01579B" d="M21 17H27V23H21z"></path>
									<path fill="#FF8A65"
												d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path>
								</svg>
							</a>
							<p>기관안내</p>
						</li>
            <li @click="goPage('Guide', 0)">
							<a href="">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
									<path fill="#64b5f6" d="M31,14h13v-4c0-2.209-1.791-4-4-4h-9V14z"></path>
									<path fill="#bbdefb"
												d="M40,6H14c-2.209,0-4,1.791-4,4v28c0,2.209,1.791,4,4,4h18c2.209,0,4-1.791,4-4V10 C36,7.791,37.791,6,40,6z"></path>
									<path fill="#64b5f6"
												d="M32 42H8c-2.209 0-4-1.791-4-4v-3h24v3C28 40.209 29.791 42 32 42zM16 14H30V16H16zM16 19H26V21H16zM16 24H30V26H16zM16 29H26V31H16z"></path>
								</svg>
							</a>
							<p>이용안내</p>
						</li>
            <li @click="goPage('Guide', 2)">
							<a href="">
								<img src="../assets/img/color-address.png" alt="" style="width:50px; height: 50px">
							</a>
							<p>오시는길</p>
						</li>
						<li>
							<a href="">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
									<path fill="#F57C00"
												d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"></path>
									<path fill="#FFF9C4" d="M35 13A3 3 0 1 0 35 19A3 3 0 1 0 35 13Z"></path>
									<path fill="#942A09" d="M20 16L9 32 31 32z"></path>
									<path fill="#BF360C" d="M31 22L23 32 39 32z"></path>
								</svg>
							</a>
							<p>활동사진</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

    <!--공지사항 시작-->
    <div class="notice-wrapper">
      <p class="notice-main-tit">느티나무 소식</p>
      <div class="notice-area">
        <div class="notice1">
          <p class="notice-p">
            <span class="notice1-subtit1" :class="{ activeTit : activeSubtit == 1 }" @click="activeSubtit = 1">공지사항</span>
            <span class="notice1-subtit2" :class="{ activeTit : activeSubtit == 2 }" @click="activeSubtit = 2">채용공고</span>
            <svg class="plus-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                 viewBox="0,0,256,256">
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                 stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                 font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                  <path
                      d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                      fill="#0077b6"></path>
                  <path d="M21,14h6v20h-6z" fill="#ffffff"></path>
                  <path d="M14,21h20v6h-20z" fill="#ffffff"></path>
                </g>
              </g>
            </svg>
          </p>
          <!--					<div class="hr-area"></div>-->
          <div class="notice-ul" v-if="activeSubtit == 1">
            <ul>
              <li v-for="(item, index) in noticeList" :key="index" @click="goPage('Board', 1)">
                <p>
										<span>
											{{ item.title }}
										</span>
                  <span class="notice-ul-date">
											{{ item.write_date.split(" ")[0] }}
										</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="notice2">
          <p class="notice-p">
            <span class="notice1-subtit1" :class="{ activeTit : activeSubtit2 == 1 }" @click="activeSubtit2 = 1">가정통신문</span>
            <span class="notice1-subtit2" :class="{ activeTit : activeSubtit2 == 2 }" @click="activeSubtit2 = 2">후원의손길</span>
            <svg class="plus-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                 viewBox="0,0,256,256">
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                 stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                 font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                  <path
                      d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                      fill="#0077b6"></path>
                  <path d="M21,14h6v20h-6z" fill="#ffffff"></path>
                  <path d="M14,21h20v6h-20z" fill="#ffffff"></path>
                </g>
              </g>
            </svg>
          </p>
          <!--					<div class="hr-area"></div>-->
          <div class="notice-ul" v-if="activeSubtit2 == 1" @click="goPage('Board', 2)">
            <ul>
              <li>
                <p>
										<span>
											[가정통신문] 10월 소식지 올려드립니다..
										</span>
                  <span class="notice-ul-date">
											2023-10-09
										</span>
                </p>
              </li>
              <li>
                <p>
										<span>
											[가정통신문] 9월 소식지 올려드립니다..
										</span>
                  <span class="notice-ul-date">
											2023-10-09
										</span>
                </p>
              </li>
              <li>
                <p>
										<span>
											[가정통신문] 8월 소식지 올려드립니다..
										</span>
                  <span class="notice-ul-date">
											2023-10-09
										</span>
                </p>
              </li>
              <li>
                <p>
										<span>
											[가정통신문] 7월 소식지 올려드립니다..
										</span>
                  <span class="notice-ul-date">
											2023-10-09
										</span>
                </p>
              </li>
              <li>
                <p>
										<span>
											[가정통신문] 6월 소식지 올려드립니다..
										</span>
                  <span class="notice-ul-date">
											2023-10-09
										</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--공지사항 끝-->


		<!--느티나무활동 시작-->
		<div class="active-wrapper">
			<div class="active-area">
				<p class="active-area-main-tit">
					느티나무 활동사진
				</p>
				<ul class="active-img-slick">
					<li v-for="(item, index) in slickData" :key=index @click="goPage('Gallery')">
						<div class="img-slick-wrapper">
							<img :src="item.imgSrc" alt="">
							<div class="img-slick-tit">
								<p>{{ item.imgTit }}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--느티나무활동 끝-->

		<!--푸터시작-->
		<Footer @goTop="goTop"/>
		<!--푸터끝-->
	</div>
</template>
<script>
	import axios from "axios";

  export default {
		data() {
			return {
        activeSubtit: 1,
        activeSubtit2: 1,
        slickData: [
          {
            imgSrc: require('../assets/img/느티나무마을사진1.jpg'),
            imgTit: '하남시 장애인 한마음 체육대회'
          },
          {
            imgSrc: require('../assets/img/느티나무마을사진2.jpg'),
            imgTit: '도자기 체험'
          },
          {
            imgSrc: require('../assets/img/느티나무마을사진3.jpg'),
            imgTit: '옛날 전통 놀이'
          },
          {
            imgSrc: require('../assets/img/느티나무마을사진4.jpg'),
            imgTit: '구연 동화 시간'
          },
        ],
        noticeList: []
			}
		},
    async mounted() {
      const { data } = await axios.get("/getBoard");
      this.noticeList = data;
    },
		methods: {
			goPage(direction, activePage) {
				this.$router.push({name: direction, query: {activePage: activePage}});
			},
      goTop() {
        window.scrollTo(0, 0);
      }
		}
	}
</script>
<style scoped src="../assets/css/main.css">

</style>