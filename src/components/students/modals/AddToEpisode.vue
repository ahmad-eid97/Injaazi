<template>
  <div class="addToEpis" tabindex="-1" role="dialog" aria-labelledby="addToEpisodeModal" aria-hidden="true">
    <div class="addToEpis2">
        <div class="addToEpis-content">
            <form>
                <div class="addToEpis-header">
                    <h4 class="modal-title" id="myModalLabel">انضمام لحلقة</h4>
                    <h5 class="modal-title color-green">عبد الله احمد الحامد</h5>
                </div>
                <div class="addToEpis-body">
                    <label>البرنامج</label>
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
                <div class="addToEpis-footer" style="text-align: center;">
                    <div class="col-lg-12">
                        <button style="margin:0" type="button" class="btn btn-primary btn3" ><i class="fa fa-check"></i> إنضمام للحلقة</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>