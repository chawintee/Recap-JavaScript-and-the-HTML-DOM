/* Pop ups */


/* alert */
//alert("I am an alert box!");


/* Confirm */
// if (window.confirm ("Press a button!")){
//     console.log("You pressed OK!");
// } else {
//     console.log("You pressed Cancel!");
// }

/* prompt */
var person = prompt("Please enter your name", "Beau Carnes");

if(person == null || person == ""){
    console.log("User cancelled the prompt.");
} else {
    console.log(`Hello ${person} ! How are you today?`);
}