<!-- src/App.vue -->

<template>
  <div id="app">
    <router-view />
  </div>
  <div>
    <MenuManagement/>
  </div>
</template>

<script>
import MenuManagement from './components/MenuManagement.vue'
export default {
  name: 'App',
  components:{
    MenuManagement,
  }
};
</script>

<style>
/* Add your global styles here */
</style>
