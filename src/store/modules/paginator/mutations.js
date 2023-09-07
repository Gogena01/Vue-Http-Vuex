export default {
    setData(state, payload) {
        state.elementsCount = payload;
    },

    setCurrPage(state, payload) {
        state.currentPage += payload
    }
}