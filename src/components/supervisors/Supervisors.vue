<template>
  <div class="supers">
    <div class="row">
        <div class="col-lg-12">
            <h4 style="color: #73879c;">المشرفين /ات</h4>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <ul class="nav nav-tabs nav-tabs-custom row">
                <li class="active col-lg-3 col-md-3 phoneDisapear"><a data-toggle="tab" href="#center-menu-1" style="padding: 15px">الكل</a></li>
                <li class="col-lg-3 col-md-3 phoneDisapear">
                    <a data-toggle="tab" href="#center-menu-2">فعال <span class="span250">250</span></a>
                </li>
                <li class="col-lg-3 col-md-3 phoneDisapear">
                    <a data-toggle="tab" href="#center-menu-3">توقف مؤقت <span class="span10">10</span></a>
                </li>
                <li class="text-left col-lg-3 col-md-3">
                    <button class="btn btn-primary tasjil pc-nav-btn ml-2 mt-1" @click="showSupervisor = true" type="button">إضافة مشرف /ة</button>
                </li>


                <b-modal v-model="showSupervisor" size="lg">
                  <supervisor></supervisor>
                </b-modal>


            </ul>
        </div>

        <div class="col-lg-12">
            <button data-toggle="modal" @click="showSupervisor = true" type="button" class="btn btn-primary tasjil mobile-nav-btn" style="margin-right:0">إضافة مشرف /ة</button>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="tab-content">
                <div id="center-menu-1" class="tab-pane fade in active">
                    <div class="tahdid">
                        <div class="row">
                            <div class="col-xs-6 col-sm-4 col-lg-2 d-flex" style="padding-top:5px">
                                <div>
                                    <div class="checkbox-default checkbox-style-2">
                                        <input id="card-center-check-all-checkbox-1" class="form-check-input" type="checkbox" value="1" autocomplete="off" />
                                        <label for="card-center-check-all-checkbox-1"></label>
                                        <span class="phoneText2" style="color: #000; font-size: 18px;">&nbsp;&nbsp;تحديد الكل</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-lg-2">
                                <a href="#" value="/backend/web/student-creation/manage-all?action=suspend" class="all-action">
                                    <h4 class="phoneText2" style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon2.png" />توقف مؤقت</h4>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-lg-6 all-action">
                                <a href="#" value="/backend/web/student-creation/manage-all?action=delete_new" class="all-action del">
                                    <h4 class="phoneText2" style="color: #fd5d5d;"><img class="group4083" src="../../../public/assets/build/images/Group4083.png" />حذف</h4>
                                </a>
                            </div>
                            <div class="col-md-12 col-lg-2 phoneDisapear">
                                <!-- Actual search box -->
                                <div class="form-group has-feedback has-search" style="padding:1px 8px">
                                    <span class="glyphicon glyphicon-search form-control-feedback" style="right:9px"></span>
                                    <input type="search" class="form-control" placeholder="بحث" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-12">
                                <div class="info-box card-student specCard" style="border-radius:0">
                                    <div class="row">
                                        <div class="col-lg-12 mid-row1">
                                            <div class="col-xs-4">
                                                <div class="checkbox-default">
                                                    <input id="card-cenetr-checkbox-1" class="form-check-input" type="checkbox" value="1" />
                                                    <label for="card-cenetr-checkbox-1"></label>
                                                </div>
                                            </div>

                                            <div class="col-xs-4 mid-user-center">
                                                <span><img class="mid-user-img" src="../../../public/assets/build/images/logo-image.png" /></span>
                                            </div>

                                            <div class="col-xs-4 clickm">
                                                <a style="position:relative; z-index:2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" /></a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a data-toggle="modal" data-target="#managerModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> تعديل</a>
                                                    </li>
                                                    <li>
                                                        <a @click="showPause = true" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-12" style="position:relative; z-index:2">
                                            <div class="col-xs-12">
                                                <div class="mid-text2">
                                                    <a href="#" @click="showManager = true"><h4 class="color-green">محمد خالد سعد</h4></a>
                                                    <h6>&nbsp;</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mid-row2">
                                            <div class="row">
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">المنشأت</span><br>
                                                            <span class="large-font-2 t2"><b>9</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/episode30x30.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">الحلقات</span><br>
                                                            <span class="large-font-2 t2"><b>12</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/Group 4104@2x.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">الطلاب</span><br>
                                                            <span class="large-font-2 t2"><b>80</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.info-box-content -->
                                    </div>


                                    <b-modal v-model="showManager" size="lg">
                                      <manager></manager>
                                    </b-modal>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="center-menu-2" class="tab-pane fade in">
                    <div class="tahdid">
                        <div class="row">
                            <div class="col-xs-6 col-sm-4 col-lg-2 d-flex" style="padding-top:5px">
                                <div>
                                    <div class="checkbox-default checkbox-style-2">
                                        <input id="card-center-check-all-checkbox-1" class="form-check-input" type="checkbox" value="1" autocomplete="off" />
                                        <label for="card-center-check-all-checkbox-1"></label>
                                        <span class="phoneText2" style="color: #000; font-size: 18px;">&nbsp;&nbsp;تحديد الكل</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-lg-2">
                                <a href="#" value="/backend/web/student-creation/manage-all?action=suspend" class="all-action">
                                    <h4 class="phoneText2" style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon2.png" />توقف مؤقت</h4>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-lg-6 all-action">
                                <a href="#" value="/backend/web/student-creation/manage-all?action=delete_new" class="all-action del">
                                    <h4 class="phoneText2" style="color: #fd5d5d;"><img class="group4083" src="../../../public/assets/build/images/Group4083.png" />حذف</h4>
                                </a>
                            </div>
                            <div class="col-md-12 col-lg-2 phoneDisapear">
                                <!-- Actual search box -->
                                <div class="form-group has-feedback has-search" style="padding:1px 8px">
                                    <span class="glyphicon glyphicon-search form-control-feedback" style="right:9px"></span>
                                    <input type="search" class="form-control" placeholder="بحث" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-12">
                                <div class="info-box card-student specCard" style="border-radius:0">
                                    <div class="row">
                                        <div class="col-lg-12 mid-row1">
                                            <div class="col-xs-4">
                                                <div class="checkbox-default">
                                                    <input id="card-cenetr-checkbox-1" class="form-check-input" type="checkbox" value="1" />
                                                    <label for="card-cenetr-checkbox-1"></label>
                                                </div>
                                            </div>

                                            <div class="col-xs-4 mid-user-center">
                                                <span><img class="mid-user-img" src="../../../public/assets/build/images/logo-image.png" /></span>
                                            </div>

                                            <div class="col-xs-4 clickm">
                                                <a style="position:relative; z-index:2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" /></a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a data-toggle="modal" data-target="#managerModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> تعديل</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="col-xs-12">
                                                <div class="mid-text2">
                                                    <a href="#" @click="showManager = true"><h4 class="color-green">محمد خالد سعد</h4></a>
                                                    <h6>&nbsp;</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mid-row2">
                                            <div class="row">
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">المنشأت</span><br>
                                                            <span class="large-font-2 t2"><b>9</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/episode30x30.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">الحلقات</span><br>
                                                            <span class="large-font-2 t2"><b>12</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/Group 4104@2x.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">الطلاب</span><br>
                                                            <span class="large-font-2 t2"><b>80</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.info-box-content -->
                                    </div>

                                    <b-modal v-model="showPause">
                                      <pause></pause>
                                    </b-modal>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="center-menu-3" class="tab-pane fade in">
                    <div class="tahdid">
                        <div class="row">
                            <div class="col-xs-6 col-sm-4 col-lg-2 d-flex" style="padding-top:5px">
                                <div>
                                    <div class="checkbox-default checkbox-style-2">
                                        <input id="card-center-check-all-checkbox-1" class="form-check-input" type="checkbox" value="1" autocomplete="off" />
                                        <label for="card-center-check-all-checkbox-1"></label>
                                        <span class="phoneText2" style="color: #000; font-size: 18px;">&nbsp;&nbsp;تحديد الكل</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-lg-2">
                                <a href="#" value="/backend/web/student-creation/manage-all?action=suspend" class="all-action">
                                    <h4 class="phoneText2" style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon2.png" />توقف مؤقت</h4>
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-lg-6 all-action">
                                <a href="#" value="/backend/web/student-creation/manage-all?action=delete_new" class="all-action del">
                                    <h4 class="phoneText2" style="color: #fd5d5d;"><img class="group4083" src="../../../public/assets/build/images/Group4083.png" />حذف</h4>
                                </a>
                            </div>
                            <div class="col-md-12 col-lg-2 phoneDisapear">
                                <!-- Actual search box -->
                                <div class="form-group has-feedback has-search" style="padding:1px 8px">
                                    <span class="glyphicon glyphicon-search form-control-feedback" style="right:9px"></span>
                                    <input type="search" class="form-control" placeholder="بحث" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-12">
                                <div class="info-box card-student specCard" style="border-radius:0">
                                    <div class="row">
                                        <div class="col-lg-12 mid-row1">
                                            <div class="col-xs-4">
                                                <div class="checkbox-default">
                                                    <input id="card-cenetr-checkbox-1" class="form-check-input" type="checkbox" value="1" />
                                                    <label for="card-cenetr-checkbox-1"></label>
                                                </div>
                                            </div>

                                            <div class="col-xs-4 mid-user-center">
                                                <span><img class="mid-user-img" src="../../../public/assets/build/images/logo-image.png" /></span>
                                            </div>

                                            <div class="col-xs-4 clickm">
                                                <a style="position:relative; z-index:2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" /></a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a data-toggle="modal" data-target="#managerModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> تعديل</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="col-xs-12">
                                                <div class="mid-text2">
                                                    <a href="#" @click="showManager = true"><h4 class="color-green">محمد خالد سعد</h4></a>
                                                    <h6>&nbsp;</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mid-row2">
                                            <div class="row">
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">المنشأت</span><br>
                                                            <span class="large-font-2 t2"><b>9</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/episode30x30.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">الحلقات</span><br>
                                                            <span class="large-font-2 t2"><b>12</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                    <div class="table-div">
                                                        <div class=""><img src="../../../public/assets/build/images/Group 4104@2x.png" alt=""></div>
                                                        <div class="p-1">
                                                            <span class="small color-light">الطلاب</span><br>
                                                            <span class="large-font-2 t2"><b>80</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.info-box-content -->
                                    </div>

                                    <b-modal v-model="newManager" size="lg">
                                      <addNewwManager></addNewwManager>
                                    </b-modal>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import supervisor from '../supervisors/modals/Supervisor.vue'
import manager from '../supervisors/modals/Manager.vue'
import pause from '../supervisors/modals/Pause.vue'
import addNewwManager from '../supervisors/modals/AddNewManager.vue'

export default {
  name: 'supervisors',
  data() {
    return {
      showSupervisor: false,
      showManager: false,
      showPause: false,
      newManager: false
    }
  },
  components: {
    supervisor,
    manager,
    pause,
    addNewwManager
  }
}
</script>