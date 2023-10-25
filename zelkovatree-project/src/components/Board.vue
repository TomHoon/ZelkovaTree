<!--게시판참고사이트-->
<!--https://saswc.org/gallery?listStyle=webzine-->
<!--https://happyseed.or.kr/bbs/?bid=counsel-->
<!--http://bsrehab.or.kr/community/community04.php?idx=304&pg_mode=View&bid=pds&page=0&sw=&id=-->
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
            <span>알림마당</span>
          </div>
          <div class="board-left-ul">
            <ul>
              <li class="active">공지사항</li>
              <li>가정통신문</li>
              <li>채용게시판</li>
              <li>출석</li>
            </ul>
          </div>
        </div>
        <div class="board-right">
          <div class="border-div"></div>
          <div class="board-right-tit">
            <h2>공지사항</h2>
            <button @click="goPage('boardWrite')" class="write-btn">글쓰기</button>
          </div>
          <div class="board-right-table-wrapper">
            <table class="user-info-price">
              <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in boardList.slice(boardList.length-10, boardList.length)" :key="item"
                  class="board-right-table-tr" @click="goDetail(item.bno)">
                <td>{{ item.bno }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.author || '관리자' }}</td>
                <td>{{ item.write_date }}</td>
                <td>{{ item.hit || 0 }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="pagination">
            <ul class="pagination-ul">
              <li>
                <button>
                  <img width="10" height="10" src="https://img.icons8.com/officexs/16/less-than.png" alt="less-than"/>
                </button>
              </li>
              <li v-for="(item, index) in 10" :key="item">
                <button @click="getBoard(index + 1)" :class="{active: index + 1 == page}">{{ item }}</button>
              </li>
              <li>
                <button>
                  <img width="10" height="10" src="https://img.icons8.com/officexs/16/more-than.png" alt="more-than"/>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--푸터시작-->
    <div class="footer-area">
      <div class="footer-ul-wrapper">
        <ul>
          <li>
            <img src="../assets/img/느티나무마을아이콘.png" alt="">
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
import axios from 'axios';

export default {
  name: 'Board',

  data() {
    return {
      boardList: [],
      page:1

    };
  },

  async mounted() {
    const { data } = await axios.post("/getBoardByPage", { page: this.page });
    this.boardList = data;
  },

  methods: {
    goDetail(bno) {
      this.$router.push({name: 'BoardDetail', query: {bno: bno}});
    },
    goPage(pageName) {
      this.$router.push(pageName);
    },
    async getBoard(page) {
      this.page = page;
      const { data } = await axios.post("/getBoardByPage", { page: this.page });
      this.boardList = data;
    }
  },
};
</script>

<style scoped src="../assets/css/board.css">

</style>