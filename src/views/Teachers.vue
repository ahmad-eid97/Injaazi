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

        <!-- TEACHERS COMPONENT -->
        <teachers></teachers>

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
import sidebar from '../components/Sidebar.vue';
import topHeader from '../components/Header.vue';
import teachers from '../components/teachers/Teachers.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    sidebar,
    topHeader,
    teachers
  }
}
</script>
