<template>
<div class="vCard">
  <div class="top">
    <div class="foto">
      <img :src="image" />
    </div>
    <h2>{{ person }}</h2>
    <h3>{{ role }}</h3>
  </div>
  <div class="bottom">
    <h5>{{ intro }}</h5>
    <!-- <h4><a href="#"></a> {{ more }}</h4> -->
  </div>
    <div class="info">
      <h4><a :href="link" target="blank"> get info</a></h4>
    </div>
  </div>

</template>
<script>
export default {
  props: ["image", "person", "role", "intro", "link"],
};
</script>

<style scoped>
.vCard {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: rgb(231, 242, 255);
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px;
  z-index: 100;
}
.top {
  position: relative;
  display: block;
  width: 280px;
  height: 90px;
  border-bottom: solid 1px black;
  padding: 10px;
  /* background-color: lime; */
}
.top img {
  float: left;
  position: relative;
  width: 80px;
  margin-right: 20px;
}
.bottom {
  position: relative;
  display: block;
  width: 280px;
  height: 30px;
  padding: 10px;
  /* background-color: gold; */
}

.info {
  position: relative;
  display: block;
  width: 280px;
  height: 50px;
  padding: 10px;
}

h4,
p,
h5 {
  margin-left: 100px;
}

h5 {
  font-style: oblique;
}

h4 {
  font-size: 12px;
}

a {
  color: black;
  text-decoration: line;
}

</style>
