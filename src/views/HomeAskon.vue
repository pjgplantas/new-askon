<template>
  <div class="tudo">
    <div class="box-imagem">
        <div class="imagem"></div>
    </div>
    <div class="container-login">
      <div class="img-login"></div>
      <input type="text" class="input-login" placeholder="Nome">
      <input type="text" class="input-login" placeholder="Senha">
      <p class="sub-texto">esqueci minha senha</p>
      <button class="btn-login">Entrar</button>
      <p class="sub-texto">Novo no site?</p>
      <button class="btn-login">Registrar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.tudo {
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
  height: 700px;
  margin: 120px 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.img-login {
  width: 200px;
  height: 200px;
  background-image: url(../assets/logo.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.input-login {
  width: 400px;
  height: 50px;
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
  width: 400px;
  text-align: left;
  color: #C9C9C9;
  text-decoration: underline#C9C9C9;
}
.btn-login {
  width: 200px;
  height: 40px;
  background-color: #4630AB;
  color: #C9C9C9;
  font-size: 15px;
  border-radius: 10px;
}
</style>
