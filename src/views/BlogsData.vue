<template>
    <div v-if="getBlogsData == null || undefined">
        <div></div>
    </div>
    <div v-else>
        <div v-html="aws222">
        </div>
    </div>
</template>
<script>
import store from '@/store/store';
import { useRoute } from 'vue-router';
import aws111 from '../../mocks/files/aws333/aws333.html'
export default {
    data() {
        return {
            aws222: aws111,
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

            return blogsData[0];
        }

    },

}
</script>