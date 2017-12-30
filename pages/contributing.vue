<template>
  <div>
    <div class="ui container" v-html="con"></div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get('https://raw.githubusercontent.com/openwisp/netjson-templates/master/CONTRIBUTING.md')
    return { con: marked(data) }
  }
}
</script>
