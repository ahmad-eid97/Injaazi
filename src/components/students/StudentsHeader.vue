<template>
  <div>
    <div class="studentsHeader row">
        <div class="col-lg-12">
            <h4 class="topLabel" style="color: #73879c;">الطلاب / الطالبات - <span class="color-green">حلقة تجويد القراءة</span></h4>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <ul class="nav nav-tabs nav-tabs-custom row">
                <li class="active col-lg-3 col-md-3 phoneDisapear"><a data-toggle="tab" style="padding: 15px 0" href="#student-home" class="all">الكل</a></li>
                <li class="col-lg-3 col-md-3 phoneDisapear">
                    <a data-toggle="tab" href="#student-menu1"  style="padding: 15px 0">فعال <span class="span250">250</span></a>
                </li>
                <li class="col-lg-3 col-md-3 phoneDisapear">
                    <a data-toggle="tab" href="#student-menu2"  style="padding: 15px 0">توقف مؤقت <span class="span10">10</span></a>
                </li>
                <li class="col-lg-3 col-md-3 text-left">
                    <button class="btn btn-primary tasjil pc-nav-btn ml-2 mt-1" data-toggle="modal" data-target="#registerNewModal" type="button" @click="showNewRegModal = true">تسجيل جديد</button>
                </li>
                
                <!-- NEW REGISTERATION MODAL -->
                <b-modal v-model="showNewRegModal">
                    <newRegisteration></newRegisteration>
                </b-modal>

            </ul>
        </div>

        <div class="col-lg-12">
            <button @click="showNewRegModal = true" type="button" class="btn btn-primary tasjil mobile-nav-btn" style="width:100%;margin-right:0">تسجيل جديد</button>
        </div>
    </div>
  </div>
</template>

<script>
import newRegisteration from './modals/NewRegisteration.vue'

export default {
    data() {
        return {
            showNewRegModal: false,
        }
    },
    components: {
        newRegisteration
    }
}
</script>