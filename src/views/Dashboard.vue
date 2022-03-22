<template>
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col hidden-print">

        <!-- SIDEBAR SECTION -->
        <sidebar></sidebar>

      </div>

      <!-- TOP HEADER COMPONENT -->
      <topHeader></topHeader>

      <!-- /header content -->

      <!-- page content -->
      <div class="right_col" role="main">

        <!-- STATICS COMPONENT -->
        <statics></statics>

        <!-- DASHBOARD EPISODES COMPONENT -->
        <episodes></episodes>

      </div>
      <!-- /page content -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import sidebar from '../components/Sidebar.vue';
import topHeader from '../components/Header.vue';
import statics from '../components/dashboard/Statics.vue';
import episodes from '../components/dashboard/Episodes.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    sidebar,
    topHeader,
    statics,
    episodes
  }
}
</script>
