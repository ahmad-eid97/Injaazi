//Change Value of Progress Circle Element
function setProgressCircleStep(progress_circle,percent){
    progress_circle.children('.progress-ring__circle').attr("stroke-dashoffset",251 - percent / 100 * 251);
}
//Create Progress Circle Element
function progressCircle(div,percent){
    var svgNS = "http://www.w3.org/2000/svg";
    //Gray circle
    var grayCircle = document.createElementNS(svgNS,"circle");
    grayCircle.setAttributeNS(null,"fill","transparent");
    grayCircle.setAttributeNS(null,"stroke","#EEF0F6");
    grayCircle.setAttributeNS(null,"stroke-width","6");
    grayCircle.setAttributeNS(null,"step","50");
    grayCircle.setAttributeNS(null,"stroke-dasharray","251");
    grayCircle.setAttributeNS(null,"stroke-dashoffset","0");
    grayCircle.setAttributeNS(null,"cx","60");
    grayCircle.setAttributeNS(null,"cy","60");
    grayCircle.setAttributeNS(null,"r","40");
    div.append(grayCircle);
    //to create a circle. for rectangle use "rectangle"
    var myCircle = document.createElementNS(svgNS,"circle");
    myCircle.setAttributeNS(null,"class","progress-ring__circle");
    myCircle.setAttributeNS(null,"fill","transparent");
    myCircle.setAttributeNS(null,"stroke","#6daa27");
    myCircle.setAttributeNS(null,"stroke-width","6");
    myCircle.setAttributeNS(null,"stroke-dasharray","251");
    myCircle.setAttributeNS(null,"stroke-dashoffset",251 - percent / 100 * 251);
    myCircle.setAttributeNS(null,"cx","60");
    myCircle.setAttributeNS(null,"cy","60");
    myCircle.setAttributeNS(null,"r","40");
    myCircle.setAttributeNS(null,"step",percent);
    div.append(myCircle);
    //Second circle
    var secCircle = document.createElementNS(svgNS,"circle");
    secCircle.setAttributeNS(null,"fill","transparent");
    secCircle.setAttributeNS(null,"stroke","#fafafb");
    secCircle.setAttributeNS(null,"stroke-width","7");
    secCircle.setAttributeNS(null,"stroke-dasharray","5 30");
    secCircle.setAttributeNS(null,"stroke-dashoffset","1");
    secCircle.setAttributeNS(null,"cx","60");
    secCircle.setAttributeNS(null,"cy","60");
    secCircle.setAttributeNS(null,"r","40");
    div.append(secCircle);
    //Third circle
    var thirdCircle = document.createElementNS(svgNS,"circle");
    thirdCircle.setAttributeNS(null,"fill","#F9FAFB");
    thirdCircle.setAttributeNS(null,"cx","60");
    thirdCircle.setAttributeNS(null,"cy","60");
    thirdCircle.setAttributeNS(null,"r","37");
    div.append(thirdCircle);
    //Fourth circle
    var fourthCircle = document.createElementNS(svgNS,"circle");
    fourthCircle.setAttributeNS(null,"fill","#ffffff");
    fourthCircle.setAttributeNS(null,"cx","60");
    fourthCircle.setAttributeNS(null,"cy","60");
    fourthCircle.setAttributeNS(null,"r","28");
    div.append(fourthCircle);
    //Text percent
    var textNode = document.createElementNS(svgNS, 'text');
    textNode.setAttributeNS(null, 'x', 83);
    textNode.setAttributeNS(null, 'y', 68);
    textNode.setAttributeNS(null,'font-size','20');
    textNode.setAttributeNS(null,'fill','#73879c');
    textNode.innerHTML = percent+"%";
    div.append(textNode);
}

//////////////////////////////////////////////////////////////////////////////////////////

