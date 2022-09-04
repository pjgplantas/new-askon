<template>
  <div class="tudo-nav">
    <div class="nav-2">
        <div class="logo-nav-2"></div>
        <div class="box-lateral-2">
          <div class="borda-lateral-2"></div>
        </div>
    </div>
    <div class="container-perfil">
      <div class="box-perfil">
        <div class="icone-perfil"></div>
        <p class="text-white">Nome</p>
        <p class="text-white">Resenhas</p>
        <p class="text-white">Mudar Senha</p>
        <p class="text-white">Alterar Foto</p>
        <p class="text-white">Sair</p>
      </div>
      <div class="container-resenhas-perfil">
        <div class="box-resenhas-perfil">
          <div class="img-resenha-perfil"></div>
          <div class="box-texto-resenha-perfil">
            <div class="titulo-perfil">Titulo da resenha</div>
            <div class="text-white">
              Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
            </div>
            <div class="box-estrelas-perfil">
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
          </div>
          </div>
        </div>
        <div class="box-resenhas-perfil">
          <div class="img-resenha-perfil"></div>
          <div class="box-texto-resenha-perfil">
            <div class="titulo-perfil">Titulo da resenha</div>
            <div class="text-white">
              Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
            </div>
            <div class="box-estrelas-perfil">
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
          </div>
          </div>
        </div>
        <div class="box-resenhas-perfil">
          <div class="img-resenha-perfil"></div>
          <div class="box-texto-resenha-perfil">
            <div class="titulo-perfil">Titulo da resenha</div>
            <div class="text-white">
              Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
            </div>
            <div class="box-estrelas-perfil">
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mdiStar from "vue-material-design-icons/Star.vue";
export default {
  components: {
    mdiStar,
  },
};
</script>

<style>
.tudo-nav {
  width: 100vw;
  height: 100vh;
  background-color: #111;
}
.nav-2 {
  width: 200px;
  height: 120px;
  display: flex;
}
.logo-nav-2 {
  width: 109px;
  height: 100%;
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 3px;
}

.box-lateral-2 {
  -webkit-clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  width: 70px;
  height: 100%;
  background-color: #4630ab;
  border-bottom: 1px solid #4630ab;
  box-sizing: border-box;
}
.borda-lateral-2 {
  -webkit-clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  width: 70px;
  height: 96%;
  position: relative;
  left: 0;
  top: 2.5%;
  background-color: #111;
}


/* ------------ Perfil ------------- */

.container-perfil {
  width: 75vw;
  height: 85vh;
  position: relative;
  left: 12.5vw;
  top: -5vh;
  display: flex;
  gap: 20px;
}
.box-perfil {
  min-width: 250px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #4630ab;
}
.icone-perfil {
  width: 180px;
  height: 180px;
  background-color: #4630ab;
  border-radius: 50%;
}
.container-resenhas-perfil {
  min-width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box-resenhas-perfil {
  width: 100%;
  height: 28%;
  display: flex;
  gap: 50px;
}
.img-resenha-perfil {
  min-width: 35%;
  height: 100%;
  background-color: #4630ab;
  border-radius: 10px;
}
.box-texto-resenha-perfil {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.titulo-perfil {
  font-size: 30px;
  color: #c9c9c9;
}
.box-estrelas-perfil {
  width: 30%;
  position: relative;
  right: 0;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.icone-estrela-perfil {
  color: #4630ab;
  scale: 1.5;
}
</style>
