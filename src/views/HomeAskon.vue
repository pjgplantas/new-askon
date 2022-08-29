<template>
  <div class="tudo">
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

export default {

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
::-webkit-scrollbar {
  width: 10px;
  height: 15px;
  background-color: #111;
}
::-webkit-scrollbar-button {
  width: 50px;
  height: 150px;
}
::-webkit-scrollbar-thumb {
  background: #4630AB;
  border-radius: 50px;
}
::-webkit-scrollbar-track {
  background: #111;
  border: 2px solid #c9c9c9;
  border-radius: 5px;
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