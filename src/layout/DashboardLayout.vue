<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Devjobs"
      title="Devjobs"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Jobs',
            icon: 'fas fa-clipboard text-orange',
            path: '/jobs',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Candidates',
            icon: 'fas fa-user text-yellow',
            path: '/candidates',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Job Applications',
            icon: 'ni  ni-single-copy-04 text-red',
            path: '/job-applications',
          }"
        />
        
        <sidebar-item
          :link="{
            name: 'Corporates',
            icon: 'ni ni-building text-info',
            path: '/corporates',
          }"
        />       
        <sidebar-item
          :link="{
            name: 'Icons',
            icon: 'ni ni-planet text-blue',
            path: '/icons',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'ni ni-pin-3 text-orange',
            path: '/maps',
          }"
        />
        <sidebar-item
          :link="{
            name: 'User Profile',
            icon: 'ni ni-single-02 text-yellow',
            path: '/profile',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Tables',
            icon: 'ni ni-bullet-list-67 text-red',
            path: '/tables',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Login',
            icon: 'ni ni-key-25 text-info',
            path: '/login',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Register',
            icon: 'ni ni-circle-08 text-pink',
            path: '/register',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
