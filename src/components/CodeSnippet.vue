<template>
  <div class="snippet">  
    <pre class="snippet__pre">
      <code class="snippet__code">{{ snippet }}</code>
    </pre>
    <md-button class="md-raised md-primary" @click.native="copySnippetToClipboard">Copy To Clipboard</md-button>
  </div>    
</template>

<script>
export default {
  name: 'code-snippet',
  props: ['snippet'],
  methods: {
    copySnippetToClipboard () {
      // return copy(this.snippet) // TODO: copy snippet to clipboard
    }
  }
}
</script>

<style>
.snippet {
  display: block;
  margin: 0 auto;
}
</style>