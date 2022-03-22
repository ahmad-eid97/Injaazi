<template>
  <div class="manager" tabindex="-1" role="dialog" aria-labelledby="managerModal" aria-hidden="true">
    <div class="inside">
        <div class="manager-content">
            <div class="manager-header">
                <h4 class="modal-title text-center" id="myModalLabel">مشرف /ة منشأة</h4>
                <h5 class="modal-title text-center color-green">محمد خالد سعد</h5>
            </div>
            <div class="manager-body">
                <form>
                    <input class="hidden" id="profieImage" type="file" name="profile" @change="changeImage($event)" />
                    <div>
                        <div class="cropping" v-if="showCropper">
                            <div class="cropCompo">
                                <vue-cropper
                                class="cropper"
                                ref="cropper"
                                :src="managerImage"
                                alt="Source Image"
                                >
                                </vue-cropper>
                                <div class="cropActions text-left">
                                    <button
                                        @click.prevent="cancelCrop"
                                        class="cancel"
                                    >
                                        الغاء
                                    </button>
                                    <button
                                        @click.prevent="cropImage"
                                        class="crop"
                                    >
                                        تعيين
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="user">
                                <label class="cursor-pointer" for="profieImage">
                                    <img class="proImage" v-if="managerImage" :src="managerImage" />
                                    <img v-if="!managerImage" src="../../../../public/assets/img/user.png" />
                                </label>
                                <h5 style="color: #8191a5;">إضافة صورة شخصية</h5>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-lg-6">
                                    <label>الدولة</label>
                                    <select name="staffname4" class="form-control">
                                        <option value="">اختيار</option>
                                        <option value="31"> 🇿🇼 أمريكا</option>
                                        <option value="26"> 🇿🇲 أندونيسيا</option>
                                        <option value="35"> 🇿🇦 استراليا</option>
                                    </select>
                                </div>
                                <div class="col-lg-6">
                                    <label>اسم المستخدم</label>
                                    <input type="text" name="staffname4" placeholder="رقم الهوية مثلا" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>الاسم </label>
                                    <input type="text" name="staffname4" class="form-control" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label>رقم الجوال </label>
                                    <input type="text" name="staffname4" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>البريد الالكتروني</label>
                                    <input type="text" name="staffname4" class="form-control" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>معلومات اضافية</label>
                                    <textarea type="text" name="staffname4" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>الجنس</label>
                            <div class="input-custom-group">
                                <div class="">
                                    <div class="radio">
                                        <label for="genderCheck1">
                                            <input name="program" type="radio" id="genderCheck1" />
                                            <div class="">
                                                <span>ذكر</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="radio">
                                        <label for="genderCheck2">
                                            <input name="program" type="radio" id="genderCheck2" />
                                            <div class="">
                                                <span>انثى</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <label style="margin:10px 0" for="">الجهات</label>
                                <div class="form-group">
                                    <div class="checkbox-group checkbox-group-agency">
                                        <div class="">
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck-1">
                                                        <input class="check-all" type="checkbox" id="managerCheck-1" autocomplete="off" />
                                                        <div class="white-space-no">
                                                            <span>الجميع</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck-2">
                                                        <input type="checkbox" id="managerCheck-2" />
                                                        <div class="white-space-no">
                                                            <span>مكتب بقيق</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck-3">
                                                        <input type="checkbox" id="managerCheck-3" />
                                                        <div class="white-space-no">
                                                            <span> مكتب الخبر</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck-4">
                                                        <input type="checkbox" id="managerCheck-4" />
                                                        <div class="white-space-no">
                                                            <span>مكتب الشرقية</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <label style="margin:10px 0" for="">الفروع / المراكز</label>
                                <div class="form-group">
                                    <div class="checkbox-group checkbox-group-center">
                                        <div class="">
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck13">
                                                        <input class="check-all" type="checkbox" id="managerCheck13" autocomplete="off" />
                                                        <div class="white-space-no">
                                                            <span>الجميع</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck14">
                                                        <input type="checkbox" id="managerCheck14" />
                                                        <div class="white-space-no">
                                                            <span>مكتب بقيق</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck15">
                                                        <input type="checkbox" id="managerCheck15" />
                                                        <div class="white-space-no">
                                                            <span> مكتب الخبر</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck16">
                                                        <input type="checkbox" id="managerCheck16" />
                                                        <div class="white-space-no">
                                                            <span>مكتب الشرقية</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <label style="margin:10px 0" for="">المنشآت التعليمية</label>
                                <div class="form-group">
                                    <div class="checkbox-group checkbox-group-educational">
                                        <div class="">
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck17">
                                                        <input class="check-all" type="checkbox" id="managerCheck17" autocomplete="off" />
                                                        <div class="white-space-no">
                                                            <span>الجميع</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck18">
                                                        <input type="checkbox" id="managerCheck18" />
                                                        <div class="white-space-no">
                                                            <span>مسجد ابن عثيمين</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck19">
                                                        <input type="checkbox" id="managerCheck19" />
                                                        <div class="white-space-no">
                                                            <span>مسجد ابن تيمية في الظهران</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck20">
                                                        <input type="checkbox" id="managerCheck20" />
                                                        <div class="white-space-no">
                                                            <span>جامع أبو موسى الأشعري</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <label style="margin:10px 0" for="">الحلقات</label>
                                <div class="form-group">
                                    <div class="checkbox-group checkbox-group-episodes">
                                        <div class="">
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck21">
                                                        <input class="check-all" type="checkbox" id="managerCheck21" autocomplete="off" />
                                                        <div class="white-space-no">
                                                            <span>الجميع</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck22">
                                                        <input type="checkbox" id="managerCheck22" />
                                                        <div class="white-space-no">
                                                            <span>مسجد ابن عثيمين</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck23">
                                                        <input type="checkbox" id="managerCheck23" />
                                                        <div class="white-space-no">
                                                            <span>مسجد ابن تيمية في الظهران</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="checkbox">
                                                    <label for="managerCheck24">
                                                        <input type="checkbox" id="managerCheck24" />
                                                        <div class="white-space-no">
                                                            <span>جامع أبو موسى الأشعري</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-primary btn3 m-0"><i class="fa fa-check"></i> إضافة</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
    name: 'supervisors',
    data() {
        return {
            managerImage: '',
            showCropper: false
        }
    },
    methods: {
        changeImage(e) {
            this.managerImage = URL.createObjectURL(e.target.files[0])
            this.showCropper = true
        },
        cropImage() {
            this.managerImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
            this.showCropper = false
        },
        cancelCrop() {
            this.showCropper = false
        }
    },
    components: {
        VueCropper
    }
}
</script>