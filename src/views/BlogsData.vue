<template>
  <div v-if="getBlogsData == null || undefined">
      <div></div>
  </div>
  <div v-if="renderData == null" class=" flex justify-center min-w-full mt-[230px]">
      <div class="atom-spinner">
<div class="spinner-inner">
  <div class="spinner-line"></div>
  <div class="spinner-line"></div>
  <div class="spinner-line"></div>
  <!--Chrome renders little circles malformed :(-->
  <div class="spinner-circle">
    &#9679;
  </div>
  <div class="pt-[80px] font-light" :class="{ 'text-white':isDark, 'text-black':!isDark}">
  Loading...
</div>
</div>

</div>
  </div>
  <div v-if="renderData != null">
      <div v-html="renderData">
      </div>
  </div>
</template>
<script>
/* eslint-disable */ 
import store from '@/store/store';
import { useRoute } from 'vue-router';
import aws111 from '../../mocks/files/aws333/aws333.html';
import { useDark } from "@vueuse/core";

export default {
  data() {
      return {
          aws222: aws111,
          renderData:null,
          isDark:useDark()
      }
  },
  computed: {

      dynamicFile() {
          const route = useRoute();
          let blogsData = [];
          blogsData = store.state['blogsData'].filter((blog) => {
              if (blog.path == route.params.path) {
                  return blog;
              }

          });
          console.log(blogsData)
          return blogsData[0]['url'];
      },
      getBlogsData() {
          const route = useRoute();
          let blogsData = [];
          blogsData = store.state['blogsData'].filter((blog) => {
              if (blog.path == route.params.path) {
                  return blog;
              }

          });

          if(blogsData[0]['url'] != null || blogsData[0]['url'] != undefined ){
              fetch(blogsData[0]['url'])
                  .then((response) => {
                      console.log(response)

                      return response.text();
                  })
                  .then((html) => {
                     this.renderData = html;
                     this.blogsUrl = blogsData[0]['url'];
                      return html;
                  }).catch((err)=>{
                      console.log(err)
                  })
          }
         
      }

  },

}
</script>

<style>
.atom-spinner, .atom-spinner * {
    box-sizing: border-box;
  }

  .atom-spinner {
    height: 60px;
    width: 60px;
  }

  .atom-spinner .spinner-inner {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }

  .atom-spinner .spinner-circle {
    display: block;
    position: absolute;
    color: #ff1d5e;
    font-size: calc(60px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .atom-spinner .spinner-line {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: 1s;
    border-left-width: calc(60px / 25);
    border-top-width: calc(60px / 25);
    border-left-color: #ff1d5e;
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;
  }

  .atom-spinner .spinner-line:nth-child(1) {
    animation: atom-spinner-animation-1 1s linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }

  .atom-spinner .spinner-line:nth-child(2) {
    animation: atom-spinner-animation-2 1s linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }

  .atom-spinner .spinner-line:nth-child(3) {
    animation: atom-spinner-animation-3 1s linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
  }
</style>