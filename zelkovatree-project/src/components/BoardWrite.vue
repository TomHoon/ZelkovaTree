<!--게시판쓰기참고사이트-->
<!--https://codesandbox.io/s/vue3-quill-p5z0iz?file=/src/components/HelloWorld.vue-->
<!--다음카페글쓰기(데프미디어)-->

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
        <div class="board-right-write">
          <div class="border-div"></div>
          <div class="board-right-tit">
            <h2>글쓰기</h2>
          </div>
          <div class="board-right-table-wrapper">
              <div style="width: 1000px; height: 500px">
                <quill-editor v-model="content"
                              :options="editorOption"
                              ref="quillRef"
                              @editorChange="onEditorChange($event)">
                </quill-editor>
                <div class="output ql-snow">
                  <div v-html="content"></div>
                </div>
                <div class="button-wrapper">
                  <button class="write-decision-btn" >올리기</button>
                </div>
              </div>
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
import { QuillEditor } from '@vueup/vue-quill';
import axios from 'axios';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: 'Board',

  data() {
    return {
      imgtest: '',
      imgPath: '',
      editorOption: {
        modules: {
          toolbar: {
            container: [['image'], ['bold', 'italic'],  [{ 'list': 'ordered'}, { 'list': 'bullet' }]],
            handlers: {
              'image': (e) => {
                this.imageHandler(e);
              }
            }
          }
        }
      },
      content: "",
    };
  },

  components: {
    QuillEditor
  },

  async mounted() {
  },
  computed: {
    editor() {
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },
  methods: {
    goDetail(boardIdx) {
      this.$router.push('/boardDetail');
    },
    goPage(pageName) {
      this.$router.push(pageName);
    },
    check() {
      console.log('a >>> ', this.$el.querySelector('#editor'));
    },
    onEditorChange(evt) {
      
    },
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    imageHandler(e) {
      // 1. 이미지를 저장할 input type=file DOM을 만든다.
      const input = document.createElement('input');
      // 속성 써주기
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
      // input이 클릭되면 파일 선택창이 나타난다.
      // input에 변화가 생긴다면 = 이미지를 선택
      const editor = this.$refs.quillRef.getEditor();
       const target = editor.querySelector(".ql-editor");
       console.log(target);
      input.addEventListener('change', async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('uploadFile', file); // formData는 키-밸류 구조
        formData.append('param', JSON.stringify({title:'1'}));
        let res = await axios.post('/addBoard', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        target.innerHTML += `<img src="image/${res.data}">hello</img>`;
                
      });
        console.log('target ', target);
        console.log('this imgPath ', this.imgPath);
    },
    inputImg() {
        
    }
  },
};
</script>

<style scoped src="../assets/css/board.css">
          /* // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
          // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
          // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.
        
          // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
          const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
          // 1. 에디터 root의 innerHTML을 수정해주기
          // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
          // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
          // editor.root.innerHTML =
          //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
          //   // 2. 현재 에디터 커서 위치값을 가져온다
          //   const range = editor.getSelection();
          //   // 가져온 위치에 이미지를 삽입한다
          //   editor.insertEmbed(range.index, 'image', IMG_URL); */
</style>

