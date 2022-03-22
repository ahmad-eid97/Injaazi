<template>
  <div>
    <div class="row">
      <div class="topheader">
        <h6><img src="/assets/build/images/home-icon.png" /> / تقييم الأداء</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-12">
        <div class="row">
          <ul class="nav nav-tabs nav-tabs-custom">
            <li class="active col-lg-6 col-md-6 col-xs-6 specialPadd">
              <a data-toggle="tab" href="#today-tab" style="padding: 15px">تقييم اليوم</a>
            </li>
            <li class="col-lg-6 col-md-6 col-xs-6 specialPadd">
              <a data-toggle="tab" href="#tomorrow-tab" style="padding: 15px">تقييم الغد</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div id="student-lists" class="tab-content">
          <div id="today-tab" class="tab-pane fade in active">
            <div class="tahdid">
              <div class="row">
                <div class="col-lg-12 phoneDisapear">
                  <h4 style="color: rgb(115, 135, 156);margin-right:10px">تقييم الأداء</h4>
                </div>
              </div>
              <div class="row evaluation">
                <div class="col-md-12 col-lg-9">
                  <div class="row">
                    <div class="col-sm-8 evaluation-lg p-3">
                      <div class="d-flex flex-start align-vertical-center">
                        <div class="p-1">
                          <img
                            src="/assets/build/images/Group4719.png"
                            alt=""
                            class="smallImg"
                          />
                        </div>
                        <div class="p-1">
                          <span class="large-font-1">تقييم الأداء</span>
                        </div>
                      </div>
                      <h1 class="extra-large-font-2 p-1">
                        <b id="total-rating">100%</b>
                      </h1>
                      <div>
                        <output for="range">0</output>
                        <input
                          id="total-rating-input"
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          disabled="disabled"
                          class="input-range"
                        />
                      </div>
                      <div class="row">
                        <div class="col-xs-6">
                          <div class="d-flex flex-start align-vertical-center">
                            <div>
                              <div
                                class="
                                  border-circle
                                  circle-35
                                  bg-sky
                                  text-center
                                "
                              >
                                <img
                                  src="/assets/build/images/Group 4720x17x17.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="p-1">
                              <span class="large-font-2"
                                ><b class="save-rating">%50</b></span
                              ><br />
                              <span class="small-font-1 color-light">حفظ</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="d-flex flex-start align-vertical-center">
                            <div>
                              <div
                                class="
                                  border-circle
                                  circle-35
                                  bg-orange-light
                                  text-center
                                "
                              >
                                <img
                                  src="/assets/build/images/Group 4722x17x17.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="p-1">
                              <span class="large-font-2"
                                ><b class="revision-rating">%50</b></span
                              ><br />
                              <span class="small-font-1 color-light"
                                >مراجعة</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row"><div class="col-sm-6"></div></div>
                    </div>
                    <div class="col-sm-4">
                      <div class="evaluation-sm p-3 mb-3">
                        <div class="row">
                          <div class="col-xs-3">
                            <div
                              class="border-circle circle-35 bg-sky text-center"
                            >
                              <img
                                src="/assets/build/images/Group 4720x17x17.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-xs-4">
                            <span class="large-font-3">الحفظ</span>
                          </div>
                          <div class="col-xs-5">
                            <span class="large-font-3"
                              ><b class="save-rating">%50</b></span
                            >
                          </div>
                        </div>
                        <div>
                          <output for="range">0</output>
                          <input
                            id="input-save"
                            type="range"
                            min="0"
                            max="50"
                            step="5"
                            disabled="disabled"
                            class="input-range input-range-sky"
                          />
                        </div>
                        <div class="row">
                          <div class="col-xs-6">
                            <b class="quantity-save-rating">40%</b>
                            <span class="color-light">الكمية</span>
                          </div>
                          <div class="col-xs-6 text-left">
                            <b class="quality-save-rating">10%</b>
                            <span class="color-light">الجودة</span>
                          </div>
                        </div>
                      </div>
                      <div class="evaluation-sm p-3">
                        <div class="row">
                          <div class="col-xs-3">
                            <div
                              class="
                                border-circle
                                circle-35
                                bg-orange-light
                                text-center
                              "
                            >
                              <img
                                src="/assets/build/images/Group 4722x17x17.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-xs-4">
                            <span class="large-font-3">المراجعة</span>
                          </div>
                          <div class="col-xs-5">
                            <span class="large-font-3"
                              ><b class="revision-rating">%50</b></span
                            >
                          </div>
                        </div>
                        <div>
                          <output for="range">0</output>
                          <input
                            id="input-revision"
                            type="range"
                            min="0"
                            max="50"
                            step="5"
                            data-orientation="vertical"
                            disabled="disabled"
                            class="input-range input-range-orange"
                          />
                        </div>
                        <div class="row">
                          <div class="col-xs-6">
                            <b class="quantity-revision-rating">40%</b>
                            <span class="color-light">الكمية</span>
                          </div>
                          <div class="col-xs-6 text-left">
                            <b class="quality-revision-rating">10%</b>
                            <span class="color-light">الجودة</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3">
                <div class="col-lg-12">
                  <h4 style="color: rgb(115, 135, 156)">
                    آليه الخصم من درجات الجودة
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9">
                  <div class="evaluation-lg p-4">
                    <h4>الخصم من جودة الحفظ</h4>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <div class="editingFieldContent" id="editingFieldContent1">
                            <label for="" id="labelEditing1">تردد</label>
                            <i class="fas fa-edit" id="clickable1"></i>
                          </div>
                          <div class="editingField close" id="editingField1">
                            <input type="text" id="editingFieldInput1">
                            <i class="fas fa-check-circle" id="editedCirc1"></i>
                          </div>
                          <select
                            type="text"
                            disabled="disabled"
                            class="form-control"
                          >
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <div class="editingFieldContent" id="editingFieldContent2">
                            <label for="" id="labelEditing2">خطاء</label>
                            <i class="fas fa-edit" id="clickable2"></i>
                          </div>
                          <div class="editingField close" id="editingField2">
                            <input type="text" id="editingFieldInput2">
                            <i class="fas fa-check-circle" id="editedCirc2"></i>
                          </div>
                          <select
                            type="text"
                            disabled="disabled"
                            class="form-control"
                          >
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <div class="editingFieldContent" id="editingFieldContent3">
                            <label for="" id="labelEditing3">تجويد</label>
                            <i class="fas fa-edit" id="clickable3"></i>
                          </div>
                          <div class="editingField close" id="editingField3">
                            <input type="text" id="editingFieldInput3">
                            <i class="fas fa-check-circle" id="editedCirc3"></i>
                          </div>
                          <select
                            type="text"
                            disabled="disabled"
                            class="form-control"
                          >
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <h4>الخصم من جودة المراجعة</h4>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <div class="editingFieldContent" id="editingFieldContent4">
                            <label for="" id="labelEditing4">تردد</label>
                            <i class="fas fa-edit" id="clickable4"></i>
                          </div>
                          <div class="editingField close" id="editingField4">
                            <input type="text" id="editingFieldInput4">
                            <i class="fas fa-check-circle" id="editedCirc4"></i>
                          </div>
                          <select
                            type="text"
                            disabled="disabled"
                            class="form-control"
                          >
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <div class="editingFieldContent" id="editingFieldContent5">
                            <label for="" id="labelEditing5">خطاء</label>
                            <i class="fas fa-edit" id="clickable5"></i>
                          </div>
                          <div class="editingField close" id="editingField5">
                            <input type="text" id="editingFieldInput5">
                            <i class="fas fa-check-circle" id="editedCirc5"></i>
                          </div>
                          <select
                            type="text"
                            disabled="disabled"
                            class="form-control"
                          >
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <div class="editingFieldContent" id="editingFieldContent6">
                            <label for="" id="labelEditing6">تجويد</label>
                            <i class="fas fa-edit" id="clickable6"></i>
                          </div>
                          <div class="editingField close" id="editingField6">
                            <input type="text" id="editingFieldInput6">
                            <i class="fas fa-check-circle" id="editedCirc6"></i>
                          </div>
                          <select
                            type="text"
                            disabled="disabled"
                            class="form-control"
                          >
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tomorrow-tab" class="tab-pane fade in">
            <div class="tahdid">
              <div class="row">
                <div class="col-lg-12 phoneDisapear">
                  <h4 style="color: rgb(115, 135, 156)">تقييم الأداء</h4>
                </div>
              </div>
              <div class="row evaluation">
                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-sm-8 evaluation-lg p-3">
                      <div class="d-flex flex-start align-vertical-center">
                        <div class="p-1">
                          <img
                            src="/assets/build/images/Group4719.png"
                            alt=""
                          />
                        </div>
                        <div class="p-1">
                          <span class="large-font-1">تقييم الأداء</span>
                        </div>
                      </div>
                      <h1 class="extra-large-font-2 p-1">
                        <b id="total-rating">100%</b>
                      </h1>
                      <div>
                        <output for="range">0</output>
                        <input
                          id="total-rating-input"
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          class="input-range"
                        />
                      </div>
                      <div class="row">
                        <div class="col-xs-6">
                          <div class="d-flex flex-start align-vertical-center">
                            <div>
                              <div
                                class="
                                  border-circle
                                  circle-35
                                  bg-sky
                                  text-center
                                "
                              >
                                <img
                                  src="/assets/build/images/Group 4720x17x17.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="p-1">
                              <span class="large-font-2"
                                ><b class="save-rating">%50</b></span
                              ><br />
                              <span class="small-font-1 color-light">حفظ</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="d-flex flex-start align-vertical-center">
                            <div>
                              <div
                                class="
                                  border-circle
                                  circle-35
                                  bg-orange-light
                                  text-center
                                "
                              >
                                <img
                                  src="/assets/build/images/Group 4722x17x17.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="p-1">
                              <span class="large-font-2"
                                ><b class="revision-rating">%50</b></span
                              ><br />
                              <span class="small-font-1 color-light"
                                >مراجعة</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row"><div class="col-sm-6"></div></div>
                    </div>
                    <div class="col-sm-4">
                      <div class="evaluation-sm p-3 mb-3">
                        <div class="row">
                          <div class="col-xs-3">
                            <div
                              class="border-circle circle-35 bg-sky text-center"
                            >
                              <img
                                src="/assets/build/images/Group 4720x17x17.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-xs-4">
                            <span class="large-font-3">الحفظ</span>
                          </div>
                          <div class="col-xs-5">
                            <span class="large-font-3"
                              ><b class="save-rating">%50</b></span
                            >
                          </div>
                        </div>
                        <div>
                          <output for="range">0</output>
                          <input
                            id="input-save"
                            type="range"
                            min="0"
                            max="50"
                            step="5"
                            class="input-range input-range-sky"
                          />
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <b class="quantity-save-rating">40%</b>
                            <span class="color-light">الكمية</span>
                          </div>
                          <div class="col-sm-6 text-left">
                            <b class="quality-save-rating">10%</b>
                            <span class="color-light">الجودة</span>
                          </div>
                        </div>
                      </div>
                      <div class="evaluation-sm p-3">
                        <div class="row">
                          <div class="col-xs-3">
                            <div
                              class="
                                border-circle
                                circle-35
                                bg-orange-light
                                text-center
                              "
                            >
                              <img
                                src="/assets/build/images/Group 4722x17x17.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-xs-4">
                            <span class="large-font-3">المراجعة</span>
                          </div>
                          <div class="col-xs-5">
                            <span class="large-font-3"
                              ><b class="revision-rating">%50</b></span
                            >
                          </div>
                        </div>
                        <div>
                          <output for="range">0</output>
                          <input
                            id="input-revision"
                            type="range"
                            min="0"
                            max="50"
                            step="5"
                            data-orientation="vertical"
                            class="input-range input-range-orange"
                          />
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <b class="quantity-revision-rating">40%</b>
                            <span class="color-light">الكمية</span>
                          </div>
                          <div class="col-sm-6 text-left">
                            <b class="quality-revision-rating">10%</b>
                            <span class="color-light">الجودة</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3">
                <div class="col-lg-12">
                  <h4 style="color: rgb(115, 135, 156)">
                    آليه الخصم من درجات الجودة
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9">
                  <div class="evaluation-lg p-4">
                    <h4>الخصم من جودة الحفظ</h4>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <!---->
                          <label for=""
                            ><i
                              title="اضغط لتعديل الاسم"
                              class="glyphicon glyphicon-pencil"
                            ></i>
                            تردد
                          </label>
                          <select type="text" class="form-control">
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <!---->
                          <label for=""
                            ><i
                              title="اضغط لتعديل الاسم"
                              class="glyphicon glyphicon-pencil"
                            ></i>
                            خطاء
                          </label>
                          <select type="text" class="form-control">
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <!---->
                          <label for=""
                            ><i
                              title="اضغط لتعديل الاسم"
                              class="glyphicon glyphicon-pencil"
                            ></i>
                            تجويد
                          </label>
                          <select type="text" class="form-control">
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <h4>الخصم من جودة المراجعة</h4>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <!---->
                          <label for=""
                            ><i
                              title="اضغط لتعديل الاسم"
                              class="glyphicon glyphicon-pencil"
                            ></i>
                            تردد
                          </label>
                          <select type="text" class="form-control">
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <!---->
                          <label for=""
                            ><i
                              title="اضغط لتعديل الاسم"
                              class="glyphicon glyphicon-pencil"
                            ></i>
                            خطاء
                          </label>
                          <select type="text" class="form-control">
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <!---->
                          <label for=""
                            ><i
                              title="اضغط لتعديل الاسم"
                              class="glyphicon glyphicon-pencil"
                            ></i>
                            تجويد
                          </label>
                          <select type="text" class="form-control">
                            <option value="">اختيار</option>
                            <option value="0.25">ربع درجة</option>
                            <option value="0.34">ثلث درجة</option>
                            <option value="0.5">نصف درجة</option>
                            <option value="1">درجة</option>
                            <option value="1.5">درجة ونصف</option>
                            <option value="2">درجتان</option>
                            <option value="0">بدون خصم</option>
                          </select>
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
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    
  }
}
</script>