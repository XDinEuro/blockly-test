<template>
  <div id="app">
    <BlocklyWrapper></BlocklyWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlocklyWrapper from './components/BlocklyWrapper.vue';

export default defineComponent({
  name: 'app',
  components: {
    BlocklyWrapper
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
