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
                            <li>프로그램안내</li>
                            <li>사진/영상마당</li>
                            <li>자료실</li>
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
                              <tr v-for="(item, index) in boardList" :key="item" class="board-right-table-tr" @click="goDetail(item.번호)">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.제목 }}</td>
                                <td>{{ item.작성자 }}</td>
                                <td>{{ item.작성일 }}</td>
                                <td>{{ item.조회수 }}</td>
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
                      <li v-for="item in 10" :key="item">
                        <button :class="{active: item == 1}">{{item}}</button>
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
export default {
    name: 'Board',

    data() {
        return {
            boardList: [
              {
                번호: 1,
                제목: '‘심한 장애’ 빈곤층 장애인 15.5만명 장애인연금 사각지대 방치',
                작성자: '김동윤',
                작성일: '2023-10-20',
                조회수: 92
              }
            ]
        };
    },

    mounted() {
        for(let i =0; i < 9; i ++) {
          this.boardList.push(this.boardList[0]);
        }
    },

    methods: {
      goDetail(boardIdx) {
        this.$router.push('/boardDetail');
      },
      goPage(pageName) {
        this.$router.push(pageName);
      }
    },
};
</script>

<style scoped src="../assets/css/board.css">

</style>