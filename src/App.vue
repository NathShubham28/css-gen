<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-headline">CSS Generator</h1>
    </md-toolbar>
    <md-tabs>
      <md-tab id="box-shadow" md-label="Box Shadow">
        <box-shadow-generator></box-shadow-generator>
      </md-tab>

      <md-tab id="text-shadow" md-label="Text Shadow">
        
      </md-tab>

      <md-tab id="triangle" md-label="Triangle">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="border-radius" md-label="Border Radius" md-tooltip="This is the pictures tab!">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="flex-grid" md-label="Flex Grid">
        
      </md-tab>

      <md-tab id="gradient" md-label="Gradient">
        
      </md-tab>
    </md-tabs>
    
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import BoxShadowGenerator from './components/BoxShadowGenerator'

Vue.use(VueMaterial)

export default {
  name: 'app',
  components: {
    BoxShadowGenerator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  display: block;
  padding: 20px;
}

code {
  display: block;
  width: 100%;
  padding: 40px;
}
</style>
