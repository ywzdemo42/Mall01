<template>
  <Tabbar>
    <Tabbaritem path="/home" activeColor="pink">
      <img slot="tabbar-icon" src="~assets/img/tabbar/a.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/b.png">
      <div slot="tabbar-text">首页</div>
    </Tabbaritem>
    <Tabbaritem path="/category" activeColor="pink">
      <img slot="tabbar-icon" src="~assets/img/tabbar/a.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/b.png">
      <div slot="tabbar-text">分类</div>
    </Tabbaritem>
    <Tabbaritem path="/cart" activeColor="pink">
      <img slot="tabbar-icon" src="~assets/img/tabbar/a.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/b.png">
      <div slot="tabbar-text">购物车</div>
    </Tabbaritem>
    <Tabbaritem path="/profile" activeColor="pink">
      <img slot="tabbar-icon" src="~assets/img/tabbar/a.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/b.png">
      <div slot="tabbar-text">我的</div>
    </Tabbaritem>
  </Tabbar>
</template>

<script>
  import Tabbaritem from "components/common/tabbar/TabbarItem";
  import Tabbar from "components/common/tabbar/Tabbar";
  export default {
    name: "MainTabBar",
    data(){
      return {

      }
    },
    components: {
      Tabbar,
      Tabbaritem

    }
  }
</script>

<style scoped>

</style>