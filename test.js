var div1 = document.getElementById('div1');
console.log({div1InnerHTML : div1.innerHTML});
console.log(div1.innerHTML);

var unicycle = document.getElementsByClassName('unicycle');
console.log({unicycle});

var unicycleInDiv1 = div1.getElementsByClassName('unicycle');
console.log({unicycleInDiv1});

var paragraphs = document.getElementsByTagName('p');
console.log({paragraphs});

var paragraphsInDiv1 = div1.getElementsByTagName('p');
console.log({paragraphsInDiv1});

var queryUnicycle = document.querySelector('.unicycle');
console.log({queryUnicycle});
console.log(queryUnicycle.innerHTML);

var queryDiv2 = document.querySelector('#div2');
console.log({queryDiv2});

var queryAll = document.querySelectorAll('.unicycle, #div2');
console.log({queryAll});

var text1 = "<h1>Hello World</h1>";

// div1.innerHTML = text1;

var text2 = "<h1> Test UnitCycle </h1> "

// queryUnicycle.innerHTML = text2;

var text3 = "<h1> Test query all </h1>"

// for(i=0; i< queryAll.length;i++){
//     queryAll[i].innerHTML = text3;
// }

var text4 = "<h1> Test text content </h1>"

// queryUnicycle.textContent = text4;
