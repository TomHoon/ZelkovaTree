<template>
  <div class="update-wrapper">
    <div class="update-area">
      <table class="user-info-price">
        <thead>
        <tr>
          <th class="title">제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
        </thead>
        <tbody>
        <tr class="">
          <td>업데이트</td>
          <td class="author">이동훈</td>
          <td class="hit">0</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Update"
}
</script>
<style scoped>
.update-wrapper {
}
.update-area {
  width: 80%;
  margin: 0 auto;
}

.user-info-price {
  margin-top: 25px;
  width: 100%;
  border-top: 5px solid #75b0de;
  border-collapse: collapse;
  text-align: center;
}

.user-info-price thead {
  background: #e7f0f8;
  color: #555;
}

.user-info-price th, td {
  color: #555;
  border-bottom: 1px solid #ddd;
  border-left: none;
  padding: 10px;
}

.user-info-price th:first-child, td:first-child {
  border-left: none;
}

.title {
  width: 850px;
}
</style>