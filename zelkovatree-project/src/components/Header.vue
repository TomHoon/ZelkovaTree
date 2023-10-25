<template>
    <div class="fixed-menu-wrapper">
        <div class="top-cover">
              <div class="top-wrapper">
                <ul class="header-right">
                  <li>홈으로</li>
                  <li>로그인</li>
                  <li>회원가입</li>
                </ul>
              </div>
        </div>
        <div class="header">
            <div class="header-wrapper">
                <a href="" class="header-left">
                    <img @click="goPage('')" src="../assets/img/느티나무마을아이콘_최종.png" alt="">
                </a>
                <div class="ul-wrapper">
                    <ul class="header-right">
                        <li @click="goPage('guide')">이용안내</li>
                        <li @click="goPage('gallery')">느티나무소식</li>
                        <li>기관소개</li>
                        <li>후원&자원봉사</li>
                        <li @click="goPage('board')">알림마당</li>
                    </ul>
                </div>
            </div>
        </div>
      <div class="hover-down">

      </div>

    </div>
</template>

<script>
export default {
    name: 'ZelkovaTreeHeader',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        goPage(dir) {
            this.$router.push(`/${dir}`);
        }
    },
};
</script>

<style scoped src="../assets/css/main.css">
</style>