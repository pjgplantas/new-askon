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
    </div> 
</template>

<script>
export default {

}
</script>

<style>
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
    right: 300px;
    top: 43px;
    color: #c9c9c9;
    padding: 10px;
}
.tudo::-webkit-scrollbar {
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
</style>