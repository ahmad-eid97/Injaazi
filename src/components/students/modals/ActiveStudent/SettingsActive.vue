<template>
  <div class="activeSettings" tabindex="-1" role="dialog" aria-labelledby="sittingsActiveModal" aria-hidden="true">
    <div class="activeSettings2">
        <div class="activeSettings-content">
            <form  onsubmit="return false">
                <div class="activeSettings-header">
                    <h4 class="modal-title" id="myModalLabel">الإعدادات</h4>
                </div>
                <div class="activeSettings-body">
                    <ul class="nav nav-tabs nav-justify-header">
                        <li class="active"><a data-toggle="tab" href="#tab0">إختيار البرنامج</a></li>
                        <li><a data-toggle="tab" href="#tab1">خطة التسميع</a></li>
                        <li><a data-toggle="tab" href="#tab2">اختيار الايام</a></li>
                        <li><a data-toggle="tab" href="#tab3">تعديل الابتداء</a></li>
                    </ul>
                    <div class="tab-content">
                      <div id="tab0" class="tab-pane fade in active">
                          <label>اختيار البرنامج</label>
                          <div class="row">
                              <div class="col-lg-3 col-sm-12 my-btn">
                                  <div class="radio">
                                      <label for="active-check1">
                                          <input name="program" type="radio" id="active-check1" checked="checked" />
                                          <div class="">
                                              <span>حفظ القران</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="radio">
                                      <label for="active-check2">
                                          <input name="program" type="radio" id="active-check2" />
                                          <div class="">
                                              <span>الحفاظ</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="radio">
                                      <label for="active-check3">
                                          <input name="program" type="radio" id="active-check3" />
                                          <div class="">
                                              <span>التجويد</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="radio">
                                      <label for="active-check4">
                                          <input name="program" type="radio" id="active-check4" />
                                          <div class="">
                                              <span>التمرين</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-6">
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
                      </div>
                      <div id="tab1" class="tab-pane fade">
                          <div class="row">
                              <div class="form-group">
                                  <div class="col-lg-4 col-sm-12 my-btn">
                                      <div class="radio">
                                          <label for="check19">
                                              <input name="method" type="radio" id="check19" />
                                              <div class="">
                                                  <span>مناهج تعليمية</span>
                                              </div>
                                          </label>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-12">
                                      <div class="radio">
                                          <label for="check20">
                                              <input name="method" type="radio" id="check20" />
                                              <div class="">
                                                  <span>مناهج ( إنجازي ) </span>
                                              </div>
                                          </label>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-12">
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
                                  <span class="color-light speNum">
                                      <span>اختيار عدد الدروس</span>

                                      <!-- <i class="icon-plus color-light font-30" id="plusMin"></i>
                                      <span class="zero0" id="minResult">00</span>
                                      <i class="icon-minus color-light font-30" id="minusMin"></i> -->

                                      <NumberInputSpinner class="minNumber"
                                        :min="1"
                                        :max="1000000000"
                                        :value="1"
                                        />

                                  </span>
                                  <input type="hidden" id="leasonNumberMin" value="00" />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-6">
                                  <label><h4>المراجعة الكبرى</h4></label><br />
                                  <span class="color-light speNum">
                                      <span>اختيار عدد الدروس</span>

                                      <!-- <i class="icon-plus color-light font-30" id="plusMax"></i>
                                      <span class="zero0" id="maxResult">00</span>
                                      <i class="icon-minus color-light font-30" id="minusMax"></i> -->

                                      <NumberInputSpinner class="maxNumber"
                                        :min="1"
                                        :max="1000000000"
                                        :value="1"
                                        />

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
                      </div>
                      <div id="tab2" class="tab-pane fade">
                          <label>اختيار أيام الحلقة</label>

                          <!-- OLD DAYS CATEGORIES -->
                          <!-- <div class="row">
                              <div class="col-lg-3 col-sm-12 my-btn">
                                  <div class="checkbox">
                                      <label for="active-check10">
                                          <input type="checkbox" id="active-check10" />
                                          <div class="">
                                              <span>يوم السبت</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12 my-btn">
                                  <div class="checkbox">
                                      <label for="active-check10">
                                          <input type="checkbox" id="active-check10" />
                                          <div class="">
                                              <span>يوم الاحد</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="checkbox">
                                      <label for="active-check11">
                                          <input type="checkbox" id="active-check11" />
                                          <div class="">
                                              <span>يوم الاثنين</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="checkbox">
                                      <label for="check12">
                                          <input type="checkbox" id="check12" />
                                          <div class="">
                                              <span>يوم الثاثاء</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="checkbox">
                                      <label for="check13">
                                          <input type="checkbox" id="check13" />
                                          <div class="">
                                              <span>يوم الاربعاء</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="checkbox">
                                      <label for="check14">
                                          <input type="checkbox" id="check14" />
                                          <div class="">
                                              <span>يوم الخميس</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                          </div> -->


                          <div class="input-custom-group">
                                <div class="">
                                    <div class="checkbox">
                                        <label for="check10">
                                            <input type="checkbox" id="check10" />
                                            <div class="">
                                                <span>يوم السبت</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
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

                          <!-- <label>اختيار وقت الحلقة</label>
                          <div class="row">
                              <div class="col-lg-3 col-sm-12 my-btn">
                                  <div class="radio">
                                      <label for="check15">
                                          <input name="time" type="radio" id="check15" />
                                          <div class="">
                                              <span>بعد الفجر</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="radio">
                                      <label for="check16">
                                          <input name="time" type="radio" id="check16" />
                                          <div class="">
                                              <span>بعد العصر</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="radio">
                                      <label for="check17">
                                          <input name="time" type="radio" id="check17" />
                                          <div class="">
                                              <span>بعد المغرب</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-sm-12">
                                  <div class="radio">
                                      <label for="check18">
                                          <input name="time" type="radio" id="check18" />
                                          <div class="">
                                              <span>بعد العشاء</span>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                          </div> -->

                      </div>
                      <div id="tab3" class="tab-pane fade">
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
                <div class="activeSettings-footer" style="text-align: center;">
                    <div class="col-lg-12">
                        <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> حفظ التعديلات</button>
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