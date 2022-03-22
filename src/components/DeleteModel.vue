<template>
  <div class="delete">
    <div class="main">
      <div class="inside">
        <form>
          <div class="insideHead">
            <h4 class="modal-title" id="myModalLabel">
              <i class="fa fa-info-circle"></i> تنبيه
            </h4>
          </div>
          <div class="modal-body">
            <p>
              هل تريد حذف
              <span class="color-green">المستوى الاول </span> ؟
            </p>
          </div>
          <div class="footer" style="text-align: left">
            <div class="col-lg-12">
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary btn4"
              >
                <i class="fa fa-close"></i> الغاء الامر
              </button>
              <button type="button" class="btn btn-primary btn3">
                <i class="fa fa-check"></i> حذف
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

</style>

<script>
export default {
  
}
</script>