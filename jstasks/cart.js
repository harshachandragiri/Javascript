let cart=[
    {
        id:1001,
        pname:"Product1",
        price:500
    },
    {
        id:1002,
        pname:"Product2",
        price:700
    },
    {
        id:1003,
        pname:"Product3",
        price:900
    },
    {
        id:1004,
        pname:"Product4",
        price:1100
    },
    {
        id:1005,
        pname:"Product5",
        price:1400
    }

   

];
// for(let i=0;i<cart.length;i++){
  // // console.log(cart[i]);
//     console.log(cart[i].pname);

// }

//Map 

// let arr=cart.map((i)=>{
//     // return i;
//     return i.pname;

// })
// console.log(arr);




// let newcart=cart.filter((i)=>{
//     // return i;
//     return i.price>700;

// })
// console.log(newcart);

let sum=0;
let total=cart.reduce((sum,i)=>{
    sum=sum+i.price;
});
console.log(total);