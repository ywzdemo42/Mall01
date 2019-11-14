<template>
  <div id="home">
    <nav-bar backcolor="pink" >
      <div slot="center" style="color: #f6f6f6">购物街</div>
    </nav-bar>
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Category",
    components: {
      NavBar
    },
    created() {
      getHomeMultidata()
              .then(res => {
                console.log(res)
              })
              .catch()
    }
  }
</script>

<style scoped>
  #home {
    background-color: darkgrey;
  }
</style>