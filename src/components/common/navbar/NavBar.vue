<template>
  <div id="nav-bar">
    <div class="left" :style="{background: backcolor}"><slot name="left"></slot></div>
    <div class="center" :style="{background: backcolor}"><slot name="center"></slot></div>
    <div class="right" :style="{background: backcolor}"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      backcolor: String
    },
  }
</script>

<style scoped>
  #nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
    color: black;
  }
</style>