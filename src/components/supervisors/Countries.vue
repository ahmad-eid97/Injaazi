<template>
  <div class="countries">
    <div class="row">
        <div class="topheader">
            <h6><img src="../../../public/assets/build/images/home-icon.png" /> / المشرفين /ات</h6>
        </div>
    </div>

    <!-- Countery -->
    <div class="row">
        <div class="col-lg-10">
            <h4 style="color: #73879c;">الدول</h4>
        </div>
    </div>
    <!-- top tiles -->
    <div class="row">
        <div class="col-lg-12">
            <ul class="nav nav-tabs nav-tabs-custom row">
                <li @click="initCarousel" class="active col-lg-3 col-md-3 phoneDisapear"><a data-toggle="tab" href="#country-tab-1">الكل</a></li>
                <li @click="initCarousel" class="col-lg-3 col-md-3 phoneDisapear">
                    <a data-toggle="tab" href="#country-tab-2">فعال <span class="span250">25</span></a>
                </li>
                <li @click="initCarousel" class="col-lg-3 col-md-3 phoneDisapear">
                    <a data-toggle="tab" href="#country-tab-3">توقف مؤقت <span class="span10">5</span></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="tab-content">
                <div id="country-tab-1" class="tab-pane fade in active">
                    <div class="tahdid">
                        <div class="row">
                            <div class="col-lg-12">

                                <carousel :per-page-custom=[[0,1],[500,2],[800,3],[1400,4],[1700,5]] :rtl="true" :paginationEnabled="true" autoplayDirection="forward" :scrollPerPage="false" class="owl-carousel owl-carousel-episode owl-theme" ref="carousel">

                                  <slide>
                                    <div class="item">
                                        <input name="place" type="radio" id="place-1" />
                                        <label for="place-1">
                                            <div class="col-lg-12">
                                                <div class="col-xs-8"></div>
                                                <div class="col-xs-4 clickm">
                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" class="dro" /></a>
                                                    <ul class="dropdown-menu custom-menu" style="top:55px">
                                                        <li>
                                                            <a data-toggle="modal" data-target="#sittingsModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> الاعدادات</a>
                                                        </li>
                                                        <li>
                                                            <a data-toggle="modal" data-target="#pauseModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <div class="mid-text1">
                                                    <h4 class="color-green">السعودية</h4>
                                                    <div><small>&nbsp;</small></div>
                                                    <hr />
                                                    <div class="row">
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="" src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">الجهات</span><br>
                                                                    <span class="large-font-4 t2"><b>3</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="" src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">المنشاّت</span><br>
                                                                    <span class="large-font-4 t2"><b>12</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="img-responsive" src="../../../public/assets/build/images/Group 4104@2x.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">الطلاب</span><br>
                                                                    <span class="large-font-4 t2"><b>300</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.info-box-content -->
                                            </div>
                                        </label>
                                    </div>
                                  </slide>

                                  <slide>
                                    <div class="item">
                                        <a href="#" @click="showCountry = true">
                                            <div class="info-box plustop">
                                                <div class="plusbtn">
                                                    <img src="../../../public/assets/build/images/plus.png" />
                                                    <h5>إضافة دولة جديدة</h5>
                                                </div>
                                                <!-- /.info-box-content -->
                                            </div>
                                        </a>
                                    </div>
                                  </slide>

                                </carousel>
                            </div>

                            <!-- COUNTRY MODAL -->
                            <b-modal v-model="showCountry">
                              <country></country>
                            </b-modal>

                        </div>
                    </div>
                </div>

                <div id="country-tab-2" class="tab-pane fade in">
                    <div class="tahdid">
                        <div class="row">
                            <div class="col-lg-12">

                                <carousel :per-page-custom=[[0,1],[500,2],[800,3],[1400,4],[1700,5]] :rtl="true" :paginationEnabled="true" autoplayDirection="forward" :scrollPerPage="false" class="owl-carousel owl-carousel-episode owl-theme" ref="carousel">

                                  <slide>
                                    <div class="item">
                                        <input name="place" type="radio" id="place-2" />
                                        <label for="place-2">
                                            <div class="col-lg-12">
                                                <div class="col-xs-8"></div>
                                                <div class="col-xs-4 clickm">
                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" class="dro" /></a>
                                                    <ul class="dropdown-menu custom-menu" style="top:55px">
                                                        <li>
                                                            <a data-toggle="modal" data-target="#sittingsModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> الاعدادات</a>
                                                        </li>
                                                        <li>
                                                            <a data-toggle="modal" data-target="#pauseModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <div class="mid-text1">
                                                    <h4 class="color-green">السعودية</h4>
                                                    <div><small>&nbsp;</small></div>
                                                    <hr />
                                                    <div class="row">
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="" src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">الجهات</span><br>
                                                                    <span class="large-font-4 t2"><b>3</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="" src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">المنشاّت</span><br>
                                                                    <span class="large-font-4 t2"><b>12</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="img-responsive" src="../../../public/assets/build/images/Group 4104@2x.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">الطلاب</span><br>
                                                                    <span class="large-font-4 t2"><b>300</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.info-box-content -->
                                            </div>
                                        </label>
                                    </div>
                                  </slide>

                                  <slide>
                                    <div class="item">
                                        <a href="#" @click="showCountry = true">
                                            <div class="info-box plustop">
                                                <div class="plusbtn">
                                                    <img src="../../../public/assets/build/images/plus.png" />
                                                    <h5>إضافة دولة جديدة</h5>
                                                </div>
                                                <!-- /.info-box-content -->
                                            </div>
                                        </a>
                                    </div>
                                  </slide>

                                </carousel>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="country-tab-3" class="tab-pane fade in">
                    <div class="tahdid">
                        <div class="row">
                            <div class="col-lg-12">

                                <carousel :per-page-custom=[[0,1],[500,2],[800,3],[1400,4],[1700,5]] :rtl="true" :paginationEnabled="true" autoplayDirection="forward" :scrollPerPage="false" class="owl-carousel owl-carousel-episode owl-theme" ref="carousel">

                                  <slide>
                                    <div class="item">
                                        <input name="place" type="radio" id="place-3" />
                                        <label for="place-3">
                                            <div class="col-lg-12">
                                                <div class="col-xs-8"></div>
                                                <div class="col-xs-4 clickm">
                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src="../../../public/assets/build/images/clickm.png" class="dro" /></a>
                                                    <ul class="dropdown-menu custom-menu" style="top:55px">
                                                        <li>
                                                            <a data-toggle="modal" data-target="#sittingsModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4061.png" /> الاعدادات</a>
                                                        </li>
                                                        <li>
                                                            <a data-toggle="modal" data-target="#pauseModal" href="#"><img class="group4061" src="../../../public/assets/build/images/Group4062.png" /> توقف مؤقت</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><img class="group4061" src="../../../public/assets/build/images/Group4083.png" /> <span class="color-red">حذف</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <div class="mid-text1">
                                                    <h4 class="color-green">السعودية</h4>
                                                    <div><small>&nbsp;</small></div>
                                                    <hr />
                                                    <div class="row">
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="" src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">الجهات</span><br>
                                                                    <span class="large-font-4 t2"><b>3</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="" src="../../../public/assets/build/images/building30x30.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">المنشاّت</span><br>
                                                                    <span class="large-font-4 t2"><b>12</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4 font-small text-center d-flex" style="justify-content:center">
                                                            <div class="table-div">
                                                                <div class=""><img class="img-responsive" src="../../../public/assets/build/images/Group 4104@2x.png" alt=""></div>
                                                                <div class="p-1">
                                                                    <span class="small color-light">الطلاب</span><br>
                                                                    <span class="large-font-4 t2"><b>300</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.info-box-content -->
                                            </div>
                                        </label>
                                    </div>
                                  </slide>

                                  <slide>
                                    <div class="item">
                                        <a href="#" @click="showCountry = true">
                                            <div class="info-box plustop">
                                                <div class="plusbtn">
                                                    <img src="../../../public/assets/build/images/plus.png" />
                                                    <h5>إضافة دولة جديدة</h5>
                                                </div>
                                                <!-- /.info-box-content -->
                                            </div>
                                        </a>
                                    </div>
                                  </slide>

                                </carousel>
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
import country from '../supervisors/modals/Country.vue'

export default {
  data() {
    return {
      showCountry: false
    } 
  },
  mounted() {
    this.initCarousel()
  },
  methods: {
    initCarousel() {
      setTimeout(() => this.$forceUpdate(), 200)
      console.log('here')
    }
  },
  components: {
    country
  }
}
</script>

<style scoped lang="scss">
.VueCarousel::v-deep {
  .VueCarousel-pagination {
    height: 20px;
    .VueCarousel-dot-container {
        margin-top: 0 !important;
        button {
            margin: 0 !important;
            &.VueCarousel-dot {
                background-color: #ccc !important;
            }
            &.VueCarousel-dot--active {
                background-color: #5A8D20 !important;
            }
        }
    }
  }
}
</style>