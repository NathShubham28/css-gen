<template>
  <div class="color-picker">
    <label for="color">Color: </label>
    <chrome v-model="colors" @change-color="onChange"></chrome>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'color-piker',
  props: ['cssColor'],
  data () {
    return {
      colors: {
        hex: '#194d33',
        hsl: {
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      },
      cssrgba: null
    }
  },
  components: {
    'chrome': Chrome
  },
  mounted () {
    this.onChange(this.colors)
  },
  methods: {
    onChange (val) {
      this.colors = val
      this.cssrbga = this.formattRGBACssColor(val.rgba)
      this.$emit('colorPikerChange', this.cssrbga)
    },
    formattRGBACssColor (rgba) {
      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
    }
  }
}
</script>