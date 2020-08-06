<template>
  <md-toolbar
    md-elevation="0"
    class="md-transparent"
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <!-- <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedPeriod"
              :md-options="periods"
            >
              <label>filter by...</label>
            </md-autocomplete>
          </div>
        </div> -->
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data () {
    return {
      // selectedPeriod: null,
      // periods: ["1 week", "1 Month", "Quarter", "6 Months", "One Year"]
    };
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

<style lang="css"></style>
