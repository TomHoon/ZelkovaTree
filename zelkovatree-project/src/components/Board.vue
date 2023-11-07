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
              <li @click="chgAside(index)" :class="{active:page == index + 1}" v-for="(item, index) in asideList" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="board-right">
          <div class="border-div"></div>
          <div class="board-right-tit">
            <h2>{{ asideList[page-1] }}</h2>
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
              <tr v-for="(item, index) in boardList" :key="item"
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
                <button @click="getBoard(index + 1)" :class="{active: index + 1 == pagination}">{{ item }}</button>
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
    <Footer @goTop="goTop"/>
    <!--푸터끝-->


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Board',

  data() {
    return {
      asideList:['공지사항','가정통신문','채용게시판'],
      boardList: [],
      page:1,
      pagination: 1
    };
  },

  async mounted() {
    if (this.$route.query?.activePage) {
      this.page = this.$route.query?.activePage;
    }
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
      this.pagination = page;
      const { data } = await axios.post("/getBoardByPage", { page: this.pagination });
      this.boardList = data;
    },
    goTop() {
      window.scrollTo(0, 0);
    },
    async chgAside(index) {
      this.page = index + 1;
      switch (index + 1) {
        case 1 :
          const { data } = await axios.post("/getBoardByPage", { page: this.pagination });
          this.boardList = data;
          break;
        case 2 :
          this.boardList = []
          break;
        case 3 :
          this.boardList = []
          break;
      }
    }
  },
};
</script>

<style scoped src="../assets/css/board.css">

</style>