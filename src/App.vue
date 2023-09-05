<template>
<div>
  <navigation-comp></navigation-comp>
</div>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import NavigationComp from './components/NavigationComp.vue';
export default {
  components: {
    NavigationComp
  }
}
</script>