/*
array: 
-special variable that can hold multiple values at once.
-arrays are commonly used to store lists of data or data types.
*/ 

/*create an array
*/ 
let fruits = ['Apple', 'Banana', 'Cherry', 'DragonFruit',1]
console.log(fruits,typeof fruits,fruits.length);

let abc = new Array(1,2,3,4)
console.log(abc,typeof abc);

// accessing and indexing

console.log(fruits[2]);
console.log(fruits.indexOf('Cherry'));

// updating values
fruits[4] = "Kiwi"
console.log(fruits);

// add elements in array:push(elements):at the end of array, .unshift(elements)
fruits.push('Strawberry')
console.log(fruits);
fruits.unshift('Mango')
console.log(fruits);

// remove
// pop():remove items from end of array
fruits.pop()
console.log(fruits)
// shift():remove from start
fruits.shift()
console.log(fruits);

// splice()
fruits.splice(2,0, 'Mango')
console.log(fruits);

// includes(items) :check if the items exists.
console.log(fruits.includes('Apple',2)); 
fruits.sort()
fruits.reverse()
console.log(fruits);

// loop in array
// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// for ....of 
// for(let item of fruits){
//     console.log(item);
// }

// destructuring
// let [a,b,c,d,e] = fruits
// console.log(e);

// display fruits having even length


for(item of fruits){
    
    if (item.length%2 == 0){
        console.log(item);
    }
}
let even = []
let odd = []
for(item of fruits){
    
    if (item.length%2 == 0){
        even.push(item)
    }
    else{
        odd.push(item)
    }
}
console.log(even);
console.log(odd);

fal = 'Cherry'
for(item of fruits){
    if(item.toLowerCase() == fal.toLowerCase()){
        console.log(item);
        break;
    }
}

// find the largest number
arr = [1,2,3,4,8,6,5,9];
let a=0;
for(i=0;i<=arr.length-1;i++){
    if(a<arr[i]){
        a=arr[i];       
    }
}
console.log(`the greatest number is ${a}`);


// FIND THE SECOND LARGEST NUMBER
// arr = [1,2,3,4,8,6,5,9]
// let max= 0
// let secondmax = 0
// for (i=0;i<=arr.length-1;i++){
//     if(max<arr[i]){
//         secondmax = max
//         max = arr[i]
//     }
//     else if(max>secondmax && secondmax < arr[i]){
//         secondmax = arr[i]

//     }
// }
// console.log(`Second greatest is ${secondmax}`);


// FIND THE SMALLEST NUMBER
// let arr2= [2, 8, 6, 4, 9, 4, 56]
// let small = Infinity
// for(i=0;i<=arr2.length-1;i++){
//     if(small>arr2[i]){
//         small = arr2[i]
//     }
// }console.log(`the smallest number in the array is ${small}`);



// FIND THE THIRD LARGEST NUMBER

// let arr3 = [2, 334, 568, 97, 556, 67];
// let max = -Infinity;
// let secondmax = -Infinity;
// let thirdmax = -Infinity;

// for (let i = 0; i < arr3.length; i++){
//     if(arr3[i] > max){
//         thirdmax = secondmax;
//         secondmax = max;
//         max = arr3[i];
//     }
//     else if(arr3[i] < max && arr3[i]>secondmax){
//         thirdmax = secondmax;
//         secondmax = arr3[i];
//     }
//     else if(arr3[i]<secondmax && arr3[i]>thirdmax){
//         thirdmax = arr3[i];
//     }
// }console.log(`the max is ${max} , secondmax is ${secondmax} and the thirdmax is ${thirdmax}`);


// FIND THE MISSING NUMBER : Sum= 

// let array = [1, 2, 4, 5, 6]
// let n = array.length + 1;
// let sum = n* (n+1)/2;
// let actualsum = 0;
// for(i=0; i<array.length; i++){
//     actualsum += array[i]
// }

// console.log(`the missing number is : ${sum- actualsum}`);