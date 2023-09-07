export default {
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
}