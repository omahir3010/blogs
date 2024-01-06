
import Vuex from 'vuex'
import axios from 'axios';

const state = {
    blogsData: [],
}

const actions = {
   getBlogsData({commit}){
    console.log(process.env)
       axios.get('https://762j5o41sj.execute-api.us-east-1.amazonaws.com/prod/blogs')
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