//Create Progress Circle Element
function progressCircleDaysAbsent(div,percent,days,absent){
    var svgNS = "http://www.w3.org/2000/svg";
    //Gray circle
    var grayCircle = document.createElementNS(svgNS,"circle");
    grayCircle.setAttributeNS(null,"fill","transparent");
    grayCircle.setAttributeNS(null,"stroke","#EEF0F6");
    grayCircle.setAttributeNS(null,"stroke-width","6");
    grayCircle.setAttributeNS(null,"step","50");
    grayCircle.setAttributeNS(null,"stroke-dasharray","251");
    grayCircle.setAttributeNS(null,"stroke-dashoffset","0");
    grayCircle.setAttributeNS(null,"cx","60");
    grayCircle.setAttributeNS(null,"cy","60");
    grayCircle.setAttributeNS(null,"r","40");
    div.append(grayCircle);
    //to create a circle. for rectangle use "rectangle"
    var myCircle = document.createElementNS(svgNS,"circle");
    myCircle.setAttributeNS(null,"class","progress-ring__circle");
    myCircle.setAttributeNS(null,"fill","transparent");
    myCircle.setAttributeNS(null,"stroke","#6daa27");
    myCircle.setAttributeNS(null,"stroke-width","6");
    myCircle.setAttributeNS(null,"stroke-dasharray","251");
    myCircle.setAttributeNS(null,"stroke-dashoffset",251 - percent / 100 * 251);
    myCircle.setAttributeNS(null,"cx","60");
    myCircle.setAttributeNS(null,"cy","60");
    myCircle.setAttributeNS(null,"r","40");
    myCircle.setAttributeNS(null,"step",percent);
    div.append(myCircle);
    //Second circle
    var secCircle = document.createElementNS(svgNS,"circle");
    secCircle.setAttributeNS(null,"fill","transparent");
    secCircle.setAttributeNS(null,"stroke","#fafafb");
    secCircle.setAttributeNS(null,"stroke-width","7");
    secCircle.setAttributeNS(null,"stroke-dasharray", 1+" "+251/days);
    secCircle.setAttributeNS(null,"stroke-dashoffset","1");
    secCircle.setAttributeNS(null,"cx","60");
    secCircle.setAttributeNS(null,"cy","60");
    secCircle.setAttributeNS(null,"r","40");
    div.append(secCircle);
    //Third circle
    var thirdCircle = document.createElementNS(svgNS,"circle");
    thirdCircle.setAttributeNS(null,"fill","#F9FAFB");
    thirdCircle.setAttributeNS(null,"cx","60");
    thirdCircle.setAttributeNS(null,"cy","60");
    thirdCircle.setAttributeNS(null,"r","37");
    div.append(thirdCircle);
    //Fourth circle
    var fourthCircle = document.createElementNS(svgNS,"circle");
    fourthCircle.setAttributeNS(null,"fill","#6daa27");
    fourthCircle.setAttributeNS(null,"cx","60");
    fourthCircle.setAttributeNS(null,"cy","60");
    fourthCircle.setAttributeNS(null,"r","28");
    div.append(fourthCircle);
    //Text present
    var textNodeDays = document.createElementNS(svgNS, 'text');
    textNodeDays.setAttributeNS(null, 'x', 62);
    textNodeDays.setAttributeNS(null, 'y', 73);
    textNodeDays.setAttributeNS(null,'font-size','10');
    textNodeDays.setAttributeNS(null,'fill','#ffffff');
    textNodeDays.innerHTML = days;
    div.append(textNodeDays);
    //Text absent
    var textNodeAbsent = document.createElementNS(svgNS, 'text');
    textNodeAbsent.setAttributeNS(null, 'x', 77);
    textNodeAbsent.setAttributeNS(null, 'y', 62);
    textNodeAbsent.setAttributeNS(null,'font-size','20');
    textNodeAbsent.setAttributeNS(null,'fill','#ffffff');
    textNodeAbsent.innerHTML = absent;
    div.append(textNodeAbsent);
}