<template>
  <the-navigation>
    <li>
      <router-link :to="{ name: 'home'}" custom v-slot="{ href, navigate, isActive}">
         <base-button @click="navigate" :class="{active:isActive}">Home</base-button>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'posts'}" custom v-slot="{ href, navigate, isActive}">
         <base-button @click="navigate" :class="{active:isActive}">Posts</base-button>
      </router-link>
    </li>
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

