<template>
  <div class="tudo">
    <div class="nav">
        <div class="box-conteudo">
            <div class="logo-nav"></div>
            <div class="texto-nav">reviews</div>
            <div class="texto-nav">sobre nós</div>
            <div class="texto-nav">perfil</div>
            <div class="texto-nav">criar</div>
        </div>
        <div class="box-lateral">
            <div class="borda-lateral"></div>
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
}
.texto-nav:last-child {
    border-right: none;
}
</style>