<template>
  <div class="addAbsent" tabindex="-1" role="dialog" aria-labelledby="addAbsentAllModal" aria-hidden="true">
    <div class="addAbsent2">
        <div class="addAbsent-content permission-content">
            <div class="addAbsent-header">
                <h4 class="modal-title text-center" id="myModalLabel">إضافة استئذان</h4>
            </div>
            <div class="addAbsent-body">
                <form>
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="permission row">
                                <div class="col-xs-6">
                                    <input type="date" />
                                </div>
                                <div class="to col-xs-6">
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="row d-flex" style="margin:0;justify-content:center">
                                <div class="col-sm-3 p-1">
                                    <img src="../../../../public/assets/build/images/Group 4417.png" alt="" style="width:40px" />
                                </div>
                                <div class="col-sm-10">
                                    <p class="day" style="font-size:12px">ايام الاستئذان</p>
                                    <p class="day-number">6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="button" class="btn btn-primary btn3" style="margin:0"><i class="fa fa-check"></i> اضافة</button>
                    </div>
                </form>
            </div>
            <div class="permission-statictices">
                <div class="row">
                    <div class="col-xs-6 col-sm-3 d-flex" style="justify-content: center">
                        <div>
                            <div class="text-center">
                                <img class="stat" src="../../../../public/assets/build/images/present.png" alt="" />
                                <b>الحضور</b>
                                <h3 class="present statNum">2507</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 d-flex" style="justify-content: center">
                        <div>
                            <div class="text-center">
                                <img class="stat" src="../../../../public/assets/build/images/delay.png" alt="" />
                                <b>التأخر</b>
                                <h3 class="dely statNum">52</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 d-flex" style="justify-content: center">
                        <div>
                            <div class="text-center">
                                <img class="stat" src="../../../../public/assets/build/images/abesnt.png" alt="" />
                                <b>غياب بعذر</b>
                                <h3 class="excused-absence statNum">20</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 d-flex" style="justify-content: center">
                        <div>
                            <div class="text-center">
                                <img class="stat" src="../../../../public/assets/build/images/abesnt.png" alt="" />
                                <b>الغياب</b>
                                <h3 class="absence statNum">20</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="permission-footer">
                <div class="">
                    <div class="text-left">
                        <button class="btn btn-primary btn5">عرض الجميع <span class="color-green">24</span></button>
                    </div>
                    <div class="perest-day row">
                        <div class="col-sm-6 col-lg-4 one">
                            <button data-toggle="modal" data-target="#permissionRemoveModal" type="button" class="close color-red" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-1">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-1" autocomplete="off " />
                                    <div class="absent text-center">غياب</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 one">
                            <button type="button" class="close color-red" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                    <div class="pt-2"><span class="day">-</span></div>
                                    <div class="p-1">
                                        <span class="day">21</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">5</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-2">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-2" autocomplete="off " />
                                    <div class="absent text-center">غياب</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 one">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-3">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-3" autocomplete="off " />
                                    <div class="absent excused-absence text-center">غياب بعذر</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 one">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                    <div class="p-1"><span class="day">-</span></div>
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-4">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-4" autocomplete="off " />
                                    <div class="absent excused-absence text-center">غياب بعذر</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 one">
                            <button type="button" class="close color-red" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-5">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-5" autocomplete="off " />
                                    <div class="absent text-center">غياب</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 one">
                            <button type="button" class="close color-red" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-5">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-5" autocomplete="off " />
                                    <div class="absent text-center">غياب</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 one">
                            <button type="button" class="close color-red" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div class="text-center">
                                <div class="d-flex space-around">
                                    <div class="p-1">
                                        <span class="day">16</span><br />
                                        <span class="month">سبتمبر</span>
                                    </div>
                                </div>
                                <span class="small-font">عدد الأيام <span class="color-green">1</span></span>
                            </div>
                            <div>
                                <label class="d-block" for="permission-checkbox-5">
                                    <input class="permission-checkbox hidden" type="checkbox" id="permission-checkbox-5" autocomplete="off " />
                                    <div class="absent text-center">غياب</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>