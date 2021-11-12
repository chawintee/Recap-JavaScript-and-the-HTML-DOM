/* History */

alert(window.history.length)


// back
// history.back(); //back

// history.go(0)// back (-), forword(+), refresh(0) 


// history.replaceState('beau is great', null, 'unicycle.html')
// console.log(history.state);

history.replaceState('beau is great', null, 'http://codepen.io/Beau_Is_Awesome');
history.pushState(null,null,'freeCodeCamp')
