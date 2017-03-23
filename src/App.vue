<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-headline">CSS Generator</h1>
    </md-toolbar>
    <md-tabs>
      <md-tab id="box-shadow" md-label="Box Shadow">
        <box-shadow></box-shadow>
      </md-tab>

      <md-tab id="text-shadow" md-label="Text Shadow">
        <text-shadow></text-shadow>
      </md-tab>

      <md-tab id="triangle" md-label="Triangle">
        <triangle></triangle>
      </md-tab>

      <md-tab id="border-radius" md-label="Border Radius">
        <border-radius></border-radius>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './styles/input-range.scss'
import BoxShadow from './generators/BoxShadow'
import TextShadow from './generators/TextShadow'
import Triangle from './generators/Triangle'
import BorderRadius from './generators/BorderRadius'

Vue.use(VueMaterial)

export default {
  name: 'app',
  components: {
    BoxShadow,
    TextShadow,
    Triangle,
    BorderRadius
  }
}
</script>
