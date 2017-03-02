<template>
  <md-layout md-gutter>
    <md-layout md-flex="65" md-column>
      <div class="view">
        <p class="view-triangle" :style="formattCssCodeSnippet"></p>
      </div>
      <code-snippet :snippet="formattCssCodeSnippet"></code-snippet>
    </md-layout>
    <md-layout md-flex="35">
        <div>
          <md-radio class="md-primary" v-model="direction" id="top" name="direction" md-value="top">Top</md-radio>
          <md-radio class="md-primary" v-model="direction" id="left" name="direction" md-value="left">Left</md-radio>
          <md-radio class="md-primary" v-model="direction" id="bottom" name="direction" md-value="bottom">Bottom</md-radio>
          <md-radio class="md-primary" v-model="direction" id="right" name="direction" md-value="right">Right</md-radio>
        </div>

        <md-input-container>
          <label>Width: </label>
          <md-input type="number" v-model="width"></md-input>
          <md-input type="range" v-model="width" min="0" max="500" class="input-range"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Height: </label>
          <md-input type="number" v-model="height"></md-input>
          <md-input type="range" v-model="height" min="0" max="500" class="input-range"></md-input>
        </md-input-container>

        <color-picker @colorPikerChange="onColorPickerChange"></color-picker>
      </md-layout>
  </md-layout>
</template>

<script>
  import ColorPicker from '../components/ColorPicker'
  import CodeSnippet from '../components/CodeSnippet'

  export default {
    name: 'triangle-generator',
    data () {
      return {
        direction: 'top',
        width: 100,
        height: 100,
        color: null
      }
    },
    components: {
      ColorPicker,
      CodeSnippet
    },
    computed: {
      formattCssCodeSnippet () {
        let borderWidth, borderColor
        const { width } = this

        switch (this.direction) {
          case 'top':
            borderWidth = `border-width: 0 ${width}px ${width}px ${width}px;`
            borderColor = `border-color: transparent transparent ${this.color} transparent;`
            break
          case 'left':
            borderWidth = `border-width: ${width}px 0 ${width}px ${width}px;`
            borderColor = `border-color: transparent transparent transparent ${this.color};`
            break
          case 'bottom':
            borderWidth = `border-width: ${width}px ${width}px 0 ${width}px;`
            borderColor = `border-color: ${this.color} transparent transparent transparent;`
            break
          case 'right':
            borderWidth = `border-width: ${width}px ${width}px ${width}px 0;`
            borderColor = `border-color: transparent ${this.color} transparent transparent;`
            break
          default:

            break
        }

        return [
          'width: 0;',
          'height: 0;',
          'border-style: solid;',
          borderWidth,
          borderColor
        ].join('\n')
      }
    },
    methods: {
      onColorPickerChange (val) {
        this.color = val
      }
    }
  }
</script>
