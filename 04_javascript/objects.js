/*
Objects
-an object is an standalone entity, with properties and methods. 
- properties are key-values pairs, and methods are funtion stored as object properties.
- syntax:
    v-n = [value1,value2];
    declare variable_name= {
        key1: value1,
        key2:value2
    }
*/ 
let std = {
    name : 'Ram',
    age : 20,
    level : 'Bachelor',
    rank : '1st'

}
console.log(std, typeof std);

let emp = new Object();
emp.name = 'Shyam';
emp.salary = 22000;
console.log(emp);



// Accessing(. : dot accessor)
console.log(`Name of Student is ${std.name}`);

// bracket notation
console.log(`The rank of student is ${std['rank']}`);
// using constructor
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
const car = new Car('Toyota', 'ABC', 2020);
console.log(car, typeof car);


// adding 
std.marks = 80;
console.log(std);

// updating values
std.level = 'Masters';
console.log(std);

// delete properties
delete std.age;
console.log(std);


// loop in objects: for ...  in 
for(let key in std){
    console.log(`${key} = ${std[key]}`);

}
console.log('Task completed');


// nested object
std.address = {
    country : 'Nepal',
    province : 'Bagmati',
    district : 'Kathmandu'
}

console.log(std);

// display the name
console.log(std.address['district']);

// create an object as cart having products , their price and quatity , then calculate total amount of each items and final amount

let cart = {
    rope: [3000,1],
    acer :[50000, 2]
}

let final = 0;

for (let key in cart){
    let total = 1;
    for(let value of cart[key]){
        total = total* value;
    }
    cart[key].push(total);
    final +=cart[key][2];
}
console.log(cart);
console.log(final);

// to find keys and values of objects
// console.log(Object.keys(std), Object.values(std));