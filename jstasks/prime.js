let count = 0;
let n = 100;
for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
        if (i % j == 0) {
            count++
        }
        
        
    }
    if(count==1){
        console.log(i);
    }
    count=0;



}
