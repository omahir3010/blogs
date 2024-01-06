<template>
    <div class="flex flex-wrap justify-center flex-[50%]">
        <div :class="{ 'dark:bg-slate-800 dark:border-[1px] dark:border-slate-600': isDark, 'bg-white': !isDark }"
            class=" min-w-[40px] shadow-2xl w-[450px] h-[370px]  rounded-[10%] m-5 cursor-pointer hover:scale-110 transform transition duration-1000 overflow-hidden mx-9"
            v-for="blogs in getBlogs" :key="blogs.id">
            <router-link :to="`/blogs/${blogs.path}`">
                <div class="flex justify-between mt-5 mx-5">
                  
                       <div class="absolute">
                         <img :src="awsLogo.logo" alt="" class="" v-if="isDark">
                        <img :src="awsLogo.darkModeLogo" alt="" class="" v-if="!isDark">
                       </div>

                        <div>

                        </div>
                </div>
               <div class="pt-[90px]">
                <div class=" sm:text-[30px] text-[23px] w-full p-5 font-[title-font]">
                    <p> {{ blogs['subtitle'].slice(0, 45) + (blogs['subtitle'].length > 45 ? "..." : "")}}</p>
                </div>
               <div>
                <div class=" min-w-full flex px-4 text-[20px] font-sans font-light">
                    <p class="mr-[7px] font-normal">Skills: </p> {{ blogs['services'].join(', ') }}
                </div>
                <div class=" min-w-full flex px-4 text-[20px] font-sans font-light">
                    <p class="mr-[7px] font-normal">Level:  </p> <p v-if="blogs['level'] == '1'"> ⭐️</p>
                    <p v-if="blogs['level'] == '2'"> ⭐️⭐️</p>  <p v-if="blogs['level'] == '3'"> ⭐️⭐️⭐️</p>
                </div>
               </div>
               </div>

            </router-link>
        </div>


    </div>
</template>

<script>
import { useDark } from "@vueuse/core";
import LogoAWSDark from '../../../public/images/icon-aws-dark.svg';
import LogoAWSLight from '../../../public/images/icon-aws-light.svg';
import store from '@/store/store.js';
export default {
    data() {
        return {
            isDark: useDark(),
            awsLogo: {
                label: 'AWS',
                logo: LogoAWSLight,
                darkModeLogo: LogoAWSDark,
                url: 'https://aws.amazon.com/',
            },

        }
    },
    computed: {
        getBlogs() {
            return store.state.blogsData;
        }
    }
}
</script>

<style>
@font-face {
    font-family: title-font;
    src: url(../../assets/fonts/KleeOne-Regular.ttf);
}

@font-face {
    font-family: title-italic-font;
    src: url(../../assets/fonts/Raleway-VariableFont_wght.ttf);
}
</style>