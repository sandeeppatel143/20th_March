class Employee{
    Name;
    Position;
    Salary;
    getSalary(s){
        this.Salary=s;
        return this.Salary
    }
}
let Salary=new Employee()
console.log(Salary.getSalary("55000"));
