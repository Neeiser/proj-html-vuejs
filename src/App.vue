<template>
  <div id="app">
    <HeaderKeynote />
  </div>
</template>

<script>
import HeaderKeynote from './components/header/HeaderKeynote.vue';

export default {
  name: 'App',
  components:{
    HeaderKeynote,
  }
}
</script>

<style lang="scss">
@import './assets/styles/style';
</style>
