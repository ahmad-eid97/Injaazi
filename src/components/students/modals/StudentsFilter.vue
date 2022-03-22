<template>
  <div class="stuFilter" tabindex="-1" role="dialog" aria-labelledby="filterModal" aria-hidden="true">
    <div class="stuFilter">
        <div class="stuFilter-content">
            <div class="stuFilter-header">
                <h4 class="modal-title text-center" id="myModalLabel">تصفية</h4>
            </div>
            <div class="stuFilter-body text-right">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck1">
                                    <input type="checkbox" id="filterCheck1">
                                    <div class="">
                                        <span>رقم الهوية</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck2">
                                    <input type="checkbox" id="filterCheck2">
                                    <div class="">
                                        <span>الجنسية</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck3">
                                    <input type="checkbox" id="filterCheck3">
                                    <div class="">
                                        <span>العمر</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck4">
                                    <input type="checkbox" id="filterCheck4">
                                    <div class="">
                                        <span>تاريخ الميلاد</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck5">
                                    <input type="checkbox" id="filterCheck5">
                                    <div class="">
                                        <span>الجوال</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck6">
                                    <input type="checkbox" id="filterCheck6">
                                    <div class="">
                                        <span>جوال ولي الأمر</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck7">
                                    <input type="checkbox" id="filterCheck7">
                                    <div class="">
                                        <span>البريد الإلكتروني</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck8">
                                    <input type="checkbox" id="filterCheck8">
                                    <div class="">
                                        <span>البرنامج</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck9">
                                    <input type="checkbox" id="filterCheck9">
                                    <div class="">
                                        <span>المستوى</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck10">
                                    <input type="checkbox" id="filterCheck10">
                                    <div class="">
                                        <span>المتبقي</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck11">
                                    <input type="checkbox" id="filterCheck11">
                                    <div class="">
                                        <span>موعد الإنجاز</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck12">
                                    <input type="checkbox" id="filterCheck12">
                                    <div class="">
                                        <span>الحلقة</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck13">
                                    <input type="checkbox" id="filterCheck13">
                                    <div class="">
                                        <span>الوقت</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck14">
                                    <input type="checkbox" id="filterCheck14">
                                    <div class="">
                                        <span>الأيام</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck15">
                                    <input type="checkbox" id="filterCheck15">
                                    <div class="">
                                        <span>المعلم</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck16">
                                    <input type="checkbox" id="filterCheck16">
                                    <div class="">
                                        <span>المدير</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck17">
                                    <input type="checkbox" id="filterCheck17">
                                    <div class="">
                                        <span>نوع الخطة</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck18">
                                    <input type="checkbox" id="filterCheck18">
                                    <div class="">
                                        <span>خطة الحفظ</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck19">
                                    <input type="checkbox" id="filterCheck19">
                                    <div class="">
                                        <span>خطة المراجعة الكبرى</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck20">
                                    <input type="checkbox" id="filterCheck20">
                                    <div class="">
                                        <span>خطة المراجعة الصغرى</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck21">
                                    <input type="checkbox" id="filterCheck21">
                                    <div class="">
                                        <span>آيه الحفظ</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck22">
                                    <input type="checkbox" id="filterCheck22">
                                    <div class="">
                                        <span>آيه المراجعة</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck23">
                                    <input type="checkbox" id="filterCheck23">
                                    <div class="">
                                        <span>الحضور</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck24">
                                    <input type="checkbox" id="filterCheck24">
                                    <div class="">
                                        <span>التأخير</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <div class="checkbox">
                                <label for="filterCheck25">
                                    <input type="checkbox" id="filterCheck25">
                                    <div class="">
                                        <span>الغياب</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>