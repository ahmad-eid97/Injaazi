<template>
  <div>

    <div class="row pt-3 pb-3">
      <div class="col-sm-9 col-md-9">
        <h4 class="phoneText2" style="color: #73879c">المستويات / مراجعة القرآن الكريم</h4>
      </div>
      <div class="col-sm-3 col-md-3 text-left">
        <button
          class="btn btn-primary tasjil pc-nav-btn ml-2 mt-1"
          data-toggle="modal"
          data-target="#addNewLevelModal"
          type="button"
          @click="modalShow = !modalShow"
        >
          إضافة المستويات
        </button>
      </div>

      <b-modal v-model="modalShow" size="lg">
        <addNewLevel></addNewLevel>
      </b-modal>
      <!-- ADD NEW LEVEL -->
      </div>

    <!-- INDVIDUAL LEVELS COMPONENT -->
    <levels></levels>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />

  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import levels from '../components/Levels.vue'
import addNewLevel from '../components/AddNewLevel.vue'

export default {
  data() {
    return {
      modalShow: false
    }
  },
  components: {
    levels,
    addNewLevel
  }
}
</script>