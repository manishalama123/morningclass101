// REVERSE A STRING
let string1 = "hello";
let reverse = string1.split('').reverse().join(''); 
console.log(reverse);


// CHECK FRO PALINDROME
let input = 'hello'
if (input.split('').reverse().join('') == input){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome ");
}

// COUNT VOWELS IN A STRING
let sentence = "javascript is cool";
let count = 0;

for(let i=0; i<sentence.length ; i++){
    let char = sentence[i].toLowerCase();
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
        count += 1;
    }
}
console.log(`the vowels are ${count}`);

// FIND THE LARGEST EVEN NUMBER IN AN ARRAY 
let array = [1,2,3,4,5,6];
let max = 0;
for (let i=0; i<array.length; i++){
    if(array[i] % 2 == 0){
        if(max<array[i]){
            max= array[i];
        }
    }
}
console.log(`the largest even number in an array is ${max}`);

// REMOVE DUPLICATE FRoM AN ARRAY
let array2 = [1, 2, 2, 3, 4, 4, 5];
let uniquearr = [];
for(let i=0; i<array2.length; i++){
    if(!uniquearr.includes(array2[i])){
        uniquearr.push(array2[i]) ;
    }
}console.log(uniquearr);


// COUNT THE NUMBER IN CHARACTER
let word ='Hello';
let result = {};

for (let i = 0; i<word.length; i++){
    let char = word[i];
    if(char in result){
        result[char] += 1;
    }
    else{
        result[char] = 1;
    }
}console.log(result);



// make a cart and  fint the total sum
const cart = {
    acer_laptop : [100000, 2],
    dell_laptop : [150000, 3],
    macbook_laptop : [200000, 2],
    asus_laptop : [250000, 3],
};
let final = 0;
for(let key in cart){
    let total = 1;
    for(let value of cart[key]){
        total*=value;
    }
    cart[key].push(total);
    final +=cart[key][2];
}
console.log(cart);
console.log(final);


// calcultae totalprice, adds that total as the third calue
const items = {
    pen: [20, 5],
    notebook: [100, 3],
    eraser: [10, 4]
};
let grandtotal= 0;
for(let key in items){
    let tp = 1;
    for(let value of items[key]){
        tp*= value;
    }
    items[key].push(tp);
    grandtotal += items[key][2];
}
console.log(items);  
console.log(grandtotal);

// calculate the discounted price
let grocery = {
    rice: [200, 2, 10],       // 10% discount
    oil: [300, 1, 5],         // 5% discount
    sugar: [100, 5, 0]        // no discount
};

let totalAfterDiscount = 0; // Variable to store final total after all discounts

for (let key in grocery) {
    let price = grocery[key][0];  // price of the item
    let quantity = grocery[key][1];  // quantity of the item
    let discountPercent = grocery[key][2];  // discount percent

    let total = price * quantity;  // Total price before discount
    let discount = (discountPercent / 100) * total;  // Discount amount
    let finalPrice = total - discount;  // Price after applying the discount

    grocery[key].push(finalPrice);  // Add final price to the array

    totalAfterDiscount += finalPrice;  // Add to the grand total
}

console.log(grocery);  // The grocery list with final prices
console.log(totalAfterDiscount);  // Total amount after all discounts

console.log(grocery);
console.log(grandtotal);
  