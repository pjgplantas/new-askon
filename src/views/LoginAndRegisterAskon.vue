<template>
<div class="tudo">
  <div v-show="mostrar == 'login'" class="login">
    <div class="box-imagem">
        <div class="imagem"></div>
    </div>
    <div class="container-login">
      <div class="img-login"></div>
      <input type="text" class="input-login" placeholder="Nome">
      <input type="text" class="input-login" placeholder="Senha">
      <p class="sub-texto" @click="mostrar = 'recuperar'">esqueci minha senha</p>
      <button class="btn-login">Entrar</button>
      <p class="sub-texto">Novo no site?</p>
      <button class="btn-login" @click="mostrar = 'registrar'">Registrar</button>
    </div>
  </div>
  <div class="registrar" v-show="mostrar == 'registrar'">
    <div class="box-imagem">
        <div class="imagem"></div>
    </div>
    <div class="container-registrar">
      <div class="img-login"></div>
      <input type="text" class="input-login" placeholder="Email">
      <input type="text" class="input-login" placeholder="Nome de Usuário">
      <input type="text" class="input-login" placeholder="Senha">
      <input type="text" class="input-login" placeholder="Confirmar Senha">
      <button class="btn-login" @click="mostrar = 'login'">Registrar</button>
    </div>
  </div>
  <div class="recuperar" v-show="mostrar == 'recuperar'">
    <div class="box-imagem">
        <div class="imagem"></div>
    </div>
    <div class="box-recuperar"></div>
  </div>
</div>
</template>

<script>
export default {
    data (){
        return {
            mostrar: "login"
        }
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.login {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  overflow: hidden;
}
.imagem {
  -webkit-clip-path: ellipse(54% 58% at 100% 100%);
  clip-path: ellipse(54% 58% at 100% 100%);
  width: 1700px;
  height: 1000px;
  background-color: rgba(70, 48, 171, 0.6);
}
.box-imagem {
  -webkit-clip-path: ellipse(54% 58% at 100% 100%);
  clip-path: ellipse(54% 58% at 100% 100%);
  width: 1700px;
  height: 1000px;
  background-image: url(../assets/Poro.jpg);
  background-position-x: 100%;
  background-position-y: 100%;
  background-size: 60%;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 0;
  right: 0;
}
.container-login {
  width: 700px;
  height: 800px;
  margin: 100px 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.img-login {
  width: 250px;
  height: 250px;
  background-image: url(../assets/logo.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.input-login {
  width: 420px;
  height: 60px;
  background-color: #111;
  border: none;
  font-size: 18px;
  color: #C9C9C9;
  outline: 0;
  transition: all 0.3s ease-in-out;
}
.input-login:focus {
    border-bottom: 1px solid #4630AB;
}
.input-login::placeholder {
  color: #c9c9c9;
}
.sub-texto  {
  width: 420px;
  text-align: left;
  color: #C9C9C9;
  text-decoration: underline#C9C9C9;
}
.btn-login {
  width: 220px;
  height: 45px;
  background-color: #4630AB;
  color: #C9C9C9;
  font-size: 15px;
  border-radius: 10px;
  border: none;
}

/* ----------- Registrar --------------- */

.registrar {
    width: 100vw;
    height: 100vh;
    background-color: #111;
    overflow: hidden;
}
.registrar .box-imagem {
  -webkit-clip-path: ellipse(54% 58% at 0% 100%);
  clip-path: ellipse(54% 58% at 0% 100%);
  width: 1700px;
  height: 1000px;
  background-image: url(../assets/Poro.jpg);
  background-position-x: 0%;
  background-position-y: 100%;
  background-size: 60%;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 0;
  left: 0;
}
.registrar .imagem { 
    -webkit-clip-path: ellipse(54% 58% at 0% 100%);
    clip-path: ellipse(54% 58% at 0% 100%);
    width: 1700px;
    height: 1000px;
    background-color: rgba(70, 48, 171, 0.6);
}
.container-registrar {
  width: 700px;
  height: 800px;
  margin: 120px 900px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

/* ---------- Recuperar ---------- */
</style>
