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
            <input type="text" v-model="title" placeholder="제목을 입력해주세요." class="board-write-input">
          </div>
          <div class="board-right-table-wrapper">
              <div style="width: 1000px; height: 500px">
                <quill-editor v-model="content"
                              :options="editorOption"
                              ref="quillRef"
                              @editorChange="onEditorChange($event)">
                </quill-editor>
<!--                <input type="file" id="getFile" @change="uploadFunction($event)" />-->
                <div class="output ql-snow">
<!--                  <div v-html="content"></div>-->
<!--                  <img src="imgtest" alt="">-->
                </div>
                <div class="button-wrapper">
<!--                  <button class="file-add-btn" @click="check"><img class="clip-img" width="40" height="40" src="https://img.icons8.com/color/48/attach.png" alt="attach"/></button>-->
                  <button @click="goPage('/board')" class="write-cancel-btn">취소</button>
                  <button @click="enrollBoard" class="write-decision-btn">등록</button>
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
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';
// import { quillEditor } from "vue3-quill";
// import ImageEdit from "quill-image-edit-module";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";

export default {
  name: 'Board',

  data() {
    return {
      title:'',
      imgtest: '',
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
      editor: ''
    };
  },

  components: {
    QuillEditor
  },

  async mounted() {
    const editor = this.$refs.quillRef.getEditor();
    this.editor = editor.querySelector(".ql-blank");
    console.log('test :: ', this.editor);
    // console.log("this is Quill instance:", this.editor);
    // let test = 'iVBORw0KGgoAAAANSUhEUgAAAfQAAACnCAYAAADnu65nAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnfl7VseV5791QfsK2tAuQIAQi9iEbRwvcRwvsRucOB0nnkm643TP9DN/z/zQk2Q8iSfj2ElsOnEcx7HbbjuOzWJAgEBC7EJikRCITRJIujXPedUk2Ebyfd/3LlX3fs/z6CfdW7fqc86t71t1q04p13UnAcxHwPbxaY2uszrgp9hXfHkB8Pw6x76Ks8YkEGMCfcMaH5zQmHRj3EgADy5WWL1IxbuRyWndlApD0IdvaPz6AMV8trjqbFDobORLlZz3ji01mcDOfo09g8npr0TQRdhp1hMIR9D/2KdxYiQ5L0gmYfH9DQ5K8jK5k/eQAAn4ReDdoxp9F5PXVzWVA48td5A7zy+SLCcCAsEL+sAVjd8dTt4Lkq4z1yxSeIC/ktPFxutJwBcCt6YAGXhIf5VUqypSeHwFUJrH0bqlMRC8oP+hV+PU5eS+JOkExvc3KJTwZUoHGa8lgawJTEwB0k+dv8Z+qjwf+EabA1nbQ7OOQLCCPnQd+M3BmK8q8dHnG+od3NvkY4EsigRIYE4Ct6aBNw67uHCdoG4TKC9QeHqlQik/AdoWFMEKuqwSPXSBv3q9RkXefOBHnVzx7pUXryOBbAnI58AkT7PPxq+ySGFbu4L0STRrCAQn6FMu8OJujSmXgp5OOHytVWFFFb9hpcOM15JAJgT+dFTjWAIXwHll1VCmsLWdfZFXXgZcF5yg9w5pvHecYp6uk5vKZ6a7aCRAAsER2NEP7B3k58AvI7yyWuGrS9kffRknQ/4fnKBzMVzmLv7hJgcFOZnfzztJgARmJ9A7rPHeMQ42vMbIlmZgXR0/BXrlFeF1wQi6TLf/eCd//Wbq2EeWKrRV81dxpvx4HwnMRuDyOPCrAy6m2T2lFSTfXOWgtjStW3hx+ASCEfSTlzTeOsJfwJn6c3mVwqOtFPRM+fE+EpiNABfBZRYbFYXAcx0cpWdGL7S7ghF05m3PzoFFucA/bOTLkx1F3k0CnyWwd1BjRz8HGpnGxbo6hS3NHGhkyi+E+4IR9Ne7XZy/FkL1Y/yI59c7kCQPNBIggewJXB7X+GUXxTxbks+sUqgrpahnyzGg+4MR9H/d4YK71bJz2WPLFFor+eJkR5F3k8AMgbf7NI7zPImsw6G+bGZ/Os1IAv4Luiw6+WUXV5xk6+6NDQr38AS2bDHyfhLA6csab/ZydO5XKMg2NtnORjOOgP+CzgVx/ji5tULhseV8afyhyVKSTGB7t8Y55mn3LQTkU6B8EqQZR8B/Qd9/TuMvp/hrOFtXVxcB317LlyZbjrw/2QRkml2m22n+EpDz0+UcdZpRBPwX9E/6gX3MwJS1l7nSPWuELIAE8G+HNM5epaD7HQocpftN1Jfy/Bf0949r9AzxBcrWPY4C/uVejtCz5cj7k0tADl2Rfee0YAh8fZnCMi7cDQZuZqX6L+hcTZqZJ+5213+/x8E8arp/QFlSogi8ewzoG+YC3aCcXl8GbGtnBxUU3wzK9V/Q3+x1cfpyBlXhLV8g8E+bHeTOIxgSIIF0CYxPAv/nU4p5utzSvV6yx0kWOZoRBIIQdJ3aJkLLnsCPOuU8Yi48yZ4kS0gagQPnND7i4tzA3b6xXuGeJvZRgYP29gD/BV1yuMvWNVr2BP55s4McjtCzB8kSEkdg+yEX564mrtmhN7i8QOH5dRT00MHf/YH+C/q7xzT6hinofjj4f9zH71N+cGQZySJw/Sbw0l5Ot4fl9W+vUagupqiHxXuO5/gv6H8+qXHwPAU9W+fKVLtMudNIgATSI3D4gsZ/nGAflB61zK/e3KiwqYF9VeYEfbvTf0HffcbF7gHfKpjYghYUAN9bxxF6YgOADc+YwDtHNY5epKBnDDDNG+tKgWdWsa9KE1sQl/sv6L3DGu8d48uUrbeayhWeXslfvdly5P3JI/CzT12MTSav3VG2mFtso6T/12f7L+jnrmpsP0RBz9a9klZR0ivSSIAEvBMYHdd4mcekegfm05U8VtUnkNkV47+gT0xqvPgpBT07vwAPtCisqaWgZ8uR9yeLgCzIlYW5tHAJbGlWWFfH/ipc6l94mv+CLo/4xT4XVycibprlj//mKoXaUr4glruR1Q+ZwI5+jb2DFPSQsaOtWuGRpeyvwub+uecFI+hclJK9WyWPu+Rzp5EACXgnwDwY3ln5eWVNscKza9hh+ck0g7KCEfTu8xofnuSv5AwckrqlrlRBvknRSIAE0iPwyn4Xl8bSu4dXZ08gbz7wo06udM+eZFYlBCPol8eBX3YxsUOmrulsVOjkvs5M8d31vtFx4Nw1jYs3gCsTwLWbwMSUxrQLKKWQ42gU5gIleQoLCwEZcdSWgJn6fPVC8IX9dJeLW9PBP4dP+CIBZraMPCqCEXRp1iv7NS6NcZSeiYufXeOgpjiTO3nPnQQu3tA4NgKcuKQhgp6JyfbBpRXAiirFTyCZAAzxnslp4Ce7OJAIEflnHiUpYCUVLC0yAsEJ+s4zwJ4BvlzpurYsH/gv6zl1lS63O6/vv6xx4DzQP+rfD0o59U62EnbUKhTkZFM73hsUAZl1+b9M+RoU3i8t91urFRaVUNC/FFRwFwQn6MM3NH59wL8ONTgGZpXM04sy98fIGLDrTLCHA813kEpzuaGeHVfmngrmzpEbGq+yzwkGrodSJRGWzGjRIiMQnKBLk7Z3uzh3LbLGWfng73Y4qW+4tPQIyFYl2bIUlsknkftbOCIJi7eX5wxdB35zkLOCXlgFcc2TKxQWL6SgB8HWY5nBCnrPkMb7x8PrZD022tjLmO41fdfIAihJNSzfyaMwyeYnU/G06AnIosft3dHEQfStj74Gjy+X9SZ8FyL0RLCCLg37+R4XN25F2ESLHv1km8LiBXwhvLpM0nz+qU/jYsTblPiZxKvHgr3u/DWN1ynowUKeo/QnlissoaBHxh9A8IK+d9DFjv4o22jHs2tKFJ5dTTH36q3RCeD3PeZkJOyoc3B/s9fa87ogCMiWxF8d4JR7EGy9lPnUSoVmfkP3giqoa4IXdFfLylONG7c4FTaXFzld5T3GxyeB3x42b1tkZ6ODzgbv7eCV/hK4MqHx//axn/GXqvfSeECLd1YBXRm8oEvFmTlubvc1liv8HY9K9Rzjv+/Rvm5J8/xgDxd+danCymrOtHhA5fslkijoxd0UdN/Beizwux2SlImx7xFXEJeFI+hSc/m2Jd+4aF8kwP2b3qPik36NfQYfviHd2XfWKlQUsWPz7lX/rvxfO91U9j9a+ARe6HSQPz/85/KJfyUQnqAPXtGpaVLaZwmsq3Owhd9ePYXFwBXgd4fN760byhS2tlPQPTnV54tkyl2m3mnhEshxgH++hwmxwqX+haeFJ+jyaNNHV2E7Y2EB8FyHA8W+3xN62WMse41tMG5ni8ZLb/RonPExQ2A0rbDvqZVFKjUzRYuUQLiCLk3l1PvfHL6tXaG+jC+Bl1fg0AWND07YM/IqygV+sIE/1rz41s9rPjoFHDhn/iyOn202oazWCoXHlrMvi9gX4Qu6pOeUkVbSv3Pd16ywvo4vgNcX4OV9LmSrmk22pVlhHX0cqssOXXDxwYlQH8mHAdjcqFIpkWmREghf0KW5Ry9qvHPUntGW3y6SVdCyGprmjcCxkZkEMrYZD9oJ32ND1zV+c9C+WAmflL9PfKpNoZlJseaEKqcBTrqAbOV2FCDnQsihTz5aNIIuDUhqwhluUUs/fP/Qq3Hqsp2dNDu69P2d7R0/2emmOk5aeARe2OQgn6cQpoDLseEXrgOS6OjyOFKLNMduAdN36cLmOUBRDlCaP7Plr6JQQ5KMyfqqDCw6QZfKymEacqhGUqy6GNja7vj9qyzW+CamgBd329s7t9coPLyEszFhBqnJeQrC5BDWsyqLZKtmsle4n7ykcXoUOH1ZkqhlT74kT6GxHGiRP+8H3kQr6NLsj08DXWft7bC9uq6qSOEbbUBRLjt3r8zkOts/zxTnKfxgA32ejs+zvXbfoItPmG46W4ye75d1IrJeJGkma3p6hoAjQy7GJoNrvWhGW7VCWxUgn/HmsOgFXSq38wywZyC+ol5bovDECqAgJ3lBn22Yf3hCo/uC3bM4PBI32yhI735ZePvq/vj2J+nRCP5qyXIpnxKTYhJf+88BvUPhx5isv+qoxWwZ+cwQdAmErrMaH5+2u+O+W0AvXgg8tsyBfCuhpU/Apr3ns7Xua60KK6qS0+Gl72X/73hlv4tLEZ/C53+rzCtRBik/3JSM2L45Bewa0Dh4LnqdksOgNjcAOZ9dVGeOoEuoHh/RqbOt47KgJalTUX52Oz/e6WIq/B/CfjYBGxsc3NPoa5Es7EsI7B4Adp+xPHAs8PKqGoWHErBGpGdIp9Z8ycFQplhhLlKfOpZX/vUHlVmCLqBkVaBMsw5ejf5XUKaOmz8PeLBl5rsHLXMC8l3qZ5/a3ykvq1T4+jLGQuaRkP6dMjqXUTotWALbVjmoLw32GVGWLivTPziu0Ttsrh7JwtuHFivJOGqeoN923q4zGp8OmAtxtiBrWSALRIDyAnbg2b6II2Mar+63LwY+327mds82EjK7/3eHNQau2B8/mbU++LsqChWe64hvPzd8Q2aMAemHTLfqYsltgmnluq5MIhh5Ro7s5dvZb8dLKd+SNjcCMgVF84eA+P+1g/aPshaVAN9azUUU/kSF91L6Lmq8m+AEVt5JZXbl/c2AfMuNo8n2sz8dBSbvtnnc0AZLkhqjBf02t94hjb1ngdFxM38pybdySXvoc9YfQ8MmvGpduKbxWreZPk+HwqISBTkilxY+ARtTBodPKf0nSl/3j5ucVLazuJnNW2WtEPTbAdN9XuPgeZ36zh61yQlpaxbJFgKFkryoaxPP58dl+1FDucLWlRT0KKL0wDmNj07Z/6MwCnZzPXNTg5OakYybHR8B3u6zd1bQKkG/HTyyGr53eCYrT9i2oEC2IAGyECHfyA8VYRMJ7nk3bmn8fE/4Pva7RVwU5zfR9Mr7xT6NqzwjPT1oc1wtW6W+v0H6v3j9SB28Cvz2kL1iLi6zUtBvx5q8pCLup0YVzgW4Kr40byb93pKFCnUxXtHp2xvvY0H/usNNHWZgs62vd3Bfk80tsLvuth29azrtOJ6sJlqy/RAggwibzWpBvxO87A8cuOLi/HWFoWsawzdmTrXJxGSFelURUFOM1HnlFYWZlMJ7/CDwqwNu6pADm01O1pMMT7ToCLzerXH+WoYdQnTVNu7JpfnAf10fvw/nMjKXEbrtFhtBv5sjRv/zpJvrNzXGpxRuTSOVpESEXrpXyd4miztk6rwod+bEm7J8jdx57HxNCez3j2tIUgebTQ6ukAMsaNERODOq8UaP3XEUHb2/PfnRVmB5VbwEXXZS7YnJIWGxFnQTXgDWITsCssPhveP2dsTyY/GFznh1gNl5NLq7PzypIQtraZkRWFqh8PjyeA12Bq9o/PZwfGKCgp5ZbPOukAjIUYQ/32PvQhXJ4S653GnRE5DZuVe6XFy9GX1dbKuBzGR+d52D4lzbaj53fSXPheS7iItR0OPiyRi3Q6ZKZcrURntixcxiSpoZBGRnzJu9dsZSlAQfWQq0Vcdrpklma2TWJk5GQY+TN2PaFlun3YtzFX6wkWJuWljy4Jb0PCL5Nh5YHL84fmmPi+u30mNh+tUUdNM9xPqlCLy0V0MWN9pknQ0KnY3x6wht8sFsdX27b2bLK21uArLLZ1t7/GI4rgmHKOh8o60g0HVW4+PT9nTA8s1Rkm/kxSz5hhXB4qGS8j19e7dsb7Unpjw0y9dLJAPmN1fH77u5QPpll2QcjZ/vKei+vgIsLEgCL3e5kK2INti9TQob6uM3srGBvdc6ytkQv+uBdTM/XtuXzXWSo31bu4OakmxKMfPek5c03joSPzEX2hR0M2OOtboLAZkilalS002OMvz2Goq56X6S+g1dB97ocXFzyobahlfHp9oUmhfEM4bfOaohB7DE0SjocfRqjNv0wQkNSeVpsj2zSlIEx7MzNJl7pnU7e1XjD706lXiKBjy5QmFxTHdmTLvAj3e50GZ3IRmHIQU9Y3S8MQoC8iK+1u2mRlYm2pZmBTlOl2YXAUkL+8c+jbGYrXpOxwuSOVO2WTaXxzd+bZnlS8dvd15LQc+UHO+LjIAcnyu5l8cmI6vCXR+8epHCgzHc3mMW5eBqI3H1p6MaIwlcKCcJY76+TKE25jNLcc8WSEEPrn9gyQESkNP1JEGIKdOkzAgXoLNDLFri6d1jGqcuxXRO9i4sa0uBR1sdyKr2uNsr+11cGotvKyno8fVt7Fsm06SySE7Sw0Zpq2ocPLQkyhrw2X4T2NGvsTcmB3bMxSZJs0q3pjV+uiveP9Qo6H73BCwvVAJXJoD3jmmci+hoTEkcIwlkaPEjcGxE46OT2rhPO36Qlm1pkv0tScf6nr8GvN5t77kQXvxOQfdCidcYT+AvpzT2nwvv17dMTz6w2EHLAuPRsIJZEBifRCqh0ZHh8GIri+p6ulVWsG9pBsryk/VD1NYU0p6c+p8XUdDTocVrjSYgB7jsPKMDXwHfUedgcwOQM89oHKycjwRkdfSuM7A6u5gsfNvcqNBWnSwhvx0Gu89o7B6Izw+zu4U3Bd3Hl55FmUGgZ0jj4Hngos+rlduqFDpqgYqiZHaIZng32lrsHXSx76zCzSl7hMFRSGUt3NigMC/BoRv3Fe7yZlDQo+0f+PQACchRmcdGAEn1mOlq+MoiOf5UQ1axl+QluDcM0E+2FT05DXSd05ADPkzOMCf7yuWkNPkRWpTL2JXdC30x+nTCEbptPQfr6xuBwStILZy7eAMYndC4dhOQjvlOk05Pvo0vLASqijTqSxXKC9gR+uaEmBXkakDO1O4ZhlF718vykVrstqoGPBzojphLwgl7HKHHrJNhc7wTkDSQ066G4yjIql8aCWRKYODKzGzQ8YsaNyNIITt/nsLSCoWlCzVaYpqDPVPf3L7vj0c0TsQ8vwAFPdso4f0kQAIkcAcB+dRz5gogIh9kEhOZPaovBRrLgcULFBQnk+aMw3ePAX3D3LbGl5UESIAESCADApL06MI1jeExmZaXVfLAlYn0F9TJp6AFBQoVqc9BQHWJQmkCMrtlgHzWW7gozk+aLIsESIAESCB10tf1W8DYpMbEJDDpAlPTgKs1HKUgi9ly5ynkzdcozFWQ7WayUp2WHQHZsiZb1+JsnHKPs3fZNhIgARIggRQB2c76/nEKOsOBBEiABEiABKwmMHhF47eHYy7o+wenpyemtDOtFVytoKAhKyZzHY2CXKT23pblzUz90EiABEiABEjARgITU8CLu2O+KO5//sVbyiMR9GpZjFE8sz837ufm2hiwrDMJkAAJkMDsBF7e52J0Ir6ElFdB/zwCEXg5mGJpBdBYxtF7fEOELSMBEiCBeBCQb+jyLT2ulrGg3wlEtlO0VWmsXuTwwIq4RgrbRQIkQAKWE+i7qPHuUQq6JzfmOEBHnUodBMDMW56Q8SISIAESIIGQCMihOv97NwU9Ldz5OcCmemBtLfNppgWOF5MACZAACQRK4K0jOnVgUxzNlyn32cDUlSpsaVaoLo4jOraJBEiABEjANgJHL2q8E9Np90AF/baj72sC1tdztG5b4LO+JGAjAcnANj6pMDGpMSUH8GjAdZHKdS6fAnPmAfnzgYIchYIcG1vIOmdL4Od7XEha3rhZKIIu0JZVKjzSqjCPC+LjFkNsDwlEQuDqBDB0XWNkHKlDUEbHgas3NeQUPa8mAl+WL8fkAgsLgIoioKZYoSjXawm8zkYCewY0dsYwDWxogi5Ory5W+PoyBTmvl0YCJEAC6RC4OQWcvuxi4KqCZP2SM+2DMhH4hjKFhjKguXwmvzotPgQkf/5Ln7qRHHUbJMVQBV0aUpwHPLFcvqtzqB6kY1k2CcSBgEyZyzfPE5dEzKNZyCQ91ZLUWeNAayX7rTjElbRh76DGjv5oYioohqELujREVsE/1aZSU1s0EiABEvg8gaHrQM8w0DvkpjWFHjRJ+fbeVi15N4CFhey/guYddPmv7Jcz6+Mj6pEIujhJvlFtbXewoCBol7F8EiABWwjIKLz7QnSj8XQ4yWh9zSKF2pJ07uK1JhGQ7WuyjS0uFpmgC8CKQoVnVsm5v3HByXaQAAlkQmDwCrD3rMaZUfs616UVCuvrZtYI0ewj8OFJje7z9sXd3UhHKuhSoZYFCt9o44tg32vAGpNA9gSuTAC7BzT6hu3vUNcsctDZOLMljmYPAYm8Xx9wcfGGPXWeraaRC7pUbGODwj2NFHX7w4ktIAHvBPad1dhxWsN+Kf9bm0XM721SaK9hf+Y9EqK/cvgG8NpBF67lwWiEoIs7n17poKk8eseyBiRAAsESGBkDPjqlU1vP4mqyKv4rzbKrh8Jui4+Pj2i83Wd3TBoj6HJi23fXKTD8bQl/1pME0idw6ILGhyfiNSqfjYJkoXtwsYJ8Y6fZQUDi84MT9oq6MYIu7pZT2mS6ikYCJBA/An8+qXEwJouP0vFOZ6ODzoZ07uC1URKQGJVYtdGMEnQB+L113MpmYyCxziQwG4HxSeDdY3auYPfLq5L6WrJk0uwg0Duk8d5x+0TdOEFfUaXwtVYGvh1hz1qSwNwELo8Db/e5qVzrSTc5ffLx5TwQxpY46L+s8d4JYOyW+cIueV2+1qqmjRN0cfZ31ipUFlHUbQl81pME7kbgwrWZpB1jk+Rzm0BFIfDkCoXSfPZvNkSFnBcg39T7Dc6P0LJQ4aHFkqxNTRkp6O3VCg8vZcDbEPCsIwnMJuZv9mpMTJHP5wksKFSp1NeleWRjCwET876LQt7XrLCu7q9aaaagi5Nf6HSYoMGWaGc9SeAOAiM3NN7o4ch8rqCQkfrfrVQozOXAxZaXR3K+7x4AZHtb1CZrMmShZXnBZ+LHXEG/v0Who5bBHnXg8PkkkA6BG7c0/u2QhmSAo81NoLZUYVu7gsNuzqpQkW/r+88jkjTFTeUKHXVAY9ldg8ZcQa8pUXh2NSPdqkhnZRNPQMT87NXoRzC2OKK1QuGx5eznbPHXnfUcvAr0XNDouxh8vMticfkUXVs6JylzBV2q/fw6B+U8jc3GWGedE0jg/eNAz5CbwJZn12Tm38iOX9R3yzqRYxc1Tl2Gb4vnlAJkNN5SDiytlPMBPP3oM1vQ728BOmqdqP3F55MACXwJga6zLj4+TUyZEpA96vJdlGY3gSkXqRmqC9eROuxFvrvLSvm5csQ7SqEsX76HA5WFwKISoK5MYV764WC2oC9eqFJbPGgkQALmEjh3TWN7d/DTjuYSyL5mufNku66D0vzsy2IJ5hEYuwVMTANT0yLuOrVuYr4D5OcoFOb4Vl+zBV1OLpLV7jQSIAFzCfz6oMbwdQp6th5qXjCznY1GAhkSMFvQpVFMBZuha3kbCYRAYEe/huzRpflD4CstCmu5u8cfmMkrxXxBl1SJPK0oeZHJFptPYOg68JuDXATnp6dkGvb59Q6Kc/0slWUlhID5gr65UWFTA6ehEhKQbKZFBH7fY3ZKTItQfqaqbdUKjzBTpq3ui7Le5gt6e43Cw0so6FFGCZ9NAp8ncPSixjtHOdUeVGRIwpn6uycPCeqRLNd+AuYLOheK2B9lbEH8CLy6X2NkjIIelGebFig8zQVyQeGNa7nmC3pNscKzazhCj2sEsl32EegZ0njfwrOibSMtgi7CTiMBjwTMF/SKQoXnOhjUHh3Ky0ggcAKv7ncxwvPNA+fM2cnAEcftAeYLumTPkRSwNBIggegJyElTb/dxqj0sT8jspMxS0kjAAwHzBX1BwcxedBoJkED0BH7f46J/NPp6JKUGXBScFE/70k7zBb2qCPj7tRR0X9zNQkggCwKXxoFXurjvPAuEad8qKUJ/1OkgZ17at/KG5BEwX9AbyhW2ruSUU/Jiky02jcCuMxqfDnC6PWy/PLREYVUN+8CwuVv4PPMFfXmVg0dbLUTLKpNAzAi83KUxOk5BD9utDWUKW9sp6GFzt/B55gs6zwq2MKxY5dgRkOMgX2Oa18j8+g8bFYpyKeqROcCOB5sv6F9dqrCymoFsRzyxlnElwOn2aD0r2TJlgRyNBOYgYL6gP7taoaaEgcwwJoEoCcjoXEbptGgItFYoPLac/WA09K15qvmC/i/3OqnD4GkkQALREJiY0nhxN7+dR0N/5qn584EXOrnbJ0ofWPBsswV9UYnCt1ZTzS0IJFYxxgROXtJ46wgFPWoXf2etQmUR+8Oo/WDw880W9I31Cvc0MYANDiBWLQEE+P3cDCdz+5oZfjC4FmYL+jOrFOpKKegGBxCrlgACf+jVOHWZI/SoXb16kcKDi9kfRu0Hg59vrqDLFg3ZqkEjARKIlsBLe11cvxltHfh0pAY3MsihkcAsBMwV9I46B/c303EkQAJREpicBn6yi+leo/TB7WcX5AA/3MSFcSb4wtA6mCvo317joLrYUGysFgkkhMDIDY1XD3C63RR3/9NmB7nM626KO0yrh5mCzlSHpsUJ65NUAqdHgTd7OEI3xf/PdShUFHLa3RR/GFYPMwX98eUKSysYtIYFC6uTQAI9QxrvH+cI3RTXb2130FBmSm1YD8MImCfoNcUKz66hmBsWKKxOQgnsG3TxSX9CG29gsx9bptBayf7RQNeYUCXzBP2JFQpLFjJgTYgO1oEEdg8Au89wyt2USHh4CdBew4VxpvjDsHqYJeiLFyo8uYJibliQsDoJJvDJaY19ZznlbkoIPNCisKaWfaQp/jCsHmYJ+nMdDioKDUPE6pBAggl8fBroOssRuikh8JUWhbUUdFPcYVo9zBF0SfEqqV5pJEAC5hD4+LRGF0foxjjkKy3A2lpOuRvjELMqYoagNy1QeLqNYm5WbLA2JADs7NfYM8gpd1NigfncTfGEkfWIXtALc5Ba1V6SR0E3MkRUevpmAAAC8ElEQVRYqUQT2DPgYueZRCMwqvGPtiosr2JfaZRTzKlM9IIuI3MZodNIgATMI9B9XuPDkxyhm+KZp9oUmtlfmuIO0+oRraB/danCymqKuWlRwfqQwG0Cx0c03u6joJsSEUyJbYonjKxHdIJ+f4tCB1drGhkVrBQJ3CZw/prG690UdFMi4h83OijMNaU2rIdhBKIR9C3NwLo6rtQ0LBhYHRL4AoGxWxo/20NBNyE05jvAf7uH/aYJvjC0DuEL+sNLFNprOM1uaECwWiTwBQI/3eXi1jTBRE2gskjhO2vZd0btB4OfH56gF8wHHmnlgg6Dg4FVI4G7Etje7eLcNcKJmoCsbpdV7jQSmIVAOILeWAbI/snSfAYjQ5EEbCPw55MaB89z2j1qv93bBGyo55R71H4w+PnBC/rmRmBTA4PQ4CBg1UhgTgK9wxrvHaOgRx0m29oV6ss4KIraDwY/PzhBbypXuLdJobLI4OazaiRAAl9KYHRc4+UuCvqXggr4AlkQJwvjaCQQ2pR7VbHC+lrwzF7GHAnEiMAv9rq4ejNGDbKsKfWlCttWcXRumdvCrq5/I/S6Ulm9DiyvZNCF7UU+jwSCJvAfJzQOX+AoPWjOs5XPT5dRkbfqudkJekEOsLRCpUR8UYlVDWdlSYAE0iBw8hLw1hEeo5oGMl8v/fs1CjL7SSOBOQikL+hVRbIwA2goA+Q7OY0ESCD+BLQGfrLLxRQ1PXRnLyhQ+N469rWhg7fvgVNqe/e0OzEFNTmlIe+qoxTmKY28+UBhrkJJrmw301hYgNQvxNx59rWSNSYBEsiewL8f0zgyzGn37EmmV8KmBoXNjRT09Kgl8uop5bruJID5iWw+G00CJOCZwOnLGm/2UtA9A/Ppwuc6FCoKKeg+4YxzMRT0OHuXbSMBvwm83OVidNzvUlnebATk0+bWdu5VY4R4IjCltNa/8nQpLyIBEkg8gUMXdN3RYd2ceBAhAVhb7xxdsgAXQ3ocH2M5gf8PpwTC3+gze0QAAAAASUVORK5CYII=';
    // const base64Response = await fetch(`data:image/jpeg;base64,${test}`);
    // const blob = await base64Response.blob();
    // console.log(blob);
    // var reader = new FileReader();
    // reader.readAsDataURL(blob);
    //
    // reader.onloadend = function() {
    //   var base64data = reader.result;
    //   console.log(base64data);
    //   this.imgtest = base64data;
    // }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
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
    // onEditorChange({ quill, html, text }) {
    //   this.content = html;
    // },
    onEditorChange(value) {
      console.log('value >>> ', value);
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
      input.addEventListener('change', async () => {
        console.log('온체인지');
        const file = input.files[0];
        console.log(file);
        // multer에 맞는 형식으로 데이터 만들어준다.
        const formData = new FormData();
        formData.append('uploadFile', file); // formData는 키-밸류 구조
        formData.append('param', JSON.stringify({title:'hihi'}));
        // 백엔드 multer라우터에 이미지를 보낸다.
        console.log(formData);
      // .querySelector('.ql-editor').innerHTML('<h2>hi</h2>');
      //   const editor = this.$refs.quillRef.getEditor();
        // let test = editor.querySelector(".ql-blank");
        const result = await axios.post('/addBoard', formData);
        this.editor.innerHTML += `<img style="max-width:1100px; max-height:1100px;" src="image/${result.data}"></img><br><br><br><br>`;
        // try {
        //   const result = await axios.post('http://localhost:4050/addBoard', formData);
        //   console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
        //   const IMG_URL = result.data.url;
        //   // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        //   // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        //   // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.
        //
        //   // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
        //   const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        //   // 1. 에디터 root의 innerHTML을 수정해주기
        //   // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        //   // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        //   // editor.root.innerHTML =
        //   //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
        //
        //   // 2. 현재 에디터 커서 위치값을 가져온다
        //   const range = editor.getSelection();
        //   // 가져온 위치에 이미지를 삽입한다
        //   editor.insertEmbed(range.index, 'image', IMG_URL);
        // } catch (error) {
        //   console.log('실패했어요ㅠ');
        // }
      });
    },
    uploadFunction(e) {
      console.log('e >>> ', e);
    },
    async enrollBoard() {
      const html = this.$refs.quillRef.getHTML();
      console.log('content >>> ', html);
      this.content = html;

      const formData = new FormData();
      formData.append('param', JSON.stringify({title:this.title, content:this.content}));

      await axios.post('/enrollBoard', formData)
          .then(res => this.$router.push('/board'));

    }
  },
};
</script>

<style scoped src="../assets/css/board.css">

</style>
