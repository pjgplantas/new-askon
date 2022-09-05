<template>
  <div class="tudo">
    <div class="container-resenha">
      <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mdiStar from "vue-material-design-icons/Star.vue";
import mdiGithub  from "vue-material-design-icons/Github.vue";
import mdiLinkedin   from "vue-material-design-icons/Linkedin.vue";
export default {
  components: {
    mdiStar,
    mdiGithub, 
    mdiLinkedin,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.tudo {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #111;
  overflow-y: scroll;
}
.nav {
  width: 600px;
  height: 120px;
  display: flex;
}
::-webkit-scrollbar {
  width: 0;
}
.box-lateral {
  -webkit-clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  width: 70px;
  height: 100%;
  background-color: #4630ab;
  border-bottom: 1px solid #4630ab;
  box-sizing: border-box;
}
.borda-lateral {
  -webkit-clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  width: 70px;
  height: 99%;
  position: relative;
  left: 0;
  top: 0;
  background-color: #111;
}
.box-conteudo {
  width: 600px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-bottom: 2px solid #4630ab;
}
.box-conteudo::after {
  -webkit-clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
  width: 70px;
  height: 100%;
  background-color: #111;
  border-bottom: 2px solid #4630ab;
}
.logo-nav {
  width: 120px;
  height: 90%;
  background-image: url(../assets/Logo2.png);
  background-repeat: no-repeat;
  background-size: contain;
}
.texto-nav {
  color: #c9c9c9;
  font-size: 20px;
  padding-right: 20px;
  border-right: 1px solid #4630ab;
  text-decoration: none;
  color: #c9c9c9;
  padding: 10px;
}
/* ---- Home ------ */

.container-resenha {
  width: 80%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
  left: 10%;
  right: 10%;
  margin-top: 120px;
}
.box-resenha {
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 80px;
}
.box-resenha:nth-child(even) {
  flex-direction: row-reverse;
}
.box-resenha:nth-child(even) .box-texto-resenha {
  text-align: right; 
}
.box-resenha:nth-child(even) .box-estrelas {
  left: 0;
}

.img-resenha {
  width: 400px;
  height: 220px;
  background-color: #4630ab;
  border-radius: 10px;
}
.box-texto-resenha {
  width: 800px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.titulo {
  width: 100%;
  color: #c9c9c9;
}
.text-white {
  color: #c9c9c9;
  text-align: justify;
}
.box-estrelas {
  width: 200px;
  position: absolute;
  right: 0;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.icone-estrela {
  color: #4630ab;
  scale: 1.5;
}
/* --------- Footer ------------ */
.footer {
  width: 100%;
  height: 300px;
  background-color: #4630ab;
  display: flex;
}
.img-footer {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: #111;
  background-image: url(../assets/logo.png);
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  margin: 70px auto;
}
.footer-esquerda {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.footer-direita {
  width: 50%;
  height: 100%;
}
.nomes-footer {
  font-size: 20px;
  margin: 50px;
  color: #c9c9c9;
}
.links-footer {
  margin-right: 50px;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.links-footer:nth-child(even){
  margin-bottom: 35px;
}
.links-footer:last-child {
  margin-bottom: 0;
}
ul {
  color: #c9c9c9;
}
.lista-direita {
  margin-top: 35px;
  text-align: right;
  list-style: none;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>