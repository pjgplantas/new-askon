<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/NavBarAskon.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
