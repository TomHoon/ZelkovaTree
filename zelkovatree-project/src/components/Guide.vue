<template>
    <div class="wrap">
        <Header/>
        <hr>
        <div class="main-imgs">
            <div class="guide-box">
                <h2>{{listData[activePage]}}</h2>
            </div>
        </div>
        <div class="category-area">
            <ul class="category-ul">
                <li v-for="(item, index) in listData" :key="index" @click="goPage(index)" :class="{ active: activePage == index }">{{item}}</li>
            </ul>
        </div>
        <hr>

        <div class="main-wrapper">
            <div class="main-area">
                

            <!-- 🍖이용안내 시작 -->
              <div v-if="activePage == 0">
                <div class="user-info">
                    <p>
                        <span>복지관 이용안내</span>
                        <img class="list-icon" src="https://img.icons8.com/color/48/circled.png" alt="circled"/>
                    </p>
                    <ul class="user-info-ul">
                        <li>
                            <img src="" alt="">
                            <p class="sub-tit">이용시간</p>
                            <p>주간: 오전 09:00 ~ 오후 18:00</p>
                            <p>하루: 24:00</p>
                            <p>토요일 운영</p>
                        </li>
                        <li>
                            <img src="" alt="">
                            <p class="sub-tit">이용문의</p>
                            <p>사무실 031-796-0005 </p>
                            <p>일요일 휴관</p>
                        </li>
                    </ul>
                </div>

                <!--이용금액시작-->
                <div class="user-info">
                    <p>
                        <span>이용금액</span>
                        <img class="list-icon" src="https://img.icons8.com/color/48/circled.png" alt="circled"/>
                    </p>
                    <table class="user-info-price">
                        <thead>
                            <tr>
                                <th colspan="2">이용시간</th>
                                <th>이용료</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>주간</td>
                                <td>오전 9:00 ~ 오후 18:00</td>
                                <td>15,000원</td>
                            </tr>
                            <tr>
                                <td>하루</td>
                                <td>24:00</td>
                                <td>20,000원</td>
                            </tr>
                            <tr>
                                <td>1개월</td>
                                <td>주간 또는 야간</td>
                                <td>180,000원</td>
                            </tr>
                            <tr>
                                <td>1개월 거주</td>
                                <td>월-금 오전 09:00 ~ 오후 18:00</td>
                                <td>250,000원</td>
                            </tr>
                            <tr>
                                <td>토요일 운영</td>
                                <td>오전 9:00 ~ 오후 18:00</td>
                                <td>30,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--이용금액끝-->

                <!--접수절차시작-->
                <div class="user-info">
                    <p>
                        <span>이용절차</span>
                        <img class="list-icon" src="https://img.icons8.com/color/48/circled.png" alt="circled"/>
                    </p>
                    <div class="user-apply-order">
                        <ul>
                            <li>
                                <div class="user-apply-order-div">
                                    <span class="user-apply-step">STEP 1</span>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/phone-not-being-used.png" alt="phone-not-being-used"/>
                                    <b>입소의뢰 및 접수</b>
                                </div>
                            </li>
                            <li>
                                <div class="user-apply-order-div">
                                    <img class="step-arrow" width="48" height="48" src="https://img.icons8.com/color/48/circled-right-2--v1.png" alt="circled-right-2--v1"/>
                                    <span class="user-apply-step">STEP 2</span>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/clipboard.png" alt="clipboard"/>
                                    <b>초기면접</b>
                                </div>
                            </li>
                            <li>
                                <div class="user-apply-order-div">
                                    <img class="step-arrow" width="48" height="48" src="https://img.icons8.com/color/48/circled-right-2--v1.png" alt="circled-right-2--v1"/>
                                    <span class="user-apply-step">STEP 3</span>
                                    <!--<img width="48" height="48" src="https://img.icons8.com/color/48/arrow&#45;&#45;v1.png" alt="arrow&#45;&#45;v1"/>-->
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/create-new.png" alt="create-new"/>
                                    <b>입소판정</b>
                                </div>
                            </li>
                            <li>
                                <div class="user-apply-order-div">
                                    <img class="step-arrow" width="48" height="48" src="https://img.icons8.com/color/48/circled-right-2--v1.png" alt="circled-right-2--v1"/>
                                    <span class="user-apply-step">STEP 4</span>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/laptop--v1.png" alt="laptop--v1"/>
                                    <b>이용신청</b>
                                </div>
                            </li>
                            <li>
                                <div class="user-apply-order-div">
                                    <img class="step-arrow" width="48" height="48" src="https://img.icons8.com/color/48/circled-right-2--v1.png" alt="circled-right-2--v1"/>
                                    <span class="user-apply-step">STEP 5</span>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/country-house.png" alt="country-house"/>
                                    <b>이용</b>
                                </div>
                            </li>
                        </ul>
                        <span>
                        </span>
                    </div>
                </div>
                <!--접수절차끝-->
                <div class="user-info">
                    <p>
                        <span>입소구비서류</span>
                        <img class="list-icon" src="https://img.icons8.com/color/48/circled.png" alt="circled"/>
                    </p>
                    <ul class="enter-need-doc">
                        <li>
                            <div class="enter-need-list-style"></div>
                            이용신청서(시설)
                        </li>
                        <li>
                            <div class="enter-need-list-style"></div>
                            주민등록등본 1통,  장애인등록증 또는 카드 사본 1통
                        </li>
                        <li>
                            <div class="enter-need-list-style"></div>
                            기초생활수급권증명서(해당자)사본 1통
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 🍖이용안내 끝 -->

            <!-- 👩시설안내 시작 -->
              <div v-if="activePage == 1">

              </div>
            <!-- 👩시설안내 끝 -->

            <!-- 🎅오시는길 시작 -->
              <div v-if="activePage == 2">
                <div class="map-wrapper">
                    <div class="map-maintit-area">
                        <ul class="map-main-tit-ul">
                            <li class="map-main-info-wrapper">
                                <i class='bx bx-map'></i>
                                <span class="map-subtit">지도안내</span>
                                <div class="splitter-content"></div>
                            </li>
                            <li class="map-address-wrapper">
                                <p class="map-address-area">
                                    <span class="map-address-main-tit">주소</span>
                                    <span class="map-address-sub-tit">(12936) 경기도 하남시 덕풍동로 53</span>
                                </p>
                            </li>
                            <li class="map-phone-wrapper">
                                <p class="map-phone-area">
                                    <span class="map-phone-main-tit">전화</span>
                                    <span class="map-phone-sub-tit">031-796-0005</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="map-area">
                        <KakaoMap/>
                    </div>
                </div>
              </div>
            <!-- 🎅오시는길 끝 -->

             <!-- 🍔조직도 시작 -->
              <div v-if="activePage == 3">

              </div>
            <!-- 🍔조직도 끝 -->
           </div>
        </div>

        <!--푸터시작-->
        <div class="footer-area">
            <div class="footer-ul-wrapper">
                <ul>
                    <li>
                        <img src="느티나무마을아이콘.png" alt="">
                    </li>
                    <li>
                        <p>
                            (12936) 경기도 하남시 덕풍동로 53
                        </p>
                        <p class="tel-info">
                            <span>전화: 031-796-0005</span>
                            <span>팩스: 031-796-0005</span>
                            <span>이메일: 031-796-0005</span>
                        </p>
                        <p class="facility-info">
                            <span>이사장: 방성일 담임목사</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>후원계좌</span>
                            <span class="margin-custom">농협 222-22-222222 계좌번호주인명</span>
                        </p>
                        <p>
                            <span>후원문의</span>
                            <span class="margin-custom">031-796-0005</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <!--푸터끝-->


        <div class="top-button-area">
            <button>▲TOP</button>
        </div>
    </div>
</template>

<script>
import KakaoMap from './KakaoMap.vue';

export default {
    components: {
        KakaoMap
    },
    data() {
        return {
          activePage: 2,
          listData: ['이용안내', '시설안내', '오시는길', '조직도']
        };
    },

    mounted() {
        // var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        // var options = { //지도를 생성할 때 필요한 기본 옵션
        //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        //     level: 3 //지도의 레벨(확대, 축소 정도)
        // };

        // var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
    },

    methods: {
        goPage(activeNum) {
            console.log(activeNum);
            this.activePage = activeNum;
        }
    },
};
</script>

<style scoped src="../assets/css/guide.css">

</style>