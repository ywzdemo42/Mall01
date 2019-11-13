<template>
  <div class="tab-ber-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <div class="tab-ber-text" :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    data(){
      return{
        //isActive: true
      }
    },
    props:{
      path:String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }

    }
  }
</script>

<style scoped>
  .tab-ber-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-ber-item img {
    height: 24px;
    width: 24px;
  }

  .tab-ber-text {
    font-size: 10px;
  }
</style>
