<template>
    <h2>Posts page</h2>
    <router-view></router-view>
    <paginator-comp v-if="postsData !== null" :elementsCount="postsData" :entriesPage="20"
        v-model:currentPage="currPage" @update="pageDirection"></paginator-comp>
    <h2 v-else>Loading...</h2>
</template>

<script>
import { mapGetters } from 'vuex'
import PaginatorComp from '@/components/PaginatorComp.vue';

export default {
    components: {
        PaginatorComp
    },

    data() {
        return {
            currPage: 1
        }
    },

    computed: {
        ...mapGetters('posts', ['postsData'])
    },

    created() {
        this.$store.dispatch('posts/fetchData')
    },

    methods: {
        pageDirection(e) {
            this.currPage = e
        }
    }
}
</script>