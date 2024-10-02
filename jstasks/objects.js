//object creation using  literals

let Student={
    rollnum:12345,
    name:"Harsha",
    age:22,
    phnum:8519889512,
    marks:['95','90','92']
}
//view
console.log(Student);
console.log(Student.name);
console.log(Student.marks);
console.log(Student.marks[2]);


//create
Student.email="hc1042@gmail.com";
console.log(Student.email);

//update
Student.name="Vardhan";
console.log(Student.name);

//delete 
delete Student.rollnum;
console.log(Student);

//objects creation using functions

function Bike(brand,model,color,price){
    this.brand=brand;
    this.model=model;
    this.color=color;
    this.price=price;

}
let b1= new Bike("KTM","RC200","red",240000);
console.log(b1);

//object creation using class

class Car{
    constructor(cname,cbrand,ccolour,cprice){
        this.cname=cname;
        this.cbrand=cbrand;
        this.ccolor=ccolour;
        this.cprice=cprice;
    }
}

let c1=new Car("audi","Q5","black",4000000);
console.log(c1);