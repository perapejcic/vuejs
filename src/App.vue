<template>
  <div>
    <div id="app">
      <Navbar />
    </div>
    <div id="cont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components: {Navbar}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  float:left;
}
#cont {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0E1C41;
  margin-top: 60px;
}
#nav{
  padding: 10px;
}
#div {
  border-width: medium;
}
</style>
