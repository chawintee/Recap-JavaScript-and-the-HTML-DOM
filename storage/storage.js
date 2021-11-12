/* cookies vs local storage vs session storage */

//local storage

// localStorage.setItem('breakfast','egg')
localStorage.setItem('lunch','cereal')
console.log(localStorage.getItem('breakfast'));

localStorage.removeItem('lunch');
localStorage.clear();


//session storage

// sessionStorage.setItem('breakfast','cereal')
// sessionStorage.setItem('breakfast','eggs')
sessionStorage.setItem('dinner','eggs')
console.log(sessionStorage.getItem('breakfast'));

//cookie

document.cookie = "hello=true"
document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
document.cookie = "person=beau; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";


//delete cookie
// document.cookie = "person=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

console.log(document.cookie);