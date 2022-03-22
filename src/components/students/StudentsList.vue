<template>
  <div class="studentsList row">
    <div class="col-lg-12">
        <div class="tab-content">
            <div id="student-home" class="tab-pane fade in active">
                <div class="tahdid">
                    <div class="row" style="margin-bottom: 20px">
                        <div class="col-sm-8">
                            <div class="flex-start row">
                                <div class="pl-3 col-xs-6 col-sm-4 col-lg-2">
                                    <div>
                                        <div class="checkbox-default checkbox-style-2">
                                            <input id="card-student-check-all-checkbox-1" class="form-check-input" type="checkbox" value="1" autocomplete="off" />
                                            <label for="card-student-check-all-checkbox-1"></label>
                                            <span style="color: #000; font-size: 18px;">&nbsp;&nbsp;تحديد الكل</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-3 option col-xs-6 col-sm-4 col-lg-2">
                                    <a data-toggle="modal" data-target="#groupMessageModal" href="#" id="change-eps" class="m-link" @click="showNotification = true">
                                        <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon1.png" />إشعار</h4>
                                    </a>
                                </div>

                                <!-- NOTIFICATIONS MODAL -->
                                <b-modal v-model='showNotification'>
                                    <notification></notification>
                                </b-modal>

                                <div class="pl-3 option col-xs-6 col-sm-4 col-lg-3">
                                    <a href="#" id="change-eps" class="m-link">
                                        <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon3.png" />نقل الى حلقة</h4>
                                    </a>
                                </div>
                                <div class="pl-3 option col-xs-6 col-sm-4 col-lg-3">
                                    <a href="#" class="all-action">
                                        <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon2.png" />توقف مؤقت</h4>
                                    </a>
                                </div>
                                <div class="pl-3 all-action option col-xs-6 col-sm-4 col-lg-2">
                                    <a href="#" class="all-action del">
                                        <h4 style="color: #fd5d5d;"><img class="group4083" src="../../../public/assets/build/images/Group4083.png" />حذف</h4>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-4 text-left phoneDisapear">
                            <div class="btn-group">
                                <a class="btn btn-white filter collapse" href="#" data-toggle="modal" @click="studentsFilter = true"><img src="../../../public/assets/build/images/tunnel.png"> تصفية</a>
                                <input class="btn btn-white search-white" type="text" placeholder="بحث">
                                <a class="btn btn-white share collapse" href="#"><img src="../../../public/assets/build/images/share.png"> مشاركة</a>
                                <a class="btn btn-white" id="changeView"><img src="../../../public/assets/build/images/table-view.png"> تبديل</a>
                            </div>


                            <!-- STUDENTS FILTER MODAL -->
                            <b-modal v-model="studentsFilter" size="lg">
                                <studentsFilter></studentsFilter>
                            </b-modal>
                            <!-- Filter Modal -->
                            

                        </div>
                    </div>
                    <div class="row card-view">
                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="info-box info-box2 mid3 card-student specCard">
                                <div class="row">
                                    <div class="col-lg-12 mid-row1">
                                        <div class="col-xs-4">
                                            <div class="checkbox-default">
                                                <input id="card-student-checkbox-1" class="form-check-input" type="checkbox" value="1" />
                                                <label for="card-student-checkbox-1"></label>
                                            </div>
                                            <span class="small-user">2<img src="../../../public/assets/build/images/small-user.png" /></span>
                                        </div>

                                        <div class="col-xs-4 mid-user-center">
                                            <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                        </div>

                                        <div class="col-xs-4 clickm">
                                            <a class="dropDownDots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" /></a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a data-toggle="modal"
                                                    @click="studentSettings = true" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> الإعدادات</a>
                                                </li>
                                                <li>
                                                    <a data-toggle="modal" @click="addToEpisode = true" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> انضمام لحلقة </a>
                                                </li>
                                                <li>
                                                    <a data-toggle="modal" @click="pause = true" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
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
                                                <a href="#" data-toggle="modal" 
                                                @click="studentModal = true"><h4 class="student-name">عبد الله احمد الحامد</h4></a>
                                                <h6>حلقة التجويد</h6>
                                                <h6>السعودية | 34 سنة</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mid-row2">
                                        <div class="row studentLinePro">
                                            <div class="col-xs-3" style="padding-left:0">
                                                <span class="t2 partName">حفظ جزء النبأ</span>
                                            </div>
                                            <div class="col-xs-6 mt-1">
                                                <div class="progress progress-bar-thin">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-1 percent98">
                                                <span>98%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mid-row3 text-center">
                                        <div class="col-xs-3 mid-row3-icon1-center">
                                            <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                        </div>
                                        <div class="col-xs-3 mid-row3-icon2-center">
                                            <a data-toggle="modal" @click="addAbsent = true" href="#">
                                                <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                            </a>
                                        </div>
                                        <div class="col-xs-3 mid-row3-icon3-left">
                                            <a data-toggle="modal" @click="moveToEpisode = true" href="#">
                                                <span class="mid-row3-icon3"><img src="../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                            </a>
                                        </div>
                                        <div class="col-xs-3 mid-row3-icon4-left" style="cursor: pointer" data-toggle="modal" @click="studentReport = true">
                                            <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                        </div>
                                    </div>
                                    <!-- /.info-box-content -->
                                </div>

                                <!-- Add Absent Model -->
                                <b-modal v-model="addAbsent">
                                    <addAbsent></addAbsent>
                                </b-modal>
                                <!-- End Add Absent Model -->


                                <!-- Student Model -->
                                <b-modal v-model="studentModal">
                                    <studentModal></studentModal>
                                </b-modal>
                                <!-- End Student Model -->


                                <!-- Sittings Model -->
                                <b-modal v-model="studentSettings">
                                    <studentSettings></studentSettings>
                                </b-modal>
                                <!-- End Sittings Model -->
                                
                                <!-- Add To Episode Model -->
                                <b-modal v-model="addToEpisode">
                                    <addToEpisode></addToEpisode>
                                </b-modal>
                                <!-- End Add To Episode Model -->

                                <!-- Pause Model -->
                                <b-modal v-model="pause">
                                    <pause></pause>
                                </b-modal>
                                <!-- End Pause Model -->

                                <!-- Move To Episode Model -->
                                <b-modal v-model="moveToEpisode">
                                    <moveToEpisode></moveToEpisode>
                                </b-modal>
                                <!-- End Move To Episode Model -->

                                <!-- STUDENT REPORT MODAL -->
                                <b-modal v-model="studentReport" size="200" class="spec">
                                    <studentReport></studentReport>
                                </b-modal>

                            </div>
                        </div>
                    </div>
                    <table class="custom-table table-normal table-responsive collapse table-view display:flex; justify-content-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>م</th>
                                <th><i class="fa fa-angle-down sort"></i> <span>الإسم</span></th>
                                <th><i class="fa fa-angle-down sort"></i> العمر</th>
                                <th class="color-green">
                                    <i class="fa fa-angle-up sort"></i>
                                    <div class="popup">
                                        <span>الجنسية</span>
                                        <ul>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-11" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-11"></label>
                                                    <span>السعودية</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-12" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-12"></label>
                                                    <span>اندونيسيا</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th><i class="fa fa-angle-down sort"></i>
                                    <div class="popup">
                                        <span>الحلقة</span>
                                        <ul>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-11" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-11"></label>
                                                    <span>حلقة تحفيظ القران</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-12" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-12"></label>
                                                    <span>حلقة المراجعة العامة</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th><i class="fa fa-angle-down sort"></i>
                                    <div class="popup">
                                        <span>البرنامج</span>
                                        <ul>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-11" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-11"></label>
                                                    <span>برنامج التلحفيظ</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-12" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-12"></label>
                                                    <span>برنامج المتابعة</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th><i class="fa fa-angle-down sort"></i>
                                    <div class="popup">
                                        <span>خطة التسميع</span>
                                        <ul>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-11" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-11"></label>
                                                    <span>منهج انجازي</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-12" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-12"></label>
                                                    <span>مناهج تعليميه</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-13" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-13"></label>
                                                    <span>مناهج مرنه</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th><i class="fa fa-angle-down sort"></i>
                                    <div class="popup">
                                        <span>المستوى</span>
                                        <ul>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-11" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-11"></label>
                                                    <span>الاول</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkbox-default">
                                                    <input id="card-student-checkbox-12" class="" type="checkbox" value="1">
                                                    <label for="card-student-checkbox-12"></label>
                                                    <span>الثاني</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td width="3%">
                                    <div>
                                        <div class="checkbox-default">
                                            <input id="card-student-checkbox-1" class="form-check-input" type="checkbox" value="1">
                                            <label for="card-student-checkbox-1"></label>
                                        </div>
                                    </div>
                                </td>
                                <td width="3%"><div>1</div></td>
                                <td width="18%"><div>عبد الله احمد بن علي</div></td>
                                <td width="8%"><div><span class="color-yallow">23</span></div></td>
                                <td width="10%"><div><span class="color-sky">سعودي</span></div></td>
                                <td width="10%"><div><span class="color-red">حلقة تحفيظ القران</span></div></td>
                                <td width="10%"><div><span class="color-green">برنامج التحفيظ</span></div></td>
                                <td width="10%"><div>حفظ جزء النبأ</div></td>
                                <td width="26%">
                                    <div class="text-right">
                                        <div>مناهج انجازي <span class="categ">ح</span>: ثلث وجه <span class="categ">ص</span>: 1 <span class="categ">ك</span>: 1</div>
                                    </div>

                                </td>
                                <td width="2%">
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" href="#" aria-expanded="true">
                                            <img src="../../../public/assets/build/images/clickm-dark.png">
                                        </a>
                                        <ul class="dropdown-menu custom-menu custom-menu-left">
                                            <li>
                                                <a data-toggle="modal" data-target="#sittingsModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> الإعدادات</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#addToEpisodeModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> انضمام لحلقة </a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#pauseModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                            </li>
                                            <li>
                                                <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>


                                    <!-- REPEATED MODALS -->

                                    <!-- Add Absent Model -->
                                    <div class="modal fade" id="addAbsentAllModal" tabindex="-1" role="dialog" aria-labelledby="addAbsentAllModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content permission-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title text-center" id="myModalLabel">إضافة استئذان</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="row">
                                                            <div class="col-sm-8">
                                                                <div class="permission">
                                                                    <div class="">
                                                                        <input type="date" />
                                                                    </div>
                                                                    <div class="to">
                                                                        <input type="date" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <div class="row">
                                                                    <div class="col-sm-3 p-1">
                                                                        <img src="../../../public/assets/build/images/Group 4417.png" alt="" />
                                                                    </div>
                                                                    <div class="col-sm-7">
                                                                        <p class="day">ايام الاستئذان</p>
                                                                        <p class="day-number">6</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text-center">
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> اضافة</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="permission-statictices">
                                                    <div class="row">
                                                        <div class="col-sm-3 text-center">
                                                            <div>
                                                                <div>
                                                                    <img src="../../../public/assets/build/images/present.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <b>الحضور</b>
                                                                    <h1 class="present">2507</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-3 text-center">
                                                            <div>
                                                                <div>
                                                                    <img src="../../../public/assets/build/images/delay.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <b>التأخر</b>
                                                                    <h1 class="dely">52</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-3 text-center">
                                                            <div>
                                                                <div>
                                                                    <img src="../../../public/assets/build/images/abesnt.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <b>غياب بعذر</b>
                                                                    <h1 class="excused-absence">20</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-3 text-center">
                                                            <div>
                                                                <div>
                                                                    <img src="../../../public/assets/build/images/abesnt.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <b>الغياب</b>
                                                                    <h1 class="absence">20</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="permission-footer">
                                                    <div class="">
                                                        <div class="text-left">
                                                            <button class="btn btn-primary btn5">عرض الجميع <span class="color-green">24</span></button>
                                                        </div>
                                                        <div class="perest-day">
                                                            <div class="">
                                                                <button data-toggle="modal" data-target="#permissionRemoveModal" type="button" class="close color-red" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                <div class="text-center">
                                                                    <div class="d-flex space-around">
                                                                        <div class="p-1">
                                                                            <span class="day">16</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                                                                </div>
                                                                <div>
                                                                    <label class="d-block" for="permission-checkbox-1">
                                                                        <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-1" autocomplete="off " />
                                                                        <div class="absent text-center">غياب</div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <button type="button" class="close color-red" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                <div class="text-center">
                                                                    <div class="d-flex space-around">
                                                                        <div class="p-1">
                                                                            <span class="day">16</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                        <div class="pt-2"><span class="day">-</span></div>
                                                                        <div class="p-1">
                                                                            <span class="day">21</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="small-font">عدد الأيام <span class="color-green">5</span></span>
                                                                </div>
                                                                <div>
                                                                    <label class="d-block" for="permission-checkbox-2">
                                                                        <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-2" autocomplete="off " />
                                                                        <div class="absent text-center">غياب</div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <button type="button" class="close" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                <div class="text-center">
                                                                    <div class="d-flex space-around">
                                                                        <div class="p-1">
                                                                            <span class="day">16</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                                                                </div>
                                                                <div>
                                                                    <label class="d-block" for="permission-checkbox-3">
                                                                        <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-3" autocomplete="off " />
                                                                        <div class="absent excused-absence text-center">غياب بعذر</div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <button type="button" class="close" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                <div class="text-center">
                                                                    <div class="d-flex space-around">
                                                                        <div class="p-1">
                                                                            <span class="day">16</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                        <div class="p-1"><span class="day">-</span></div>
                                                                        <div class="p-1">
                                                                            <span class="day">16</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                                                                </div>
                                                                <div>
                                                                    <label class="d-block" for="permission-checkbox-4">
                                                                        <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-4" autocomplete="off " />
                                                                        <div class="absent excused-absence text-center">غياب بعذر</div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <button type="button" class="close color-red" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                                <div class="text-center">
                                                                    <div class="d-flex space-around">
                                                                        <div class="p-1">
                                                                            <span class="day">16</span><br />
                                                                            <span class="month">سبتمبر</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                                                                </div>
                                                                <div>
                                                                    <label class="d-block" for="permission-checkbox-5">
                                                                        <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-5" autocomplete="off " />
                                                                        <div class="absent text-center">غياب</div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Add Absent Model -->
                                    <!-- Student Model -->
                                    <div class="modal fade" id="studentModal" tabindex="-1" role="dialog" aria-labelledby="studentModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title text-center" id="myModalLabel">عبد الله احمد الحامد</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <input class="hidden" id="profieImage" type="file" name="profile" />
                                                        <div class="text-center">
                                                            <div class="user">
                                                                <label class="cursor-pointer" for="profieImage"><img src="../../../public/assets/img/user.png" /></label>
                                                                <h5 style="color: #8191a5;">إضافة صورة شخصية</h5>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-2"></div>
                                                            <div class="col-lg-8">
                                                                <div class="form-group">
                                                                    <label>اسم المستخدم</label>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input type="text" name="staffname4" placeholder="رقم الهوية مثلا" class="form-control" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-2"></div>
                                                        </div>
                                                        <div>
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>الاسم</label>
                                                                        <input type="text" name="staffname4" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>الجنسية</label>
                                                                        <select name="staffname4" class="form-control">
                                                                            <option value="">اختيار الجنسية</option>
                                                                            <option value="31">أمريكا</option>
                                                                            <option value="26">أندونيسيا</option>
                                                                            <option value="35">استراليا</option>
                                                                            <option value="16">الأردن</option>
                                                                            <option value="6">الإمارات</option>
                                                                            <option value="8">البحرين</option>
                                                                            <option value="17">الجزائر</option>
                                                                            <option value="1" selected="">السعودية</option>
                                                                            <option value="3">السودان</option>
                                                                            <option value="21">الصومال</option>
                                                                            <option value="29">الصين</option>
                                                                            <option value="13">العراق</option>
                                                                            <option value="27">الفلبين</option>
                                                                            <option value="7">الكويت</option>
                                                                            <option value="14">المغرب</option>
                                                                            <option value="25">الهند</option>
                                                                            <option value="12">اليمن</option>
                                                                            <option value="9">باكستان</option>
                                                                            <option value="30">بريطانيا</option>
                                                                            <option value="24">بنجلاديش</option>
                                                                            <option value="34">بورما</option>
                                                                            <option value="33">تركيا</option>
                                                                            <option value="22">جيبوتي</option>
                                                                            <option value="2">سوريا</option>
                                                                            <option value="15">عمان</option>
                                                                            <option value="36">غير ذلك</option>
                                                                            <option value="19">فلسطين</option>
                                                                            <option value="5">قطر</option>
                                                                            <option value="32">كندا</option>
                                                                            <option value="18">لبنان</option>
                                                                            <option value="23">ليبيا</option>
                                                                            <option value="10">مالي</option>
                                                                            <option value="28">ماليزيا</option>
                                                                            <option value="4">مصر</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>تاريخ الميلاد</label>
                                                                        <select name="staffname4" class="form-control">
                                                                            <option value="">--اختيار--</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>الجوال</label>
                                                                        <input type="text" name="staffname4" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>جوال ولي الامر</label>
                                                                        <input type="text" name="staffname4" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>البريد الالكتروني</label>
                                                                        <input type="text" name="staffname4" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>معلومات اضافية</label>
                                                                        <textarea type="text" name="staffname4" class="form-control" rows="3"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>الجنس</label>
                                                                <div class="input-custom-group">
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="genderCheck-1">
                                                                                <input name="program" type="radio" id="genderCheck-1" />
                                                                                <div class="">
                                                                                    <span>ذكر</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="genderCheck-2">
                                                                                <input name="program" type="radio" id="genderCheck-2" />
                                                                                <div class="">
                                                                                    <span>انثى</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <label>الحلقات</label>

                                                            <div class="row abdl">
                                                                <div class="col-sm-6">
                                                                    <div class="info-box mid3 card-student specCard height-auto">
                                                                        <div class="row">
                                                                            <div class="col-lg-12 mid-row1">
                                                                                <div class="col-xs-4"></div>

                                                                                <div class="col-xs-4 mid-user-center">
                                                                                    <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                                                                </div>

                                                                                <div class="col-xs-4 clickm">
                                                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                                                                        <img src="../../../public/assets/build/images/clickm.png" />
                                                                                    </a>
                                                                                    <ul class="dropdown-menu">
                                                                                        <li>
                                                                                            <a data-toggle="modal" data-target="#sittingsActiveModal" href="#">
                                                                                                <img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> إعدادات
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#">
                                                                                                <img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
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
                                                                                        <a data-toggle="modal" data-target="#studentActiveModal" href="#"><h4 class="student-name">حلقة التجويد</h4></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 mid-row2 mb-0">
                                                                                <div class="row studentLinePro">
                                                                                    <div class="col-xs-3" style="padding-left:0">
                                                                                        <span class="t2">حفظ جزء النبأ</span>
                                                                                    </div>
                                                                                    <div class="col-xs-6">
                                                                                        <div class="progress progress-bar-thin">
                                                                                            <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-xs-1 percent98">
                                                                                        <span>98%</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 mid-row3">
                                                                                <div class="col-xs-3 mid-row3-icon1-center">
                                                                                    <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                                                                </div>
                                                                                <div class="col-xs-3 mid-row3-icon2-center">
                                                                                    <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                                                                </div>
                                                                                <div class="col-xs-3 mid-row3-icon3-left">
                                                                                    <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                                                                        <span class="mid-row3-icon3"><img src="../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                                                                    </a>
                                                                                </div>
                                                                                <div class="col-xs-3 mid-row3-icon4-left">
                                                                                    <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="info-box mid3 card-student specCard height-auto">
                                                                        <div class="row">
                                                                            <div class="col-lg-12 mid-row1">
                                                                                <div class="col-xs-4"></div>

                                                                                <div class="col-xs-4 mid-user-center">
                                                                                    <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                                                                </div>

                                                                                <div class="col-xs-4 clickm">
                                                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                                                                        <img src="../../../public/assets/build/images/clickm.png" />
                                                                                    </a>
                                                                                    <ul class="dropdown-menu">
                                                                                        <li>
                                                                                            <a data-toggle="modal" data-target="#sittingsActiveModal" href="#">
                                                                                                <img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> إعدادات
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#">
                                                                                                <img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
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
                                                                                        <a data-toggle="modal" data-target="#studentActiveModal" href="#"><h4 class="student-name">حلقة التجويد</h4></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 mid-row2 mb-0">
                                                                                <div class="row studentLinePro">
                                                                                    <div class="col-xs-3" style="padding-left:0">
                                                                                        <span class="t2">حفظ جزء النبأ</span>
                                                                                    </div>
                                                                                    <div class="col-xs-6">
                                                                                        <div class="progress progress-bar-thin">
                                                                                            <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-xs-1 percent98">
                                                                                        <span>98%</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 mid-row3">
                                                                                <div class="col-xs-3 mid-row3-icon1-center">
                                                                                    <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                                                                </div>
                                                                                <div class="col-xs-3 mid-row3-icon2-center">
                                                                                    <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                                                                </div>
                                                                                <div class="col-xs-3 mid-row3-icon3-left">
                                                                                    <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                                                                        <span class="mid-row3-icon3"><img src="../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                                                                    </a>
                                                                                </div>
                                                                                <div class="col-xs-3 mid-row3-icon4-left">
                                                                                    <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer text-center hidden" id="registerInformationFooter">
                                                    <div class="text-center">
                                                        <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> تسجيل جديد</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Student Model -->

                                    <!-- Sittings Model -->
                                    <div class="modal fade" id="sittingsModal" tabindex="-1" role="dialog" aria-labelledby="sittingsModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <form>
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title" id="myModalLabel">الإعدادات</h4>
                                                        <h5 class="text-center">عبد الله احمد الحامد - <span class="color-green"> حلقة تجويد القراءة</span></h5>
                                                    </div>

                                                    <ul class="nav nav-tabs nav-justify-header">
                                                        <li class="active"><a data-toggle="tab" href="#home">اختيار البرنامج</a></li>
                                                        <li><a data-toggle="tab" href="#menu1">اختيار الأيام</a></li>
                                                        <li><a data-toggle="tab" href="#menu2">خطة التسميع</a></li>
                                                        <li><a data-toggle="tab" href="#menu3">تعديل الابتداء</a></li>
                                                    </ul>
                                                    <div class="modal-body">
                                                        <div class="tab-content">
                                                            <div id="home" class="tab-pane fade in active">
                                                                <label>البرنامج</label>
                                                                <div class="input-custom-group">
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check1">
                                                                                <input name="program" type="radio" id="check1" checked="checked" />
                                                                                <div class="">
                                                                                    <span>حفظ القران</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check2">
                                                                                <input name="program" type="radio" id="check2" />
                                                                                <div class="">
                                                                                    <span>الحفاظ</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check3">
                                                                                <input name="program" type="radio" id="check3" />
                                                                                <div class="">
                                                                                    <span>التجويد</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check4">
                                                                                <input name="program" type="radio" id="check4" />
                                                                                <div class="">
                                                                                    <span>التمرين</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label>اختيار المستوي</label>
                                                                            <select class="form-control selectoption">
                                                                                <option>1</option>
                                                                                <option>2</option>
                                                                                <option>3</option>
                                                                                <option>4</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group text-center">
                                                                    <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> حفظ التعديلات</button>
                                                                </div>
                                                            </div>
                                                            <div id="menu1" class="tab-pane fade">
                                                                <label>أيام الحلقة</label>
                                                                <div class="input-custom-group">
                                                                    <div class="">
                                                                        <div class="checkbox">
                                                                            <label for="check10">
                                                                                <input type="checkbox" id="check10" />
                                                                                <div class="">
                                                                                    <span>يوم الاحد</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="checkbox">
                                                                            <label for="check11">
                                                                                <input type="checkbox" id="check11" />
                                                                                <div class="">
                                                                                    <span>يوم الاثنين</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="checkbox">
                                                                            <label for="check12">
                                                                                <input type="checkbox" id="check12" />
                                                                                <div class="">
                                                                                    <span>يوم الثاثاء</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="checkbox">
                                                                            <label for="check13">
                                                                                <input type="checkbox" id="check13" />
                                                                                <div class="">
                                                                                    <span>يوم الاربعاء</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="checkbox">
                                                                            <label for="check14">
                                                                                <input type="checkbox" id="check14" />
                                                                                <div class="">
                                                                                    <span>يوم الخميس</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <label>وقت الحلقة</label>
                                                                <div class="input-custom-group">
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check15">
                                                                                <input name="time" type="radio" id="check15" />
                                                                                <div class="">
                                                                                    <span>بعد الفجر</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check16">
                                                                                <input name="time" type="radio" id="check16" />
                                                                                <div class="">
                                                                                    <span>بعد العصر</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check17">
                                                                                <input name="time" type="radio" id="check17" />
                                                                                <div class="">
                                                                                    <span>بعد المغرب</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="radio">
                                                                            <label for="check18">
                                                                                <input name="time" type="radio" id="check18" />
                                                                                <div class="">
                                                                                    <span>بعد العشاء</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group text-center">
                                                                    <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> حفظ التعديلات</button>
                                                                </div>
                                                            </div>
                                                            <div id="menu2" class="tab-pane fade">
                                                                <div class="form-group">
                                                                    <div class="input-custom-group">
                                                                        <div class="">
                                                                            <div class="radio">
                                                                                <label for="check19">
                                                                                    <input name="method" type="radio" id="check19" />
                                                                                    <div class="">
                                                                                        <span>مناهج تعليمية</span>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="">
                                                                            <div class="radio">
                                                                                <label for="check20">
                                                                                    <input name="method" type="radio" id="check20" />
                                                                                    <div class="">
                                                                                        <span>مناهج ( إنجازي ) </span>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="">
                                                                            <div class="radio">
                                                                                <label for="check21">
                                                                                    <input name="method" type="radio" id="check21" />
                                                                                    <div class="">
                                                                                        <span>مناهج مرنة</span>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <label>اختيار كمية الحفظ</label>
                                                                        <select class="form-control selectoption">
                                                                            <option>نصف صفحة </option>
                                                                            <option>نصف صفحة </option>
                                                                            <option>نصف صفحة </option>
                                                                            <option>نصف صفحة </option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-12 mansure">
                                                                        <label>اتجاه الحفظ</label>
                                                                        <div class="radio">
                                                                            <label for="check22">
                                                                                <input name="diraction" type="radio" id="check22" />
                                                                                <div class="">
                                                                                    <span>من البقرة</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-12 mansure">
                                                                        <label>&nbsp;</label>
                                                                        <div class="radio">
                                                                            <label for="check23">
                                                                                <input name="diraction" type="radio" id="check23" />
                                                                                <div class="">
                                                                                    <span>من الناس</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <label><h4>المراجعة الصغرى</h4></label><br />
                                                                        <span class="color-light">
                                                                            <span>اختيار عدد الدروس</span>
                                                                            <i class="icon-plus color-light font-30" id="plusMin"></i>
                                                                            <span class="zero0" id="minResult">00</span>
                                                                            <i class="icon-minus color-light font-30" id="minusMin"></i>
                                                                        </span>
                                                                        <input type="hidden" id="leasonNumberMin" value="00" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <label><h4>المراجعة الكبرى</h4></label><br />
                                                                        <span class="color-light">
                                                                            <span>اختيار عدد الدروس</span>
                                                                            <i class="icon-plus color-light font-30" id="plusMax"></i>
                                                                            <span class="zero0" id="maxResult">00</span>
                                                                            <i class="icon-minus color-light font-30" id="minusMax"></i>
                                                                        </span>
                                                                        <input type="hidden" id="leasonNumberMax" value="00" />
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-12 mansure">
                                                                        <label>اتجاه الحفظ</label>
                                                                        <div class="radio">
                                                                            <label for="check24">
                                                                                <input name="diraction2" type="radio" id="check24" />
                                                                                <div class="">
                                                                                    <span>من البقرة</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-12 mansure">
                                                                        <label>&nbsp;</label>
                                                                        <div class="radio">
                                                                            <label for="check25">
                                                                                <input name="diraction2" type="radio" id="check25" />
                                                                                <div class="">
                                                                                    <span>من الناس</span>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group text-center">
                                                                    <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> حفظ التعديلات</button>
                                                                </div>
                                                            </div>
                                                            <div id="menu3" class="tab-pane fade">
                                                                <div class="form-group">
                                                                    <div class="row">
                                                                        <div class="col-sm-1">الحفظ من</div>
                                                                        <div class="col-sm-4">
                                                                            <select class="form-control" name="" id="">
                                                                                <option value="">اختيار السورة</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-sm-4">
                                                                            <select class="form-control" name="" id="">
                                                                                <option value="">اختيار الاية</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <button class="btn btn-primary btn3" type="button"><i class="fa fa-check"></i> تعديل</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <div class="row">
                                                                        <div class="col-sm-1">مراجعة كبرى</div>
                                                                        <div class="col-sm-4">
                                                                            <select class="form-control" name="" id="">
                                                                                <option value="">اختيار السورة</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-sm-4">
                                                                            <select class="form-control" name="" id="">
                                                                                <option value="">اختيار الاية</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <button class="btn btn-primary btn3" type="button"><i class="fa fa-check"></i> تعديل</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Sittings Model -->

                                    <!-- Add To Episode Model -->
                                    <div class="modal fade" id="addToEpisodeModal" tabindex="-1" role="dialog" aria-labelledby="addToEpisodeModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <form>
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title" id="myModalLabel">انضمام لحلقة</h4>
                                                        <h5 class="modal-title color-green">عبد الله احمد الحامد</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label>البرنامج</label>
                                                        <div class="input-custom-group">
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="addToEpisodeModalCheck1">
                                                                        <input name="program" type="radio" id="addToEpisodeModalCheck1" checked="checked" />
                                                                        <div class="">
                                                                            <span>حفظ الاجزاء</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="addToEpisodeModalCheck2">
                                                                        <input name="program" type="radio" id="addToEpisodeModalCheck2" />
                                                                        <div class="">
                                                                            <span>برنامج التلقين</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="addToEpisodeModalCheck3">
                                                                        <input name="program" type="radio" id="addToEpisodeModalCheck3" />
                                                                        <div class="">
                                                                            <span>مراجعة القران الكريم</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="addToEpisodeModalCheck4">
                                                                        <input name="program" type="radio" id="addToEpisodeModalCheck4" />
                                                                        <div class="">
                                                                            <span>تجربة جديدة</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="addToEpisodeModalCheck5">
                                                                        <input name="program" type="radio" id="addToEpisodeModalCheck5" />
                                                                        <div class="">
                                                                            <span>برنامج مراجعة تجريبي</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="addToEpisodeModalCheck6">
                                                                        <input name="program" type="radio" id="addToEpisodeModalCheck6" />
                                                                        <div class="">
                                                                            <span>حفظ فقط</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label for="">المستوى</label>
                                                                <select class="form-control" name="" id="">
                                                                    <option value="">--اختيار--</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="">الحلقة</label>
                                                                <select class="form-control" name="" id="">
                                                                    <option value="">--اختيار--</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer" style="text-align: center;">
                                                        <div class="col-lg-12">
                                                            <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> إنضمام للحلقة</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Add To Episode Model -->

                                    <!-- Pause Model -->
                                    <div class="modal fade" id="pauseModal" tabindex="-1" role="dialog" aria-labelledby="pauseModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <form>
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title" id="myModalLabel"><i class="fa fa-info-circle"></i> تنبيه</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>هل تريد إيقاف الطالب /ة <span class="student-name">عبد الله احمد الحامد</span> مؤقتا؟</p>
                                                    </div>
                                                    <div class="modal-footer" style="text-align: left;">
                                                        <div class="col-lg-12">
                                                            <button type="button" data-dismiss="modal" class="btn btn-primary btn4"><i class="fa fa-close"></i> الغاء الامر</button>
                                                            <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> إيقاف</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Pause Model -->

                                    <!-- Move To Episode Model -->
                                    <div class="modal fade" id="moveToEpisodeModal" tabindex="-1" role="dialog" aria-labelledby="moveToEpisodeModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <form>
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title" id="myModalLabel">نقل الي حلقة</h4>
                                                        <h5 class="modal-title color-green">عبد الله احمد الحامد</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="form-group">
                                                            <label for="">الحلقة</label>
                                                            <select class="form-control" name="" id="">
                                                                <option value="">--اختيار--</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer" style="text-align: center;">
                                                        <div class="col-lg-12">
                                                            <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> نقل</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Move To Episode Model -->
                            </tr>

                            <tr>
                                <td>
                                    <div>
                                        <div class="checkbox-default">
                                            <input id="card-student-checkbox-2" class="form-check-input" type="checkbox" value="1">
                                            <label for="card-student-checkbox-2"></label>
                                        </div>
                                    </div>
                                </td>
                                <td><div>1</div></td>
                                <td><div>عبد الله احمد بن علي</div></td>
                                <td><div><span class="color-yallow">23</span></div></td>
                                <td><div><span class="color-sky">سعودي</span></div></td>
                                <td><div><span class="color-red">حلقة تحفيظ القران</span></div></td>
                                <td><div><span class="color-green">برنامج التحفيظ</span></div></td>
                                <td><div>حفظ جزء النبأ</div></td>
                                <td>
                                    <div class="text-right">
                                        <div>مناهج انجازي <span class="categ">ح</span>: ثلث وجه <span class="categ">ص</span>: 1 <span class="categ">ك</span>: 1</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" href="#" aria-expanded="true">
                                            <img src="../../../public/assets/build/images/clickm-dark.png">
                                        </a>
                                        <ul class="dropdown-menu custom-menu custom-menu-left">
                                            <li>
                                                <a data-toggle="modal" data-target="#sittingsModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png"> الإعدادات</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#addToEpisodeModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4074.png"> نقل الي حلقة</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#pauseModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png"> إيقاف مؤقت</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div>
                                        <div class="checkbox-default">
                                            <input id="card-student-checkbox-3" class="form-check-input" type="checkbox" value="1">
                                            <label for="card-student-checkbox-3"></label>
                                        </div>
                                    </div>
                                </td>
                                <td><div>1</div></td>
                                <td><div>عبد الله احمد بن علي</div></td>
                                <td><div><span class="color-yallow">23</span></div></td>
                                <td><div><span class="color-sky">سعودي</span></div></td>
                                <td><div><span class="color-red">حلقة تحفيظ القران</span></div></td>
                                <td><div><span class="color-green">برنامج التحفيظ</span></div></td>
                                <td><div>حفظ جزء النبأ</div></td>
                                <td>
                                    <div class="text-right">
                                        <div>مناهج انجازي <span class="categ">ح</span>: ثلث وجه <span class="categ">ص</span>: 1 <span class="categ">ك</span>: 1</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <a data-toggle="dropdown" href="#" aria-expanded="true">
                                            <img src="../../../public/assets/build/images/clickm-dark.png">
                                        </a>
                                        <ul class="dropdown-menu custom-menu custom-menu-left">
                                            <li>
                                                <a data-toggle="modal" data-target="#sittingsModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png"> الإعدادات</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#addToEpisodeModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4074.png"> نقل الي حلقة</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#pauseModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png"> إيقاف مؤقت</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div id="student-menu1" class="tab-pane fade in">
                <div class="row tahdid">
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <div>
                            <div class="checkbox-default checkbox-style-2">
                                <input id="card-student-check-all-checkbox-3" class="form-check-input" type="checkbox" value="1" autocomplete="off" />
                                <label for="card-student-check-all-checkbox-3"></label>
                                <span style="color: #000; font-size: 18px;">&nbsp;&nbsp;تحديد الكل</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <a href="#" id="change-eps" class="m-link">
                            <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon1.png" />إشعار</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <a href="#" id="change-eps" class="m-link">
                            <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon3.png" />نقل الى حلقة</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <a href="#" class="all-action">
                            <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon2.png" />توقف مؤقت</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2 all-action">
                        <a href="#" class="all-action del">
                            <h4 style="color: #fd5d5d;"><img class="group4083" src="../../../public/assets/build/images/Group4083.png" />حذف</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2 phoneDisapear">
                        <!-- Actual search box -->
                        <div class="form-group has-feedback has-search">
                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="بحث " />
                        </div>
                    </div>
                </div>

                <div class="row abdl">
                    <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="info-box info-box2 mid3 card-student specCard">
                            <div class="row">
                                <div class="col-lg-12 mid-row1">
                                    <div class="col-xs-4">
                                        <div class="checkbox-default">
                                            <input id="card-student-active-checkbox-1" class="form-check-input" autocomplete="off" type="checkbox" value="1" />
                                            <label for="card-student-active-checkbox-1"></label>
                                        </div>
                                        <span class="small-user">2<img src="../../../public/assets/build/images/small-user.png" /></span>
                                    </div>

                                    <div class="col-xs-4 mid-user-center">
                                        <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                    </div>

                                    <div class="col-xs-4 clickm">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                            <img src="../../../public/assets/build/images/clickm.png" />
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a data-toggle="modal" data-target="#sittingsActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> إعدادات</a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة </a>
                                            </li>
                                            <li>
                                                <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
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
                                            <a data-toggle="modal" data-target="#studentActiveModal" href="#"><h4 class="student-name">عبد الله احمد الحامد</h4></a>
                                            <h6>حلقة التجويد</h6>
                                            <h6>السعودية | 34 سنة</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 mid-row2">
                                    <div class="row studentLinePro">
                                        <div class="col-xs-3" style="padding-left:0">
                                            <span class="t2">حفظ جزء النبأ</span>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="progress progress-bar-thin">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                            </div>
                                        </div>
                                        <div class="col-xs-1 percent98">
                                            <span>98%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 mid-row3 text-center">
                                    <div class="col-xs-3 mid-row3-icon1-center">
                                        <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                    </div>
                                    <div class="col-xs-3 mid-row3-icon2-center">
                                        <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                    </div>
                                    <div class="col-xs-3 mid-row3-icon3-left">
                                        <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                            <span class="mid-row3-icon3"><img src="../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                        </a>
                                    </div>
                                    <div class="col-xs-3 mid-row3-icon4-left">
                                        <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="student-menu2" class="tab-pane fade in">
                <div class="row tahdid">
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <div>
                            <div class="checkbox-default checkbox-style-2">
                                <input id="card-student-check-all-checkbox-4" class="form-check-input" type="checkbox" value="1" autocomplete="off" />
                                <label for="card-student-check-all-checkbox-4"></label>
                                <span style="color: #000; font-size: 18px;">&nbsp;&nbsp;تحديد الكل</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <a href="#" id="change-eps" class="m-link">
                            <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon1.png" />إشعار</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <a href="#" id="change-eps" class="m-link">
                            <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon3.png" />نقل الى حلقة</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2">
                        <a href="#" class="all-action">
                            <h4 style="color: #73879c;"><img class="group4107" src="../../../public/assets/build/images/mid-row3-icon2.png" />توقف مؤقت</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2 all-action">
                        <a href="#" class="all-action del">
                            <h4 style="color: #fd5d5d;"><img class="group4083" src="../../../public/assets/build/images/Group4083.png" />حذف</h4>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-lg-2 phoneDisapear">
                        <!-- Actual search box -->
                        <div class="form-group has-feedback has-search">
                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="بحث " />
                        </div>
                    </div>
                </div>

                <div class="row abdl">
                    <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="info-box info-box2 mid3 boxs2 card-student specCard">
                            <div class="row">
                                <div class="col-lg-12 mid-row1">
                                    <div class="col-xs-4">
                                        <div class="checkbox-default">
                                            <input id="card-student-pause-checkbox-1" class="form-check-input" autocomplete="off" type="checkbox" value="1" />
                                            <label for="card-student-pause-checkbox-1"></label>
                                        </div>
                                        <span class="small-user">2<img src="../../../public/assets/build/images/small-user.png" /></span>
                                    </div>

                                    <div class="col-xs-4 mid-user-center">
                                        <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                    </div>

                                    <div class="col-xs-4 path2165">
                                        <span>
                                            <img src="../../../public/assets/build/images/Group4361.png" />
                                        </span>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="col-xs-12">
                                        <div class="mid-text2">
                                            <a data-toggle="modal" data-target="#studentPauseModal" href="#"><h4 class="student-name">عبد الله احمد الحامد</h4></a>
                                            <h6>حلقة التجويد</h6>
                                            <h6>السعودية | 34 سنة</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 mid-row2">
                                    <div class="row studentLinePro">
                                        <div class="col-xs-3" style="padding-left:0">
                                            <span class="t2a">حفظ جزء النبأ</span>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="progress progress-bar-thin">
                                                <div class="progress-bar bar2" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                            </div>
                                        </div>
                                        <div class="col-xs-1 percent98">
                                            <span class="t2a">98%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 mid-row3 text-center">
                                    <div class="col-xs-3 mid-row3-icon1-center">
                                        <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                    </div>
                                    <div class="col-xs-3 mid-row3-icon2-center">
                                        <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                    </div>
                                    <div class="col-xs-3 mid-row3-icon3-left">
                                        <a data-toggle="modal" data-target="#addToEpisodePauseModal" href="#">
                                            <span class="mid-row3-icon3">
                                                <img src="../../../public/assets/build/images/Group4354.png" />
                                            </span>
                                        </a>
                                    </div>
                                    <div class="col-xs-3 mid-row3-icon4-left">
                                        <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/Group4355.png" /></span>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>


                            <!-- REPEATED MODALS -->

                            <!-- Student Model -->
                            <div class="modal fade" id="studentPauseModal" tabindex="-1" role="dialog" aria-labelledby="studentPauseModal" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title text-center" id="myModalLabel">عبد الله احمد الحامد</h4>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <input class="hidden" id="profieImage" type="file" name="profile" />
                                                <div class="text-center">
                                                    <div class="user">
                                                        <label class="cursor-pointer" for="profieImage"><img src="../../../public/assets/img/user.png" /></label>
                                                        <h5 style="color: #8191a5;">إضافة صورة شخصية</h5>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-2"></div>
                                                    <div class="col-lg-8">
                                                        <div class="form-group">
                                                            <label>اسم المستخدم</label>
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <input type="text" name="staffname4" placeholder="رقم الهوية مثلا" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2"></div>
                                                </div>
                                                <div>
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label>الاسم</label>
                                                                <input type="text" name="staffname4" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label>الجنسية</label>
                                                                <select name="staffname4" class="form-control">
                                                                    <option value="">اختيار الجنسية</option>
                                                                    <option value="31">أمريكا</option>
                                                                    <option value="26">أندونيسيا</option>
                                                                    <option value="35">استراليا</option>
                                                                    <option value="16">الأردن</option>
                                                                    <option value="6">الإمارات</option>
                                                                    <option value="8">البحرين</option>
                                                                    <option value="17">الجزائر</option>
                                                                    <option value="1" selected="">السعودية</option>
                                                                    <option value="3">السودان</option>
                                                                    <option value="21">الصومال</option>
                                                                    <option value="29">الصين</option>
                                                                    <option value="13">العراق</option>
                                                                    <option value="27">الفلبين</option>
                                                                    <option value="7">الكويت</option>
                                                                    <option value="14">المغرب</option>
                                                                    <option value="25">الهند</option>
                                                                    <option value="12">اليمن</option>
                                                                    <option value="9">باكستان</option>
                                                                    <option value="30">بريطانيا</option>
                                                                    <option value="24">بنجلاديش</option>
                                                                    <option value="34">بورما</option>
                                                                    <option value="33">تركيا</option>
                                                                    <option value="22">جيبوتي</option>
                                                                    <option value="2">سوريا</option>
                                                                    <option value="15">عمان</option>
                                                                    <option value="36">غير ذلك</option>
                                                                    <option value="19">فلسطين</option>
                                                                    <option value="5">قطر</option>
                                                                    <option value="32">كندا</option>
                                                                    <option value="18">لبنان</option>
                                                                    <option value="23">ليبيا</option>
                                                                    <option value="10">مالي</option>
                                                                    <option value="28">ماليزيا</option>
                                                                    <option value="4">مصر</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label>تاريخ الميلاد</label>
                                                                <select name="staffname4" class="form-control">
                                                                    <option value="">--اختيار--</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label>الجوال</label>
                                                                <input type="text" name="staffname4" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label>جوال ولي الامر</label>
                                                                <input type="text" name="staffname4" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label>البريد الالكتروني</label>
                                                                <input type="text" name="staffname4" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label>معلومات اضافية</label>
                                                                <textarea type="text" name="staffname4" class="form-control" rows="3"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>الجنس</label>
                                                        <div class="input-custom-group">
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="genderCheck3-1">
                                                                        <input name="program" type="radio" id="genderCheck3-1" />
                                                                        <div class="">
                                                                            <span>ذكر</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <div class="radio">
                                                                    <label for="genderCheck3-2">
                                                                        <input name="program" type="radio" id="genderCheck3-2" />
                                                                        <div class="">
                                                                            <span>انثى</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label>الحلقات</label>

                                                    <div class="row abdl">
                                                        <div class="col-sm-6">
                                                            <div class="info-box mid3 card-student specCard height-auto">
                                                                <div class="row">
                                                                    <div class="col-lg-12 mid-row1">
                                                                        <div class="col-xs-4"></div>

                                                                        <div class="col-xs-4 mid-user-center">
                                                                            <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                                                        </div>

                                                                        <div class="col-xs-4 clickm">
                                                                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                                                                <img src="../../../public/assets/build/images/clickm.png" />
                                                                            </a>
                                                                            <ul class="dropdown-menu">
                                                                                <li>
                                                                                    <a data-toggle="modal" data-target="#sittingsActiveModal" href="#">
                                                                                        <img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> إعدادات
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#">
                                                                                        <img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
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
                                                                                <a data-toggle="modal" data-target="#studentActiveModal" href="#"><h4 class="student-name">حلقة التجويد</h4></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mid-row2 mb-0">
                                                                        <div class="row studentLinePro">
                                                                            <div class="col-xs-3" style="padding-left:0">
                                                                                <span class="t2">حفظ جزء النبأ</span>
                                                                            </div>
                                                                            <div class="col-xs-6">
                                                                                <div class="progress progress-bar-thin">
                                                                                    <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-1 percent98">
                                                                                <span>98%</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mid-row3">
                                                                        <div class="col-xs-3 mid-row3-icon1-center">
                                                                            <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                                                        </div>
                                                                        <div class="col-xs-3 mid-row3-icon2-center">
                                                                            <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                                                        </div>
                                                                        <div class="col-xs-3 mid-row3-icon3-left">
                                                                            <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                                                                <span class="mid-row3-icon3"><img src="../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                                                            </a>
                                                                        </div>
                                                                        <div class="col-xs-3 mid-row3-icon4-left">
                                                                            <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="info-box mid3 card-student specCard height-auto">
                                                                <div class="row">
                                                                    <div class="col-lg-12 mid-row1">
                                                                        <div class="col-xs-4"></div>

                                                                        <div class="col-xs-4 mid-user-center">
                                                                            <span><img class="mid-user-img" src="../../../public/assets/build/images/mid-user.png" /></span>
                                                                        </div>

                                                                        <div class="col-xs-4 clickm">
                                                                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                                                                <img src="../../../public/assets/build/images/clickm.png" />
                                                                            </a>
                                                                            <ul class="dropdown-menu">
                                                                                <li>
                                                                                    <a data-toggle="modal" data-target="#sittingsActiveModal" href="#">
                                                                                        <img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> إعدادات
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#">
                                                                                        <img class="group4061" src="../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
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
                                                                                <a data-toggle="modal" data-target="#studentActiveModal" href="#"><h4 class="student-name">حلقة التجويد</h4></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mid-row2 mb-0">
                                                                        <div class="row studentLinePro">
                                                                            <div class="col-xs-3" style="padding-left:0">
                                                                                <span class="t2">حفظ جزء النبأ</span>
                                                                            </div>
                                                                            <div class="col-xs-6">
                                                                                <div class="progress progress-bar-thin">
                                                                                    <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-1 percent98">
                                                                                <span>98%</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 mid-row3">
                                                                        <div class="col-xs-3 mid-row3-icon1-center">
                                                                            <span class="mid-row3-icon1"><img src="../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                                                        </div>
                                                                        <div class="col-xs-3 mid-row3-icon2-center">
                                                                            <span class="mid-row3-icon2"><img src="../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                                                        </div>
                                                                        <div class="col-xs-3 mid-row3-icon3-left">
                                                                            <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                                                                <span class="mid-row3-icon3"><img src="../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                                                            </a>
                                                                        </div>
                                                                        <div class="col-xs-3 mid-row3-icon4-left">
                                                                            <span class="mid-row3-icon4"><img src="../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer text-center hidden" id="registerInformationFooter">
                                            <div class="text-center">
                                                <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> تسجيل جديد</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Student Model -->

                            <!-- Add To Episode Model -->
                            <div class="modal fade" id="addToEpisodePauseModal" tabindex="-1" role="dialog" aria-labelledby="addToEpisodeModal" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form>
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title" id="myModalLabel">الإنضام لحلقة</h4>
                                            </div>
                                            <div class="modal-body">
                                                <label>اختيار البرنامج</label>
                                                <div class="input-custom-group">
                                                    <div class="">
                                                        <div class="radio">
                                                            <label for="addToEpisodePauseModalCheck1">
                                                                <input name="program" type="radio" id="addToEpisodePauseModalCheck1" checked="checked" />
                                                                <div class="">
                                                                    <span>حفظ الاجزاء</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="radio">
                                                            <label for="addToEpisodePauseModalCheck2">
                                                                <input name="program" type="radio" id="addToEpisodePauseModalCheck2" />
                                                                <div class="">
                                                                    <span>برنامج التلقين</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="radio">
                                                            <label for="addToEpisodePauseModalCheck3">
                                                                <input name="program" type="radio" id="addToEpisodePauseModalCheck3" />
                                                                <div class="">
                                                                    <span>مراجعة القران الكريم</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="radio">
                                                            <label for="addToEpisodePauseModalCheck4">
                                                                <input name="program" type="radio" id="addToEpisodePauseModalCheck4" />
                                                                <div class="">
                                                                    <span>تجربة جديدة</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="radio">
                                                            <label for="addToEpisodePauseModalCheck5">
                                                                <input name="program" type="radio" id="addToEpisodePauseModalCheck5" />
                                                                <div class="">
                                                                    <span>برنامج مراجعة تجريبي</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="radio">
                                                            <label for="addToEpisodePauseModalCheck6">
                                                                <input name="program" type="radio" id="addToEpisodePauseModalCheck6" />
                                                                <div class="">
                                                                    <span>حفظ فقط</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="">المستوى</label>
                                                        <select class="form-control" name="" id="">
                                                            <option value="">--اختيار--</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="">الحلقة</label>
                                                        <select class="form-control" name="" id="">
                                                            <option value="">--اختيار--</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer" style="text-align: center;">
                                                <div class="col-lg-12">
                                                    <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> إنضمام للحلقة</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- End Add To Episode Model -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import studentsFilter from './modals/StudentsFilter.vue'
import addAbsent from './modals/AddAbsent.vue'
import studentModal from './modals/StudentModal.vue'
import studentSettings from './modals/StudentSettings.vue'
import addToEpisode from './modals/AddToEpisode.vue'
import pause from './modals/Pause.vue'
import moveToEpisode from './modals/MoveToEpisode.vue'
import studentReport from './modals/StudentReport.vue'
import notification from './modals/Notification.vue'

export default {
    data() {
        return {
            studentsFilter: false,
            addAbsent: false,
            studentModal: false,
            studentSettings: false,
            addToEpisode: false,
            pause: false,
            moveToEpisode: false,
            studentReport: false,
            showNotification: false
        }
    },
    components: {
        studentsFilter,
        addAbsent,
        studentModal,
        studentSettings,
        addToEpisode,
        pause,
        moveToEpisode,
        studentReport,
        notification
    }
}
</script>