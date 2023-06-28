<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBar-comp.vue';
import FooterComp from './components/Footer-comp.vue';

export default {
  components: {NavBarComp, FooterComp}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #f5f0bb;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}
</style>
