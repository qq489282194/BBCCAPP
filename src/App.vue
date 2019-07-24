<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "assets/css/rem640.css";
  .nut-forget a{ display: none!important;}
  .my-bullet {background: rgba(255, 255, 255, .3); display: block; width: .12rem; height: .12rem; border-radius: 50%; margin: .09rem 0;}
  .my-bullet-active {background: rgba(255, 255, 255, 1); border: .06rem solid rgba(255, 255, 255, .4)}
</style>
</style>
