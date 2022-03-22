<template>
  <div>
    <div class="row">
      <div class="topheader">
        <h6>
          <img src="/assets/build/images/home-icon.png" /> / المناهج و المستويات
        </h6>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <h4 class="phoneText2" style="color: #73879c">البرامج التعليمي</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <ul class="nav nav-tabs nav-tabs-custom row">
          <li class="active col-lg-4 col-md-4 phoneDisapear" style="margin-bottom:-10px">
            <a data-toggle="tab" href="#progrem-menu1"  style="padding: 20px 0; margin:0 -15px 0 0"
              >فعال <span class="span250">30</span></a
            >
          </li>
          <li class="col-lg-4 col-md-4 phoneDisapear" style="margin-bottom:-10px">
            <a data-toggle="tab" href="#progrem-menu2" style="padding: 20px 0"
              >توقف مؤقت <span class="span10">6</span></a>
          </li>
          <li class="text-left col-lg-4 col-md-4">
            <button
              class="btn btn-primary tasjil pc-nav-btn ml-2 mt-2"
              data-toggle="modal"
              style="margin-right:0"
              data-target="#addNewAgencyModal"
              type="button"
              @click="modalShow = !modalShow"
            >
              إضافة برنامج
            </button>
          </li>

          <b-modal v-model="modalShow">
            <addNewProgram></addNewProgram>
          </b-modal>
        </ul>
      </div>

      <div class="col-lg-12">
        <button
          type="button"
          class="btn btn-primary tasjil mobile-nav-btn"
          @click="modalShow = !modalShow"
        >
          إضافة برنامج
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="tab-content">
          <div id="progrem-menu1" class="tab-pane fade in active">
            <div class="row abdl">
              <br /><br />
              <div class="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-xs-12">
                <div class="info-box mid3 card-student specCard card-program">
                  <div class="row">
                    <div class="col-lg-12 mid-row1">
                      <div class="col-xs-8">
                        <div class="checkbox-default">
                          <input
                            id="card-program-checkbox-0"
                            class="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                          <label for="card-program-checkbox-0"></label>
                        </div>
                      </div>
                      <div class="col-xs-4 clickm" style="position:relative;z-index:2">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img src="/assets/build/images/clickm.png"
                        /></a>
                        <ul class="dropdown-menu"
                          style="right:-50%; top:40px">
                          <li>
                            <a
                              data-toggle="modal"
                              data-target="#editModal"
                              href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4061.png"
                              />
                              تعديل</a
                            >
                          </li>
                          <li>
                            <a
                              data-toggle="modal"
                              data-target="#detailsModal"
                              href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4061.png"
                              />
                              تفاصيل البرنامج</a
                            >
                          </li>
                          <li>
                            <a
                              data-toggle="modal"
                              data-target="#pauseModal"
                              href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4062.png"
                              />
                              توقف مؤقت</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4083.png"
                              />
                              <span class="color-red">حذف</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="text-center">
                        <div class="">
                          <div class="">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#studentModal"
                            >
                              <h4 class="color-dark">
                                مراجعة القرآن الكريم
                              </h4>
                            </a>
                            <h6>حلقة ابوبكر الصديق</h6>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="
                              col-xs-6
                              mid-row3-icon2-center
                              border-left
                              d-flex
                            "
                            style="justify-content:center"
                          >
                            <div class="table-div">
                              <div class="p-1">
                                <img
                                  src="/assets/build/images/Group4722dark.png"
                                  alt=""
                                />
                              </div>
                              <div class="p-1">
                                <span class="small color-light"
                                  >المستوي</span
                                ><br />
                                <span class="large-font-2"
                                  ><b>14</b></span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-6 mid-row3-icon2-center d-flex" style="justify-content:center">
                            <div class="table-div">
                              <div class="p-1">
                                <img
                                  src="/assets/build/images/student26x28.png"
                                  alt=""
                                />
                              </div>
                              <div class="p-1">
                                <span class="small color-light"
                                  >الطلاب/ات</span
                                ><br />
                                <span class="large-font-2"
                                  ><b>200</b></span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- Edit Model -->
                  <div
                    class="modal fade"
                    id="detailsModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="detailsModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content" style="padding-top:10px">
                        <form>
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <h4 class="modal-title color-green mt-2">
                              مراجعة القرآن الكريم
                            </h4>
                            <h5 class="modal-title">
                              جمعية الخرطوم لتحفيظ القرآن الكريم
                            </h5>
                            <button class="printLevel">
                              <img src="/assets/build/images/print.png" alt="" />
                              طباعه
                            </button>
                          </div>
                          <div class="modal-body">
                            <table
                              class="
                                table
                                table-bordered
                                table-striped
                                table-hover
                                table-responsive
                              "
                            >
                              <thead>
                                <tr>
                                  <th>م</th>
                                  <th>اسم المستوى</th>
                                  <th>من</th>
                                  <th>الى</th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/parts.png"
                                      alt=""
                                      style="width:25px"
                                    /><br />الركن
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/save.png"
                                      alt=""
                                    /><br />عدد السور
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/revetion.png"
                                      alt=""
                                    /><br />عدد الأوجه
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/latter.png"
                                      alt=""
                                    /><br />عدد الأحرف
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/books.png"
                                      alt=""
                                      style="width:30px"
                                    /><br />عدد المناهج
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <span class="color-green">جز عم</span>
                                  </td>
                                  <td>
                                    <span class="">النبأ</span>/
                                    <span class="color-green">1</span>
                                  </td>
                                  <td>
                                    <span class="">الناس</span>/
                                    <span class="color-green">6</span>
                                  </td>
                                  <td>20</td>
                                  <td>200</td>
                                  <td>30800</td>
                                  <td>3</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <span class="color-green">جز عم</span>
                                  </td>
                                  <td>
                                    <span class="">النبأ</span>/
                                    <span class="color-green">1</span>
                                  </td>
                                  <td>
                                    <span class="">الناس</span>/
                                    <span class="color-green">6</span>
                                  </td>
                                  <td>20</td>
                                  <td>200</td>
                                  <td>30800</td>
                                  <td>3</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- End Edit Model -->
                  <!-- Pause Model -->
                  <div
                    class="modal fade"
                    id="pauseModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="pauseModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <form>
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <h4 class="modal-title" id="myModalLabel">
                              <i class="fa fa-info-circle"></i> تنبيه
                            </h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              هل تريد إيقاف
                              <span class="student-name"
                                >الجمعية الخيرية لتحفيظ القرآن الكريم
                                بالمنطقة الشرقية
                              </span>
                              مؤقتا؟
                            </p>
                          </div>
                          <div
                            class="modal-footer"
                            style="text-align: left"
                          >
                            <div class="col-lg-12">
                              <button
                                type="button"
                                data-dismiss="modal"
                                class="btn btn-primary btn4"
                              >
                                <i class="fa fa-close"></i> الغاء الامر
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary btn3"
                              >
                                <i class="fa fa-check"></i> إيقاف
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- End Pause Model -->
                  <!-- Move To Episode Model -->
                  <div
                    class="modal fade"
                    id="moveToEpisodeModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="moveToEpisodeModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <form>
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <h4 class="modal-title" id="myModalLabel">
                              نقل الي حلقة
                            </h4>
                          </div>
                          <div class="modal-body">
                            <div class="form-group">
                              <label for="">الحلقة</label>
                              <select class="form-control" name="" id="">
                                <option value="">--اختيار--</option>
                              </select>
                            </div>
                          </div>
                          <div
                            class="modal-footer"
                            style="text-align: center"
                          >
                            <div class="col-lg-12">
                              <button
                                type="button"
                                class="btn btn-primary btn3"
                              >
                                <i class="fa fa-check"></i> نقل
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- End Move To Episode Model -->
                </div>
              </div>
            </div>
          </div>

          <div id="progrem-menu2" class="tab-pane fade in">
            <div class="row abdl">
              <br /><br />
              <div class="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-xs-12">
                <div class="info-box mid3 card-student specCard card-program">
                  <div class="row">
                    <div class="col-lg-12 mid-row1">
                      <div class="col-xs-8">
                        <div class="checkbox-default">
                          <input
                            id="card-program-checkbox-0"
                            class="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                          <label for="card-program-checkbox-0"></label>
                        </div>
                      </div>
                      <div class="col-xs-4 clickm" style="position:relative;z-index:2">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img src="/assets/build/images/clickm.png"
                        /></a>
                        <ul class="dropdown-menu"
                          style="right:-50%; top:40px">
                          <li>
                            <a
                              data-toggle="modal"
                              data-target="#editModal"
                              href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4061.png"
                              />
                              تعديل</a
                            >
                          </li>
                          <li>
                            <a
                              data-toggle="modal"
                              data-target="#detailsModal"
                              href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4061.png"
                              />
                              تفاصيل البرنامج</a
                            >
                          </li>
                          <li>
                            <a
                              data-toggle="modal"
                              data-target="#pauseModal"
                              href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4062.png"
                              />
                              توقف مؤقت</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              ><img
                                class="group4061"
                                src="/assets/build/images/Group4083.png"
                              />
                              <span class="color-red">حذف</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="text-center">
                        <div class="">
                          <div class="">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#studentModal"
                            >
                              <h4 class="color-dark">
                                مراجعة القرآن الكريم
                              </h4>
                            </a>
                            <h6>حلقة ابوبكر الصديق</h6>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="
                              col-xs-6
                              mid-row3-icon2-center
                              border-left
                              d-flex
                            "
                            style="justify-content:center"
                          >
                            <div class="table-div">
                              <div class="p-1">
                                <img
                                  src="/assets/build/images/Group4722dark.png"
                                  alt=""
                                />
                              </div>
                              <div class="p-1">
                                <span class="small color-light"
                                  >المستوي</span
                                ><br />
                                <span class="large-font-2"
                                  ><b>14</b></span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-6 mid-row3-icon2-center d-flex" style="justify-content:center">
                            <div class="table-div">
                              <div class="p-1">
                                <img
                                  src="/assets/build/images/student26x28.png"
                                  alt=""
                                />
                              </div>
                              <div class="p-1">
                                <span class="small color-light"
                                  >الطلاب/ات</span
                                ><br />
                                <span class="large-font-2"
                                  ><b>200</b></span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- Edit Model -->
                  <div
                    class="modal fade"
                    id="detailsModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="detailsModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content" style="padding-top:10px">
                        <form>
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <h4 class="modal-title color-green mt-2">
                              مراجعة القرآن الكريم
                            </h4>
                            <h5 class="modal-title">
                              جمعية الخرطوم لتحفيظ القرآن الكريم
                            </h5>
                            <button class="printLevel">
                              <img src="/assets/build/images/print.png" alt="" />
                              طباعه
                            </button>
                          </div>
                          <div class="modal-body">
                            <table
                              class="
                                table
                                table-bordered
                                table-striped
                                table-hover
                                table-responsive
                              "
                            >
                              <thead>
                                <tr>
                                  <th>م</th>
                                  <th>اسم المستوى</th>
                                  <th>من</th>
                                  <th>الى</th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/parts.png"
                                      alt=""
                                      style="width:25px"
                                    /><br />الركن
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/save.png"
                                      alt=""
                                    /><br />عدد السور
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/revetion.png"
                                      alt=""
                                    /><br />عدد الأوجه
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/latter.png"
                                      alt=""
                                    /><br />عدد الأحرف
                                  </th>
                                  <th class="text-center">
                                    <img
                                      src="/assets/build/images/books.png"
                                      alt=""
                                      style="width:30px"
                                    /><br />عدد المناهج
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <span class="color-green">جز عم</span>
                                  </td>
                                  <td>
                                    <span class="">النبأ</span>/
                                    <span class="color-green">1</span>
                                  </td>
                                  <td>
                                    <span class="">الناس</span>/
                                    <span class="color-green">6</span>
                                  </td>
                                  <td>20</td>
                                  <td>200</td>
                                  <td>30800</td>
                                  <td>3</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <span class="color-green">جز عم</span>
                                  </td>
                                  <td>
                                    <span class="">النبأ</span>/
                                    <span class="color-green">1</span>
                                  </td>
                                  <td>
                                    <span class="">الناس</span>/
                                    <span class="color-green">6</span>
                                  </td>
                                  <td>20</td>
                                  <td>200</td>
                                  <td>30800</td>
                                  <td>3</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- End Edit Model -->
                  <!-- Pause Model -->
                  <div
                    class="modal fade"
                    id="pauseModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="pauseModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <form>
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <h4 class="modal-title" id="myModalLabel">
                              <i class="fa fa-info-circle"></i> تنبيه
                            </h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              هل تريد إيقاف
                              <span class="student-name"
                                >الجمعية الخيرية لتحفيظ القرآن الكريم
                                بالمنطقة الشرقية
                              </span>
                              مؤقتا؟
                            </p>
                          </div>
                          <div
                            class="modal-footer"
                            style="text-align: left"
                          >
                            <div class="col-lg-12">
                              <button
                                type="button"
                                data-dismiss="modal"
                                class="btn btn-primary btn4"
                              >
                                <i class="fa fa-close"></i> الغاء الامر
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary btn3"
                              >
                                <i class="fa fa-check"></i> إيقاف
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- End Pause Model -->
                  <!-- Move To Episode Model -->
                  <div
                    class="modal fade"
                    id="moveToEpisodeModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="moveToEpisodeModal"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <form>
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <h4 class="modal-title" id="myModalLabel">
                              نقل الي حلقة
                            </h4>
                          </div>
                          <div class="modal-body">
                            <div class="form-group">
                              <label for="">الحلقة</label>
                              <select class="form-control" name="" id="">
                                <option value="">--اختيار--</option>
                              </select>
                            </div>
                          </div>
                          <div
                            class="modal-footer"
                            style="text-align: center"
                          >
                            <div class="col-lg-12">
                              <button
                                type="button"
                                class="btn btn-primary btn3"
                              >
                                <i class="fa fa-check"></i> نقل
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- End Move To Episode Model -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import addNewProgram from '../components/AddNewProgram.vue'

export default {
  data()  {
    return {
      modalShow: false
    }
  },
  components: {
    addNewProgram
  }
}
</script>