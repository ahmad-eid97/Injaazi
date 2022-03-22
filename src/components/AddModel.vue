<template>
  <!-- Method Model -->
  <div class="addModel">
    <div class="main">
      <div class="inside">
        <div class="insideHead">
          <h4
            class="text-center"
            id="myModalLabel"
          >
            إضافة منهج جديد
          </h4>
        </div>
        <div class="insideBody">
          <div class="wizard">
            <div class="wizard-header" id="wizard-header">
              <ul>
                <li class="active" id="firstLiWizard">
                  <div>1</div>
                  <span>تنزيل القالب</span>
                </li>
                <li>
                  <div>2</div>
                  <span>استيراد المنهج</span>
                </li>
                <li>
                  <div>3</div>
                  <span>اسم المنهج</span>
                </li>
                <li>
                  <div>4</div>
                  <span>إنهاء</span>
                </li>
              </ul>
            </div>
            <div class="wizard-body" id="wizard-body">
              <div class="inside">
                <span class="num">عدد الدروس المتوقعه</span>
                <NumberInputSpinner class="lessonNumber"
                  :min="1"
                  :max="1000000000"
                  :value="1"
                />
                <span>يمكن تحميل ملف الإكسل بهذا المستوى لكتابة
                  الدروس اليومية للمنهج الخاص بكم.</span
                >
                <br /><br />
                <p>
                  <button class="btn btn-default">
                    <i class="fa fa-file-excel-o"></i> تنزيل
                    القالب
                  </button>
                </p>
                <br />
                <div class="text-left pt-3">
                  <button
                    id="next-2"
                    type="button"
                    class="btn btn-primary btn2"
                  >
                    <i class="fa fa-rotate-left"></i> تخطي
                  </button>
                </div>
              </div>
              <div class="hidden down">
                <div class="row wrapper">
                  <div class="col-sm-6" style="margin-bottom:10px">
                    <span
                      >نأمل رفع ملف الإكسل بعد التحقق من
                      شموليته لجميع آيات المستوى ، وكذلك عدم
                      إضافة آيات من خارج المستوى.</span
                    >
                  </div>
                  <div class="col-sm-6 dropping">
                    <label for="file" class="d-block">
                      <div id="drop-zone" class="drop-zone text-center">
                        <br />
                        <h1><i class="fa fa-upload"></i></h1>
                        <span>اسحب و افلت هنا</span>
                        <br /><br /><br />
                      </div>
                    </label>
                    <div class="fileReview hide" id="fileReview">
                      <span></span>
                      <i class="fa fa-times-circle" id="removeFile"></i>
                    </div>
                    <div class="prog">
                        <span class="percentage"></span>
                    </div>
                    <input
                      id="file"
                      type="file"
                      class="hidden"
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      draggable="true"
                    />
                  </div>
                  <div class="alert">
                      <span><i class="fa fa-exclamation-triangle"></i> يوجد خطأ في المستوي الثالث حيث ان المحتوي الذي تم رفعه لا يتوافق مع المحتوي المتوقع رفعه. برجاء التأكد من صحة بيانات هذا المستوي</span>
                  </div>
                  <div class="alert hideAlert" id="unvalidExtension">
                    <span><i class="fa fa-exclamation-triangle"></i> صيغة المف الذي قمت برفعه غير متوافقه مع الصيغه المطلوب رفعها. رجاءا قم برفع الملف بالصيغه المطلوبه</span>
                  </div>
                </div>
                <br />
                <div class="text-left pt-3">
                  <button
                    id="next-3"
                    type="button"
                    class="btn btn-primary btn3"
                  >
                    <i class="fa fa-angle-left"></i> التالي
                  </button>
                </div>
              </div>
              <div class="hidden">
                <span>الخطوة الأخيرة</span>
                <br /><br />
                <div class="form-group">
                  <label for="">اسم المنهج</label>
                  <input type="text" class="form-control" />
                </div>
                <br />
                <div class="text-left pt-3">
                  <button
                    id="next-4"
                    type="button"
                    class="btn btn-primary btn3"
                  >
                    <i class="fa fa-check"></i> إضافة
                  </button>
                </div>
              </div>
              <div class="hidden">
                <div
                  class="
                    d-flex
                    align-vertical-center
                    flex-start
                  "
                >
                  <div class="col-sm-2">
                    <span class="color-green">
                      <h1>
                        <i
                          class="fa fa-check color-green"
                        ></i>
                      </h1>
                    </span>
                  </div>
                  <div class="col-sm-10">
                    <span>تمت اضافة المنهج</span>
                  </div>
                </div>
                <br />
                <div class="text-left pt-3">
                  <button
                    id="next-4"
                    type="button"
                    class="btn btn-primary btn3"
                  >
                    <i class="fa fa-check"></i> انهاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Method Model -->
</template>

<style lang="scss" scoped>

</style>

<script>
import NumberInputSpinner from 'vue-number-input-spinner'

export default {
  data() {
    return {

    }
  },
  components: {
    NumberInputSpinner
  }
}
</script>