/*
Function : A function is a block of code designed to perform a particular task. It helps:
- reuse the code
- improve code readability and maintainability
- separate concerns in programming.

syntax:
define function
function function-name(parameters)[
    //code to execute
    return result; //optional
]

//call function(arguments)
*/

function check(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}

// call function
check(6);
check(5);


// function to add two number
function sum(num1, num2){
    let sum1=num1+num2;
    console.log(`sum is ${sum1}`);
}
sum(2,3);

/*
types of function:
1. without argument and without return types
2. with argument and withtout return type
3. without argument and with return type
4. with argument and with return type

return: this is the last line in any code, after return no line fo codes are execute.


*/ 
// 1
function funcName(num1 =5, num2=2){
    let name = 'Manisha'
    let sum = num1 + num2;
    console.log(sum,name);
}
funcName();

// 2.
function greet(name){
    console.log(`Hello ${name}`);
}
greet('Manisha');

// 3.
function check(){
    let num = 5;
    if(num%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
        console.log('hello'); //return paxi kei lekhna didaina
    }
}
rs = check()
console.log(rs);


// 4.
function si(p,t,r){
    s_i = (p*t*r)/100;
    return s_i;
}
rs=si(5000,2,5);
console.log(rs);

// function expression:
const add = function(a,b){
    let sum = a+b;
    console.log(sum);
}
add(3,4);

// arrow function (ES6 onward): we don't need to use function keyword
const multiply = () =>{
    let a = 5
    let b=2;
    let mul = a*b;
    console.log(mul);
}
multiply();

//without return in wrrow function
const divide = (a,b)=> a/b;
console.log(divide(10,2));

//overloading, overriding
const greeting=(fn = '', ln='')=>{
    console.log(`Hello ${fn} ${ln}`);
}
greeting()
greeting('Ram');
greeting(ln="Sharma");

// global & local variable
const pi = 3.14
const area = ()=>{
    let r=5;
    a = pi*r**2;
    console.log(`Area of circle is `,a);
}
area()
console.log(pi);
// console.log(r); cant acces the local variable

// buit in function : map, filter
//map : to apply same function to all items of iterable object,
//filter : to apply same function to all items with condition
// reduce : to apply same function but using as cumulative manner.
numbers = [1,2,3,4,5,6,7,8,9,10];
const square = n=> n**2;
const x = numbers.map(square);
console.log(x);

const even = n =>n%2 ==0
const even_num = numbers.filter(even);
console.log(even_num);

// reduce:
const checkNum = (acc,cv) =>{
    console.log(`ACC: ${acc}`);
    console.log(`CV: ${cv}`);
    return acc+cv;
}
let result = numbers.reduce(checkNum,0)
console.log(result);

let minValue = numbers.reduce((a,b)=>Math.max(a,b))
console.log(minValue);