//Anonymous Function
// function(m,n){
//     let b=m+n;
//     return b
// }

//IIFE
(function(m,n){
    let b=m+n;
   console.log(b);
}
)(10,20);

//Function with Expression

let add=function(m,n){
    let b=m+n;
   console.log(b);
   return b;
}

console.log(add(20,30));
