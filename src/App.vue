<template>
  <div id="app">
    <DemoTTS />
  </div>
</template>

<script>
import DemoTTS from './components/DemoTTS.vue'

export default {
  name: 'app',
  components: {
    DemoTTS
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
