<template>
  <div class="wrap">
    <Header/>
    <hr>
    <div class="main-imgs">
      <div class="guide-box">
        <img src="http://bsrehab.or.kr/_Share/img/Sub/sub-visual.jpg" alt="">
      </div>
    </div>
    <div class="category-area">
    </div>
    <hr>

    <div class="main-wrapper">
      <div class="main-area">
        <div class="board-left">
          <div class="board-left-tit">
            <span>주간보호시설찾기</span>
          </div>
          <div class="board-left-ul">
            <ul>
              <li @click="page = index + 1" :class="{active:page == index + 1}" v-for="(item, index) in asideList" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="board-right">
          <div class="border-div"></div>
          <div class="board-right-tit">
            <h2>게시판</h2>
          </div>
          <div class="board-right-table-wrapper">
            <table class="board-detail-table">
              <thead class="board-detail-thead">
                <tr class="board-detail-tr">
                  <th class="board-detail-th">
                    <p>{{ detailInfo.title }}</p>
                    <p>
                      <span><b>작성자</b>: {{ detailInfo.author }}</span>
                      <span class="board-detail-date"><b>작성일자</b>: {{ detailInfo.write_date }}</span>
                    </p>
                  </th>
                </tr>

              </thead>
              <tbody>
                <tr>
                  <td>
                    <p style="cursor: pointer" v-if="1 == 0">
                      첨부파일: 사직장애인주간보호센터 이용자 모집 홍보지.pdf
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="board-detail-content-area" v-html="this.detailInfo.content">

                    </div>
<!--                    <p>-->
<!--                      <img src="https://bsrehab.or.kr/data/webEditor/20230906134729.png" alt="">-->
<!--                    </p>-->
<!--                    <pre class="board-detail-content">-->
<!--                      1. 모집기간: 상시-->
<!--                      2. 대      상: 성인(만18세 이상) 발달장애인-->
<!--                      3. 이용시간: 월요일~금요일(10:00~17:00)-->
<!--                      4. 이용절차: 상담문의(전화, 방문) → 상담예약(방문일시) → 방문상담(접수, 초기상담) → 예비이용기간(4주이용) → 선정심사회의 → 서비스이용-->
<!--                      5. 대기자등록: 부산시 장애인주간보호바로가기 홈페이지-->
<!--                      6. 주 소: 부산광역시 동래구 사직북로 63번길 20-7, 사직복지관 3층-->
<!--                      7. 상담문의: 사직장애인주간보호센터(☎ 051-506-3418)-->
<!--                    </pre>-->
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="board-detail-list-btn-wrapper" v-cursor>
              <button class="board-detail-list-btn" @click="goPage('/board')">
                목록
              </button>
            </div>
            <div class="board-detail-next-pre-wrapper">
              <ul>
                <li>
                  <a class="prev-index" href="">
                    이전글
                  </a>
                  <a class="prev-title" href="">
                    사직 장애인 주간보호센터 이용자 모집
                  </a>
                </li>
                <li>
                  <a class="prev-index" href="">
                    다음글
                  </a>
                  <a class="prev-title" href="">
                    이용자 모집
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--푸터시작-->
    <Footer @goTop="goTop"/>
    <!--푸터끝-->

  </div>
</template>
<style scoped src="../assets/css/boardDetail.css">
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      detailInfo: {},
      asideList:['공지사항','가정통신문','채용게시판'],
      page: 1,
    }
  },
  async mounted() {
    let param = {
      bno: this.$route.query.bno
    };
    const { data } = await axios.post('/getBoardDetail', param);
    this.detailInfo = data;
  },
  methods: {
    goPage(pageName) {
      this.$router.push(pageName);
    },
    goTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>