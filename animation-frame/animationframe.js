/* requestAnimationFrame() */

// previously: setInterval() and Element.animate()

// Benefits of reqestAnimationFrame:
// * The browser can optimize it, so animations will be smoother
// * Animations in inactive tabs will stop, allowing the CPU to chill
// * More battery-friendly





var start;
var stopId;
var progress;
var toggle = false;

var element = document.getElementById('element')
element.setAttribute("style", 
                    "background: blue; position: absolute; width: 50px; height: 50px; top: 50px;");


function step(timestamp){
    if(!start || progress > 800) start = timestamp;
    progress = (timestamp - start) / 10 + 50;
    element.style.top = progress + 'px';
    stopId = window.requestAnimationFrame(step);
}

function toggleAnimation() {
    if(!toggle){
        toggle = true;
        window.requestAnimationFrame(step);
    } else {
        toggle = false;
        cancelAnimationFrame(stopId)
    }
}