<template>
    <div name="notifi-modal" :height="'auto'" :adaptive="true" :focusTrap=true :clickToClose=false  :shiftY="0.09">
        <div class="modal-header">
            <!-- <button type="button" class="close" @click="$modal.hide('notifi-modal')">❌</button> -->
            <h4 class="modal-title text-center" id="myModalLabel">إرسال إشعار</h4>
            <h5 class="modal-title text-center color-green"><span>المستلمين</span> <span>23</span></h5>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="message">الرسالة</label>
                <textarea v-model="message" id="message" class="form-control editor"></textarea>
            </div>
            <div class="form-group">
                <label for="attachments">المرفقات</label>
                <input type="file" style="display:none">
                <div class="fileReviewInNotification">
                    <i class="fa fa-upload"></i>
                    <span>قم برفع الملفات هنا</span>
                </div>
            </div>
            <div>
                <div class="input-custom-group">
                    <div class="">
                        <div class="radio">
                            <label for="message_type_1">
                                <input name="message_type" type="radio" id="message_type_1" checked>
                                <div class="">
                                    <span>رسالة خاصة</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="">
                        <div class="radio">
                            <label for="message_type_2">
                                <input name="message_type" type="radio" id="message_type_2">
                                <div class="">
                                    <span>إشعار</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="">
                        <div class="radio">
                            <label for="message_type_3">
                                <input name="message_type" type="radio" id="message_type_3">
                                <div class="">
                                    <span>رسالة وإشعار</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer text-center" id="registerInformationFooter">
            <div class="text-center">
                <button type="button" class="btn btn-primary btn3"><i class="fa fa-check"></i> ارسال</button>
            </div>
        </div>
  </div>
</template>
<script>
// import db from './../../../../../../../resources/js/firebase'
// import auth from './../../../../../../../resources/js/auth'
// import { MultiSelect } from 'vue-search-select'
export default {
    props:['selected_ids','teachers'],
    data () {
      return {
        searchText: '', // If value is falsy, reset searchText & searchItem
        lastSelectItem: {},
        items:[],
        message:null,
        user:[],
        options: []
      }
    },
    // methods: {
    //   onSelect (items, lastSelectItem) {
    //     this.items = items
    //     this.lastSelectItem = lastSelectItem
    //   },
    //   // deselect option
    //   reset () {
    //     this.items = [] // reset
    //   },
    //   // select option from parent component
    //   selectFromParentComponent () {
    //     this.items = _.unionWith(this.items, [this.options[0]], _.isEqual)
    //   },
    //   sendNotification(){
    //     this.items.forEach(item => {
    //         db.collection('messages').add({
    //         createdAt: new Date(),
    //         content: this.message,
    //         sender_id: this.user.id,
    //         reciver_id: item.id,
    //         seen:false
    //         })
    //     });
    //     swal({
    //         title: "",
    //         text: 'تم ارسال الاشعارت لكل المعلمين المختارين بنجاح',
    //         icon: "success",
    //         timer:2000,
    //         buttons:false
    //     });
    //     this.$modal.hide('notifi-modal')
    //   }
    // },
    // components: {
    //   MultiSelect
    // },
    // computed:{
    //     options(){
    //         return this.teachers.map(teacher=>({value:teacher.id,text:teacher.name}))
    //     }
    // },
    // watch:{
    //     selected_ids(){
    //         auth.getUser()
    //         .then(res=>{
    //             this.user = res.data.user
    //         })
    //         this.items = this.teachers.filter(teacher=>this.selected_ids.includes(teacher.id)).map(teacher=>({value:teacher.id,text:teacher.name,id:teacher.id}))
    //     }
    // }
}
</script>
