/* Event Listeners */

// Syntax: element.addEventListener(event, function, useCapture)


var myP = document.getElementById("myP");
var myDiv = document.getElementById("myDiv");
var myP2 = document.getElementById("myP2");
var myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function(){ myDiv.style.background = "lightblue" });

// myP.onclick = function(){myDiv.style.background = "lightgreen"};

myP.addEventListener("click",changeText,false);

myDiv.addEventListener("click", changeText2, false);

function changeText(){
    myP2.textContent = myP2.textContent += "According to a Cornell publication, the answer is ~700 pounds."
};

myDiv.addEventListener("mouseover", function(){myDiv2.style.background = "darkkhaki"});


function changeText2(){
    myP2.textContent = myP2.textContent += "THE REAL ANSWER."
}


myP.removeEventListener("click", changeText,false)