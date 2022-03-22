<template>
  <div  class="episodes-list">
    <div  class="row">
      <div  class="col-lg-6">
        <h4  style="color: rgb(115, 135, 156)">
          <a  href="#"
            ><i  class="fa fa-refresh"></i> الحلقات</a
          >
        </h4>
      </div>
      <div  class="col-lg-6 text-left">
      </div>
    </div>
    <div  id="episode" rtl="true" style="margin-bottom:30px">
      <div >
        <!-- <span id="carousel_prev_6ptwagfupgg" style="display: none"></span> -->

      <carousel :per-page-custom=[[0,1],[550,2],[1000,3],[1400,4],[1650,5]] :rtl="true" :paginationEnabled="true" autoplayDirection="forward" :scrollPerPage="false" class="owl-carousel owl-carousel-episode owl-theme" ref="carousel">

        <slide>
          <div
            class="owl-item active"
          >
            <div  class="item">
              <div  class="info-box hilqatmb">
                <div  class="hil-amr-box">
                  <div  class="row">
                    <div  class="col-xs-2 text-center" style="width:30px; margin-right:10px">
                      <div  class="checkbox-default">
                        <input
                          
                          id="episode-checkbox-1"
                          type="checkbox"
                          autocomplete="off"
                          class="form-check-input"
                          value="1"
                        />
                        <label
                          for="episode-checkbox-1"
                        ></label>
                      </div>
                    </div>
                    <div  class="col-xs-9">
                      <h4  class="p-0 m-0">
                        حلقة الحافظين
                      </h4>
                    </div>
                    <div  class="col-xs-1 text-left">
                      <div class="dropdown">
                        <a
                          
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img
                            src="/assets/build/images/clickm.png"
                            class="amrbin"
                            style="margin-left:5px"
                        /></a>
                        <ul
                          
                          class="
                            dropdown-menu
                            custom-menu custom-menu-left-0
                          "
                        >
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4061.png"
                                class="group4061"
                              />
                              الإعدادات</a
                            >
                          </li>
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4062.png"
                                class="group4061"
                              />
                              إيقاف مؤقت</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6  class="ajmath-mt">
                    <span  class="ajmath"
                      >جمعان فهد الدوسري</span
                    >
                    <span  class="hasr">الفجر</span>
                  </h6>
                </div>
                <div  class="col-xs-12 tasm">
                  <div  class="col-xs-3"></div>
                  <div  class="col-xs-8">
                    <div  class="g102">
                      <img
                        
                        src="/assets/build/images/Group 4719.png"
                        class="img102a"
                      />
                      <div  class="t102">
                        <h6 >
                          <span
                            
                            class="c25000a1"
                          ></span>
                          <br  />
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-1"></div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2754@20x20.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="غائب بعذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3">
                    <div
                      
                      title="غائب بدون عذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-2 border-left" style="padding-right:10px">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">نسبة الحضور</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">عدد الايام</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="col-xs-12">
                  <div class="row">
                    <div  class="hilqat-pb col-xs-12">
                      <div  class="progress pb102">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 100%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img102"
                          ><img
                            
                            src="/assets/build/images/Group 4720@17x18.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >2.3</span
                            >
                            <span  class="t200">2.3</span>
                            <br  />
                            <span >أوجه الحفظ</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div  class="hilqat-pb2 col-xs-12">
                      <div  class="progress pb92">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="97.5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 97.5%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img25000"
                          ><img
                            
                            src="/assets/build/images/Group 4722x17x17.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >3.9</span
                            >
                            <span  class="t200">4</span>
                            <br  />
                            <span >أوجه المراجعة</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div
            class="owl-item active"
          >
            <div  class="item">
              <div  class="info-box hilqatmb">
                <div  class="hil-amr-box">
                  <div  class="row">
                    <div  class="col-xs-2 text-center" style="width:30px; margin-right:10px">
                      <div  class="checkbox-default">
                        <input
                          
                          id="episode-checkbox-1"
                          type="checkbox"
                          autocomplete="off"
                          class="form-check-input"
                          value="1"
                        />
                        <label
                          for="episode-checkbox-1"
                        ></label>
                      </div>
                    </div>
                    <div  class="col-xs-9">
                      <h4  class="p-0 m-0">
                        حلقة الحافظين
                      </h4>
                    </div>
                    <div  class="col-xs-1 text-left">
                      <div class="dropdown">
                        <a
                          
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img
                            src="/assets/build/images/clickm.png"
                            class="amrbin"
                            style="margin-left:5px"
                        /></a>
                        <ul
                          
                          class="
                            dropdown-menu
                            custom-menu custom-menu-left-0
                          "
                        >
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4061.png"
                                class="group4061"
                              />
                              الإعدادات</a
                            >
                          </li>
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4062.png"
                                class="group4061"
                              />
                              إيقاف مؤقت</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6  class="ajmath-mt">
                    <span  class="ajmath"
                      >جمعان فهد الدوسري</span
                    >
                    <span  class="hasr">الفجر</span>
                  </h6>
                </div>
                <div  class="col-xs-12 tasm">
                  <div  class="col-xs-3"></div>
                  <div  class="col-xs-8">
                    <div  class="g102">
                      <img
                        
                        src="/assets/build/images/Group 4719.png"
                        class="img102a"
                      />
                      <div  class="t102">
                        <h6 >
                          <span
                            
                            class="c25000a1"
                          ></span>
                          <br  />
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-1"></div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2754@20x20.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="غائب بعذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3">
                    <div
                      
                      title="غائب بدون عذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-2 border-left" style="padding-right:10px">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">نسبة الحضور</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">عدد الايام</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="col-xs-12">
                  <div class="row">
                    <div  class="hilqat-pb col-xs-12">
                      <div  class="progress pb102">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 100%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img102"
                          ><img
                            
                            src="/assets/build/images/Group 4720@17x18.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >2.3</span
                            >
                            <span  class="t200">2.3</span>
                            <br  />
                            <span >أوجه الحفظ</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div  class="hilqat-pb2 col-xs-12">
                      <div  class="progress pb92">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="97.5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 97.5%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img25000"
                          ><img
                            
                            src="/assets/build/images/Group 4722x17x17.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >3.9</span
                            >
                            <span  class="t200">4</span>
                            <br  />
                            <span >أوجه المراجعة</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div
            class="owl-item active"
          >
            <div  class="item">
              <div  class="info-box hilqatmb">
                <div  class="hil-amr-box">
                  <div  class="row">
                    <div  class="col-xs-2 text-center" style="width:30px; margin-right:10px">
                      <div  class="checkbox-default">
                        <input
                          
                          id="episode-checkbox-1"
                          type="checkbox"
                          autocomplete="off"
                          class="form-check-input"
                          value="1"
                        />
                        <label
                          for="episode-checkbox-1"
                        ></label>
                      </div>
                    </div>
                    <div  class="col-xs-9">
                      <h4  class="p-0 m-0">
                        حلقة الحافظين
                      </h4>
                    </div>
                    <div  class="col-xs-1 text-left">
                      <div class="dropdown">
                        <a
                          
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img
                            src="/assets/build/images/clickm.png"
                            class="amrbin"
                            style="margin-left:5px"
                        /></a>
                        <ul
                          
                          class="
                            dropdown-menu
                            custom-menu custom-menu-left-0
                          "
                        >
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4061.png"
                                class="group4061"
                              />
                              الإعدادات</a
                            >
                          </li>
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4062.png"
                                class="group4061"
                              />
                              إيقاف مؤقت</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6  class="ajmath-mt">
                    <span  class="ajmath"
                      >جمعان فهد الدوسري</span
                    >
                    <span  class="hasr">الفجر</span>
                  </h6>
                </div>
                <div  class="col-xs-12 tasm">
                  <div  class="col-xs-3"></div>
                  <div  class="col-xs-8">
                    <div  class="g102">
                      <img
                        
                        src="/assets/build/images/Group 4719.png"
                        class="img102a"
                      />
                      <div  class="t102">
                        <h6 >
                          <span
                            
                            class="c25000a1"
                          ></span>
                          <br  />
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-1"></div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2754@20x20.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="غائب بعذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3">
                    <div
                      
                      title="غائب بدون عذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-2 border-left" style="padding-right:10px">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">نسبة الحضور</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">عدد الايام</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="col-xs-12">
                  <div class="row">
                    <div  class="hilqat-pb col-xs-12">
                      <div  class="progress pb102">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 100%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img102"
                          ><img
                            
                            src="/assets/build/images/Group 4720@17x18.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >2.3</span
                            >
                            <span  class="t200">2.3</span>
                            <br  />
                            <span >أوجه الحفظ</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div  class="hilqat-pb2 col-xs-12">
                      <div  class="progress pb92">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="97.5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 97.5%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img25000"
                          ><img
                            
                            src="/assets/build/images/Group 4722x17x17.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >3.9</span
                            >
                            <span  class="t200">4</span>
                            <br  />
                            <span >أوجه المراجعة</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div
            class="owl-item active"
          >
            <div  class="item">
              <div  class="info-box hilqatmb">
                <div  class="hil-amr-box">
                  <div  class="row">
                    <div  class="col-xs-2 text-center" style="width:30px; margin-right:10px">
                      <div  class="checkbox-default">
                        <input
                          
                          id="episode-checkbox-1"
                          type="checkbox"
                          autocomplete="off"
                          class="form-check-input"
                          value="1"
                        />
                        <label
                          for="episode-checkbox-1"
                        ></label>
                      </div>
                    </div>
                    <div  class="col-xs-9">
                      <h4  class="p-0 m-0">
                        حلقة الحافظين
                      </h4>
                    </div>
                    <div  class="col-xs-1 text-left">
                      <div class="dropdown">
                        <a
                          
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img
                            src="/assets/build/images/clickm.png"
                            class="amrbin"
                            style="margin-left:5px"
                        /></a>
                        <ul
                          
                          class="
                            dropdown-menu
                            custom-menu custom-menu-left-0
                          "
                        >
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4061.png"
                                class="group4061"
                              />
                              الإعدادات</a
                            >
                          </li>
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4062.png"
                                class="group4061"
                              />
                              إيقاف مؤقت</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6  class="ajmath-mt">
                    <span  class="ajmath"
                      >جمعان فهد الدوسري</span
                    >
                    <span  class="hasr">الفجر</span>
                  </h6>
                </div>
                <div  class="col-xs-12 tasm">
                  <div  class="col-xs-3"></div>
                  <div  class="col-xs-8">
                    <div  class="g102">
                      <img
                        
                        src="/assets/build/images/Group 4719.png"
                        class="img102a"
                      />
                      <div  class="t102">
                        <h6 >
                          <span
                            
                            class="c25000a1"
                          ></span>
                          <br  />
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-1"></div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2754@20x20.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="غائب بعذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3">
                    <div
                      
                      title="غائب بدون عذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-2 border-left" style="padding-right:10px">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">نسبة الحضور</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">عدد الايام</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="col-xs-12">
                  <div class="row">
                    <div  class="hilqat-pb col-xs-12">
                      <div  class="progress pb102">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 100%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img102"
                          ><img
                            
                            src="/assets/build/images/Group 4720@17x18.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >2.3</span
                            >
                            <span  class="t200">2.3</span>
                            <br  />
                            <span >أوجه الحفظ</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div  class="hilqat-pb2 col-xs-12">
                      <div  class="progress pb92">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="97.5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 97.5%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img25000"
                          ><img
                            
                            src="/assets/build/images/Group 4722x17x17.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >3.9</span
                            >
                            <span  class="t200">4</span>
                            <br  />
                            <span >أوجه المراجعة</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div
            class="owl-item active"
          >
            <div  class="item">
              <div  class="info-box hilqatmb">
                <div  class="hil-amr-box">
                  <div  class="row">
                    <div  class="col-xs-2 text-center" style="width:30px; margin-right:10px">
                      <div  class="checkbox-default">
                        <input
                          
                          id="episode-checkbox-1"
                          type="checkbox"
                          autocomplete="off"
                          class="form-check-input"
                          value="1"
                        />
                        <label
                          for="episode-checkbox-1"
                        ></label>
                      </div>
                    </div>
                    <div  class="col-xs-9">
                      <h4  class="p-0 m-0">
                        حلقة الحافظين
                      </h4>
                    </div>
                    <div  class="col-xs-1 text-left">
                      <div class="dropdown">
                        <a
                          
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img
                            src="/assets/build/images/clickm.png"
                            class="amrbin"
                            style="margin-left:5px"
                        /></a>
                        <ul
                          
                          class="
                            dropdown-menu
                            custom-menu custom-menu-left-0
                          "
                        >
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4061.png"
                                class="group4061"
                              />
                              الإعدادات</a
                            >
                          </li>
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4062.png"
                                class="group4061"
                              />
                              إيقاف مؤقت</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6  class="ajmath-mt">
                    <span  class="ajmath"
                      >جمعان فهد الدوسري</span
                    >
                    <span  class="hasr">الفجر</span>
                  </h6>
                </div>
                <div  class="col-xs-12 tasm">
                  <div  class="col-xs-3"></div>
                  <div  class="col-xs-8">
                    <div  class="g102">
                      <img
                        
                        src="/assets/build/images/Group 4719.png"
                        class="img102a"
                      />
                      <div  class="t102">
                        <h6 >
                          <span
                            
                            class="c25000a1"
                          ></span>
                          <br  />
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-1"></div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2754@20x20.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="غائب بعذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3">
                    <div
                      
                      title="غائب بدون عذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-2 border-left" style="padding-right:10px">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">نسبة الحضور</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">عدد الايام</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="col-xs-12">
                  <div class="row">
                    <div  class="hilqat-pb col-xs-12">
                      <div  class="progress pb102">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 100%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img102"
                          ><img
                            
                            src="/assets/build/images/Group 4720@17x18.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >2.3</span
                            >
                            <span  class="t200">2.3</span>
                            <br  />
                            <span >أوجه الحفظ</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div  class="hilqat-pb2 col-xs-12">
                      <div  class="progress pb92">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="97.5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 97.5%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img25000"
                          ><img
                            
                            src="/assets/build/images/Group 4722x17x17.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >3.9</span
                            >
                            <span  class="t200">4</span>
                            <br  />
                            <span >أوجه المراجعة</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div
            class="owl-item active"
          >
            <div  class="item">
              <div  class="info-box hilqatmb">
                <div  class="hil-amr-box">
                  <div  class="row">
                    <div  class="col-xs-2 text-center" style="width:30px; margin-right:10px">
                      <div  class="checkbox-default">
                        <input
                          
                          id="episode-checkbox-1"
                          type="checkbox"
                          autocomplete="off"
                          class="form-check-input"
                          value="1"
                        />
                        <label
                          for="episode-checkbox-1"
                        ></label>
                      </div>
                    </div>
                    <div  class="col-xs-9">
                      <h4  class="p-0 m-0">
                        حلقة الحافظين
                      </h4>
                    </div>
                    <div  class="col-xs-1 text-left">
                      <div class="dropdown">
                        <a
                          
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                          ><img
                            src="/assets/build/images/clickm.png"
                            class="amrbin"
                            style="margin-left:5px"
                        /></a>
                        <ul
                          
                          class="
                            dropdown-menu
                            custom-menu custom-menu-left-0
                          "
                        >
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4061.png"
                                class="group4061"
                              />
                              الإعدادات</a
                            >
                          </li>
                          <li >
                            <a  href="#"
                              ><img
                                
                                src="/assets/build/images/Group4062.png"
                                class="group4061"
                              />
                              إيقاف مؤقت</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6  class="ajmath-mt">
                    <span  class="ajmath"
                      >جمعان فهد الدوسري</span
                    >
                    <span  class="hasr">الفجر</span>
                  </h6>
                </div>
                <div  class="col-xs-12 tasm">
                  <div  class="col-xs-3"></div>
                  <div  class="col-xs-8">
                    <div  class="g102">
                      <img
                        
                        src="/assets/build/images/Group 4719.png"
                        class="img102a"
                      />
                      <div  class="t102">
                        <h6 >
                          <span
                            
                            class="c25000a1"
                          ></span>
                          <br  />
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-1"></div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2754@20x20.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3 border-left">
                    <div
                      
                      title="غائب بعذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-3">
                    <div
                      
                      title="غائب بدون عذر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        
                        src="/assets/build/images/Group2743@20x17.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >0</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xs-12 tasm border-bottom border-top p-0"
                >
                  <div  class="col-xs-2 border-left" style="padding-right:10px">
                    <div
                      
                      title="حاضر"
                      class="g102 d-flex align-vertical-center flex-start"
                    >
                      <img
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                      />
                      <div >
                        <h6 >
                          <span  class="c25000a"
                            >3</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group 4769.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">نسبة الحضور</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div  class="col-xs-5 border-left p-0">
                    <div
                      
                      title="متأخر"
                      class="g102 d-flex align-vertical-center flex-start"
                      style="justify-content:center"
                    >
                      <img
                        
                        src="/assets/build/images/Group4722dark.png"
                        class="img102a"
                        style="width:26px"
                      />
                      <div >
                        <h6 >
                          <span style="font-size:13px; margin-left:5px">عدد الايام</span>
                          <span  class="c25000a"
                            >100%</span
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="col-xs-12">
                  <div class="row">
                    <div  class="hilqat-pb col-xs-12">
                      <div  class="progress pb102">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 100%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img102"
                          ><img
                            
                            src="/assets/build/images/Group 4720@17x18.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >2.3</span
                            >
                            <span  class="t200">2.3</span>
                            <br  />
                            <span >أوجه الحفظ</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div  class="hilqat-pb2 col-xs-12">
                      <div  class="progress pb92">
                        <div
                          
                          role="progressbar"
                          aria-valuenow="97.5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          class="progress-bar pb102"
                          style="width: 97.5%"
                        ></div>
                      </div>
                      <div  class="g102">
                        <span  class="img25000"
                          ><img
                            
                            src="/assets/build/images/Group 4722x17x17.png"
                        /></span>
                        <div  class="t102">
                          <h6 >
                            <span  class="c25000"
                              >3.9</span
                            >
                            <span  class="t200">4</span>
                            <br  />
                            <span >أوجه المراجعة</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>

      </carousel>

        <span id="carousel_next_ly6k8isomu"></span>
      </div>
    </div>
    <template ></template>
    <template ></template>

    <!-- DASHBOARD STUDENTS COMPONENT -->
    <students></students>
    
    <!---->
    <br  /><br  /><br
      
    /><br  /><br  /><br
      
    /><br  />
  </div>
</template>

<script>
import students from './Students.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    students
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
.VueCarousel-navigation-next {
  display: none !important;
}
</style>