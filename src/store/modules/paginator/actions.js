export default {
    handleData({ commit }, payload) {
        commit('setData', payload)
    },

    changeDirection({commit}, payload) {
        commit('setCurrPage', payload)
    }

}