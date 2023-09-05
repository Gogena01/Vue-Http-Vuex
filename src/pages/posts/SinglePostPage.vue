<template>
    <the-post>
        <template #title>
            <h3>{{ singlePostData.title }}</h3>
        </template>
        <template #body>
            <p>{{ singlePostData.body }}</p>
        </template>
    </the-post>
</template>

<script>
import ThePost from '../UI/ThePost.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        ThePost
    },

    props: {
        id: String
    },

    computed: {
        ...mapGetters(['singlePostData'])
    },

    created() {
        this.$store.dispatch('findPost', parseInt(this.id))
    }
}
</script>