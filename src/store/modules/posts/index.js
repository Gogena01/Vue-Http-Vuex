import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    namespaced:true,
    state() {
        return {
            posts: null,
            singlePost: null
        }
    },

    getters:getters,

    mutations: mutations,

    actions: actions
}