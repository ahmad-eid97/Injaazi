<template>
  <div class="country" tabindex="-1" role="dialog" aria-labelledby="addNewCountryModal" aria-hidden="true">
    <div class="inside">
        <div class="country-content">
            <form>
                <div class="country-header">
                    <h4 class="modal-title text-center" id="myModalLabel">اضافة دوله</h4>
                </div>
                <div class="country-body">
                    <input class="hidden" id="profieImage" type="file" name="profile" />

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>اسم الدولة</label>
                                <select name="staffname4" class="form-control">
                                    <option value="">اختيار</option>
                                    <option value="31">أمريكا</option>
                                    <option value="26">أندونيسيا</option>
                                    <option value="35">استراليا</option>
                                    <option value="16">الأردن</option>
                                    <option value="6">الإمارات</option>
                                    <option value="8">البحرين</option>
                                    <option value="17">الجزائر</option>
                                    <option value="1" selected="">السعودية</option>
                                    <option value="3">السودان</option>
                                    <option value="21">الصومال</option>
                                    <option value="29">الصين</option>
                                    <option value="13">العراق</option>
                                    <option value="27">الفلبين</option>
                                    <option value="7">الكويت</option>
                                    <option value="14">المغرب</option>
                                    <option value="25">الهند</option>
                                    <option value="12">اليمن</option>
                                    <option value="9">باكستان</option>
                                    <option value="30">بريطانيا</option>
                                    <option value="24">بنجلاديش</option>
                                    <option value="34">بورما</option>
                                    <option value="33">تركيا</option>
                                    <option value="22">جيبوتي</option>
                                    <option value="2">سوريا</option>
                                    <option value="15">عمان</option>
                                    <option value="36">غير ذلك</option>
                                    <option value="19">فلسطين</option>
                                    <option value="5">قطر</option>
                                    <option value="32">كندا</option>
                                    <option value="18">لبنان</option>
                                    <option value="23">ليبيا</option>
                                    <option value="10">مالي</option>
                                    <option value="28">ماليزيا</option>
                                    <option value="4">مصر</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>الكود</label>
                                <select name="staffname4" class="form-control">
                                    <option value="SA">SA</option>
                                    <option value="US">SU</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>رمز الاتصال الدولي</label>
                                <select type="text" name="staffname4" class="form-control">
                                    <option value="">+966</option>
                                    <option value="">+249</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>علوم الدولة</label>
                                <select name="staffname4" class="form-control">
                                    <option value="AF"> 🇦🇫</option>
                                    <option value="AO"> 🇦🇴</option>
                                    <option value="AL"> 🇦🇱</option>
                                    <option value="AD"> 🇦🇩</option>
                                    <option value="AE"> 🇦🇪</option>
                                    <option value="AR"> 🇦🇷</option>
                                    <option value="AM"> 🇦🇲</option>
                                    <option value="AG"> 🇦🇬</option>
                                    <option value="AU"> 🇦🇺</option>
                                    <option value="AT"> 🇦🇹</option>
                                    <option value="AZ"> 🇦🇿</option>
                                    <option value="BI"> 🇧🇮</option>
                                    <option value="BE"> 🇧🇪</option>
                                    <option value="BJ"> 🇧🇯</option>
                                    <option value="BF"> 🇧🇫</option>
                                    <option value="BD"> 🇧🇩</option>
                                    <option value="BG"> 🇧🇬</option>
                                    <option value="BH"> 🇧🇭</option>
                                    <option value="BS"> 🇧🇸</option>
                                    <option value="BA"> 🇧🇦</option>
                                    <option value="BY"> 🇧🇾</option>
                                    <option value="BZ"> 🇧🇿</option>
                                    <option value="BO"> 🇧🇴</option>
                                    <option value="BR"> 🇧🇷</option>
                                    <option value="BB"> 🇧🇧</option>
                                    <option value="BN"> 🇧🇳</option>
                                    <option value="BT"> 🇧🇹</option>
                                    <option value="BW"> 🇧🇼</option>
                                    <option value="CF"> 🇨🇫</option>
                                    <option value="CA"> 🇨🇦</option>
                                    <option value="CH"> 🇨🇭</option>
                                    <option value="CL"> 🇨🇱</option>
                                    <option value="CN"> 🇨🇳</option>
                                    <option value="CI"> 🇨🇮</option>
                                    <option value="CM"> 🇨🇲</option>
                                    <option value="CD"> 🇨🇩</option>
                                    <option value="CG"> 🇨🇬</option>
                                    <option value="CO"> 🇨🇴</option>
                                    <option value="KM"> 🇰🇲</option>
                                    <option value="CV"> 🇨🇻</option>
                                    <option value="CR"> 🇨🇷</option>
                                    <option value="CU"> 🇨🇺</option>
                                    <option value="CY"> 🇨🇾</option>
                                    <option value="CZ"> 🇨🇿</option>
                                    <option value="DE"> 🇩🇪</option>
                                    <option value="DJ"> 🇩🇯</option>
                                    <option value="DM"> 🇩🇲</option>
                                    <option value="DK"> 🇩🇰</option>
                                    <option value="DO"> 🇩🇴</option>
                                    <option value="DZ"> 🇩🇿</option>
                                    <option value="EC"> 🇪🇨</option>
                                    <option value="EG"> 🇪🇬</option>
                                    <option value="ER"> 🇪🇷</option>
                                    <option value="ES"> 🇪🇸</option>
                                    <option value="EE"> 🇪🇪</option>
                                    <option value="ET"> 🇪🇹</option>
                                    <option value="FI"> 🇫🇮</option>
                                    <option value="FJ"> 🇫🇯</option>
                                    <option value="FR"> 🇫🇷</option>
                                    <option value="FM"> 🇫🇲</option>
                                    <option value="GA"> 🇬🇦</option>
                                    <option value="GB"> 🇬🇧</option>
                                    <option value="GE"> 🇬🇪</option>
                                    <option value="GH"> 🇬🇭</option>
                                    <option value="GN"> 🇬🇳</option>
                                    <option value="GM"> 🇬🇲</option>
                                    <option value="GW"> 🇬🇼</option>
                                    <option value="GQ"> 🇬🇶</option>
                                    <option value="GR"> 🇬🇷</option>
                                    <option value="GD"> 🇬🇩</option>
                                    <option value="GT"> 🇬🇹</option>
                                    <option value="GY"> 🇬🇾</option>
                                    <option value="HN"> 🇭🇳</option>
                                    <option value="HR"> 🇭🇷</option>
                                    <option value="HT"> 🇭🇹</option>
                                    <option value="HU"> 🇭🇺</option>
                                    <option value="ID"> 🇮🇩</option>
                                    <option value="IN"> 🇮🇳</option>
                                    <option value="IE"> 🇮🇪</option>
                                    <option value="IR"> 🇮🇷</option>
                                    <option value="IQ"> 🇮🇶</option>
                                    <option value="IS"> 🇮🇸</option>
                                    <option value="IL"> 🇮🇱</option>
                                    <option value="IT"> 🇮🇹</option>
                                    <option value="JM"> 🇯🇲</option>
                                    <option value="JO"> 🇯🇴</option>
                                    <option value="JP"> 🇯🇵</option>
                                    <option value="KZ"> 🇰🇿</option>
                                    <option value="KE"> 🇰🇪</option>
                                    <option value="KG"> 🇰🇬</option>
                                    <option value="KH"> 🇰🇭</option>
                                    <option value="KI"> 🇰🇮</option>
                                    <option value="KN"> 🇰🇳</option>
                                    <option value="KR"> 🇰🇷</option>
                                    <option value="KW"> 🇰🇼</option>
                                    <option value="LA"> 🇱🇦</option>
                                    <option value="LB"> 🇱🇧</option>
                                    <option value="LR"> 🇱🇷</option>
                                    <option value="LY"> 🇱🇾</option>
                                    <option value="LC"> 🇱🇨</option>
                                    <option value="LI"> 🇱🇮</option>
                                    <option value="LK"> 🇱🇰</option>
                                    <option value="LS"> 🇱🇸</option>
                                    <option value="LT"> 🇱🇹</option>
                                    <option value="LU"> 🇱🇺</option>
                                    <option value="LV"> 🇱🇻</option>
                                    <option value="MA"> 🇲🇦</option>
                                    <option value="MC"> 🇲🇨</option>
                                    <option value="MD"> 🇲🇩</option>
                                    <option value="MG"> 🇲🇬</option>
                                    <option value="MV"> 🇲🇻</option>
                                    <option value="MX"> 🇲🇽</option>
                                    <option value="MH"> 🇲🇭</option>
                                    <option value="MK"> 🇲🇰</option>
                                    <option value="ML"> 🇲🇱</option>
                                    <option value="MT"> 🇲🇹</option>
                                    <option value="MM"> 🇲🇲</option>
                                    <option value="ME"> 🇲🇪</option>
                                    <option value="MN"> 🇲🇳</option>
                                    <option value="MZ"> 🇲🇿</option>
                                    <option value="MR"> 🇲🇷</option>
                                    <option value="MU"> 🇲🇺</option>
                                    <option value="MW"> 🇲🇼</option>
                                    <option value="MY"> 🇲🇾</option>
                                    <option value="NA"> 🇳🇦</option>
                                    <option value="NE"> 🇳🇪</option>
                                    <option value="NG"> 🇳🇬</option>
                                    <option value="NI"> 🇳🇮</option>
                                    <option value="NL"> 🇳🇱</option>
                                    <option value="NO"> 🇳🇴</option>
                                    <option value="NP"> 🇳🇵</option>
                                    <option value="NR"> 🇳🇷</option>
                                    <option value="NZ"> 🇳🇿</option>
                                    <option value="OM"> 🇴🇲</option>
                                    <option value="PK"> 🇵🇰</option>
                                    <option value="PA"> 🇵🇦</option>
                                    <option value="PE"> 🇵🇪</option>
                                    <option value="PH"> 🇵🇭</option>
                                    <option value="PW"> 🇵🇼</option>
                                    <option value="PG"> 🇵🇬</option>
                                    <option value="PL"> 🇵🇱</option>
                                    <option value="KP"> 🇰🇵</option>
                                    <option value="PT"> 🇵🇹</option>
                                    <option value="PY"> 🇵🇾</option>
                                    <option value="QA"> 🇶🇦</option>
                                    <option value="RO"> 🇷🇴</option>
                                    <option value="RU"> 🇷🇺</option>
                                    <option value="RW"> 🇷🇼</option>
                                    <option value="SA"> 🇸🇦</option>
                                    <option value="SD"> 🇸🇩</option>
                                    <option value="SN"> 🇸🇳</option>
                                    <option value="SG"> 🇸🇬</option>
                                    <option value="SB"> 🇸🇧</option>
                                    <option value="SL"> 🇸🇱</option>
                                    <option value="SV"> 🇸🇻</option>
                                    <option value="SM"> 🇸🇲</option>
                                    <option value="SO"> 🇸🇴</option>
                                    <option value="RS"> 🇷🇸</option>
                                    <option value="SS"> 🇸🇸</option>
                                    <option value="ST"> 🇸🇹</option>
                                    <option value="SR"> 🇸🇷</option>
                                    <option value="SK"> 🇸🇰</option>
                                    <option value="SI"> 🇸🇮</option>
                                    <option value="SE"> 🇸🇪</option>
                                    <option value="SZ"> 🇸🇿</option>
                                    <option value="SC"> 🇸🇨</option>
                                    <option value="SY"> 🇸🇾</option>
                                    <option value="TD"> 🇹🇩</option>
                                    <option value="TG"> 🇹🇬</option>
                                    <option value="TH"> 🇹🇭</option>
                                    <option value="TJ"> 🇹🇯</option>
                                    <option value="TM"> 🇹🇲</option>
                                    <option value="TL"> 🇹🇱</option>
                                    <option value="TO"> 🇹🇴</option>
                                    <option value="TT"> 🇹🇹</option>
                                    <option value="TN"> 🇹🇳</option>
                                    <option value="TR"> 🇹🇷</option>
                                    <option value="TV"> 🇹🇻</option>
                                    <option value="TZ"> 🇹🇿</option>
                                    <option value="UG"> 🇺🇬</option>
                                    <option value="UA"> 🇺🇦</option>
                                    <option value="UY"> 🇺🇾</option>
                                    <option value="US"> 🇺🇸</option>
                                    <option value="UZ"> 🇺🇿</option>
                                    <option value="VA"> 🇻🇦</option>
                                    <option value="VC"> 🇻🇨</option>
                                    <option value="VE"> 🇻🇪</option>
                                    <option value="VN"> 🇻🇳</option>
                                    <option value="VU"> 🇻🇺</option>
                                    <option value="WS"> 🇼🇸</option>
                                    <option value="YE"> 🇾🇪</option>
                                    <option value="ZA"> 🇿🇦</option>
                                    <option value="ZM"> 🇿🇲</option>
                                    <option value="ZW"> 🇿🇼</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="country-footer text-center" id="registerInformationFooter">
                    <div class="text-center">
                        <button type="button" class="btn btn-primary btn3 m-0"><i class="fa fa-check"></i> إضافة</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>