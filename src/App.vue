<template>
  <div id="app">
    <HeaderKeynote />
    <MainKeynote />
  </div>
</template>

<script>
import HeaderKeynote from './components/header/HeaderKeynote.vue';
import MainKeynote from './components/main/MainKeynote.vue';

export default {
  name: 'App',
  components:{
    HeaderKeynote,
    MainKeynote,
  }
}
</script>

<style lang="scss">
@import './assets/styles/style';
</style>
