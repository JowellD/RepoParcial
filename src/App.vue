<template>
  <nav>
    <router-link to="/">
      <button class="boton" >INICIO</button>
    </router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: antiquewhite;
  // background-image: url('https://img.freepik.com/fotos-premium/concepto-accesorios-cine-sobre-fondo-madera-oscura_185193-61023.jpg?w=360');
  // background-repeat: no-repeat;
  // background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-left: 20%;
  padding: 10px;
  text-align: left;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.boton {
 margin-top: 25px;
 padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #2FA4FF;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
}

.boton::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

.boton:hover {
 color: #e8e8e8;
}

.boton:hover::before {
 width: 100%;
}
</style>
