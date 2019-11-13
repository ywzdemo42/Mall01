<template>
  <div id="home">
    <nav-bar backcolor="pink">
      <div slot="center" >购物街</div>
    </nav-bar>
    <h2>Home</h2>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Category",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>