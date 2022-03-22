<template>
  <div>
    <div class="row">
      <div class="topheader">
        <h6><img src="/assets/build/images/Group4719.png" />لوحة المؤشرات</h6>
      </div>
    </div>
    <div class="statics">
      <div class="row">
        <div class="col-lg-3 mb-2">
          <h4 class="phoneText2" style="color: rgb(115, 135, 156); display:inline">
            <a style="margin-left: 30px; width: 200px" href="#"><i class="fa fa-refresh"></i> تحديث</a>
          </h4>
          <h4 class="phoneText2" @click="showShare = true" style="color: rgb(115, 135, 156); display:inline">
            <a style="margin-left: 20px; width: 200px" href="#"><i class="fas fa-share-alt"></i> مشاركه</a>
          </h4>
        </div>
        <div class="col-lg-9">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-xs-12 col-sm-4 select-dropdowns">
            <select class="form-control form-control-episode">
              <option value="">اختار العام</option>
              <option value="1">2021-2022</option>
            </select>
          </div>
          <div class="col-lg-2 col-xs-6 col-sm-4 select-dropdowns">
            <select class="form-control form-control-episode">
              <option value="">اختار الشهر</option>
              <option value="12/01/2021">12/2021</option>
            </select>
          </div>
          <div class="col-lg-2 col-xs-6 col-sm-4 select-dropdowns">
            <select
              class="form-control form-control-episode pr-4"
            >
              <option value="">اختار الأسبوع</option>
              <option value="1">الأحد 26/12/2021</option>
            </select>
          </div>
          <div class="col-lg-2 col-xs-6 col-sm-4 select-dropdowns">
            <select class="form-control form-control-episode">
              <option value="">اختار الفترة</option>
            </select>
          </div>
          <div class="col-lg-2 col-xs-6 col-sm-4 select-dropdowns">
            <select
              class="form-control form-control-episode pr-4 active-sd"
            >
              <!---->
              <option value="12/27/2021">الأثنين (27/12)</option>
              <option value="12/26/2021">الأحد (26/12)</option>
              <option value="12/25/2021">السبت (25/12)</option>
              <option value="12/24/2021">الجمعة (24/12)</option>
              <option value="12/23/2021">الخميس (23/12)</option>
              <option value="12/22/2021">الأربعاء (22/12)</option>
              <option value="12/21/2021">الثلاتاء (21/12)</option>
              <option value="12/20/2021">الأثنين (20/12)</option>
              <option value="12/19/2021">الأحد (19/12)</option>
              <option value="12/18/2021">السبت (18/12)</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row tafsm">
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div class="info-box tafsbox">
            <div class="tafsim">
              <h4 style="font-size:20px" class="phoneText2">
                <img
                  src="/assets/build/images/Group4719.png"
                  class="group4719 smallImg"
                />
                تقييم الأداء
              </h4>
              <h1 class="percent80" style="font-size: 45px; color:#73879c">100%</h1>
            </div>
            <div class="col-lg-6 pb102a">
              <div class="col-sm-12">
                <div class="progress pb102">
                  <div
                    role="progressbar"
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar pb102"
                    style="width: 100%"
                  ></div>
                </div>
                <div class="g102">
                  <span class="img102"
                    ><img src="/assets/build/images/Group 4720@17x18.png"
                  /></span>
                  <div class="t102">
                    <h6>
                      <span class="c25000">3.8</span>
                      <span class="t200">3.8</span> <br />
                      <span>أوجه الحفظ</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 pb25000a">
              <div class="col-sm-12">
                <div class="progress pb92">
                  <div
                    role="progressbar"
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar pb102"
                    style="width: 98.2759%"
                  ></div>
                </div>
                <div class="g102">
                  <span class="img25000"
                    ><img src="/assets/build/images/Group 4722x17x17.png"
                  /></span>
                  <div class="t102">
                    <h6>
                      <span class="c25000">11.4</span>
                      <span class="t200">11.6</span> <br />
                      <span>أوجه المراجعة</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 hilqm">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="info-box l102">
              <div class="hilqatbox">
                <span>الحلقات</span>
                <img
                  src="/assets/build/images/Group4756@30x30.png"
                  class="hilqat"
                />
                <h1>3</h1>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="info-box l102">
              <div class="hilqatbox">
                <span>المعلمين/ـات</span>
                <img
                  src="/assets/build/images/Group4755@30x30.png"
                  class="hilqat"
                />
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="info-box box2500">
              <div class="b2500">
                <div class="b2500a">
                  <img src="/assets/build/images/Group 4749.png" />
                  <span> الطلاب /ـات</span>
                  <span class="pull-left ml-2">
                    <span style="font-size: 14px">9</span>
                    <span class="t2500 ml-1">9</span></span>
                </div>
                <div class="text-center pt-3">
                  <div class="gmimg">
                    <div class="people-progress-step" style="width: 100%">
                      <div class="people-progress-bar"></div>
                    </div>
                  </div>
                </div>
                <div class="pt-3">
                  <div class="row p-0">
                    <div class="col-xs-2 col-lg-2"></div>
                    <div class="col-xs-3 col-lg-3">
                      <div
                        title="متأخر"
                        class="g102 d-flex align-vertical-center flex-start"
                      >
                        <img
                          src="/assets/build/images/Group2754@20x20.png"
                          class="img102a"
                        />
                        <div>
                          <h6><span class="c25000a">3</span></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-3 col-lg-4">
                      <div
                        title="غائب بعذر"
                        class="g102 d-flex align-vertical-center flex-start"
                      >
                        <img
                          src="/assets/build/images/Group2743@20x17.png"
                          class="img102a"
                        />
                        <div>
                          <h6><span class="c25000a">5</span></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-3 col-lg-3">
                      <div
                        title="غائب بدون عذر"
                        class="g102 d-flex align-vertical-center flex-start"
                      >
                        <img
                          src="/assets/build/images/visibility.png"
                          class="img102a"
                        />
                        <div>
                          <h6><span class="c25000a">2</span></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="down d-flex" style="justify-content:space-between; padding: 0 40px">

                    <div
                      class="g102 d-flex align-vertical-center"
                    >
                      <img
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                      />
                      <div>
                        <h6>
                          <span style="font-size:15px; margin-left: 5px">عدد الأيام</span>
                          <span class="c25000a">100%</span>
                        </h6>
                      </div>
                    </div>

                    <div
                      class="g102 d-flex align-vertical-center"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div>
                        <h6>
                          <span style="font-size:15px; margin-left: 5px">نسبة الحضور</span>
                          <span class="c25000a">100%</span>
                        </h6>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal  v-model="showShare" size="lg">
      <share></share>
    </b-modal>

  </div>
</template>

<script>
import share from '../Share.vue'

export default {
  data() {
    return {
      showShare: false
    }
  },
  components: {
    share
  }
}
</script>