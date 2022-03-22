<template>
  <div class="activeStudent" tabindex="-1" role="dialog" aria-labelledby="studentActiveModal" aria-hidden="true">
    <div class="activeStudent2">
        <div class="activeStudent-content">
            <div class="activeStudent-header">
                <h4 class="modal-title text-center" id="myModalLabel">عبد الله احمد الحامد</h4>
            </div>
            <div class="activeStudent-body">
                <form>
                    <input class="hidden" id="profieImage" type="file" name="profile" />
                    <div class="text-center">
                        <div class="user">
                            <label class="cursor-pointer" for="profieImage"><img src="../../../../../public/assets/img/user.png" /></label>
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
                                        <label for="genderCheck2-1">
                                            <input name="program" type="radio" id="genderCheck2-1" />
                                            <div class="">
                                                <span>ذكر</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="genderCheck2-2">
                                            <input name="program" type="radio" id="genderCheck2-2" />
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
                                <div class="info-box mid3 card-student height-auto">
                                    <div class="row">
                                        <div class="col-lg-12 mid-row1">
                                            <div class="col-xs-4"></div>

                                            <div class="col-xs-4 mid-user-center">
                                                <span><img class="mid-user-img" src="../../../../../public/assets/build/images/mid-user.png" /></span>
                                            </div>

                                            <div class="col-xs-4 clickm">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                                    <img src="../../../../../public/assets/build/images/clickm.png" />
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a data-toggle="modal" data-target="#sittingsActiveModal" href="#">
                                                            <img class="group4061" src="../../../../../public/assets/build/images/Group4061.png" /> إعدادات
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#">
                                                            <img class="group4061" src="../../../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
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
                                            <div class="row">
                                                <div class="col-xs-3 font-small">
                                                    <span>المستوي</span>
                                                    <span class="t2">اجزاء 5</span>
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
                                                <span class="mid-row3-icon1"><img src="../../../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                            </div>
                                            <div class="col-xs-3 mid-row3-icon2-center">
                                                <span class="mid-row3-icon2"><img src="../../../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                            </div>
                                            <div class="col-xs-3 mid-row3-icon3-left">
                                                <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                                    <span class="mid-row3-icon3"><img src="../../../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                                </a>
                                            </div>
                                            <div class="col-xs-3 mid-row3-icon4-left">
                                                <span class="mid-row3-icon4"><img src="../../../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="info-box mid3 card-student height-auto">
                                    <div class="row">
                                        <div class="col-lg-12 mid-row1">
                                            <div class="col-xs-4"></div>

                                            <div class="col-xs-4 mid-user-center">
                                                <span><img class="mid-user-img" src="../../../../../public/assets/build/images/mid-user.png" /></span>
                                            </div>

                                            <div class="col-xs-4 clickm">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                                    <img src="../../../../../public/assets/build/images/clickm.png" />
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a data-toggle="modal" data-target="#sittingsActiveModal" href="#">
                                                            <img class="group4061" src="../../../../../public/assets/build/images/Group4061.png" /> إعدادات
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a data-toggle="modal" data-target="#addToEpisodeActiveModal" href="#">
                                                            <img class="group4061" src="../../../../../public/assets/build/images/Group4074.png" /> الإنضمام لحلقة
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a data-toggle="modal" data-target="#pauseActiveModal" href="#"><img class="group4061" src="../../../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img class="group4061" src="../../../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
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
                                            <div class="row">
                                                <div class="col-xs-3 font-small">
                                                    <span>المستوي</span>
                                                    <span class="t2">اجزاء 5</span>
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
                                                <span class="mid-row3-icon1"><img src="../../../../../public/assets/build/images/mid-row3-icon1.png" /></span>
                                            </div>
                                            <div class="col-xs-3 mid-row3-icon2-center">
                                                <span class="mid-row3-icon2"><img src="../../../../../public/assets/build/images/mid-row3-icon2.png" /></span>
                                            </div>
                                            <div class="col-xs-3 mid-row3-icon3-left">
                                                <a data-toggle="modal" data-target="#moveToEpisodeActiveModal" href="#">
                                                    <span class="mid-row3-icon3"><img src="../../../../../public/assets/build/images/mid-row3-icon3.png" /></span>
                                                </a>
                                            </div>
                                            <div class="col-xs-3 mid-row3-icon4-left">
                                                <span class="mid-row3-icon4"><img src="../../../../../public/assets/build/images/mid-row3-icon4.png" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="activeStudent-footer text-center hidden" id="registerInformationFooter">
                <div class="text-center">
                    <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> تسجيل جديد</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>