<template>
  <div class="newEpis" tabindex="-1" role="dialog" aria-labelledby="addNewEpisodeModal" aria-hidden="true">
    <div class="newEpis2">
        <div class="newEpis-content">
            <div class="newEpis-header">
                <h4 class="modal-title text-center" id="myModalLabel">إضافة حلقة جديدة</h4>
            </div>
            <div class="newEpis-body">
                <form>
                    <div class="">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>سم الحلقة</label>
                                    <input type="text" name="staffname4" class="form-control" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>الحد األعلى للمسجلين</label>
                                    <input type="number" name="staffname4" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>نوع الحلقة</label>
                                    <select type="text" name="staffname4" class="form-control">
                                        <option value="">اختيار</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label> تصنيف الحلقة</label>
                                    <select type="text" name="staffname4" class="form-control">
                                        <option value="">اختيار</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>أيام الحلقة</label>
                            <div class="input-custom-group">
                                <div class="">
                                    <div class="checkbox">
                                        <label for="check10">
                                            <input type="checkbox" id="check10" />
                                            <div class="">
                                                <span>الاحد</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="checkbox">
                                        <label for="check11">
                                            <input type="checkbox" id="check11" />
                                            <div class="">
                                                <span>الاثنين</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="checkbox">
                                        <label for="check12">
                                            <input type="checkbox" id="check12" />
                                            <div class="">
                                                <span>الثاثاء</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="checkbox">
                                        <label for="check13">
                                            <input type="checkbox" id="check13" />
                                            <div class="">
                                                <span>الاربعاء</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="checkbox">
                                        <label for="check14">
                                            <input type="checkbox" id="check14" />
                                            <div class="">
                                                <span>الخميس</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>وقت الحلقة</label>
                            <div class="input-custom-group">
                                <div class="">
                                    <div class="radio">
                                        <label for="check16">
                                            <input name="time" type="radio" id="check16" />
                                            <div class="">
                                                <span>العصر</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="check17">
                                            <input name="time" type="radio" id="check17" />
                                            <div class="">
                                                <span>المغرب</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>معلم /ة الحلقة</label>
                            <div class="input-group">
                                <select type="text" name="staffname4" class="form-control">
                                    <option value="">اختيار</option>
                                </select>
                                <span class="input-group-btn">
                                    <button data-toggle="modal" data-target="#addNewTeacherModal" class="btn btn-primary btn3" type="button">+ جديد</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="newEpis-footer text-center">
                <div class="text-center">
                    <button type="button" class="btn btn-primary btn3" style="margin:0"><i class="fa fa-check"></i> إضافة</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>