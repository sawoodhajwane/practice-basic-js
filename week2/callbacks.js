setTimeout(function(){
console.log("first timmer");
},5000);


setTimeout(function(){
console.log("second timer");
},5000);



function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y")
});



