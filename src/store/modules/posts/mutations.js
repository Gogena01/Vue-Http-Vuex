export default {
    setData(state, payload) {
        state.posts = payload
    },

    setSinglePost(state, payload) {
        state.singlePost = payload
    }
}