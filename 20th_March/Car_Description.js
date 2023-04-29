class Car{
    year;
    company;
    model;
    getDescription(y,c,m){
        this.year=y
        this.company=c
        this.model=m
        console.log(`This is a ${y} ${c} ${m} `);
    }
}
let obj=new Car()
obj.getDescription("2022", "Skoda", "Rapid")