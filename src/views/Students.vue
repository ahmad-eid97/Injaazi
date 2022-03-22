<template>
<div>
  <div class="container body">
    <div class="main_container">
        <div class="col-md-3 left_col hidden-print">
          <!-- SIDEBAR SECTION -->
          <sidebar></sidebar>
        </div>

        <!-- TOP HEADER COMPONENT -->
        <topHeader></topHeader>

        <!-- /top navigation -->
        <!-- /header content -->

        <!-- page content -->
        <div class="right_col" role="main">

          <!-- EPISODES CATEGORIES COMPONENT -->
          <episodesCategories></episodesCategories>

          <!-- EPISODES LIST COMPONENT -->
          <episodesList></episodesList>

          <!-- STUDENTS LIST COMPONENT -->
          <studentsHeader></studentsHeader>

          <!-- FILTERED STUDENTS LIST COMPONENT -->
          <studentsList></studentsList>
          
        </div>
        <!-- /page content -->
    </div>
  </div>

  <!-- STARTING MODALS -->

  <!-- Add New Episode Type Model-->
  <addEpisodeCategory></addEpisodeCategory>
  <!-- End New Episode Category Model-->

  <!-- Add New Episode Type Model-->
  <addEpisodeType></addEpisodeType>
  <!-- End New Episode Category Model-->

  <!-- Add New Teacher Model-->
  <addTeacher></addTeacher>

<!-- End New Teacher Model-->
</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import sidebar from '../components/Sidebar.vue'
import topHeader from '../components/Header.vue'
import episodesCategories from '../components/students/EpisodesCategories.vue'
import episodesList from '../components/students/EpisodesList.vue'
import studentsHeader from '../components/students/StudentsHeader.vue'
import studentsList from '../components/students/StudentsList.vue'
import addEpisodeCategory from '../components/students/modals/AddEpisodeCategory.vue'
import addEpisodeType from '../components/students/modals/AddEpisodeType.vue'
import addTeacher from '../components/students/modals/AddTeacher.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    sidebar,
    topHeader,
    episodesCategories,
    episodesList,
    studentsHeader,
    studentsList,
    addEpisodeCategory,
    addEpisodeType,
    addTeacher
  }
}
</script>