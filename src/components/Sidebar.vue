<template>
  <div class="left_col scroll-view">
    <img class="logo" src="/assets/build/images/logo.png" />

    <div class="clearfix"></div>

    <br />

    <!-- sidebar menu -->
    <div
      id="sidebar-menu"
      class="main_menu_side hidden-print main_menu"
    >
      <div class="menu_section">
        <ul class="nav side-menu">
          <li>
            <a href="#"
              ><img src="/assets/build/images/menu-home.png" />الصفحة
              الرئيسية</a
            >
          </li>

          <li class="customDropdown">
            <a v-b-toggle.collapse-1 variant="primary"><img src="/assets/build/images/menu-settings.png" />اعدادات النظام</a>
            <b-collapse id="collapse-1">
              <b-card>
                <ul style="list-style:none; padding: 10px">
                  <li>
                    <a href="#"><i class="fa fa-circle"></i> الدول</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-circle"></i> المناطق</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-circle"></i> الأحياء</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-circle"></i> الجنسيات</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-circle"></i> الأوقات</a>
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </li>
          
          <li>
            <a href="#"
              ><img
                src="/assets/build/images/menu-teacher.png"
              />المعلمين/ـات</a
            >
          </li>
          <li>
            <a href="#"
              ><img src="/assets/build/images/menu-episode.png" />الحلقات</a
            >
          </li>
          <li class="active">
            <a href="#"
              ><img src="/assets/build/images/menu-user.png" />الطلاب/ـات</a
            >
          </li>
          <li>
            <a href="#"
              ><img src="/assets/build/images/menu-timer.png" />التقويم
              الدراسي</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- /sidebar menu -->

    <!-- /menu footer buttons -->
    <div class="sidebar-footer hidden-small" style="visibility: hidden">
      <a data-toggle="tooltip" data-placement="top" title="إعدادات">
        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
      </a>
      <a
        data-toggle="tooltip"
        data-placement="top"
        title="تكبير الشاشة"
      >
        <span
          class="glyphicon glyphicon-fullscreen toggle-fullscreen"
          aria-hidden="true"
        ></span>
      </a>
      <a data-toggle="tooltip" data-placement="top" title="مقفل">
        <span
          class="glyphicon glyphicon-eye-close"
          aria-hidden="true"
        ></span>
      </a>
      <a
        href="#"
        data-toggle="tooltip"
        data-placement="top"
        title="الخروج"
      >
        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
      </a>
    </div>
    <!-- /menu footer buttons -->
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  
}
</script>