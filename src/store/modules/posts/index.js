import postServices from "@/services/postServices.js";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state() {
        return {
            posts: null,
            singlePost: null
        }
    },

    getters:getters,

    mutations: mutations,

    actions: {
        fetchData({ commit }) {
            postServices.getAllPosts()
                .then((response) => {
                    console.log(response);
                    commit('setData', response.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });

        },

        findPost({commit, state}, payload) {
           const post = state.posts.find(post => post.id === payload);
           commit('setSinglePost', post)
        }
    }
}