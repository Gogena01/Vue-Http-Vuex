<template>
  <div>
    <navigation-comp></navigation-comp>
  </div>
  <div>
    <router-view v-slot="slotProps">
      <Transition name="route">
        <component :is="slotProps.Component"></component>
      </Transition>
    </router-view>
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


<style scoped>
.route-enter-from,
.router-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: opacity 1s;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

.route-leave-active {
  opacity: 0;
}

@keyframes slide-scale {
  from {
    transform: translateX(0) scale(1);
  }

  to {
    transform: translateX(-50px) scale(1);
  }
}
</style>