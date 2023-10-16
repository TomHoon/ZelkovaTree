<template>
    <div class="wrap">
        <Header/>
        <hr>
        <div class="main-imgs">
            <div class="guide-box">
                <h2>이용안내</h2>
            </div>
        </div>
        <div class="category-area">
            <ul class="category-ul">
                <li class="active">이용안내</li>
                <li>법인소개</li>
                <li>기관소개</li>
                <li>조직도</li>
            </ul>
        </div>
        <hr>

        <div class="main-wrapper">
            <div class="main-area">
              <div v-if="active == 0">
                <div class="user-info">
                    <p>
                        <span>복지관 이용안내</span>
                        <img class="list-icon" src="https://img.icons8.com/color/48/circled.png" alt="circled"/>
                    </p>
                    <ul class="user-info-ul">
                        <li>
                            <img src="" alt="">
                            <p class="sub-tit">이용시간</p>
                            <p>주간: 09시 - 18시</p>
                            <p>하루: 24시</p>
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
                                <td>오전 9시 - 오후 6시</td>
                                <td>15,000원</td>
                            </tr>
                            <tr>
                                <td>하루</td>
                                <td>24시간</td>
                                <td>20,000원</td>
                            </tr>
                            <tr>
                                <td>1개월</td>
                                <td>주간 또는 야간</td>
                                <td>180,000원</td>
                            </tr>
                            <tr>
                                <td>1개월 거주</td>
                                <td>월-금 오후 6시까지</td>
                                <td>250,000원</td>
                            </tr>
                            <tr>
                                <td>토요일 운영</td>
                                <td>오전 9시 - 오후 6시</td>
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
              <div v-if="active == 4">

              </div>
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
export default {
    data() {
        return {
          active: 0
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped src="../assets/css/guide.css">

</style>