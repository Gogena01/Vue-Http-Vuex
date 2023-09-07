<template>
    <div>
        <h2>Posts page</h2>
        <router-view></router-view>
        <paginator-comp v-if="postsData !== null" :elementsCount="postsData" v-slot="{ currentPageItems }">
            <catalog-item v-for="(post, index) in currentPageItems">
                <template #title>
                    <h3>{{ post.title }}</h3>
                </template>
                <template #button>
                    <router-link :to="{ name: 'singlePost', params: { id: post.id } }">View Details</router-link>
                </template>
            </catalog-item>
        </paginator-comp>
        <h2 v-else>Loading...</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CatalogItem from '@/components/UI/CatalogItem.vue';
import PaginatorComp from '@/components/PaginatorComp.vue';

export default {
    components: {
        PaginatorComp,
        CatalogItem
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
}
</script>


<style scoped>
h2 {
    text-align: center;
}
</style>