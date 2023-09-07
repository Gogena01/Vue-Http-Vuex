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
import { mapGetters } from 'vuex';
import ThePost from '@components/UI/ThePost.vue'
export default {
    components: {
        ThePost
    },

    props: {
        id: String
    },

    computed: {
        ...mapGetters('posts', ['singlePostData'])
    },

    created() {
        this.$store.dispatch('posts/findPost', parseInt(this.id))
    }
}
</script>