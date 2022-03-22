<template>
  <div class="top_nav hidden-print">
    <div class="nav_menu m-0">
      <nav>
        <div class="nav toggle">
          <a id="menu_toggle"
            ><img src="/assets/build/images/bars.png" alt=""
          /></a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li class="mainDrop">
            <a
              href="javascript:;"
              class="user-profile dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="d-flex flex-start align-vertical-center">
                <div class="">
                  <img src="/assets/build/images/Polygon-white.png" alt="" />
                  <img
                    class="user-avatar"
                    src="/assets/build/images/user.png"
                    alt=""
                  />
                </div>
                <div class="min-width-100">
                  <div class="small-font">مرحبا بك</div>
                  <div>عبدالله الثنيان</div>
                </div>
              </div>
            </a>
            <ul
              class="
                dropdown-menu dropdown-usermenu
                pull-right
                border-radius-none
              "
            >
              <div class="user-profile-menu">
                <div class="body">
                  <div class="row m-0 p-2">
                    <div class="col-xs-4">
                      <img
                        class="border-circle img-responsive"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-8" style="padding-right:0px">
                      <h4>عبد الله الثنيان</h4>
                      <span>مشرف منشأة تعليمية</span>
                    </div>
                  </div>
                  <hr class="boder-bottom-2" />
                  <div class="permission-type">
                    <span>مدير النظام</span>
                  </div>
                  <div class="permission-type">
                    <span>مشرف جهه</span>
                  </div>
                  <div class="permission-type">
                    <span>مشرف مركز</span>
                  </div>
                </div>
                <div class="footer">
                  <div class="d-flex align-vertical-center">
                    <div class="p-1 border-left-2">
                      <div class="text-center">
                        <div>
                          <img
                            src="/assets/build/images/user-profile.png"
                            alt=""
                          />
                        </div>
                        <div class="p-1">
                          <span>الملف الشخصي</span><br />
                          <span class="small-font color-green"
                            >مدير النظام</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="p-1 border-left-2">
                      <div class="text-center">
                        <div>
                          <img src="/assets/build/images/password.png" alt="" />
                        </div>
                        <div class="p-1">
                          <span>كلمة المرور</span><br />
                          <span class="small-font color-green"
                            >ينصح بتغييرها باستمرار</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="p-1">
                      <div class="text-center">
                        <div>
                          <img src="/assets/build/images/logout.png" alt="" />
                        </div>
                        <div class="p-1">
                          <span>خروج</span><br />
                          <span class="small-font color-green"
                            >متصل منذ 30د</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li
            role="presentation"
            class="dropdown message bell text-center mt-1"
          >
            <a
              href="javascript:;"
              class="dropdown-toggle info-number"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-bell"></i>
              <span class="user-notification badge bg-green">6</span>
            </a>
          </li>

          <li role="presentation" class="dropdown message text-center mt-1" @click="goDown">
            <a href="javascript:;" class="info-number message_toggle">
              <img class="message-img" src="/assets/build/images/message.png" />
              <span class="user-notification badge bg-green">6</span>
            </a>
            <div class="dropdown-message">
              <div class="message-sender">
                <img src="/assets/build/images/user.png" alt="" />
                <h4>عبد الله بن عباس</h4>
                <span class="color-green">مشرف مؤسسة</span>
              </div>
              <div class="message-details">
                <div class="message-header">
                  <img src="/assets/build/images/user.png" alt="" />
                  <span class="large-font-3 p-1 color-green"
                    >عبد الله بن عباس</span
                  >
                </div>

                <div class="message-body">
                  <!-- YOU CAN ADD 'autoplay' and 'muted' ATTRIBUTES INSIDE THE AUDIO TAG -->
                  <audio controls>
                    <source src="../../public/assets/build/audio/messageNotification.wav" type="audio/wav">
                  </audio>
                  <div class="from">
                    <div class="">
                      <span class="message-text"
                        >السلام عليكم ورحمه الله</span
                      ><br />
                      <span class="message-time">09:30 AM</span>
                    </div>
                  </div>
                  <div class="to">
                    <div class="">
                      <span class="message-text"
                        >وعليكم السلام ورحمه الله</span
                      ><br />
                      <span class="message-time">09:36 AM</span>
                    </div>
                  </div>
                  <div class="to">
                    <div class="">
                      <span class="message-text">حياك الله</span><br />
                      <span class="message-time">09:36 AM</span>
                    </div>
                  </div>
                  <div class="from">
                    <div class="">
                      <span class="message-text">استفسار حول الموضوع</span
                      ><br />
                      <span class="message-time">09:30 AM</span>
                    </div>
                  </div>
                  <div class="to">
                    <div class="">
                      <span class="message-text">اتفضل</span><br />
                      <span class="message-time">09:36 AM</span>
                    </div>
                  </div>
                  <div class="from">
                    <div class="">
                      <span class="message-text">
                        قارئ [ مفرد ] : ج قارئون وقرأة وقراء : اسم فاعل من
                        قرأ ° القراء السبعة : نافع وابن كثير وأبو عمرو
                        وابن عامر وعاصم وحمزة والكسائي من قراء القرآن
                        المشهورين - بريد القراء : باب في صحيفة أو مجلة
                        ينشر فيه رسائل القراء وقد يرد عليها - جمهور القراء
                        : مجموع الناس الذين يقرأون الكتب والمجلات وغيرها
                        في مجتمع ما - عزيزي القارئ : عبارة يستعملها الصحفي
                        أو الكاتب لمخاطبة القارئ - قارئ الكف : من يتكهن
                        بالمستقبل وذلك بالنظر في خطوط باطن الكف وتفسيرها .
                      </span>
                      <br />
                      <span class="message-time">09:30 AM</span>
                    </div>
                  </div>
                  <div class="from">
                    <div class="fileReview">
                        <span class="message-text">
                        <i class="fas fa-file-alt"></i>
                        this is file preview
                      </span>
                    </div>
                  </div>
                  <div class="from">
                    <div class="fileReview">
                        <img src="/assets/build/images/user.png" alt="">
                    </div>
                  </div>
                </div>

                <div class="preview" v-if="showPreview">
                  <div class="filePreview">
                    <img src="/assets/build/images/user.png" alt="">
                  </div>
                  <span class="fName">{{fileName}}</span>
                  <i class="fas fa-times"></i>
                </div>
                <div class="message-write">
                  <div class="row">
                    <div class="col-xs-8">
                      <input type="text" placeholder="أكتب .." />
                    </div>
                    <div class="col-xs-4">
                      <button class="light" @click="clickSelectFile">
                        <input type="file" id="selectFile" style="display: none" @change="fileSelected($event)">
                        <i class="fa fa-paperclip"></i>
                      </button>
                      <button class="light" @click="clickSelectImage">
                        <input type="file" id="selectImage" style="display: none" @change="fileSelected($event)">
                        <i class="fas fa-camera"></i>
                      </button>
                      <button class="">
                        <i class="fa fa-arrow-left"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown-message-content">
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row p-3">
                    <div class="col-xs-2">
                      <img
                        class="mail-avatar"
                        src="/assets/build/images/user.png"
                        alt=""
                      />
                    </div>
                    <div class="col-xs-10 text-right">
                      <span class="large-font-4">عبد الله بن عباس</span>
                      <span class="pull-left"
                        ><img
                          src="/assets/build/images/menu-timer10x10.png"
                          alt=""
                        />
                        <span class="color-light small-font"
                          >15-11-2020</span
                        ></span
                      ><br />
                      <div class="color-light text-justify small-font">
                        يحتاج المستخدم في كثيرٍ من الأحيان إلى استخدام
                        <span class="message-count pull-left">34</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="lang-chooser phoneDisapear">
            <select class="form-control">
              <option>AR</option>
              <option>EN</option>
            </select>
          </li>

          <li class="search-box phoneDisapear mt-2">
            <div class="form-group has-feedback has-search">
              <span
                class="glyphicon glyphicon-search form-control-feedback"
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="بحث "
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      showPreview: false,
      fileName: '',
      file: ''
    }
  },
  mounted() {
  },
  methods: {
    clickSelectImage() {
      document.getElementById('selectImage').click()
    },
    clickSelectFile() {
      document.getElementById('selectFile').click()
    },
    fileSelected(e) {
      this.showPreview = true
      // YOU CAN EASILY TAKE FILE NAME FROM TARGETTING => 'e'
      console.log(e.target.files[0])
      this.fileName = e.target.files[0].name;
    },
    goDown() {
      var element = document.querySelector('.message-body');
      element.scrollTop = element.scrollHeight
    }
  }
}
</script>