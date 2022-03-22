<template>
  <div class="studentSett" id="sittingsModal" tabindex="-1" role="dialog" aria-labelledby="sittingsModal" aria-hidden="true">
    <div class="studentSett2">
        <div class="studentSett-content">
            <form onsubmit="return false">
                <div class="studentSett-header">
                    <h4 class="modal-title" id="myModalLabel">الإعدادات</h4>
                    <h5 class="text-center">عبد الله احمد الحامد - <span class="color-green"> حلقة تجويد القراءة</span></h5>
                </div>

                <ul class="nav nav-tabs spec-nav-tabs nav-justify-header">
                    <li class="active"><a data-toggle="tab" href="#tab0">اختيار البرنامج</a></li>
                    <li><a data-toggle="tab" href="#tab1">خطة التسميع</a></li>
                    <li><a data-toggle="tab" href="#tab2">اختيار الأيام</a></li>
                    <li><a data-toggle="tab" href="#tab3">تعديل الابتداء</a></li>
                </ul>
                <div class="studentSett-body">
                    <div class="tab-content">
                        <div id="tab0" class="tab-pane fade in active">
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
                                <button type="button" class="btn btn-primary btn3" style="margin:0"><i class="fa fa-check"></i> حفظ التعديلات</button>
                            </div>
                        </div>
                        <div id="tab1" class="tab-pane fade">
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
                                    <label style="margin-bottom: 0" سفغ>اتجاه الحفظ</label>
                                    <div class="radio">
                                        <label for="check22">
                                            <input name="diraction" type="radio" id="check22" />
                                            <div class="">
                                                <span>من البقرة</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-12 mansure man">
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
                                    <span class="color-light speNum">
                                        <span>اختيار عدد الدروس</span>
                                        
                                        <NumberInputSpinner class="minNumber"
                                        :min="1"
                                        :max="1000000000"
                                        :value="1"
                                        />
                                    </span>
                                    <input type="hidden" id="leasonNumberMin" value="1" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label><h4>المراجعة الكبرى</h4></label><br />
                                    <span class="color-light speNum">
                                        <span>اختيار عدد الدروس</span>

                                        <NumberInputSpinner class="maxNumber"
                                        :min="1"
                                        :max="1000000000"
                                        :value="1"
                                        />

                                    </span>
                                    <input type="hidden" id="leasonNumberMax" value="1" />
                                </div>
                                <div class="col-lg-3 col-sm-12 mansure">
                                    <label style="margin-bottom: 0; margin-top: 5px">اتجاه الحفظ</label>
                                    <div class="radio">
                                        <label for="check24">
                                            <input name="diraction2" type="radio" id="check24" />
                                            <div class="">
                                                <span>من البقرة</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-12 mansure man">
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
                                <button type="button" class="btn btn-primary btn3" style="margin:0"><i class="fa fa-check"></i> حفظ التعديلات</button>
                            </div>
                        </div>
                        <div id="tab2" class="tab-pane fade">
                            <label>أيام الحلقة</label>
                            <div class="input-custom-group">
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check10">
                                            <input type="checkbox" id="check10" />
                                            <div class="" style="margin: 0px !important">
                                                <span>يوم الاحد</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check11">
                                            <input type="checkbox" id="check11" />
                                            <div class="">
                                                <span>يوم الاثنين</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check12">
                                            <input type="checkbox" id="check12" />
                                            <div class="">
                                                <span>يوم الثاثاء</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check13">
                                            <input type="checkbox" id="check13" />
                                            <div class="">
                                                <span>يوم الاربعاء</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check14">
                                            <input type="checkbox" id="check14" />
                                            <div class="">
                                                <span>يوم الخميس</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check10">
                                            <input type="checkbox" id="check10" />
                                            <div class="">
                                                <span>يوم الجمعه</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="checkbox">
                                        <label for="check10">
                                            <input type="checkbox" id="check10" />
                                            <div class="">
                                                <span>يوم السبت</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group text-center">
                                <button type="button" class="btn btn-primary btn3" style="margin:0"><i class="fa fa-check"></i> حفظ التعديلات</button>
                            </div>
                        </div>
                        <div id="tab3" class="tab-pane fade">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-sm-1.5">الحفظ من</div>
                                    <div class="col-sm-5">
                                        <select class="form-control mt-1" name="" id="">
                                            <option value="">اختيار السورة</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <select class="form-control mt-1" name="" id="">
                                            <option value="">اختيار الاية</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <button class="btn btn-primary btn3 mt-1" type="button" style="margin-right:0"><i class="fa fa-check"></i> تعديل</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-sm-1.5">مراجعة من</div>
                                    <div class="col-sm-5">
                                        <select class="form-control mt-1" name="" id="">
                                            <option value="">اختيار السورة</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <select class="form-control mt-1 mt-1" name="" id="">
                                            <option value="">اختيار الاية</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <button class="btn btn-primary btn3 mt-1" type="button" style="margin-right:0"><i class="fa fa-check"></i> تعديل</button>
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
</template>

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