<template>
  <v-layout>
    <v-navigation-drawer
                        v-model="drawer"
                        temporary
                        absolute>
      <v-list>
        <v-list-tile v-for="project in projects" :key="project.name">
          <v-list-tile-content>
            <v-list-tile-title>{{ project.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      projects: [
        { name: 'Project 1', id: 0 },
        { name: 'Project 2', id: 1 },
        { name: 'Project 3', id: 2 },
        { name: 'Project 4', id: 3 }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
