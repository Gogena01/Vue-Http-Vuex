import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state() {
        return {
            elementsCount: null,
            entriesPage: 20,
            currentPage: 1,
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions
};
