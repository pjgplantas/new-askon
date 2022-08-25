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
    <div class="container-resenha">
        <div class="box-resenha">
            <div class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h2>Titulo Resenha</h2>
                <p>Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div class="box-resenha">
            <div class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h2>Titulo Resenha</h2>
                <p>Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
            </div>
        </div>
        <div class="box-resenha">
            <div class="img-resenha"></div>
            <div class="box-texto-resenha">
                <h2>Titulo Resenha</h2>
                <p>Descrição da Resenha Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis doloremque cupiditate iusto autem dignissimos voluptatem quasi voluptate, vel assumenda soluta itaque, eaque rem ipsum eligendi aperiam dolores enim et.</p>
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
    position: fixed;
    background-color: #111;
    overflow: scroll;
}
.nav {
    width: 600px;
    height: 120px;
    display: flex;
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

/* ---- Home ------ */ 

.container-resenha {
    width: 80%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 50px;
    left: 10%;
    top: 10%;
}
.box-resenha {
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 80px;
}
.img-resenha {
    width: 400px;
    height: 180px;
    background-color: #4630AB;
    border-radius: 10px;
}
.box-texto-resenha {
    width: 800px;
    background-color: red;
}
</style>