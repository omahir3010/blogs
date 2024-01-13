<template>
    <div v-if="getBlogsData == null || undefined">
        <div></div>
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
import aws111 from '../../mocks/files/aws333/aws333.html'
export default {
    data() {
        return {
            aws222: aws111,
            renderData:null
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