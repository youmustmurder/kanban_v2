<template>
  <v-layout>
    <v-navigation-drawer
                        v-model="drawer"
                        fixed
                        app
                        clipped>
      <v-list>
        <v-list-tile v-for="project in projects" :key="project.name">
          <v-list-tile-content @click="goProject(project._id)">
            <v-list-tile-title>{{ project.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed
                dense
                clipped-left
                app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row wrap class="header-search">
        <v-text-field v-if="toggleSearch"
                      placeholder="Поиск..."
                      :append-icon-cb="() => {}"
                      v-model="search"
                      hide-details
                      single-line>
        </v-text-field>
      </v-layout>
      <v-btn icon @click="toggleSearch = !toggleSearch"><v-icon>search</v-icon></v-btn>
      <v-btn icon><v-icon>refresh</v-icon></v-btn>
    </v-toolbar>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      toggleSearch: false,
      search: '',
      toolbarTitle: 'Kanban',
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects;
    }
  },
  methods: {
    goProject(projectId) {
      this.$router.push({ name: 'project', params: { project_id: projectId } });
    }
  },
  mounted: function() {
    this.$store.dispatch('getProjects', {context: this, user_id: this.$cookie.get('user_id')});
  }
}
</script>

<style lang="scss">
</style>
