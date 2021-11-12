/* Animation */


function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame(){
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

var item = document.getElementById('item');
item.animate([
    { transform: 'scale(1)', background: 'red', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5, offset: .2},
    { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: 1, offset: 1 },
], {
    duration: 2000, //milliseconds
    easing: 'ease-in-out',//'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: Infinity,  //or a number
    direction: 'alternate', //'normal','reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
});














}