<template>
  <div class="snippet">
    <pre class="snippet__pre">
      <code class="snippet__code">{{ snippet }}</code>
    </pre>
    <md-button class="md-raised md-primary" @click.native="copySnippetToClipboard">Copy To Clipboard</md-button>
  </div>
</template>

<script>
import { copyToClipboard } from '../utils'

export default {
  name: 'code-snippet',
  props: ['snippet'],
  methods: {
    copySnippetToClipboard () {
      const { snippet } = this
      copyToClipboard(snippet)
    }
  }
}
</script>

<style lang="scss">
.snippet {
  display: block;
  margin: 0 auto;
}
</style>
