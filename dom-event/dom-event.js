function changeColor(obj) {
    obj.style.color = "Peru";
}

document.getElementById('myBtn').onclick = changeBackgroundToMediumOrchid;

function changeBackgroundToMediumOrchid(){
    document.querySelector('body').style.background = "MediumOrchid";
}

function removeLetterFromH1(){
    var h1 = document.querySelector('h1');
    h1.textContent = h1.textContent.slice(0, -1)
}

function mOver(obj){
    obj.innerHTML = "GET OFF ME!";
}

function mOut(obj){
    obj.innerHTML = "Thank you";
}