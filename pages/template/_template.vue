<template>
  <div class="ui grid container">
    <div class="four wide column">
      <h3>Name: </h3>
    </div>
    <div class="twelve wide column">{{ template.template_name }}</div>
    <div class="four wide column"><h3>Created By: </h3></div>
    <div class="twelve wide column">{{ template.name }}</div>
    <div class="four wide column"><h3>Description: </h3></div>
    <div class="twelve wide column">{{ template.short_description }}</div>
    <div class="four wide column"><h3>Code:</h3></div>
    <div class="ten wide column">
      <pre>
      <code class="language-json">
        {{ template.code }}
      </code>
      </pre>
    </div>
    <script src="/js/prism.js"></script>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params, error }) {
    let { data } = await axios.get('https://raw.githubusercontent.com/openwisp/netjson-templates/master/templates/' + params.template)
    return { template: data }
  }
}
</script>
