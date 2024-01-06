<template>
<div>
  <HeaderComponent />
  <MainPage />

</div>
</template>

<script>
import  HeaderComponent from './components/layout/HeaderComponent.vue';
import  MainPage from './components/MainPage.vue';
import router from './router/router';
export default {
  name:"myView",
  components: {
    HeaderComponent,
    MainPage
},
unmounted() {
  router.push('/');
},

};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.dark{
  background: #16171d;  
  color: #fff;
}

</style>
