<template>
  <div id="app">
    <HeaderKeynote />
    <MainKeynote />
    <FooterKeynote />
  </div>
</template>

<script>
import HeaderKeynote from './components/header/HeaderKeynote.vue';
import MainKeynote from './components/main/MainKeynote.vue';
import FooterKeynote from './components/footer/FooterKeynote.vue';

export default {
  name: 'App',
  components:{
    HeaderKeynote,
    MainKeynote,
    FooterKeynote,
  }
}
</script>

<style lang="scss">
@import './assets/styles/style';
</style>
