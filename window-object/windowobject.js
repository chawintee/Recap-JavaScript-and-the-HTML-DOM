/* Windows Object: size, open, close, move */


window.addEventListener('resize',update);
var x = window.document.getElementById("demo");
update();

function update() {
    x.innerHTML = "Browser inner window width: " + 
        window.innerWidth + ", height: " + window.innerHeight + ".";
}

// var newWindowObj = window.open("http://freecodecamp.com", "newWindow",
// "menubar=true, location=true, resizeable=false, scrollbars=false,width=400,height=300,top=200,left=200");

var newWindowObj = window.open("", "newWindow",
"menubar=true, location=true, resizeable=false, scrollbars=false,width=400,height=300,top=200,left=200");

function move(){
    newWindowObj.moveBy(50,0);
    newWindowObj.focus();
}

