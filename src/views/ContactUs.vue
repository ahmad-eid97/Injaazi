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

        <!-- CONTACT US COMPONENT -->
        <contact></contact>

      </div>
      <!-- /page content -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import sidebar from '../components/Sidebar.vue'
import topHeader from '../components/Header.vue'
import contact from '../components/ContactUs.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    sidebar,
    topHeader,
    contact
  }
}
</script>
