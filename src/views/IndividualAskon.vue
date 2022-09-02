<template>
  <section>
        <div>
            <ResenhasAskon
                id="individual"
                :key="resenha.id"
                :ImgName="resenha.img"
                :ResenhaTitles="resenha.title"
                :ResenhaDate="resenha.date"
            >
                <div class="content">{{ resenha.content }}</div>
                <template v-slot:criador>
                    <p class="criador">{{ resenha.creator }}</p>
                </template>
                <template v-slot:generos>
                    <p class="generos">{{ resenha.gen }}</p>
                </template>
            </ResenhasAskon>
        </div>
  </section>
</template>

<script>
import ResenhasAskon from "@/components/ResenhasAskon.vue";
export default {
  components: { ResenhasAskon },
  props: ['resenha'],
};
</script>

<style></style>