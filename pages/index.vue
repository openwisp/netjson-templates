<template>
  <section>
    <div class="ui container">
      <div class="ui grid" v-for="template in templates">
        <div class="four wide column">
          <div class="ui very padded segment">
            <div class="content">
              <b>Name</b>: {{ template.name }} <br><br>
              <b>Description</b>: {{ template.short_description }}
            </div><br>
            <div class="extra content">
              <a :href="'/template/' + template.file_name" class="ui primary button">See Template</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    const { data } = await axios.get('https://raw.githubusercontent.com/openwisp/netjson-templates/master/templates.json')
    return { templates: data }
  }
}
</script>
