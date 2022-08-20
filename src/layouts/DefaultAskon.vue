<template>
  <div>
    <Header/>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/NavegacaoAskon.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
</style>