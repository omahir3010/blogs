
<template>
     <div class="h-screen">
        <div class="mt-[50px]">
          <div class="mt-2 flex justify-center">
               <h2 class="text-3xl font-semibold sm:text-4xl  text-center
            bg-gradient-to-r bg-clip-text  text-transparent p-2
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text" >
            Breaking Down (AWS): Your Roadmap to Understanding Amazon Web Services :)
               </h2>

          </div>
        </div>
        <div>
          <div class="mt-4">
               <BlogCards />
          </div>
        </div>
     </div>
</template>
<script>
import BlogCards from '@/components/BlogCards/BlogCards.vue';
export default {
     components: {
          BlogCards
     },
}
</script>
