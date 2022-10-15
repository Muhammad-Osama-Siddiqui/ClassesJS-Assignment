// ..................Assignment 1.....................
// Make class and pass different properties in constructor 
class PersonalAccount{
    constructor (firstName, lastName,incomes, expenses){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
      }
//Method for add incomes
  addIncome(description,income){
  this.incomes.push({income:income,
    description:description})
    }
//Method for add expenses
  addExpense(description,expense){
  this.expenses.push({expense:expense,
    description:description})
    }
//Method to calculate total incomes
   totalIncome(){
   let totalIn = 0;
  this.incomes.forEach(function(income)
  {
      totalIn += income.income;
  })
  return totalIn;
  }
//Method to calculate total expenses
  totalExpense(){
   let totalOut = 0;
  this.expenses.forEach(function(expense)
  {
      totalOut += expense.expense;
  })
 return totalOut;
}
//Method to calculate Remaining amount
  accountBalance(){
    const balance = this.totalIncome() - this.totalExpense();
     return balance;
  }
//Method to show final reports
  result(){
  let detail = `${this.firstName} ${this.lastName} has income = ${this.totalIncome()}. His expenses = ${this.totalExpense()}. and Balance = ${this.accountBalance()}.`
     return detail;
  }
  }
let person1 = new PersonalAccount('Ali','Siddiqui');
person1.addIncome("Salary",25000);
person1.addIncome("Commission",3000);
person1.addExpense("rent",10000);
person1.addExpense("bills",10000);
console.log(person1.result());

// ..................Assignment 2...................
// Make class and pass different properties in constructor
class Automobile{
  constructor(name,model,color,type){
        this.name = name
        this.model = model
        this.color = color
        this.type = type
    }
//Method Show message
   start(){
       console.log("Car is ready to drive");
    }
   openDoor(){
        console.log("Door is open");
   }
}
// Child classes of automobile
class Truck extends Automobile{
    constructor(name,model,color,type,maxcapacity){
   super(name,model,color,type)
   this.maxcapacity = maxcapacity
}
}
class Bus extends Automobile{
constructor(name,model,color,type,fueltype,maxspeeds){
   super(name,model,color,type)
   this.fueltype = fueltype
   this.maxspeeds = maxspeeds    
}
}
class Car extends Automobile{
  constructor(name,model,color,type,doors,maxspeeds){
  super(name,model,color,type)
   this.doors = doors
   this.maxspeeds = maxspeeds    
}
}
let truck1 = new Truck("Cement Mixer", "2020", "Red", "Manual", "1.75cubic yards");
console.log(truck1);
let bus1 = new Bus("Daewoo Express", "2019", "yellow", "auto/manual", "hybrid", "72km/h")
console.log(bus1);
let car1 = new Car("BMW", "7series", "silver", "auto", "scissor", "155mph");
console.log(car1);