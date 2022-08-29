<template>
  <div>
    <NavBarAskon/>
    <router-view/>
  </div>
</template>

<script>
import NavBarAskon from "@/components/NavBarAskon.vue";
export default {
  components: {
    NavBarAskon,
  },
};
</script>

<style></style>
