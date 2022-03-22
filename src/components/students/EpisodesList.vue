<template>
  <div class="episodesList">
    <div class="row mb-0">
        <div class="col-lg-10">
            <h4>الحلقات</h4>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12" style="margin-top:20px">

            <carousel :per-page-custom=[[0,1],[500,2],[1000,3],[1400,5]] :rtl="true" :paginationEnabled="true" autoplayDirection="forward" :scrollPerPage="false" class="owl-carousel owl-carousel-episode owl-theme" ref="carousel">

                <slide>
                    <div class="item">
                        <input name="episode" type="radio" id="episode-0" />
                        <label for="episode-0">
                            <div class="info-box" style="height:153px">
                                <div class="mid-logo-icon" style="margin-top:-40px">
                                    <span><img src="../../../public/assets/build/images/mid-logo-icon.png" /></span>
                                </div>
                                <div class="mid-text1">
                                    <h4>كل الحلقات</h4>
                                    <h1 class="timg large-font-4">

                                        <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                        <!-- <img src="../../../public/assets/build/images/c-user.png" /> 35 -->
                                        35
                                        <span class="text">حلقه</span>  
                                        |
                                        <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                        <!-- <img src="../../../public/assets/build/images/c-user.png" /> 35 -->
                                        35
                                        <span class="text">طالب/ة</span>
                                    </h1>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </label>
                    </div>
                </slide>

                <slide>
                    <div class="item">
                        <input name="episode" type="radio" id="episode-1" />
                        <label for="episode-1">
                            <div class="info-box">
                                <div class="mid-left">
                                    <h6><span>العصر</span></h6>
                                </div>
                                <div class="mid-logo-icon">
                                    <span><img src="../../../public/assets/build/images/mid-logo-icon.png" /></span>
                                </div>
                                <div class="mid-text1">
                                    <h4>حلقة أ / أحمد حجازي</h4>
                                    <h6>أ.حمزة الشاطري</h6>
                                    <div class="episode-footer">
                                        <h1 class="timg">

                                            <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                            <!-- <img src="../../../public/assets/build/images/c-user.png" /> 35 -->
                                            35
                                            <span class="text">طالب/ة</span>
                                        </h1>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </label>
                    </div>
                </slide>

                <slide>
                    <div class="item">
                        <input name="episode" type="radio" id="episode-2" />
                        <label for="episode-2">
                            <div class="info-box">
                                <div class="mid-left">
                                    <h6><span>العصر</span></h6>
                                </div>
                                <div class="mid-logo-icon">
                                    <span><img src="../../../public/assets/build/images/mid-logo-icon.png" /></span>
                                </div>
                                <div class="mid-text1">
                                    <h4>حلقة أ / أحمد حجازي</h4>
                                    <h6>أ.حمزة الشاطري</h6>
                                    <div class="episode-footer">
                                        <h1 class="timg">

                                            <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                            35
                                            <span class="text">طالب/ة</span>
                                        </h1>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </label>
                    </div>
                </slide>

                <slide>
                    <div class="item">
                        <input name="episode" type="radio" id="episode-3" />
                        <label for="episode-3">
                            <div class="info-box">
                                <div class="mid-left">
                                    <h6><span>العصر</span></h6>
                                </div>
                                <div class="mid-logo-icon">
                                    <span><img src="../../../public/assets/build/images/mid-logo-icon.png" /></span>
                                </div>
                                <div class="mid-text1">
                                    <h4>حلقة أ / أحمد حجازي</h4>
                                    <h6>أ.حمزة الشاطري</h6>
                                    <div class="episode-footer">
                                        <h1 class="timg">

                                            <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                            35
                                            <span class="text">طالب/ة</span>
                                        </h1>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </label>
                    </div>
                </slide>

                <slide>
                    <div class="item">
                        <input name="episode" type="radio" id="episode-4" />
                        <label for="episode-4">
                            <div class="info-box">
                                <div class="mid-left">
                                    <h6><span>العصر</span></h6>
                                </div>
                                <div class="mid-logo-icon">
                                    <span><img src="../../../public/assets/build/images/mid-logo-icon.png" /></span>
                                </div>
                                <div class="mid-text1">
                                    <h4>حلقة أ / أحمد حجازي</h4>
                                    <h6>أ.حمزة الشاطري</h6>
                                    <div class="episode-footer">
                                        <h1 class="timg">

                                            <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                            35
                                            <span class="text">طالب/ة</span>
                                        </h1>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </label>
                    </div>
                </slide>

                <slide>
                    <div class="item">
                        <input name="episode" type="radio" id="episode-5" />
                        <label for="episode-5">
                            <div class="info-box">
                                <div class="mid-left">
                                    <h6><span>العصر</span></h6>
                                </div>
                                <div class="mid-logo-icon">
                                    <span><img src="../../../public/assets/build/images/mid-logo-icon.png" /></span>
                                </div>
                                <div class="mid-text1">
                                    <h4>حلقة أ / أحمد حجازي</h4>
                                    <h6>أ.حمزة الشاطري</h6>
                                    <div class="episode-footer">
                                        <h1 class="timg">

                                            <a href="#"><img class="group4107 share" src="../../../public/assets/build/images/Group4107.png" /></a>

                                            35
                                            <span class="text">طالب/ة</span>
                                        </h1>
                                    </div>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </label>
                    </div>
                </slide>
                
                <slide>
                    <div class="item" @click="showNewEpisModal = true">
                        <a href="#">
                            <div class="info-box plustop2">
                                <div class="plusbtn">
                                    <img src="../../../public/assets/build/images/plus.png" />
                                    <h5>إضافة حلقة جديدة</h5>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </a>
                    </div>
                </slide>

            </carousel>

        </div>

        <!-- Add New Episode -->
        <b-modal v-model="showNewEpisModal">
            <newEpisode></newEpisode>
        </b-modal>
        <!-- End New Episode -->

    </div>
  </div>
</template>

<script>
import newEpisode from './modals/NewEpisode.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
    data() {
        return {
            showNewEpisModal: false,
            specificCarouselSlide: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.carousel.goToPage(this.$refs.carousel.currentPage + 2);
        }, 10)
    },
    components: {
        newEpisode,
        Carousel,
        Slide
    }
}
</script>

<style scoped lang="scss">
.VueCarousel::v-deep {
  .VueCarousel-pagination {
    height: 20px;
    .VueCarousel-dot-container {
        margin-top: 0 !important;
        button {
            margin: 0 !important;
            &.VueCarousel-dot {
                background-color: #ccc !important;
            }
            &.VueCarousel-dot--active {
                background-color: #5A8D20 !important;
            }
        }
    }
  }
}
.VueCarousel-navigation-next {
  display: none !important;
}
</style>