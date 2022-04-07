<template>
  <h1>The amazing Muppets</h1>
  <div id="flexContainer">
    <Muppets />
  </div>
</template>

<script>
import Muppets from "./components/Muppets.vue";
export default {
  components: {
    Muppets,
},
};
</script>

<style scoped>
#flexContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>

<style>
body {
  margin: 10;
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: scroll;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0 0 1rem 0;
}
</style>
