<template>
  <div>
    <NavBarAskon/>
    <router-view/>
    <FooterAskon/>
  </div>
</template>

<script>
import FooterAskon from '@/views/FooterAskon';
import NavBarAskon from "@/components/NavBarAskon.vue";
export default {
  components: {
    FooterAskon,
    NavBarAskon,
  },
};
</script>

<style></style>
