
import Vuex from 'vuex'
import axios from 'axios';

const state = {
    blogsData: [],
}

const actions = {
   getBlogsData({commit}){
    console.log(process.env)
       axios.get(process.env.VUE_APP_API_GATEWAY + 'prod/blogs')
       .then((response) => {
        console.log(response.data)
           commit('commitBlogs' , response.data['data'])
       }).catch((error) => {
           console.log(error)
       })
    }
};

const mutations = {
    commitBlogs(state , data){
        state.blogsData = data;
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions
})