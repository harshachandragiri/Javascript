// async function functionres(){
//     let res =await fetch("https://jsonplaceholder.typicode.com/users");
//     let myObj=(await res).json();
//     console.log(myObj);

// }
// functionres();

//async and await

// async function fetchInfo(){
//     let Info=await fetch('https://jsonplaceholder.typicode.com/users');
//     let data =await Info.json();
//     console.log(data);
//     let newArr =data.map((i)=>{
//         return i.address.zipcode;
       
        
//     })
//     console.log(newArr);
    

// }
// fetchInfo()


// closures

// let a=11;
// let b=4;
// function parent(){
//     let c=10;
//     console.log(a+b+c);
//     function child(){
//         let d=21;
//         console.log(a+b+c+d);
//     }
//     child();
// }
// parent();


let arr=[12,34,1,2,3,43];
let newArr=arr.sort((a,b)=>{
    // return a-b ;
})
console.log(newArr);
