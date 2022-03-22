/* Fullscreen */
$('.toggle-fullscreen').click(function() {
    $(document).toggleFullScreen();
  });
  
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  
  $(function(){
        'use strict'
  
        // Datepicker
        $('.fc-datepicker').datepicker({
          showOtherMonths: true,
          selectOtherMonths: true
        });
        
  
      });
  
  $(document).ready(function(){
     $('.loader').css({ 'display': 'none' });
    $('[data-toggle="popover"]').popover();
  
    /* Minor revision */
    $("body").on("click", '#plusMin', function(){
        $('#leasonNumberMin').val( +$('#leasonNumberMin').val()+1 );
        $('#minResult').html( $('#leasonNumberMin').val() );
    })
    $("body").on("click", '#minusMin', function(){
        if(+$('#leasonNumberMin').val()>0 ){
            $('#leasonNumberMin').val( +$('#leasonNumberMin').val()-1 );
            $('#minResult').html( $('#leasonNumberMin').val() );
        }
    })
    /* The Great revision*/
    $("body").on('click', '#plusMax', function(){
        $('#leasonNumberMax').val( +$('#leasonNumberMax').val()+1 );
        $('#maxResult').html( +$('#leasonNumberMax').val() );
    })
  
    $("body").on("click", '#minusMax', function(){
        if(+$('#leasonNumberMax').val()>0 ){
            $('#leasonNumberMax').val( +$('#leasonNumberMax').val()-1 );
            $('#maxResult').html( $('#leasonNumberMax').val() );
        }
    })
  
    /* Check Identification Number */
    $('#checkIdNumber').click(function(){
        $('#registerInformation').removeClass("hidden");
        $('#registerInformationFooter').removeClass("hidden");
    })
    $('.card-student').has('input[type=checkbox]').change(function(){
  
        if( $(this).hasClass("active") ){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });
    $('.card-student').has('input[type=radio]').change(function(){
        if( $(this).hasClass("active") ){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });
    $('.hilqatmb .tasm').click(function(){
        if( $(this).parent().hasClass("active") ){
            $(this).parent().find(':checkbox').prop("checked", false);
            $(this).parent().removeClass("active");
        }else{
            $(this).parent().find(':checkbox').prop("checked", true);
            $(this).parent().addClass("active");
        }
    });
    $('.hilqatmb').has('input[type=checkbox]').change(function(){
        if( $(this).hasClass("active") ){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });
    /* Episode Slider */
    // $('.owl-carousel-episode').owlCarousel({
    //     rtl:true,
    //     loop:false,
    //     margin:10,
    //     nav:false,
    //     dots:true,
    //     autoplay:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:4
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // });
    $('.owl-carousel-main-episode').owlCarousel({
        rtl:true,
        loop:false,
        margin:10,
        nav:false,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    /* End Episode Slider */
    $('.owl-carousel-episode').trigger('to.owl.carousel', $('.owl-dot').length-1 );
    $('.owl-next').click(function(){
        $('.owl-carousel-episode').trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function(){
        $('.owl-carousel-episode').trigger('prev.owl.carousel');
    });
    $('.owl-carousel-main-episode-next').click(function(){
        $('.owl-carousel-main-episode').trigger('next.owl.carousel');
    });
    $('.owl-carousel-main-episode-prev').click(function(){
        $('.owl-carousel-main-episode').trigger('prev.owl.carousel');
    });
    /* owl-carousel-statictices-profile */
    $('.owl-carousel-statictices-profile').owlCarousel({
        rtl:true,
        loop:false,
        margin:10,
        nav:false,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:7
            },
            600:{
                items:7
            },
            800:{
                items:7
            },
            1200:{
                items:7
            }
        }
    });
    $('.owl-carousel-statictices-profile-next').click(function(){
        $('.owl-carousel-statictices-profile').trigger('next.owl.carousel');
    });
    $('.owl-carousel-statictices-profile-prev').click(function(){
        $('.owl-carousel-statictices-profile').trigger('prev.owl.carousel');
    });
    /* End owl-carousel-statictices-profile */
    $('.without-category').change(function(){
        if(this.checked){
            $('.category input:not(.without-category)').prop("checked", false);
        }
    });
    $('.category input:not(.without-category)').change(function(){
        if(this.checked){
            $('.without-category').prop("checked", false);
        }
    });
  
    /* Check All in group of checkbox */
    /* educational */
    $('.checkbox-group-educational .check-all').change(function(){
        if(this.checked){
            $('.checkbox-group-educational input:not(.check-all)').prop("checked", false);
        }
    });
    $('.checkbox-group-educational input:not(.check-all)').change(function(){
        if(this.checked){
            $('.checkbox-group-educational .check-all').prop("checked", false);
        }
    });
    /* episodes */
    $('.checkbox-group-episodes .check-all').change(function(){
        if(this.checked){
            $('.checkbox-group-episodes input:not(.check-all)').prop("checked", false);
        }
    });
    $('.checkbox-group-episodes input:not(.check-all)').change(function(){
        if(this.checked){
            $('.checkbox-group-episodes .check-all').prop("checked", false);
        }
    });
    /* center */
    $('.checkbox-group-center .check-all').change(function(){
        if(this.checked){
            $('.checkbox-group-center input:not(.check-all)').prop("checked", false);
        }
    });
    $('.checkbox-group-center input:not(.check-all)').change(function(){
        if(this.checked){
            $('.checkbox-group-center .check-all').prop("checked", false);
        }
    });
    /* agency */
    $('.checkbox-group-agency .check-all').change(function(){
        if(this.checked){
            $('.checkbox-group-agency input:not(.check-all)').prop("checked", false);
        }
    });
    $('.checkbox-group-agency input:not(.check-all)').change(function(){
        if(this.checked){
            $('.checkbox-group-agency .check-all').prop("checked", false);
        }
    });
    /* End Check All in group of checkbox */
  
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  
    
    $( ".optionToDragAndSort" ).sortable();
  
    /* progam levels toggle show */
    $(".progam-levels .level > div:nth-child(1)").click(function(){
        $(this).parent().children('.option').slideToggle();
    });
    function niceAlert(message){
        $('body').append('<div class="nice-alert"><i class="fa fa-check"></i>&nbsp;&nbsp;<span>'+message+'</span></div>');
        setInterval(function(){ $('.nice-alert').remove() ; },3000);
    }
  
    /* Wizard */
    $('body').on("click", "#next-2", function(){
        console.log('testing')
        /* Wright your code here */
        if(1 /* if ok */){
            $('.wizard-header ul li:nth-child(1)').addClass("done");
            $('.wizard-body > div:nth-child(1)').toggle();
            $('.wizard-header ul li:nth-child(2)').addClass("active");
            $('.wizard-body > div:nth-child(2)').removeClass("hidden");
        }
    });
  
    $('body').on('click', '#next-3', function(){
        /* Wright your code here */
        if(1 /* if ok */){
            $('.wizard-header ul li:nth-child(2)').addClass("done");
            $('.wizard-body > div:nth-child(2)').toggle();
            $('.wizard-header ul li:nth-child(3)').addClass("active");
            $('.wizard-body > div:nth-child(3)').removeClass("hidden");
        }
    })
    $('body').on('click', '#next-4', function(){
        /* Wright your code here */
        if(1 /* if ok */){
            $('.wizard-header ul li:nth-child(3)').addClass("done");
            $('.wizard-body > div:nth-child(3)').toggle();
            $('.wizard-header ul li:nth-child(4)').addClass("active");
            $('.wizard-body > div:nth-child(4)').removeClass("hidden");
        }
    })
    /* End Wizard */
    /* Program Level */
    $('#add-program-checkbox-save').change(function(){
        if(this.checked){
            $('#save input:not(#add-program-checkbox-save)').attr("disabled","");
            $('#save select ').removeAttr("disabled");
  
            $('#add-program-checkbox-read').prop('checked',false);
            $('#read input:not(#add-program-checkbox-read)').attr("disabled","disabled");
            $('#read select ').attr("disabled","disabled");
  
            $('#add-program-revition-checkbox').prop('checked',true);
            $('#revetion input:not(#add-program-revition-checkbox)').attr("disabled","");
            $('#revetion select ').removeAttr("disabled");
        }else{
            $('#save input:not(#add-program-checkbox-save)').attr("disabled","disabled");
            $('#save select ').attr("disabled","disabled");
        }
    });
    $('#add-program-revition-checkbox').change(function(){
        if(this.checked){
            $('#revetion input:not(#add-program-revition-checkbox)').attr("disabled","");
            $('#revetion select ').removeAttr("disabled");
            $('#add-program-checkbox-read').prop('checked',false);
            $('#read input:not(#add-program-checkbox-read)').attr("disabled","disabled");
            $('#read select ').attr("disabled","disabled");
        }else{
            $('#revetion input:not(#add-program-revition-checkbox)').attr("disabled","disabled");
            $('#revetion select ').attr("disabled","disabled");
            $('#add-program-checkbox-save').prop('checked',false);
            $('#save input:not(#add-program-checkbox-save)').attr("disabled","disabled");
            $('#save select ').attr("disabled","disabled");
        }
    });
    $('#add-program-checkbox-read').change(function(){
        if(this.checked){
            $('#read input:not(#add-program-checkbox-read)').attr("disabled","");
            $('#read select ').removeAttr("disabled");
            $('#add-program-revition-checkbox').prop('checked',false);
            $('#add-program-checkbox-save').prop('checked',false);
            $('#revetion input:not(#add-program-revition-checkbox)').attr("disabled","disabled");
            $('#revetion select ').attr("disabled","disabled");
            $('#save input:not(#add-program-checkbox-save)').attr("disabled","disabled");
            $('#save select ').attr("disabled","disabled");
        }else{
            $('#read input:not(#add-program-checkbox-read)').attr("disabled","disabled");
            $('#read select ').attr("disabled","disabled");
        }
    });
    //$('input[type="range"]').rangeslider();
    $('#total-rating-input').change(function(){
        $('.save-rating').html("%"+$(this).val());
        $('.revision-rating').html("%"+(100-$(this).val()));
  
        $(".quantity-save-rating").html( "%"+0);
        $(".quality-save-rating").html( "%"+$(this).val());
        $("#input-save").attr("max",$(this).val());
        $("#input-save").val(0);
        $("#input-save").click();
  
        $(".quantity-revision-rating").html("%"+0);
        $(".quality-revision-rating").html("%"+(100-$(this).val()));
        $("#input-revision").attr("max",(100-$(this).val()));
        $("#input-revision").val(0);
        $("#input-revision").click();
    });
    $("#input-save").click(function(){
        $('.quantity-save-rating').html("%"+$(this).val());
        $('.quality-save-rating').html("%"+($(this).attr("max")-$(this).val()));
    });
    $("#input-revision").click(function(){
        $('.quantity-revision-rating').html("%"+$(this).val());
        $('.quality-revision-rating').html("%"+($(this).attr("max")-$(this).val()));
    });
    /* End Range input  */
    /* Mail */
    $(".remove-receptor").click(function(){
        $(this).parent().remove();
    });
    //$('.dropdown-message').toggle();
    $(".right_col, .left_col").on('click', () => {
        $('.dropdown-message').css("display","none");
    })
    $('.message_toggle').click(function(){
        if($(".dropdown-message").css("display") == "none")
            $('.dropdown-message').css("display","flex");
        else
            $('.dropdown-message').css("display","none");
    });
    /* End Mail */
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });
    /* Permission Checkbox */
    $(".permission-checkbox").change(function(){
        if( this.checked){
            $(this).parent().children('.absent').removeClass("excused-absence");
            $(this).parent().children('.absent').html("غياب");
        }else{
            $(this).parent().children('.absent').addClass("excused-absence");
            $(this).parent().children('.absent').html("غياب بعذر");
        }
    });
    /* End Permission Checkbox */
    /* Navbar */
    //$('.user-profile-menu').height( $(window).height() - $(".nav_menu").outerHeight()-3 );
    $('.collapse-open-btn').click(function(){
        if( $(this).children('i').hasClass('fa-angle-down') ){
            $(this).children('i').removeClass('fa-angle-down');
            $(this).children('i').addClass('fa-angle-up');
        }else{
            $(this).children('i').removeClass('fa-angle-up');
            $(this).children('i').addClass('fa-angle-down');
        }
    });
    /* End Navbar */
  
    $("#changeView").click(function(){
        $(".filter").toggle();
        $(".share").toggle();
        if( $(this).children("img").attr("src") == "/assets/build/images/card-view.png" ){
            $(this).children("img").attr("src","/assets/build/images/table-view.png");
            $(".table-view").hide();
            $(".card-view").show();
        }else{
            $(this).children("img").attr("src","/assets/build/images/card-view.png");
            $(".card-view").hide();
            $(".table-view").show();
        }
    });
    /* End popup */
    $(".form-check-input").change(function(){
        if( this.checked )
            $(".option").css("display", "block");
        else
             $(".option").css("display", "none");
    })
  
    /* Progress Circle */
  
    /***** I COMMENTED THESE TWO FUNCTIONS BECAUSE OF THE ERRORS *****/
    // progressCircle( $('.progress-1'),60);
    // progressCircleDaysAbsent( $('.progress-2'),70,31,16);
  
  
    //setProgressCircleStep( $('.progress-1'),90 );
  
  
    /* CHECK FILE EXTENSION VALIDATION */
    var fileExtensionValidation = function(file) {
        var fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1);
        if(fileExtension != 'xlsx' || fileExtension != 'xlsm' || fileExtension != 'xlsb' || fileExtension != 'xltx' || fileExtension != 'xltm' || fileExtension != 'xls') {
            $('#unvalidExtension').removeClass('hideAlert')
        } else {
            $('#unvalidExtension').addClass('hideAlert')
        }
    }
  
    /* CLICK ON DROP ZONE TO UPLOAD FILE */
    $("body").on("change", '#file', function(e) {
        var file = e.target.files[0]
  
        $('#fileReview').removeClass('hide')
  
        $('#fileReview').children('span').text(file.name.substring(0, 20))
  
        // FUNCTION TO CHECK FILE EXTENSION
        fileExtensionValidation(file)
  
        var fileToUse = URL.createObjectURL(file)
    })
  
    /* DRAG OVER THE DROP ZONE TO ADD A NICE HOVER EFFECT */
    $("body").on("dragover", '#drop-zone', function(e) {
  
        e.preventDefault()
  
        $("#drop-zone").addClass('over')
    })
  
    /* LEAVE THE DROP ZONE TO REMOVE THE HOVER EFFECT */
    $("body").on("dragleave", '#drop-zone', function(e) {
  
        e.preventDefault()
  
        $("#drop-zone").removeClass('over')
    })
  
    /* DROP FILE IN THE DROP ZONE TO UPLOAD IT */
    $("body").on("drop", '#drop-zone', function(e) {
        e.preventDefault()
        var file = e.originalEvent.dataTransfer.files[0]
  
        $('#fileReview').removeClass('hide')
  
        $('#fileReview').children('span').text(file.name.substring(0, 20))
  
        // FUNCTION TO CHECK FILE EXTENSION
        fileExtensionValidation(file)
  
        var fileToUse = URL.createObjectURL(file)
    })
  
    // REMOVE UPLOADED FILE TO UPLOAD ANOTHER ONE
    $("body").on("click", '#removeFile', function() {
  
        $('#fileReview').addClass('hide')
  
        $("#file").val('')
  
        $('#unvalidExtension').addClass('hideAlert')
    })

    var elementsArray = document.querySelectorAll('.editingFieldContent')
    var ids = [] 
    elementsArray.forEach(ele => {
        ids.push(ele.id.slice(-1))
    })
   
    // CLICK TO EDIT LABELS IN RATING PAGE
    ids.forEach(i => {
        var editingClickable = document.getElementById(`clickable${i}`)
        var editingField = document.getElementById(`editingField${i}`)
        var editingFieldContent = document.getElementById(`editingFieldContent${i}`)
        var editedCirc = document.getElementById(`editedCirc${i}`)
        var editingFieldInput = document.getElementById(`editingFieldInput${i}`)
        var labelEditing = document.getElementById(`labelEditing${i}`)
        editingClickable.onclick = () => {
            editingField.classList.remove('close')
            editingFieldContent.classList.add('close')
        }
        editedCirc.onclick = () => {
            editingField.classList.add('close')
            editingFieldContent.classList.remove('close')
            labelEditing.innerHTML = editingFieldInput.value
        }
    })    
  
  });
