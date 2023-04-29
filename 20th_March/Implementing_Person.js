class Person{
    Name;
    Age;
    getDetail(){
       return `"Name: ${this.Name}, Age: ${this.Age}"`
    }
    constructor(n="Unknown",a=0){
        this.Name=n;
        this.Age=a;
    }
}
let Person1=new Person("Sandeep",20)
console.log(Person1.getDetail());

let Person2=new Person();
console.log(Person2.getDetail());
