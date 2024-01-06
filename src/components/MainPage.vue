<template>
    <router-view></router-view>
</template>
<script>
import store from '@/store/store';
export default{
    beforeMount() {
        store.dispatch('getBlogsData');
    },
}
</script>