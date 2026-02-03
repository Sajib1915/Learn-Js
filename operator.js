 // node Operator.js

// ! there are different types of operators in JavaScript 
/* 
? 1. Arithmetic Operators
? 2. Assignment Operators   
? 3. Comparison Operators
? 4. Logical Operators
? 5. String Operators
*/



//* there are five basic arithmetic operations in JavaScript:

//? 1. Addition Operation
var onionPrice1 = 20;
var tomatoPrice1 = 15;
var totalPrice1 = onionPrice1 + tomatoPrice1;
console.log(totalPrice1);

//? 2. Subtraction Operation
var onionPrice2 = 20;
var tomatoPrice2 = 15;
var totalPrice2 = onionPrice2 - tomatoPrice2;
console.log(totalPrice2);   

//? 3. Multiplication Operation
var onionPrice3 = 20;
var tomatoPrice3 = 15;
var totalPrice3 = onionPrice3 * tomatoPrice3;
console.log(totalPrice3);

//? 4. Division Operation
var onionPrice4 = 20;
var tomatoPrice4 = 15;
var totalPrice4 = onionPrice4 / tomatoPrice4;
console.log(totalPrice4);

//? 5. Modulus Operation // ভাগশেষ 
var onionPrice5 = 20;
var tomatoPrice5 = 15;
var totalPrice5 = onionPrice5 % tomatoPrice5;
console.log(totalPrice5);  //5

//* Shorthand Arithmetic Operators 

var price1 = 20;
price1 += 10;  // price2 = price2 + 10 লিখা একি কথা তাই এটাকে ‍ Shorthand Arithmetic Operators বলে 
console.log(price1);  //30

var price2 = 30;
price2 -= 5;  // price3 = price3 - 5 
console.log(price2);  //25

var price3 = 5;
price3 *= 2;  // price4 = price4 * 2
console.log(price3);  //10

var price4 = 10;
price4 /= 2;  // price5 = price5 / 2
console.log(price4);  //5


//* There are also two more arithmetic operators:

//? 6. Increment Operation
var price5 = 10;
price5++;
console.log(price5);  //11

//? 7. Decrement Operations
var price6 = 10;
price6--;
console.log(price6);  //9

//* String Operators

var first = 'Sajibul' ;
var last = 'Islam' ;
var fullName = first + " " + last ;
console.log(fullName);  //Sajibul Islam  

var firstName = 'Sajibul' ;
firstName += ' Islam ' ;
console.log(firstName);  //Sajibul Islam

// There are some basic comparison operators in JavaScript:
//* Comparison Operators
// Equal Operator (==)
var x = 5;
var y = '5';
console.log(x == y);  //true
// Not Equal Operator (!=)
console.log(x != y);  //false  
// greater than Operator (>)
console.log(x > 3);  //true
// less than Operator (<)
console.log(x < 10);  //true
// greater than or equal to Operator (>=)
console.log(x >= 5);  //true
// less than or equal to Operator (<=)
console.log(x <= 4);  //false 
// strict equality Operator (===)
console.log(x === y);  //false
// strict not equal Operator (!==)
var a = 10;
var b = '10';
console.log(a !== b);  //true 


//* Logical Operators
var p = 5;
var q = 10;

/* AND Operator (&&)
*দুইটা শর্ত উভয়ই সঠিক (true) হলে true দেয়।
*অন্য সব ক্ষেত্রে false।
*/
console.log(p < 10 && q > 5);  //true

/* OR Operator (||)
*যেকোনো একটা শর্ত সঠিক (true) হলে true দেয়।
*দুইটাই ভুল (false) হলে false দেয়।
*/
console.log(p < 10 || q < 5);  //true

/* NOT Operator (!)
*শর্তটি true হলে false দেয়।
*শর্তটি false হলে true দেয়।
*/
console.log(!(p < 10));  //false
console.log(!(q > 5));  //true

//* Assignment Operators
// Assignment Operator (=)
var c = 20;  // (=) assignment operator → c তে 20 রাখা হলো
var d = 10; //d তে 10 রাখা হলো
c += d;       // এটা assignment + arithmetic একসাথে → c = c + d
console.log(c);  //30
/*c += d দেখেই কম্পিউটার ভাবে:
“c-এর পুরাতন মান নাও, তার সাথে d যোগ করো,
তারপর নতুন মানটা আবার c-তেই রেখে দাও”
*/ 

// Similarly,
c -= d;  //c = c - d
console.log(c);  //20

c *= d;  //c = c * d
console.log(c);  //200

c /= d; //c = c / d
console.log(c) //20

c %= d; //c = c % d
console.log(c) //0

//* Conditional (Ternary) Operator

var age = 20;

if (age >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}


var briannyPrice = 201 ;

if (briannyPrice > 200)  {
    console.log('You are able to eat');
} else{
    console.log('You cannot eat');
}

const salary = 25000;
const isDevloper = true;

if(salary > 2000 || isDevloper == true){
    console.log('sho patro')
}
else{
    console.log('onnopatro koji')
}

let myName = 'Sajib' ;

if(myName === 'Sajib') {
    console.log('You are allowed')
}
