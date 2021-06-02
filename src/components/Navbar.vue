<template>
  <ul>
    <h2 class="simple-text logo-normal">{{ title }}</h2>
    <li class="logo">     
        <div class="logo-img">
          <img :src="imgLogo" alt />
        </div>     
    </li>
    <li>
      <router-link to="/daily-checking">
        <h3>DAILY CONTROL</h3>
      </router-link>
    </li>
    <li>
      <router-link to="/specific-checking">
        <h3>SPECIFIC CONTROL</h3>
      </router-link>
    </li>
    <li>
      <router-link to="/recontrol-period">
        <h3>RECONTROL PERIOD</h3>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: "Event Recorder Control Service"
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/logo.png")
    }
  }
};
</script>

<style>
ul {
  font-family: Helvetica, Arial, sans-serif;
  list-style-type: none;
  margin: 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: #0E1C41;
  opacity: 1.0;
}

li a {
  display: block;
  color: #F7B21D;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #0E1C41;
  color: white;
  border: 1px solid #F7B21D;
}

h2 {
  color: #F7B21D;
  text-decoration-line: underline;
  font-size: 100%;

}
</style>