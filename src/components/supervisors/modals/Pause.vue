<template>
  <div class="pause" tabindex="-1" role="dialog" aria-labelledby="pauseModal" aria-hidden="true">
    <div class="inside">
        <div class="pause-content">
            <form>
                <div class="pause-header">
                    <h4 class="modal-title" id="myModalLabel"><i class="fa fa-info-circle"></i> تنبيه</h4>
                </div>
                <div class="pause-body" style="margin-bottom:10px">
                    <p>هل تريد إيقاف الطالب /ة <span class="student-name">عبد الله احمد الحامدة</span> مؤقتا؟</p>
                </div>
                <div class="pause-footer" style="text-align: left;">
                    <div class="col-lg-12">
                        <button type="button" data-dismiss="modal" class="btn btn-primary btn4"><i class="fa fa-close"></i> الغاء الامر</button>
                        <button type="button" class="btn btn-primary btn3 m-0"><i class="fa fa-check"></i> إيقاف</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>