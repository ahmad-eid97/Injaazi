<template>
  <div class="container body">
    <div class="main_container">
      <!-- <loader></loader> -->
      <div class="col-md-3 left_col hidden-print" style="z-index:99">

        <!-- SIDEBAR SECTION -->
        <sidebar></sidebar>

      </div>

      <!-- TOP HEADER COMPONENT -->
      <topHeader></topHeader>

      <!-- /header content -->

      <!-- page content -->
      <div class="right_col" role="main">

        <!-- PROGRAMS HEAD COMPONENT -->
        <programsHead></programsHead>
 
        <!-- PROGRAMS LEVELS COMPONENT -->
        <programsLevels></programsLevels>

      </div>
      <!-- /page content -->

    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  .main_container {
    .right_col {
      min-height: 95vh;
    }
  }
  .modal {
    opacity: 1 !important;
  }
}
</style>

<script>
import sidebar from '../components/Sidebar.vue'
import topHeader from '../components/Header.vue'
import programsHead from '../components/ProgramsHead.vue'
import programsLevels from '../components/ProgramsLevels.vue'
// import loader from '../components/Loader.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    sidebar,
    topHeader,
    programsHead,
    programsLevels,
    // loader
  }
}
</script>
