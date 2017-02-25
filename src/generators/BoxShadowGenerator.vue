<template>
  <div class="generator">
    <md-layout md-gutter>
      <md-layout md-flex="65" md-column>
        <div class="view">
          <div class="view-box" :style="formattCssCodeSnippet"></div>
        </div>
        <code-snippet :snippet="formattCssCodeSnippet"></code-snippet>
      </md-layout>
      <md-layout md-flex="35">
        <md-switch v-model="inset" class="md-primary">Inset Mode</md-switch>

        <md-input-container>
          <label>Offset X: </label>
          <md-input type="number" v-model="offsetX"></md-input>
          <md-input type="range" v-model="offsetX" min="-75" max="75" class="input-range"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Offset Y: </label>
          <md-input type="number" v-model="offsetY"></md-input>
          <md-input type="range" v-model="offsetY" min="-75" max="75" class="input-range"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Blur Radius: </label>
          <md-input type="number" v-model="blurRadius"></md-input>
          <md-input type="range" v-model="blurRadius" min="0" max="30" class="input-range"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Spread Radius: </label>
          <md-input type="number" v-model="spreadRadius"></md-input>
          <md-input type="range" v-model="spreadRadius" min="-50" max="50" class="input-range"></md-input>
        </md-input-container>

        <color-picker @colorPikerChange="onColorPickerChange"></color-picker>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import ColorPicker from '../components/ColorPicker'
import CodeSnippet from '../components/CodeSnippet'

export default {
  name: 'box-shadow-generator',
  data () {
    return {
      inset: false,
      offsetX: 5,
      offsetY: 5,
      blurRadius: 5,
      spreadRadius: 0,
      backgroundColorCssValue: null
    }
  },
  components: {
    ColorPicker,
    CodeSnippet
  },
  computed: {
    formattCssCodeSnippet () {
      return `box-shadow: ${this.inset ? 'inset ' : ''}${this.offsetX}px ${this.offsetY}px ${this.blurRadius}px ${this.spreadRadius}px ${this.backgroundColorCssValue};`
    }
  },
  methods: {
    onColorPickerChange (val) {
      this.backgroundColorCssValue = val
    }
  }
}
</script>

<style lang="scss">
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  padding: 40px;
}

.view-box{
  width: 100px;
  height: 100px;
  background-color: #3f51b5;
}
</style>
