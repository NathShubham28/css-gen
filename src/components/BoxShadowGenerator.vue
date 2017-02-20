<template>
  <div class="generator">
    <md-layout md-gutter>
      <md-layout md-flex="65" md-column>
        <div class="view">
          <div class="view__box" :style="formattCssCodeSnippet"></div>
        </div>
        <code-snippet :snippet="formattCssCodeSnippet"></code-snippet>
      </md-layout>
      <md-layout md-flex="35">
        <md-checkbox id="inset" name="inset" v-model="inset">Inset Mode</md-checkbox>
        <md-input-container v-if="inset">
          <label>Spread Radius: </label>
          <md-input type="number" v-model="spreadRadius"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Offset X: </label>
          <md-input type="number" v-model="offsetX"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Offset Y: </label>
          <md-input type="number" v-model="offsetY"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Blur Radius: </label>
          <md-input type="number" v-model="blurRadius"></md-input>
        </md-input-container>
        <color-picker @colorPikerChange="onColorPickerChange"></color-picker>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker'
import CodeSnippet from './CodeSnippet'

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
      return `box-shadow: ${this.inset ? 'inset ' : ''}${this.offsetX}px ${this.offsetY}px ${this.blurRadius}px ${this.inset ? `${this.spreadRadius}px ` : ''}${this.backgroundColorCssValue};`
    }
  },
  methods: {
    onColorPickerChange (val) {
      this.backgroundColorCssValue = val
    }
  }
}
</script>

<style>
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  padding: 40px;
}

.view__box {
  width: 200px;
  height: 100px;
  background-color: #ff0;
}
</style>
