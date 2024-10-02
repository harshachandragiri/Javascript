

function login() {

    let uid = document.querySelector("#uid").value;
    let pid = document.querySelector("#pid").value;
    if (uid == "abcd" && pid == "1234") {
        alert("LOGIN SUCCESSFULL");
    } else {
        alert("INVALID LOGIN DETAILS");
    }

   
}

function show(){
    if(pid.type=="password"){
        pid.type="text";

    }else{
        pid.type="password";
    }
    
}