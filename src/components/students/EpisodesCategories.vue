<template>
  <div>
    <div class="row phoneDisapear">
        <div class="topheader">
            <h6><img src="../../../public/assets/build/images/home-icon.png" /> / الطلاب - الطالبات</h6>
        </div>
    </div>
    <div class="row phoneDisapear">
        <div class="col-lg-12">
            <h4 style="color: #73879c;">تصنيف الحلقات</h4>
            <div class="category" id="category">
            
                <carousel :per-page-custom=[[0,1],[500,2],[1000,3],[1500,5]] :rtl="true" :paginationEnabled="false" autoplayDirection="forward" :scrollPerPage="false">

                    <slide>
                        <div class="item">
                            <input class="without-category" id="category-0" type="checkbox" autocomplete="off" />
                            <label for="category-0">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">تحديد الكل</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 150 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 590 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-1" type="checkbox" autocomplete="off" />
                            <label for="category-1">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">صيفي</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-2" type="checkbox" autocomplete="off" />
                            <label for="category-2">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">كبار السن</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-3" type="checkbox" autocomplete="off" />
                            <label for="category-3">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">مدارس</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-4" type="checkbox" autocomplete="off" />
                            <label for="category-4">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">تجويد القراءة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-5" type="checkbox" autocomplete="off" />
                            <label for="category-5">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">صيفي</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-6" type="checkbox" autocomplete="off" />
                            <label for="category-6">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">صيفي</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                    <slide>
                        <div class="item">
                            <input id="category-7" type="checkbox" autocomplete="off" />
                            <label for="category-7">
                                <div class="">
                                    <span class="check"><i class="fa fa-check"></i></span>
                                    <span class="title">صيفي</span>
                                    <span class="small"><img src="../../../public/assets/build/images/small-user.png" alt="" /> 50 حلقة</span>
                                    <span class="small"><img src="../../../public/assets/build/images/Group 4104.png" alt="" /> 50 طالب/ة</span>
                                </div>
                            </label>
                        </div>
                    </slide>

                </carousel>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped lang="scss">
</style>