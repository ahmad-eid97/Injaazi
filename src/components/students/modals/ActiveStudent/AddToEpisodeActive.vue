<template>
  <div class="addToEpisAvtive" tabindex="-1" role="dialog" aria-labelledby="addToEpisodeActiveModal" aria-hidden="true">
    <div class="addToEpisAvtive2">
        <div class="addToEpisAvtive-content">
            <form>
                <div class="addToEpisAvtive-header">
                    <h4 class="modal-title" id="myModalLabel">الإنضام لحلقة</h4>
                </div>
                <div class="addToEpisAvtive-body">
                    <label>اختيار البرنامج</label>
                    <div class="input-custom-group">
                        <div class="">
                            <div class="radio">
                                <label for="addToEpisodeModalCheck1">
                                    <input name="program" type="radio" id="addToEpisodeModalCheck1" checked="checked" />
                                    <div class="">
                                        <span>حفظ الاجزاء</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="radio">
                                <label for="addToEpisodeModalCheck2">
                                    <input name="program" type="radio" id="addToEpisodeModalCheck2" />
                                    <div class="">
                                        <span>برنامج التلقين</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="radio">
                                <label for="addToEpisodeModalCheck3">
                                    <input name="program" type="radio" id="addToEpisodeModalCheck3" />
                                    <div class="">
                                        <span>مراجعة القران الكريم</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="radio">
                                <label for="addToEpisodeModalCheck4">
                                    <input name="program" type="radio" id="addToEpisodeModalCheck4" />
                                    <div class="">
                                        <span>تجربة جديدة</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="radio">
                                <label for="addToEpisodeModalCheck5">
                                    <input name="program" type="radio" id="addToEpisodeModalCheck5" />
                                    <div class="">
                                        <span>برنامج مراجعة تجريبي</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="radio">
                                <label for="addToEpisodeModalCheck6">
                                    <input name="program" type="radio" id="addToEpisodeModalCheck6" />
                                    <div class="">
                                        <span>حفظ فقط</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="">المستوى</label>
                            <select class="form-control" name="" id="">
                                <option value="">--اختيار--</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="">الحلقة</label>
                            <select class="form-control" name="" id="">
                                <option value="">--اختيار--</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="addToEpisAvtive-footer" style="text-align: center;">
                    <div class="col-lg-12">
                        <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> إنضمام للحلقة</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>