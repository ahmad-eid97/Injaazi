<template>
  <div class="episodes">
    <div class="phoneDisapear">
      <div class="row">
        <div class="col-lg-12">
          <h4 style="color: rgb(115, 135, 156)">تصانيف الحلقات</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-tabs nav-tabs-custom row" @click="initCarousel">
            <li class="col-lg-3 col-md-3 phoneDisapear" @click="initCarousel"><a data-toggle="tab" href="#all-tab" style="padding: 15px">الكل</a></li>
            <li @click="initCarousel" class="active col-lg-3 col-md-3 phoneDisapear">
              <a data-toggle="tab" href="#active-tab" style="padding: 15px"
                >فعال <span class="span250">1</span></a
              >
            </li>
            <li class="col-lg-3 col-md-3 phoneDisapear" @click="initCarousel">
              <a data-toggle="tab" href="#suspend-tab" style="padding: 15px"
                >توقف مؤقت <span class="span10">0</span></a
              >
            </li>
            <li class="text-left col-lg-3 col-md-3 mt-1">
              <button
                type="button"
                class="btn btn-primary tasjil pc-nav-btn ml-2"
              >
                إضافة تصنيف
              </button>
            </li>
          </ul>
        </div>
        <div class="col-lg-12">
          <button type="button" class="btn btn-primary tasjil mobile-nav-btn">
            إضافة تصنيف
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">

          <div class="tab-content">

            <div id="all-tab" class="tab-pane fade in">
              <div>
                <div class="tahdid" style="height:165px">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="d-flex flex-start">
                        <div class="pl-3">
                          <div>
                            <div class="checkbox-default checkbox-style-2">
                              <input
                                id="card-episode_cat-checkall"
                                type="checkbox"
                                autocomplete="off"
                                class="form-check-input"
                                value="1"
                              />
                              <label for="card-episode_cat-checkall"></label>
                              <span style="color: rgb(0, 0, 0); font-size: 18px"
                                >&nbsp;&nbsp;تحديد الكل</span
                              >
                            </div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div class="col-sm-5 text-left">
                      <div class="btn-group">
                        <input
                          type="search"
                          placeholder="بحث"
                          class="btn btn-white search-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="category">

                    <carousel class="firstCarousel" :per-page-custom=[[0,1],[500,2],[1300,3],[1500,5]] :rtl="true" :paginationEnabled="false" autoplayDirection="backward" :scrollPerPage="false">

                      <slide>
                          <div class="item">
                              <input class="without-category" id="category-0" type="checkbox" autocomplete="off" />
                              <label for="category-0">
                                  <div class="">
                                      <span class="check"><i class="fa fa-check"></i></span>
                                      <span class="title">تحديد الكل</span>
                                      <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 150 حلقة</span>
                                      <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 590 طالب/ة</span>
                                  </div>
                              </label>
                          </div>
                      </slide>

                      <slide>
                        <div class="item">
                          <input id="category-1" type="checkbox" autocomplete="off" />
                          <label for="category-1">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">بدون تصنيف</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                            </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                          </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                          <input id="category-2" type="checkbox" autocomplete="off" />
                          <label for="category-2">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">بدون تصنيف</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                            </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                          </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                          <input id="category-3" type="checkbox" autocomplete="off" />
                          <label for="category-3">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">بدون تصنيف</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                            </div>
                            <button
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              class="btn-settings"
                            >
                              <img src="/assets/build/images/clickm.png"
                              />
                            </button>
                            <ul
                              class="dropdown-menu custom-menu custom-menu-left"
                            >
                              <li>
                                <a href="#"
                                  ><img
                                    src="/assets/build/images/Group4061.png"
                                    class="group4061"
                                  />
                                  تعديل</a
                                >
                              </li>
                              <li>
                                <a href="#"
                                  ><img
                                    src="/assets/build/images/Group4062.png"
                                    class="group4061"
                                  />
                                  توقف مؤقت</a
                                >
                              </li>
                              <li>
                                <a href="#"
                                  ><img
                                    src="/assets/build/images/Group4083.png"
                                    class="group4061"
                                  />
                                  <span class="color-red">حذف</span></a
                                >
                              </li>
                            </ul>
                          </label>
                        </div>
                      </slide>

                    </carousel>
                    
                  </div>
                </div>
              </div>
            </div>

            <div id="active-tab" class="tab-pane fade in active">
              <div>
                <div class="tahdid" style="height:165px">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="d-flex flex-start">
                        <div class="pl-3">
                          <div>
                            <div class="checkbox-default checkbox-style-2">
                              <input
                                id="card-episode_cat-checkactive"
                                type="checkbox"
                                autocomplete="off"
                                class="form-check-input"
                                value="1"
                              />
                              <label for="card-episode_cat-checkactive"></label>
                              <span style="color: rgb(0, 0, 0); font-size: 18px"
                                >&nbsp;&nbsp;تحديد الكل</span
                              >
                            </div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div class="col-sm-5 text-left">
                      <div class="btn-group">
                        <input
                          type="search"
                          placeholder="بحث"
                          class="btn btn-white search-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="category">
                    <carousel :per-page-custom=[[0,1],[500,2],[1300,3],[1500,5]] :rtl="true" :paginationEnabled="false" autoplayDirection="backward" :scrollPerPage="false">

                      <slide>
                        <div class="item">
                          <input class="without-category" id="category-4" type="checkbox" autocomplete="off" />
                          <label for="category-4">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">تحديد الكل</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 150 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 590 طالب/ة</span>
                            </div>
                          </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                            <input id="category-5" type="checkbox" autocomplete="off" />
                            <label for="category-5">
                              <div class="">
                                <span class="check"><i class="fa fa-check"></i></span>
                                <span class="title">بدون تصنيف</span>
                                <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                              </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                            <input id="category-6" type="checkbox" autocomplete="off" />
                            <label for="category-6">
                              <div class="">
                                <span class="check"><i class="fa fa-check"></i></span>
                                <span class="title">بدون تصنيف</span>
                                <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                              </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                            <input id="category-7" type="checkbox" autocomplete="off" />
                            <label for="category-7">
                              <div class="">
                                <span class="check"><i class="fa fa-check"></i></span>
                                <span class="title">بدون تصنيف</span>
                                <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                              </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </label>
                        </div>
                      </slide>

                    </carousel>
                  </div>
                  
                </div>
              </div>
            </div>

            <div id="suspend-tab" class="tab-pane fade in">
              <div>
                <div class="tahdid" style="height:165px">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="d-flex flex-start">
                        <div class="pl-3">
                          <div>
                            <div class="checkbox-default checkbox-style-2">
                              <input
                                id="card-episode_cat-checksuspend"
                                type="checkbox"
                                autocomplete="off"
                                class="form-check-input"
                                value="1"
                              />
                              <label
                                for="card-episode_cat-checksuspend"
                              ></label>
                              <span style="color: rgb(0, 0, 0); font-size: 18px"
                                >&nbsp;&nbsp;تحديد الكل</span
                              >
                            </div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div class="col-sm-5 text-left">
                      <div class="btn-group">
                        <input
                          type="search"
                          placeholder="بحث"
                          class="btn btn-white search-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="category">
                    <carousel :per-page-custom=[[0,1],[500,2],[1300,3],[1500,5]] :rtl="true" :paginationEnabled="false" autoplayDirection="backward" :scrollPerPage="false">

                      <slide>
                        <div class="item">
                            <input class="without-category" id="category-8" type="checkbox" autocomplete="off" />
                            <label for="category-8">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">تحديد الكل</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 150 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 590 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                          <input id="category-9" type="checkbox" autocomplete="off" />
                          <label for="category-9">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">بدون تصنيف</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                            </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                          </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                          <input id="category-10" type="checkbox" autocomplete="off" />
                          <label for="category-10">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">بدون تصنيف</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                            </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                          </label>
                        </div>
                      </slide>

                      <slide>
                        <div class="item">
                          <input id="category-11" type="checkbox" autocomplete="off" />
                          <label for="category-11">
                            <div class="">
                              <span class="check"><i class="fa fa-check"></i></span>
                              <span class="title">بدون تصنيف</span>
                              <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                              <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                            </div>
                              <button
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="btn-settings"
                              >
                                <img src="/assets/build/images/clickm.png"
                                />
                              </button>
                              <ul
                                class="dropdown-menu custom-menu custom-menu-left"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    تعديل</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4062.png"
                                      class="group4061"
                                    />
                                    توقف مؤقت</a
                                  >
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                          </label>
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
      <!---->
    </div>
    <div style="margin-top:35px">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="episoTop" style="color: rgb(115, 135, 156); margin-bottom:10px;margin-top:50px">الحلقات</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-tabs nav-tabs-custom row">
            <li class="col-lg-3 col-md-3 phoneDisapear"><a data-toggle="tab" href="#all-eps-tab" style="padding: 15px">الكل</a></li>
            <li class="active col-lg-3 col-md-3 phoneDisapear">
              <a data-toggle="tab" href="#active-eps-tab" style="padding: 15px"
                >فعال <span class="span250">3</span></a
              >
            </li>
            <li class="col-lg-3 col-md-3 phoneDisapear">
              <a data-toggle="tab" href="#suspend-eps-tab" style="padding: 15px"
                >توقف مؤقت <span class="span10">0</span></a
              >
            </li>
            <li class="text-left col-lg-3 col-md-3 col-sm-4 col-xs-6 specButton">
              <button
                id="add-episode-btn"
                type="button"
                class="btn btn-primary tasjil pc-nav-btn ml-2 mt-1"
              >
                إضافة حلقة
              </button>
            </li>
          </ul>
        </div>
        <div class="col-lg-12">
          <button
            id="add-episode-btn"
            type="button"
            class="btn btn-primary tasjil mobile-nav-btn"
          >
            إضافة حلقة
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="tab-content">

            <div id="all-eps-tab" class="tab-pane fade in">
              <div>
                <div class="tahdid">
                  <div class="row" style="margin-bottom:15px">
                    <div class="col-sm-7">
                      <div class="d-flex flex-start">
                        <div class="pl-3">
                          <div>
                            <div class="checkbox-default checkbox-style-2">
                              <input
                                id="card-episode-checkall"
                                type="checkbox"
                                autocomplete="off"
                                class="form-check-input"
                                value="1"
                              />
                              <label for="card-episode-checkall"></label>
                              <span style="color: rgb(0, 0, 0); font-size: 18px"
                                >&nbsp;&nbsp;تحديد الكل</span
                              >
                            </div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div class="col-sm-5 text-left">
                      <div class="btn-group">
                        <input
                          type="search"
                          placeholder="بحث"
                          class="btn btn-white search-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div class="info-box mid3 card-student specCard">
                        <div class="row">
                          <div class="col-lg-12 mid-row1">
                            <div class="col-xs-4">
                              <div class="checkbox-default">
                                <input
                                  id="card-cenetr-checkbox-all1"
                                  type="checkbox"
                                  class="form-check-input"
                                  value="1"
                                />
                                <label for="card-cenetr-checkbox-all1"></label>
                                <span class="episode-time mr-1">الفجر</span>
                              </div>
                            </div>
                            <div class="col-xs-4 mid-user-center">
                              <span
                                ><img
                                  src="/assets/build/images/logo-image.png"
                                  class="mid-user-img"
                              /></span>
                            </div>
                            <div class="col-xs-4 clickm">
                              <a
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                                ><img src="/assets/build/images/clickm.png"
                              /></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    الإعدادات</a
                                  >
                                </li>
                                <!---->
                                <!---->
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="col-xs-12">
                              <div class="mid-text2">
                                <a href="#"
                                  ><h4 class="color-green" style="font-size:20px">حلقة الحافظين</h4></a
                                >
                                <h6 style="margin-top:15px; font-size:15px">جمعان فهد الدوسري</h6>
                                <h6>&nbsp;</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 mid-row2">
                            <div class="row">

                              <div class="col-xs-4 text-center border-left" style="padding-left:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                      <img
                                        src="/assets/build/images/specEpisodes.png"
                                        style="width:24px; margin-left:5px"
                                        alt=""
                                      />
                                      <span>نوع الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center border-left" style="padding:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/episodes2.png"
                                      style="width:24px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>تصنيف الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/bigStudents.png"
                                      style="width:23px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>الطلاب</span>
                                    </div>
                                    <span class="t2">9</span>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div class="info-box mid3 card-student specCard">
                        <div class="row">
                          <div class="col-lg-12 mid-row1">
                            <div class="col-xs-4">
                              <div class="checkbox-default">
                                <input
                                  id="card-cenetr-checkbox-all1"
                                  type="checkbox"
                                  class="form-check-input"
                                  value="1"
                                />
                                <label for="card-cenetr-checkbox-all1"></label>
                                <span class="episode-time mr-1">الفجر</span>
                              </div>
                            </div>
                            <div class="col-xs-4 mid-user-center">
                              <span
                                ><img
                                  src="/assets/build/images/logo-image.png"
                                  class="mid-user-img"
                              /></span>
                            </div>
                            <div class="col-xs-4 clickm">
                              <a
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                                ><img src="/assets/build/images/clickm.png"
                              /></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    الإعدادات</a
                                  >
                                </li>
                                <!---->
                                <!---->
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="col-xs-12">
                              <div class="mid-text2">
                                <a href="#"
                                  ><h4 class="color-green" style="font-size:20px">حلقة الحافظين</h4></a
                                >
                                <h6 style="margin-top:15px; font-size:15px">جمعان فهد الدوسري</h6>
                                <h6>&nbsp;</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 mid-row2">
                            <div class="row">

                              <div class="col-xs-4 text-center border-left" style="padding-left:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                      <img
                                        src="/assets/build/images/specEpisodes.png"
                                        style="width:24px; margin-left:5px"
                                        alt=""
                                      />
                                      <span>نوع الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center border-left" style="padding:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/episodes2.png"
                                      style="width:24px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>تصنيف الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/bigStudents.png"
                                      style="width:23px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>الطلاب</span>
                                    </div>
                                    <span class="t2">9</span>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div class="info-box mid3 card-student specCard">
                        <div class="row">
                          <div class="col-lg-12 mid-row1">
                            <div class="col-xs-4">
                              <div class="checkbox-default">
                                <input
                                  id="card-cenetr-checkbox-all1"
                                  type="checkbox"
                                  class="form-check-input"
                                  value="1"
                                />
                                <label for="card-cenetr-checkbox-all1"></label>
                                <span class="episode-time mr-1">الفجر</span>
                              </div>
                            </div>
                            <div class="col-xs-4 mid-user-center">
                              <span
                                ><img
                                  src="/assets/build/images/logo-image.png"
                                  class="mid-user-img"
                              /></span>
                            </div>
                            <div class="col-xs-4 clickm">
                              <a
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                                ><img src="/assets/build/images/clickm.png"
                              /></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    الإعدادات</a
                                  >
                                </li>
                                <!---->
                                <!---->
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="col-xs-12">
                              <div class="mid-text2">
                                <a href="#"
                                  ><h4 class="color-green" style="font-size:20px">حلقة الحافظين</h4></a
                                >
                                <h6 style="margin-top:15px; font-size:15px">جمعان فهد الدوسري</h6>
                                <h6>&nbsp;</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 mid-row2">
                            <div class="row">

                              <div class="col-xs-4 text-center border-left" style="padding-left:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                      <img
                                        src="/assets/build/images/specEpisodes.png"
                                        style="width:24px; margin-left:5px"
                                        alt=""
                                      />
                                      <span>نوع الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center border-left" style="padding:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/episodes2.png"
                                      style="width:24px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>تصنيف الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/bigStudents.png"
                                      style="width:23px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>الطلاب</span>
                                    </div>
                                    <span class="t2">9</span>
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
              </div>
            </div>

            <div id="active-eps-tab" class="tab-pane fade in active">
              <div>
                <div class="tahdid">
                  <div class="row d-flex" style="margin-bottom:15px; align-items:center">
                    <div class="col-sm-7 col-xs-5">
                      <div class="">
                        <div class="pl-3">
                          <div>
                            <div class="checkbox-default checkbox-style-2">
                              <input
                                id="card-episode-checkactive"
                                type="checkbox"
                                autocomplete="off"
                                class="form-check-input"
                                value="1"
                              />
                              <label for="card-episode-checkactive"></label>
                              <span class="phoneText2" style="color: rgb(0, 0, 0); font-size: 18px"
                                >&nbsp;&nbsp;تحديد الكل</span
                              >
                            </div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div class="col-sm-5 col-xs-6 text-left">
                      <div class="btn-group">
                        <input
                          type="search"
                          placeholder="بحث"
                          class="btn btn-white search-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div class="info-box mid3 card-student specCard">
                        <div class="row">
                          <div class="col-lg-12 mid-row1">
                            <div class="col-xs-4">
                              <div class="checkbox-default">
                                <input
                                  id="card-cenetr-checkbox-all1"
                                  type="checkbox"
                                  class="form-check-input"
                                  value="1"
                                />
                                <label for="card-cenetr-checkbox-all1"></label>
                                <span class="episode-time mr-1">الفجر</span>
                              </div>
                            </div>
                            <div class="col-xs-4 mid-user-center">
                              <span
                                ><img
                                  src="/assets/build/images/logo-image.png"
                                  class="mid-user-img"
                              /></span>
                            </div>
                            <div class="col-xs-4 clickm">
                              <a
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                                ><img src="/assets/build/images/clickm.png"
                              /></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    الإعدادات</a
                                  >
                                </li>
                                <!---->
                                <!---->
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="col-xs-12">
                              <div class="mid-text2">
                                <a href="#"
                                  ><h4 class="color-green" style="font-size:20px">حلقة الحافظين</h4></a
                                >
                                <h6 style="margin-top:15px; font-size:15px">جمعان فهد الدوسري</h6>
                                <h6>&nbsp;</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 mid-row2">
                            <div class="row">

                              <div class="col-xs-4 text-center border-left" style="padding-left:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                      <img
                                        src="/assets/build/images/specEpisodes.png"
                                        style="width:24px; margin-left:5px"
                                        alt=""
                                      />
                                      <span>نوع الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center border-left" style="padding:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/episodes2.png"
                                      style="width:24px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>تصنيف الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/bigStudents.png"
                                      style="width:23px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>الطلاب</span>
                                    </div>
                                    <span class="t2">9</span>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div class="info-box mid3 card-student specCard">
                        <div class="row">
                          <div class="col-lg-12 mid-row1">
                            <div class="col-xs-4">
                              <div class="checkbox-default">
                                <input
                                  id="card-cenetr-checkbox-all1"
                                  type="checkbox"
                                  class="form-check-input"
                                  value="1"
                                />
                                <label for="card-cenetr-checkbox-all1"></label>
                                <span class="episode-time mr-1">الفجر</span>
                              </div>
                            </div>
                            <div class="col-xs-4 mid-user-center">
                              <span
                                ><img
                                  src="/assets/build/images/logo-image.png"
                                  class="mid-user-img"
                              /></span>
                            </div>
                            <div class="col-xs-4 clickm">
                              <a
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                                ><img src="/assets/build/images/clickm.png"
                              /></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    الإعدادات</a
                                  >
                                </li>
                                <!---->
                                <!---->
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="col-xs-12">
                              <div class="mid-text2">
                                <a href="#"
                                  ><h4 class="color-green" style="font-size:20px">حلقة الحافظين</h4></a
                                >
                                <h6 style="margin-top:15px; font-size:15px">جمعان فهد الدوسري</h6>
                                <h6>&nbsp;</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 mid-row2">
                            <div class="row">

                              <div class="col-xs-4 text-center border-left" style="padding-left:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                      <img
                                        src="/assets/build/images/specEpisodes.png"
                                        style="width:24px; margin-left:5px"
                                        alt=""
                                      />
                                      <span>نوع الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center border-left" style="padding:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/episodes2.png"
                                      style="width:24px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>تصنيف الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/bigStudents.png"
                                      style="width:23px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>الطلاب</span>
                                    </div>
                                    <span class="t2">9</span>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div class="info-box mid3 card-student specCard">
                        <div class="row">
                          <div class="col-lg-12 mid-row1">
                            <div class="col-xs-4">
                              <div class="checkbox-default">
                                <input
                                  id="card-cenetr-checkbox-all1"
                                  type="checkbox"
                                  class="form-check-input"
                                  value="1"
                                />
                                <label for="card-cenetr-checkbox-all1"></label>
                                <span class="episode-time mr-1">الفجر</span>
                              </div>
                            </div>
                            <div class="col-xs-4 mid-user-center">
                              <span
                                ><img
                                  src="/assets/build/images/logo-image.png"
                                  class="mid-user-img"
                              /></span>
                            </div>
                            <div class="col-xs-4 clickm">
                              <a
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="#"
                                ><img src="/assets/build/images/clickm.png"
                              /></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4061.png"
                                      class="group4061"
                                    />
                                    الإعدادات</a
                                  >
                                </li>
                                <!---->
                                <!---->
                                <li>
                                  <a href="#"
                                    ><img
                                      src="/assets/build/images/Group4083.png"
                                      class="group4061"
                                    />
                                    <span class="color-red">حذف</span></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="col-xs-12">
                              <div class="mid-text2">
                                <a href="#"
                                  ><h4 class="color-green" style="font-size:20px">حلقة الحافظين</h4></a
                                >
                                <h6 style="margin-top:15px; font-size:15px">جمعان فهد الدوسري</h6>
                                <h6>&nbsp;</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 mid-row2">
                            <div class="row">

                              <div class="col-xs-4 text-center border-left" style="padding-left:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                      <img
                                        src="/assets/build/images/specEpisodes.png"
                                        style="width:24px; margin-left:5px"
                                        alt=""
                                      />
                                      <span>نوع الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center border-left" style="padding:0">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/episodes2.png"
                                      style="width:24px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>تصنيف الحلقه</span>
                                    </div>
                                    <span class="t2" style="font-size:13px">بدون تصنيف</span>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-4 text-center">
                                <div class="d-flex" style="justify-content:center; align-items:center;font-size:25px">
                                  <div>
                                    <div style="font-size:14px">
                                    <img
                                      src="/assets/build/images/bigStudents.png"
                                      style="width:23px; margin-left:5px"
                                      alt=""
                                    />
                                      <span>الطلاب</span>
                                    </div>
                                    <span class="t2">9</span>
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
              </div>
            </div>

            <div id="suspend-eps-tab" class="tab-pane fade in">
              <div>
                <div class="tahdid">
                  <div class="row" style="margin-bottom:15px">
                    <div class="col-sm-7">
                      <div class="d-flex flex-start">
                        <div class="pl-3">
                          <div>
                            <div class="checkbox-default checkbox-style-2">
                              <input
                                id="card-episode-checksuspend"
                                type="checkbox"
                                autocomplete="off"
                                class="form-check-input"
                                value="1"
                              />
                              <label for="card-episode-checksuspend"></label>
                              <span style="color: rgb(0, 0, 0); font-size: 18px"
                                >&nbsp;&nbsp;تحديد الكل</span
                              >
                            </div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div class="col-sm-5 text-left">
                      <div class="btn-group">
                        <input
                          type="search"
                          placeholder="بحث"
                          class="btn btn-white search-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
  }
}
</script>