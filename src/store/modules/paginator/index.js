export default {
    state() {
        return {
            elementsCount: null,
            entriesPage: 20,
            currentPage: 1,
        };
    },
    mutations: {
        setData(state, payload) {
            state.elementsCount = payload;
        },

        setCurrPage(state, payload) {
            state.currentPage += payload
        }
    },
    getters: {
        totalPages(state) {
            return Math.ceil(state.elementsCount.length / state.entriesPage);
        },

        nextButtonIsDisabled(state, getters) {
            return state.currentPage === getters.totalPages;
        },

        previousButtonDisabled(state) {
            return state.currentPage === 1;
        },

        pageOfPages(state, getters) {
            return `${state.currentPage} / ${getters.totalPages}`;
        },

        currentPageItems(state) {
            const startIndex = (state.currentPage - 1) * state.entriesPage;
            return state.elementsCount.slice(startIndex, startIndex + state.entriesPage)
        }
    },

    actions: {
        handleData({ commit }, payload) {
            commit('setData', payload)
        },

        changeDirection({commit}, payload) {
            commit('setCurrPage', payload)
        }

    }
};
