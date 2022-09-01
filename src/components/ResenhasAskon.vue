<template>
  <div>
    <div class="">
      <img
        class="imagem"
        draggable="false"
        :src="require('@/assets/' + ImgName)"
        alt=""
      />
    </div>

    <div>
      <h2 class="titulo-resenha">{{ ResenhaTitles }}</h2>
      <slot> ResenhaPadrão </slot>
      <span class="data">{{ formatDate(ResenhaDate) }}</span>
      <span>
        <slot name="criador"></slot>
      </span>
      <span>
        <slot name="generos"></slot>
      </span>
    </div>
  </div>
</template>

<script>
import Utils from "@/mixins/UtilMixin";
export default {
  props: {
    ImgName: {
      type: string,
      required: true,
    },
    ResenhaTitles: {
      type: string,
      required: true,
    },
    ResenhaDate: {
      type: String,
      required: true,
    },
    mixins: [Utils],
  },
};
</script>

<style></style>
