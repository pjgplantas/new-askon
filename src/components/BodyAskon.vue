<template>
    <section>
        <ResenhasAskon
        v-for="resenha in resenhas"
        :key="resenha.id"
        :ImgName="resenha.img"
        :ResenhaTitles="resenha.title"
        :ResenhaDate="resenha.date"
      >
        <template v-slot:default>
          <p @click="irParaResenha(resenha)">{{ resenha.content | truncate(200) }}</p>
        </template>
        <template v-slot:criador>
            <p>{{ resenha.creator }}</p>
        </template>
        <template v-slot:generos>
            <p>{{ resenha.generos }}</p>
        </template>
      </ResenhasAskon>
    </section>
</template>

<script>
import ResenhasAskon from '@/components/ResenhasAskon'
export default {
    components: {ResenhasAskon},
    data(){
        return {
            resenhas: []
    }
},
    methods:{
        irParaResenha(resenha){
            this.$router.push({name:"Template", params:{resenha, id:resenha.id}})
        }
    },
created(){
        this.resenhas = [{
          id:1,
          title:'League of Legends Resenha',
          content: 'GUILHERME ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-01-01',
          img: 'yasuo.jpg',
          creator: 'Guilherme',
          generos: 'Ação, ação, ação, ação, ação',
        },{
          id:2,
          title:'Elden Ring Resenha',
          content: 'SODRE ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-02-03',
          img: 'elden.jpg',
          creator: 'Rodrigo',
          generos: 'Ação, ação, ação, ação, ação',
        },{
          id:3,
          title:'Fortnite resenha',
          content: 'RODRIGO ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-06-04',
          img: 'akali.jpg',
          creator: 'Guilherme',
          generos: 'Ação, ação, ação, ação, ação',
        }]
      },
}
</script>

<style>

</style>