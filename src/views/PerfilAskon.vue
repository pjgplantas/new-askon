<template>
  <div class="tudo">
    <div class="nav-2">
        <div class="logo-nav-2"></div>
        <div class="box-lateral-2">
          <div class="borda-lateral-2"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tudo {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  overflow-y: scroll;
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


</style>
