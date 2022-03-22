<template>
  <div class="addProgram">
    <div class="main">
      <div class="inside">
        <div class="insideHead">
          <h4 class="modal-title text-center phoneText2" id="myModalLabel">
            إضافة برنامج جديدة
          </h4>
        </div>
        <div class="insideBody">
          <form>
            <input
              class="hidden"
              id="profieImage"
              type="file"
              name="profile"
            />

            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label>اسم البرنامج</label>
                  <input
                    type="text"
                    name="staffname4"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>التخصيص</label>
              <div class="row">
                <div class="col-lg-2">
                  <br /><label>الجنس</label>
                </div>
                <div class="col-lg-10">
                  <div
                    class="checkbox-group checkbox-group-agency"
                  >
                    <div class="input-custom-group">
                      <div>
                        <div class="checkbox">
                          <label for="managerCheck-1">
                            <input
                              class="check-all"
                              type="checkbox"
                              id="managerCheck-1"
                              autocomplete="off"
                            />
                            <div class="white-space-no">
                              <span>الجميع</span>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div>
                        <div class="checkbox">
                          <label for="managerCheck-2">
                            <input
                              type="checkbox"
                              id="managerCheck-2"
                            />
                            <div class="white-space-no">
                              <span>ذكر</span>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div>
                        <div class="checkbox">
                          <label for="managerCheck-3">
                            <input
                              type="checkbox"
                              id="managerCheck-3"
                            />
                            <div class="white-space-no">
                              <span>انثي</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-1">
                  <br /><label>العمر</label>
                </div>
                <div class="col-lg-3 text-center">
                  <br />
                  <div class="checkbox-default">
                    <input
                      id="card-program-checkbox-1"
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                    <label for="card-program-checkbox-1"></label>
                    الجميع
                  </div>
                </div>
                <div class="col-lg-1">
                  <br /><label>من</label>
                </div>
                <div class="col-lg-3">
                  <input class="form-control" type="number" />
                </div>
                <div class="col-lg-1">
                  <br /><label>الي</label>
                </div>
                <div class="col-lg-3">
                  <input class="form-control" type="number" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">نوع المنشأة التعليمية</label>
              <div
                class="checkbox-group checkbox-group-educational"
              >
                <div class="input-custom-group">
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck17">
                        <input
                          class="check-all"
                          type="checkbox"
                          id="managerCheck17"
                          autocomplete="off"
                        />
                        <div class="white-space-no">
                          <span>الجميع</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck18">
                        <input
                          type="checkbox"
                          id="managerCheck18"
                        />
                        <div class="white-space-no">
                          <span>مساجد</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck19">
                        <input
                          type="checkbox"
                          id="managerCheck19"
                        />
                        <div class="white-space-no">
                          <span>مدارس</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck20">
                        <input
                          type="checkbox"
                          id="managerCheck20"
                        />
                        <div class="white-space-no">
                          <span>جمعيات</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">نوع الحلقة</label>
              <div class="checkbox-group checkbox-group-episodes">
                <div class="input-custom-group">
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck21">
                        <input
                          class="check-all"
                          type="checkbox"
                          id="managerCheck21"
                          autocomplete="off"
                        />
                        <div class="white-space-no">
                          <span>الجميع</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck22">
                        <input
                          type="checkbox"
                          id="managerCheck22"
                        />
                        <div class="white-space-no">
                          <span>صيفية</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck23">
                        <input
                          type="checkbox"
                          id="managerCheck23"
                        />
                        <div class="white-space-no">
                          <span>شتوية</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox">
                      <label for="managerCheck24">
                        <input
                          type="checkbox"
                          id="managerCheck24"
                        />
                        <div class="white-space-no">
                          <span>اطفال</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          class="footer text-center"
          id="registerInformationFooter"
        >
          <div class="text-center">
            <button type="button" class="btn btn-primary btn3">
              <i class="fa fa-check"></i> إضافة
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  
}
</script>