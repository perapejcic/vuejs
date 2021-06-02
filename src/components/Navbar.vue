<template>
  <ul>
    <li class="logo">
      <a>
        <div class="logo-img">
          <img :src="imgLogo" alt />
        </div>
      </a>
      <a class="simple-text logo-normal">{{ title }}</a>
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
  background-color: #0e1c42;
  opacity: 0.8;
}

li a {
  display: block;
  color: #fdb913;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #0e1c42;
  color: white;
  border: 1px solid #ffff1a;
}
</style>