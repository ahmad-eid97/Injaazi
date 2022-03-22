var r = document.querySelectorAll('input[type=range]'),
        prefs = ['webkit-slider-runnable', 'moz-range'],
        styles = [],
        l = prefs.length,
        n = r.length;

var getTrackStyleStr = function(el, j) {
    var str = '',
            min = el.min || 0,
            perc = (el.max) ? ~~(100*(el.value)/(el.max)) : el.value,
            perc = 100 - perc;
            val = perc + '% 100%';

    el.previousElementSibling.textContent = el.value;

    for(var i = 0; i < l; i++) {
        str += "input[type=range][data-rangeId='" + j + "']::-" + prefs[i] + '-track{background-size:' + val + '} ';
    }
    return str;
};

var setDragStyleStr = function(evt) {
    var trackStyle = getTrackStyleStr(evt.target, this);
    styles[this].textContent = trackStyle;
};

for(var i = 0; i < n; i++) {
    var s = document.createElement('style');
    document.body.appendChild(s);
    styles.push(s);
    r[i].setAttribute('data-rangeId', i);
    r[i].addEventListener('input', setDragStyleStr.bind(i));
    r[i].addEventListener('click', setDragStyleStr.bind(i));
    r[i].click();
}
