<template>
  <!-- Edit Model -->
  <div class="editModel">
    <div class="main">
      <div class="inside">
        <div class="insideHead">
          <h4 class="modal-title text-center" id="myModalLabel">
            تعديل مستوى
          </h4>
          <h5 class="modal-title text-center color-green">
            المستوى الاول
          </h5>
        </div>
        <div class="insideBody">
          <div class="text-left">
            <div class="d-inline">
              <div class="checkbox">
                <label
                  for="LevelEditCheck1"
                  data-toggle="collapse"
                  data-target="#editCollapseRevetion1"
                  aria-expanded="false"
                  aria-controls="editCollapseRevetion1"
                >
                  <input
                    type="checkbox"
                    id="LevelEditCheck1"
                    autocomplete="off"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label>اسم المستوى</label>
                <input
                  type="text"
                  class="form-control"
                  value="جزء عم"
                  maxlength="255"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              <br /><br />
              <label>حفظ / تلاوة</label>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label>من سورة</label>
                <select class="form-control" disabled="disabled">
                  <option value="">اختيار السورة</option>
                  <option value="231">آل عمران</option>
                  <option value="242">إبراهيم</option>
                  <option value="261">الأحزاب</option>
                  <option value="274">الأحقاف</option>
                  <option value="235">الأعراف</option>
                  <option value="315">الأعلى</option>
                  <option value="249">الأنبياء</option>
                  <option value="234">الأنعام</option>
                  <option value="236">الأنفال</option>
                  <option value="340">الإخلاص</option>
                  <option value="245">الإسراء</option>
                  <option value="304">الإنسان</option>
                  <option value="310">الإنفطار</option>
                  <option value="312">الانشقاق</option>
                  <option value="313">البروج</option>
                  <option value="230">البقرة</option>
                  <option value="318">البلد</option>
                  <option value="326">البينة</option>
                  <option value="294">التحريم</option>
                  <option value="292">التغابن</option>
                  <option value="330">التكاثر</option>
                  <option value="309">التكوير</option>
                  <option value="237">التوبة</option>
                  <option value="323">التين</option>
                  <option value="273">الجاثية</option>
                  <option value="290">الجمعة</option>
                  <option value="300">الجن</option>
                  <option value="297">الحاقة</option>
                  <option value="250">الحج</option>
                  <option value="243">الحجر</option>
                  <option value="277">الحجرات</option>
                  <option value="285">الحديد</option>
                  <option value="287">الحشر</option>
                  <option value="272">الدخان</option>
                  <option value="279">الذاريات</option>
                  <option value="283">الرحمن</option>
                  <option value="241">الرعد</option>
                  <option value="258">الروم</option>
                  <option value="271">الزخرف</option>
                  <option value="327">الزلزلة</option>
                  <option value="267">الزمر</option>
                  <option value="260">السجدة</option>
                  <option value="322">الشرح</option>
                  <option value="254">الشعراء</option>
                  <option value="319">الشمس</option>
                  <option value="270">الشورى</option>
                  <option value="265">الصافات</option>
                  <option value="289">الصف</option>
                  <option value="321">الضحى</option>
                  <option value="314">الطارق</option>
                  <option value="293">الطلاق</option>
                  <option value="280">الطور</option>
                  <option value="328">العاديات</option>
                  <option value="331">العصر</option>
                  <option value="324">العلق</option>
                  <option value="257">العنكبوت</option>
                  <option value="316">الغاشية</option>
                  <option value="229">الفاتحة</option>
                  <option value="276">الفتح</option>
                  <option value="317">الفجر</option>
                  <option value="253">الفرقان</option>
                  <option value="341">الفلق</option>
                  <option value="333">الفيل</option>
                  <option value="329">القارعة</option>
                  <option value="325">القدر</option>
                  <option value="256">القصص</option>
                  <option value="296">القلم</option>
                  <option value="282">القمر</option>
                  <option value="303">القيامة</option>
                  <option value="337">الكافرون</option>
                  <option value="246">الكهف</option>
                  <option value="336">الكوثر</option>
                  <option value="320">الليل</option>
                  <option value="251">المؤمنون</option>
                  <option value="233">المائدة</option>
                  <option value="335">الماعون</option>
                  <option value="286">المجادلة</option>
                  <option value="302">المدثر</option>
                  <option value="305">المرسلات</option>
                  <option value="301">المزمل</option>
                  <option value="339">المسد</option>
                  <option value="311">المطففين</option>
                  <option value="298">المعارج</option>
                  <option value="295">الملك</option>
                  <option value="288">الممتحنة</option>
                  <option value="291">المنافقون</option>
                  <option value="307">النازعات</option>
                  <option value="342">الناس</option>
                  <option value="306" selected="">النبأ</option>
                  <option value="281">النجم</option>
                  <option value="244">النحل</option>
                  <option value="232">النساء</option>
                  <option value="338">النصر</option>
                  <option value="255">النمل</option>
                  <option value="252">النور</option>
                  <option value="332">الهمزة</option>
                  <option value="284">الواقعة</option>
                  <option value="262">سبأ</option>
                  <option value="266">ص</option>
                  <option value="248">طه</option>
                  <option value="308">عبس</option>
                  <option value="268">غافر</option>
                  <option value="263">فاطر</option>
                  <option value="269">فصلت</option>
                  <option value="278">ق</option>
                  <option value="334">قريش</option>
                  <option value="259">لقمان</option>
                  <option value="275">محمد</option>
                  <option value="247">مريم</option>
                  <option value="299">نوح</option>
                  <option value="239">هود</option>
                  <option value="264">يس</option>
                  <option value="240">يوسف</option>
                  <option value="238">يونس</option>
                </select>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label>آية</label>
                <select class="form-control" disabled="disabled">
                  <option value="">اختيار</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label>إلى سورة</label>
                <select class="form-control" disabled="disabled">
                  <option value="">اختيار السورة</option>
                  <option value="231">آل عمران</option>
                  <option value="242">إبراهيم</option>
                  <option value="261">الأحزاب</option>
                  <option value="274">الأحقاف</option>
                  <option value="235">الأعراف</option>
                  <option value="315">الأعلى</option>
                  <option value="249">الأنبياء</option>
                  <option value="234">الأنعام</option>
                  <option value="236">الأنفال</option>
                  <option value="340">الإخلاص</option>
                  <option value="245">الإسراء</option>
                  <option value="304">الإنسان</option>
                  <option value="310">الإنفطار</option>
                  <option value="312">الانشقاق</option>
                  <option value="313">البروج</option>
                  <option value="230">البقرة</option>
                  <option value="318">البلد</option>
                  <option value="326">البينة</option>
                  <option value="294">التحريم</option>
                  <option value="292">التغابن</option>
                  <option value="330">التكاثر</option>
                  <option value="309">التكوير</option>
                  <option value="237">التوبة</option>
                  <option value="323">التين</option>
                  <option value="273">الجاثية</option>
                  <option value="290">الجمعة</option>
                  <option value="300">الجن</option>
                  <option value="297">الحاقة</option>
                  <option value="250">الحج</option>
                  <option value="243">الحجر</option>
                  <option value="277">الحجرات</option>
                  <option value="285">الحديد</option>
                  <option value="287">الحشر</option>
                  <option value="272">الدخان</option>
                  <option value="279">الذاريات</option>
                  <option value="283">الرحمن</option>
                  <option value="241">الرعد</option>
                  <option value="258">الروم</option>
                  <option value="271">الزخرف</option>
                  <option value="327">الزلزلة</option>
                  <option value="267">الزمر</option>
                  <option value="260">السجدة</option>
                  <option value="322">الشرح</option>
                  <option value="254">الشعراء</option>
                  <option value="319">الشمس</option>
                  <option value="270">الشورى</option>
                  <option value="265">الصافات</option>
                  <option value="289">الصف</option>
                  <option value="321">الضحى</option>
                  <option value="314">الطارق</option>
                  <option value="293">الطلاق</option>
                  <option value="280">الطور</option>
                  <option value="328">العاديات</option>
                  <option value="331">العصر</option>
                  <option value="324">العلق</option>
                  <option value="257">العنكبوت</option>
                  <option value="316">الغاشية</option>
                  <option value="229">الفاتحة</option>
                  <option value="276">الفتح</option>
                  <option value="317">الفجر</option>
                  <option value="253">الفرقان</option>
                  <option value="341">الفلق</option>
                  <option value="333">الفيل</option>
                  <option value="329">القارعة</option>
                  <option value="325">القدر</option>
                  <option value="256">القصص</option>
                  <option value="296">القلم</option>
                  <option value="282">القمر</option>
                  <option value="303">القيامة</option>
                  <option value="337">الكافرون</option>
                  <option value="246">الكهف</option>
                  <option value="336">الكوثر</option>
                  <option value="320">الليل</option>
                  <option value="251">المؤمنون</option>
                  <option value="233">المائدة</option>
                  <option value="335">الماعون</option>
                  <option value="286">المجادلة</option>
                  <option value="302">المدثر</option>
                  <option value="305">المرسلات</option>
                  <option value="301">المزمل</option>
                  <option value="339">المسد</option>
                  <option value="311">المطففين</option>
                  <option value="298">المعارج</option>
                  <option value="295">الملك</option>
                  <option value="288">الممتحنة</option>
                  <option value="291">المنافقون</option>
                  <option value="307">النازعات</option>
                  <option value="342" selected="">الناس</option>
                  <option value="306">النبأ</option>
                  <option value="281">النجم</option>
                  <option value="244">النحل</option>
                  <option value="232">النساء</option>
                  <option value="338">النصر</option>
                  <option value="255">النمل</option>
                  <option value="252">النور</option>
                  <option value="332">الهمزة</option>
                  <option value="284">الواقعة</option>
                  <option value="262">سبأ</option>
                  <option value="266">ص</option>
                  <option value="248">طه</option>
                  <option value="308">عبس</option>
                  <option value="268">غافر</option>
                  <option value="263">فاطر</option>
                  <option value="269">فصلت</option>
                  <option value="278">ق</option>
                  <option value="334">قريش</option>
                  <option value="259">لقمان</option>
                  <option value="275">محمد</option>
                  <option value="247">مريم</option>
                  <option value="299">نوح</option>
                  <option value="239">هود</option>
                  <option value="264">يس</option>
                  <option value="240">يوسف</option>
                  <option value="238">يونس</option>
                </select>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label>آية</label>
                <select class="form-control" disabled="disabled">
                  <option value="">اختيار</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-2 border-left">
              <div class="form-group">
                <div
                  class="
                    d-flex
                    align-center align-vertical-center
                    flex-start
                  "
                >
                  <div class="p-1">
                    <img src="/assets/build/images/save.png" alt="" />
                  </div>
                  <div class="p-1">
                    <span class="small-font">عدد السور</span
                    ><br /><span class="color-green large-font-1"
                      >59</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-2 border-left">
              <div class="form-group">
                <div
                  class="
                    d-flex
                    align-center align-vertical-center
                    flex-start
                  "
                >
                  <div class="p-1">
                    <img src="/assets/build/images/revetion.png" alt="" />
                  </div>
                  <div class="p-1">
                    <span class="small-font">عدد الأوجه</span
                    ><br /><span class="color-green large-font-1"
                      >24</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <div
                  class="
                    d-flex
                    align-center align-vertical-center
                    flex-start
                  "
                >
                  <div class="p-1">
                    <img src="/assets/build/images/latter.png" alt="" />
                  </div>
                  <div class="p-1">
                    <span class="small-font">عدد الأحرف</span
                    ><br /><span class="color-green large-font-1"
                      >600</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3"></div>
          </div>

          <div id="editCollapseRevetion1" class="collapse in">
            <div class="row">
              <div class="col-sm-2">
                <br /><br />
                <label>مراجعة كبرى</label>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label>من سورة</label>
                  <select
                    class="form-control"
                    disabled="disabled"
                  >
                    <option value="">اختيار السورة</option>
                    <option value="231">آل عمران</option>
                    <option value="242">إبراهيم</option>
                    <option value="261">الأحزاب</option>
                    <option value="274">الأحقاف</option>
                    <option value="235">الأعراف</option>
                    <option value="315">الأعلى</option>
                    <option value="249">الأنبياء</option>
                    <option value="234">الأنعام</option>
                    <option value="236">الأنفال</option>
                    <option value="340">الإخلاص</option>
                    <option value="245">الإسراء</option>
                    <option value="304">الإنسان</option>
                    <option value="310">الإنفطار</option>
                    <option value="312">الانشقاق</option>
                    <option value="313">البروج</option>
                    <option value="230">البقرة</option>
                    <option value="318">البلد</option>
                    <option value="326">البينة</option>
                    <option value="294">التحريم</option>
                    <option value="292">التغابن</option>
                    <option value="330">التكاثر</option>
                    <option value="309">التكوير</option>
                    <option value="237">التوبة</option>
                    <option value="323">التين</option>
                    <option value="273">الجاثية</option>
                    <option value="290">الجمعة</option>
                    <option value="300">الجن</option>
                    <option value="297">الحاقة</option>
                    <option value="250">الحج</option>
                    <option value="243">الحجر</option>
                    <option value="277">الحجرات</option>
                    <option value="285">الحديد</option>
                    <option value="287">الحشر</option>
                    <option value="272">الدخان</option>
                    <option value="279">الذاريات</option>
                    <option value="283">الرحمن</option>
                    <option value="241">الرعد</option>
                    <option value="258">الروم</option>
                    <option value="271">الزخرف</option>
                    <option value="327">الزلزلة</option>
                    <option value="267">الزمر</option>
                    <option value="260">السجدة</option>
                    <option value="322">الشرح</option>
                    <option value="254">الشعراء</option>
                    <option value="319">الشمس</option>
                    <option value="270">الشورى</option>
                    <option value="265">الصافات</option>
                    <option value="289">الصف</option>
                    <option value="321">الضحى</option>
                    <option value="314">الطارق</option>
                    <option value="293">الطلاق</option>
                    <option value="280">الطور</option>
                    <option value="328">العاديات</option>
                    <option value="331">العصر</option>
                    <option value="324">العلق</option>
                    <option value="257">العنكبوت</option>
                    <option value="316">الغاشية</option>
                    <option value="229">الفاتحة</option>
                    <option value="276">الفتح</option>
                    <option value="317">الفجر</option>
                    <option value="253">الفرقان</option>
                    <option value="341">الفلق</option>
                    <option value="333">الفيل</option>
                    <option value="329">القارعة</option>
                    <option value="325">القدر</option>
                    <option value="256">القصص</option>
                    <option value="296">القلم</option>
                    <option value="282">القمر</option>
                    <option value="303">القيامة</option>
                    <option value="337">الكافرون</option>
                    <option value="246">الكهف</option>
                    <option value="336">الكوثر</option>
                    <option value="320">الليل</option>
                    <option value="251">المؤمنون</option>
                    <option value="233">المائدة</option>
                    <option value="335">الماعون</option>
                    <option value="286">المجادلة</option>
                    <option value="302">المدثر</option>
                    <option value="305">المرسلات</option>
                    <option value="301">المزمل</option>
                    <option value="339">المسد</option>
                    <option value="311">المطففين</option>
                    <option value="298">المعارج</option>
                    <option value="295">الملك</option>
                    <option value="288">الممتحنة</option>
                    <option value="291">المنافقون</option>
                    <option value="307">النازعات</option>
                    <option value="342">الناس</option>
                    <option value="306" selected="">النبأ</option>
                    <option value="281">النجم</option>
                    <option value="244">النحل</option>
                    <option value="232">النساء</option>
                    <option value="338">النصر</option>
                    <option value="255">النمل</option>
                    <option value="252">النور</option>
                    <option value="332">الهمزة</option>
                    <option value="284">الواقعة</option>
                    <option value="262">سبأ</option>
                    <option value="266">ص</option>
                    <option value="248">طه</option>
                    <option value="308">عبس</option>
                    <option value="268">غافر</option>
                    <option value="263">فاطر</option>
                    <option value="269">فصلت</option>
                    <option value="278">ق</option>
                    <option value="334">قريش</option>
                    <option value="259">لقمان</option>
                    <option value="275">محمد</option>
                    <option value="247">مريم</option>
                    <option value="299">نوح</option>
                    <option value="239">هود</option>
                    <option value="264">يس</option>
                    <option value="240">يوسف</option>
                    <option value="238">يونس</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <label class="control-label">آية</label>
                  <select
                    class="form-control"
                    disabled="disabled"
                  >
                    <option value="">اختيار</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label>إلى سورة</label>
                  <select
                    class="form-control"
                    disabled="disabled"
                  >
                    <option value="">اختيار السورة</option>
                    <option value="231">آل عمران</option>
                    <option value="242">إبراهيم</option>
                    <option value="261">الأحزاب</option>
                    <option value="274">الأحقاف</option>
                    <option value="235">الأعراف</option>
                    <option value="315">الأعلى</option>
                    <option value="249">الأنبياء</option>
                    <option value="234">الأنعام</option>
                    <option value="236">الأنفال</option>
                    <option value="340">الإخلاص</option>
                    <option value="245">الإسراء</option>
                    <option value="304">الإنسان</option>
                    <option value="310">الإنفطار</option>
                    <option value="312">الانشقاق</option>
                    <option value="313">البروج</option>
                    <option value="230">البقرة</option>
                    <option value="318">البلد</option>
                    <option value="326">البينة</option>
                    <option value="294">التحريم</option>
                    <option value="292">التغابن</option>
                    <option value="330">التكاثر</option>
                    <option value="309">التكوير</option>
                    <option value="237">التوبة</option>
                    <option value="323">التين</option>
                    <option value="273">الجاثية</option>
                    <option value="290">الجمعة</option>
                    <option value="300">الجن</option>
                    <option value="297">الحاقة</option>
                    <option value="250">الحج</option>
                    <option value="243">الحجر</option>
                    <option value="277">الحجرات</option>
                    <option value="285">الحديد</option>
                    <option value="287">الحشر</option>
                    <option value="272">الدخان</option>
                    <option value="279">الذاريات</option>
                    <option value="283">الرحمن</option>
                    <option value="241">الرعد</option>
                    <option value="258">الروم</option>
                    <option value="271">الزخرف</option>
                    <option value="327">الزلزلة</option>
                    <option value="267">الزمر</option>
                    <option value="260">السجدة</option>
                    <option value="322">الشرح</option>
                    <option value="254">الشعراء</option>
                    <option value="319">الشمس</option>
                    <option value="270">الشورى</option>
                    <option value="265">الصافات</option>
                    <option value="289">الصف</option>
                    <option value="321">الضحى</option>
                    <option value="314">الطارق</option>
                    <option value="293">الطلاق</option>
                    <option value="280">الطور</option>
                    <option value="328">العاديات</option>
                    <option value="331">العصر</option>
                    <option value="324">العلق</option>
                    <option value="257">العنكبوت</option>
                    <option value="316">الغاشية</option>
                    <option value="229">الفاتحة</option>
                    <option value="276">الفتح</option>
                    <option value="317">الفجر</option>
                    <option value="253">الفرقان</option>
                    <option value="341">الفلق</option>
                    <option value="333">الفيل</option>
                    <option value="329">القارعة</option>
                    <option value="325">القدر</option>
                    <option value="256">القصص</option>
                    <option value="296">القلم</option>
                    <option value="282">القمر</option>
                    <option value="303">القيامة</option>
                    <option value="337">الكافرون</option>
                    <option value="246">الكهف</option>
                    <option value="336">الكوثر</option>
                    <option value="320">الليل</option>
                    <option value="251">المؤمنون</option>
                    <option value="233">المائدة</option>
                    <option value="335">الماعون</option>
                    <option value="286">المجادلة</option>
                    <option value="302">المدثر</option>
                    <option value="305">المرسلات</option>
                    <option value="301">المزمل</option>
                    <option value="339">المسد</option>
                    <option value="311">المطففين</option>
                    <option value="298">المعارج</option>
                    <option value="295">الملك</option>
                    <option value="288">الممتحنة</option>
                    <option value="291">المنافقون</option>
                    <option value="307">النازعات</option>
                    <option value="342" selected="">الناس</option>
                    <option value="306">النبأ</option>
                    <option value="281">النجم</option>
                    <option value="244">النحل</option>
                    <option value="232">النساء</option>
                    <option value="338">النصر</option>
                    <option value="255">النمل</option>
                    <option value="252">النور</option>
                    <option value="332">الهمزة</option>
                    <option value="284">الواقعة</option>
                    <option value="262">سبأ</option>
                    <option value="266">ص</option>
                    <option value="248">طه</option>
                    <option value="308">عبس</option>
                    <option value="268">غافر</option>
                    <option value="263">فاطر</option>
                    <option value="269">فصلت</option>
                    <option value="278">ق</option>
                    <option value="334">قريش</option>
                    <option value="259">لقمان</option>
                    <option value="275">محمد</option>
                    <option value="247">مريم</option>
                    <option value="299">نوح</option>
                    <option value="239">هود</option>
                    <option value="264">يس</option>
                    <option value="240">يوسف</option>
                    <option value="238">يونس</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <label>آية</label>
                  <select
                    class="form-control"
                    disabled="disabled"
                  >
                    <option value="">اختيار</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-2 border-left">
                <div class="form-group">
                  <div
                    class="
                      d-flex
                      align-center align-vertical-center
                      flex-start
                    "
                  >
                    <div class="p-1">
                      <img src="/assets/build/images/save.png" alt="" />
                    </div>
                    <div class="p-1">
                      <span class="small-font">عدد السور</span
                      ><br /><span
                        class="color-green large-font-1"
                        >59</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2 border-left">
                <div class="form-group">
                  <div
                    class="
                      d-flex
                      align-center align-vertical-center
                      flex-start
                    "
                  >
                    <div class="p-1">
                      <img
                        src="/assets/build/images/revetion.png"
                        alt=""
                      />
                    </div>
                    <div class="p-1">
                      <span class="small-font">عدد الأوجه</span
                      ><br /><span
                        class="color-green large-font-1"
                        >24</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <div
                    class="
                      d-flex
                      align-center align-vertical-center
                      flex-start
                    "
                  >
                    <div class="p-1">
                      <img src="/assets/build/images/latter.png" alt="" />
                    </div>
                    <div class="p-1">
                      <span class="small-font">عدد الأحرف</span
                      ><br /><span
                        class="color-green large-font-1"
                        >600</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3"></div>
            </div>
          </div>
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
  <!-- End Edit Model -->
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  
}
</script>