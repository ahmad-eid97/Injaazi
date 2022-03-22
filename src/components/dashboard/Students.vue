<template>
  <div  class="students-list xsDisapear">
    <div class="row" style="margin-bottom:20px">
      <div class="col-lg-9">
        <h4
          data-toggle="collapse"
          data-target="#student"
          aria-expanded="false"
          aria-controls="student"
          class="collapse-open-btn"
          style="color: rgb(115, 135, 156)"
        >
          <i class="fa fa-angle-down"></i> الطلاب / ات
        </h4>
      </div>
      <div class="col-lg-3 text-left">
        <div class="form-group has-feedback has-search">
          <span
            class="glyphicon glyphicon-search form-control-feedback"
          ></span>
          <input type="text" placeholder="بحث " class="form-control" />
        </div>
      </div>
    </div>
    <div id="student" class="collaps">
      <table
        conde=""
        class="
          table-condensed
          custom-table
          table-normal table-responsive table-view
        "
        style="margin-bottom: 30px; padding-bottom: 5px"
      >
        <thead
          class="asmlrow"
          style="border-bottom: 10px solid rgb(245, 246, 248)"
        >
          <th
            data-v-9b825cf6=""
            aria-sort="none"
            class="vt-sortable vt-sort"
          >
            <!---->
            <span data-v-9b825cf6="">الإسم</span>
          </th>
          <th
            data-v-9b825cf6=""
            aria-sort="none"
            class="vt-sortable vt-sort"
          >
            <!---->
            <span data-v-9b825cf6="">المستوى</span>
          </th>
          <th
            data-v-9b825cf6=""
            aria-sort="none"
            class="vt-sortable vt-sort"
          >
            <!---->
            <span data-v-9b825cf6="">تقييم الاداء</span>
          </th>
          <th
            data-v-9b825cf6=""
            aria-sort="none"
            class="vt-sortable vt-sort"
          >
            <!---->
            <span data-v-9b825cf6="">أوجه الحفظ</span>
          </th>
          <th
            data-v-9b825cf6=""
            aria-sort="none"
            class="vt-sortable vt-sort"
          >
            <!---->
            <span data-v-9b825cf6="">أوجه المراجعة</span>
          </th>
          <th
            data-v-9b825cf6=""
            aria-sort="none"
            class="vt-sortable vt-sort"
          >
            <!---->
            <span data-v-9b825cf6="">الحضور</span>
          </th>
          <th></th>
        </thead>
        <tbody>
          <tr class="abdlrow" style="background: white">
            <td width="35%">
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">1</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">احمد محمد</h4></a>
                  <h6>حلقة الحافظين</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>جزء النبأ</h5>
                  <h6>98% / 41 يوم</h6>
                </div>
              </div>
            </td>
            <td width="15%">
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0.8</span> <span class="n30">0.8</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">2</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">تجربة تسجيل طالب جديد</h4></a>
                  <h6>حلقة الحافظين</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>جزء النبأ</h5>
                  <h6>100% / 28 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0.8</span> <span class="n30">0.8</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">3</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">جمعان فهد الدوسري</h4></a>
                  <h6>حلقة الحافظين</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>جزء النبأ</h5>
                  <h6>100% / 14 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0.8</span> <span class="n30">0.8</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">4</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">جمعان فهد الدوسري</h4></a>
                  <h6>حلقة الصبر الجميل</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>جزء الملك</h5>
                  <h6>98% / 38 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0.5</span> <span class="n30">0.5</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">5</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">احمد محمد</h4></a>
                  <h6>حلقة الصبر الجميل</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>جزء الملك</h5>
                  <h6>100% / 39 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0.5</span> <span class="n30">0.5</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">6</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">تجربة تسجيل طالب جديد</h4></a>
                  <h6>حلقة الصبر الجميل</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>حفظ المجادلة</h5>
                  <h6>86% / 34 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0.4</span> <span class="n30">0.4</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">7</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">احمد محمد</h4></a>
                  <h6>حلقة العصر</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>مراجعة النبأ</h5>
                  <h6>97% / 40 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0</span> <span class="n30">0</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">8</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">تجربة تسجيل طالب جديد</h4></a>
                  <h6>حلقة العصر</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>مراجعة النبأ</h5>
                  <h6>97% / 40 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0</span> <span class="n30">0</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
          <tr class="abdlrow" style="background: white">
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <span class="numberingStu">9</span>
                <img
                  src="https://injaazy.com/assets/build/images/mid-user.png"
                  class="mid-user-img"
                />
                <div class="abdl-ahmd">
                  <a href="#"><h4 class="cb">جمعان فهد الدوسري</h4></a>
                  <h6>حلقة العصر</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="abd-box d-flex flex-start align-vertical-center">
                <div class="abdl-ahmd">
                  <h5>مراجعة النبأ</h5>
                  <h6>97% / 40 يوم</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="box92">
                <div>
                  <span class="percent92">100%</span>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="progress pb92">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="progress-bar pb102"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14">0</span> <span class="n30">0</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <span class="n14a">1.3</span> <span class="n30">1.3</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="ttc">
                <h4>
                  <img src="/assets/build/images/Group 4769.png" alt="" />
                </h4>
                <h4 style="display: none">
                  <span class="n14a">1</span> <span class="n30">1</span>
                </h4>
              </div>
            </td>
            <td>
              <div class="abdlc">
                <div class="dropdown">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                    ><img
                      src="/assets/build/images/clickm.png"
                      class="amrbin"
                  /></a>
                  <ul class="dropdown-menu custom-menu custom-menu-left-0">
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        الإعدادات</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="/assets/build/images/Group4061.png"
                          class="group4061"
                        />
                        انضمام لحلقة</a
                      >
                    </li>
                    <li>
                      <a href="#"
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
            </td>
          </tr>
        </tbody>
      </table>
      <!---->
    </div>
    <!---->
    <!---->
    <!---->
  </div>
</template>