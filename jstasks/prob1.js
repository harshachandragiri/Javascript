//User details
let Name="Harsha";
let age=22;
let phone=8519889482;
let email="harshac1942@gmail.com";
let Password="Harsha@8519";

//entered details
let n1="Harsha";
let a1=22;
let ph1=8519889482;
let em1="harshac1942@gmail.com";
let Pwd1="Harsha@8519";

let ROI;
let Login;
if((Name===n1)&&(phone===ph1)&&(Password===Pwd1)){
    Login=true;
    console.log("Login successfull")
}
if(Login===true){
    if(age>20){
        ROI="30%";

    }
    if(age>30){
        ROI="20%";
    }
}
console.log("Rate of Interest is :"+ROI);