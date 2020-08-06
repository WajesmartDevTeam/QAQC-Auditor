<template>
  <div
    class="wrapper"
    :class="{ 'nav-open': $sidebar.showSidebar }"
  >
    <notifications></notifications>

    <side-bar>
      <sidebar-link to="/audit/home">
        <md-icon>dashboard</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link
        v-if="role === 'sundryfoodsauditors'"
        to="/audit/openingsoa"
        title="AM Standard Operations Form"
      >
        <md-icon>library_books</md-icon>
        <p>AM Standard Operations</p>
      </sidebar-link>

      <sidebar-link
        v-if="role === 'sundryfoodsauditors'"
        to="/audit/midopeningsoa"
        title="MID-DAY Standard Operations Form"
      >
        <md-icon>library_books</md-icon>
        <p>MID-DAY Standard Operations</p>
      </sidebar-link>

      <sidebar-link
        v-if="role === 'sundryfoodsauditors'"
        to="/audit/krss"
        title="Food Safety Form"
      >
        <md-icon>library_books</md-icon>
        <p>Food Safety Form</p>
      </sidebar-link>

      <sidebar-link
        to="/audit/kdo"
        title="Greenbook Checklist Form"
      >
        <md-icon>library_books</md-icon>
        <p>Greenbook Checklist</p>
      </sidebar-link>
      <sidebar-link
        to="/audit/redbook"
        title="Redbook Checklist Form"
      >
        <md-icon>library_books</md-icon>
        <p>Redbook Checklist</p>
      </sidebar-link>
      <sidebar-link to="/">
        <span
          style="height:25px"
          @click="logOut"
        >
          <md-icon>power_settings_new</md-icon>
          <p>Log Out</p>
        </span>

      </sidebar-link>

    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data () {
    return {
      role: "",
    }
  },
  mounted () {
    this.role = this.$store.getters.role;
  },
  methods: {
    logOut () {
      this.$store.dispatch('logout', true)
      this.$router.push('index')
    }
  }
};
</script>

