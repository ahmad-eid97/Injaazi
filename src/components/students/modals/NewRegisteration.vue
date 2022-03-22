<template>
  <div class="newReg" tabindex="-1" role="dialog" aria-labelledby="registerNewModal" aria-hidden="true">
    <div class="newReg2">
        <div class="newReg-content">
            <div class="newReg-header">
              <h4 class="modal-title text-center" id="myModalLabel">تسجيل جديد</h4>
            </div>
            <div class="newReg-body">
                <form>
                    <input class="hidden" id="profieImage" type="file" name="profile" />
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <label>اسم المستخدم</label>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <input type="text" style="margin-bottom:10px" name="staffname4" placeholder="رقم الهوية مثلا" class="form-control" />
                                    </div>
                                    <div class="col-lg-4">
                                        <button type="button" id="checkIdNumber" class="btn btn-primary btn3 btn-block" style="margin:0"><i class="fa fa-check"></i> تحقق</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                    <div class="hidden" id="registerInformation">
                        <div class="text-center">
                            <div class="user">
                                <label class="cursor-pointer labelProfieImage" for="profieImage"><span>+</span><img class="userimage" src="../../../../public/assets/img/user.png" /></label>
                                <div class="crop-container">
                                    <div id="profieImageDiv"></div>
                                    <button type="button" id="upload-result" class="btn btn-primary btn3"><i class="fa fa-crop"></i> قص</button>
                                </div>
                                <h5 style="color: #8191a5;">إضافة صورة شخصية</h5>
                            </div>
                        </div>
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
                                        <label for="genderCheck1">
                                            <input name="program" type="radio" id="genderCheck1" />
                                            <div class="">
                                                <span>ذكر</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="genderCheck2">
                                            <input name="program" type="radio" id="genderCheck2" />
                                            <div class="">
                                                <span>انثى</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>اختيار البرنامج </label>
                            <div class="input-custom-group">
                                <div class="">
                                    <div class="radio">
                                        <label for="regNewCheck1">
                                            <input name="program" type="radio" id="regNewCheck1" />
                                            <div class="">
                                                <span>حفظ القران</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="regNewCheck2">
                                            <input name="program" type="radio" id="regNewCheck2" />
                                            <div class="">
                                                <span>الحفاظ</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="regNewCheck">
                                            <input name="program" type="radio" id="regNewCheck" />
                                            <div class="">
                                                <span>التجويد</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="regNewCheck4">
                                            <input name="program" type="radio" id="regNewCheck4" />
                                            <div class="">
                                                <span>التمرين</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="regNewCheck5">
                                            <input name="program" type="radio" id="regNewCheck5" />
                                            <div class="">
                                                <span>تحسين الصوت</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>اختيار المستوي</label>
                                    <select name="staffname4" class="form-control">
                                        <option value="">--اختيار--</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>اختيار الحلقة</label>
                                    <select name="staffname4" class="form-control">
                                        <option value="">--اختيار--</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="newReg-footer text-center hidden" id="registerInformationFooter">
                <div class="text-center">
                    <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> تسجيل جديد</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>