fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    console.log(res);
    res.json()
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
    
})
.catch((errorMessage)=>{
    console.log(errorMessage);
})