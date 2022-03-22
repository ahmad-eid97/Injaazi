<template>
  <div class="contact">
    <div class="row">
        <div class="topheader">
          <h6><img src="../../public/assets/build/images/home-icon.png" /> / تواصل معنا</h6>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-8 col-lg-7">
            <div class="form-group">
                <div class="input-custom-group row">
                    <div class="col-xs-4 col-sm-3 moveOption">
                        <div class="radio">
                            <label for="contactCheck1">
                                <input name="program" type="radio" id="contactCheck1">
                                <div class="">
                                    <span>فكرة / اقتراح</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 moveOption">
                        <div class="radio">
                            <label for="contactCheck2">
                                <input name="program" type="radio" id="contactCheck2">
                                <div class="">
                                    <span>مشكلة / شكوى</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-5 moveOption">
                        <div class="radio">
                            <label for="contactCheck3">
                                <input name="program" type="radio" id="contactCheck3">
                                <div class="">
                                    <span>طلب / استفسار</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="">العنوان</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="">الموضوع</label>
                <textarea class="form-control" rows="10"></textarea>
            </div>
            <div class="form-group text-left">
                <button class="btn btn-primary btn3">إرسال</button>
            </div>
        </div>
        <div class="col-sm-4"></div>
    </div>
  </div>
</template>