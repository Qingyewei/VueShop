<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // watch: {
  //   $route(newVal){
  //     console.log(newVal)
  //   },
  // },
  created(){
    //window监听刷新事件
     window.onbeforeunload = (e) => {
       sessionStorage.setItem('token',window.token? window.token :'')
    }
  }
}
</script>

<style lang="less">

</style>
