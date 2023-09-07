<template>
  <the-navigation>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/posts">Posts</router-link></li>
  </the-navigation>
</template>


<script>
import TheNavigation from '@/components/UI/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  }
}
</script>