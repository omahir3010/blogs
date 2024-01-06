import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import BlogsData from "@/views/BlogsData.vue";
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,

    },
    {
        path: '/blogs/:path',
        name: 'BlogsData',
        component: BlogsData,
        props:true,
    }
  ]
});

export default router;
