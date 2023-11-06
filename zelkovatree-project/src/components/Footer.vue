<template>
  <!--푸터시작-->
  <div class="footer-area">
    <div class="footer-ul-wrapper">
      <ul class="footer-ul">
        <li style="width: 390px">
          <img style="width: 220px" src="../assets/img/느티나무마을아이콘.png" alt="">
        </li>
        <li>
          <p>
            (12936) 경기도 하남시 덕풍동로 53
          </p>
          <p class="tel-info">
            <span>전화: 031-796-0005&nbsp;&nbsp;</span>
            <span>팩스: 031-796-0005&nbsp;&nbsp;</span>
            <span>이메일: 031-796-0005&nbsp;&nbsp;</span>
          </p>
          <p class="facility-info">
            <span>이사장: 방성일 담임목사</span>
          </p>
        </li>
        <li>
          <p>
            <span>후원계좌:</span>
            <span class="margin-custom">농협 222-22-222222 계좌번호 홍길동</span>
          </p>
          <p>
            <span>후원문의:</span>
            <span class="margin-custom">031-796-0005</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
  <!--푸터끝-->


  <div class="top-button-area">
    <button @click="goTop">▲TOP</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      goTop() {
        this.$emit('goTop');
      }
    }
  }
</script>
<style scoped src="../assets/css/footer.css">

</style>
