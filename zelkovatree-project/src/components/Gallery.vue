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
            <span>느티나무소식</span>
          </div>
          <div class="board-left-ul">
            <ul>
              <li @click="page=index+1" :class="{active: page == index +1}" v-for="(item, index) in asideList" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="board-right">
          <div class="border-div"></div>
          <div class="board-right-tit">
            <h2 v-if="page == 1">활동사진</h2>
            <h2 v-if="page == 2">가정통신문</h2>
            <h2 v-if="page == 3">채용게시판</h2>
            <button @click="goPage('boardWrite')" class="write-btn">글쓰기</button>
          </div>
          <div class="board-right-table-wrapper">
            <div class="gallery-wrap">

              <div class="list-wrap" v-if="page == 1" v-for="(item, index) in galleryList" :key="index" @click="goDetail(item.bno)">
                <div class="img-wrapper">
                  <img class="gallery-img" :src="`/image/${item.file_path}`" alt="">
                </div>
                <a href="">
                  <div class="gallery-tit-wrap">
                    <span class="gallery-tit">{{ item.title }}</span>
                    <div class="gallery-subtit-area">
                      <p class="gallery-subtit">
                        <i class='bx bx-calendar-alt'></i>
                        <span>{{ item.write_date }}</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <!--가정통신문시작-->
              <table class="user-info-price" v-if="page == 2">
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
              <!--가정통신문끝-->
              <!--채용게시판시작-->
              <table class="user-info-price" v-if="page == 3">
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
              <!--채용게시판끝-->
            </div>
          </div>
          <!--페이지처리 시작-->
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
          <!--페이지처리 끝-->
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
      galleryList: [],
      page:1,
      asideList: ['활동사진','가정통신문','채용게시판']
    };
  },

  async mounted() {
    const { data } = await axios.post("/getBoardByPage", { page: this.page });
    this.galleryList = data;
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
    },
    goTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped src="../assets/css/gallery.css">

</style>