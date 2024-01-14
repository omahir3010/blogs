<template>
    <div
        class="top-0 sm:top-4 rounded-none h-[70px] mb-7 sm:rounded-full border-b sm:border border border-gray-300/50 dark:border-gray-400/40 p-4 z-50 backdrop-blur-md dark:backdrop-blur-md w-full m-auto max-w-4xl flex justify-between items-center sticky">
        <div class="container flex justify-around items-center text-xl sm:space-x-5 w-full">
            <div class="h-[60px] flex justify-start items-center text-[23px] font-light w-1/3">
                <div>
                    <a href="/"> {{ logoName }}</a>
                </div>
            </div>
            <div class="flex justify-around w-3/4 font-light">
                <div class="hover:underline text-[18px]">
                    <a href="#">AWS</a>
                </div>
           
               </div>
               <!-- <div class="flex justify-around w-3/4 font-light">
                <div class="hover:underline text-[18px]">
                    <a href="#">RoadMap</a>
                </div>
           
               </div> -->
            <div class="h-4/5 w-4/12 flex justify-end space-x-4 items-center">
                <div class="border-[1px] rounded-full p-2 border-gray-300/50 dark:border-gray-400/40 cursor-pointer"
                    @click="toggleDark" v-if="isDark">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </div>
                <div class="border-[1px] rounded-full p-2 border-gray-300/50 dark:border-gray-400/40 cursor-pointer"
                    @click="toggleDark" v-if="!isDark">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useDark } from "@vueuse/core";
export default {
    data() {
        return {
            logoName: '<OA/>',
            isDark: useDark()
        }
    },
    methods: {
        toggleDark() {
            this.isDark = !this.isDark;
        },
    },
}
</script>