<template>
  <div class="tudo">
    <div class="nav">
        <div class="box-conteudo">
            <div class="logo-nav"></div>
            <a href="#"  class="texto-nav">reviews</a>
            <a href="#" class="texto-nav">sobre nós</a>
            <a href="#" class="texto-nav">perfil</a>
            <a href="#" class="texto-nav">criar</a>
        </div>
        <div class="box-lateral">
            <div class="borda-lateral"></div>
        </div>
    </div>
        <input type="text" class="busca">
        <div class="sair">
            <mdiDoorOpen class="icone-sair"/>
        </div>
    <div class="container-resenha">
        <div data-aos-duration="800" data-aos="fade-right" class="box-resenha" >
            <div data-aos="flip-left" data-aos-duration="800" class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h1 class="text-white titulo">Titulo Resenha</h1>
                <p class="text-white">Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
            <div data-aos="flip-right" data-aos-duration="800" class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h1 class="text-white titulo">Titulo Resenha</h1>
                <p class="text-white">Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
            <div data-aos="flip-left" data-aos-duration="800" class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h1 class="text-white titulo">Titulo Resenha</h1>
                <p class="text-white">Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
            <div data-aos="flip-right" data-aos-duration="800" class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h1 class="text-white titulo">Titulo Resenha</h1>
                <p class="text-white">Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
            <div data-aos="flip-left" data-aos-duration="800" class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h1 class="text-white titulo">Titulo Resenha</h1>
                <p class="text-white">Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
            <div data-aos="flip-right" data-aos-duration="800" class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h1 class="text-white titulo">Titulo Resenha</h1>
                <p class="text-white">Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import mdiDoorOpen from 'vue-material-design-icons/DoorOpen.vue';
export default {
    components: {
        mdiDoorOpen,
    }
}
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
    background-color: #4630AB;
    border-bottom: 1px solid #4630AB;
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
    border-bottom: 2px solid #4630AB;
}
.box-conteudo::after {
    -webkit-clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
    width: 70px;
    height: 100%;
    background-color: #111;
    border-bottom: 2px solid #4630AB;
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
    border-right: 1px solid #4630AB;
    text-decoration: none;
}
.texto-nav:last-child {
    border-right: none;
}
.busca {
    width: 500px;
    height: 20px;
    background-color: #111;
    border-radius: 10px;
    border: 1px solid #4630AB;
    position: absolute;
    right: 400px;
    top: 43px;
    color: #c9c9c9;
    padding: 10px;
}
.sair {
    width: 150px;
    height: 150px;
    background-color: #4630AB;
    clip-path: ellipse(100% 100% at 100% -10%);
    position: absolute;
    right: 0px;
    top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: right;
}
.icone-sair {
    scale: 2.5;
    margin: 50px;
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

.img-resenha {
    width: 400px;
    height: 220px;
    background-color: #4630AB;
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
}
.text-white {
    color: #c9c9c9;
}
</style>