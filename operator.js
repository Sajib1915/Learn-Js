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

var voterAgeExample = 20;

if (voterAgeExample >= 18) {
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
    console.log('sho patro');
}
else{
    console.log('onnopatro koji');
}

let myName = 'Sajib' ;

if(myName === 'Sajib') {
    console.log('You are allowed');
}

//!Repo Name - js-conditionals - Programming hero
/**        1.(if.js)
 * 
 * if(condition) {
 *      execute code if condition above is true
 * }
 * else {
 *      execute code if the condition is false
 * }
*/

var weight = 20;

if(weight < 20){
    console.log('I will carry it by myself');
}
else{
    console.log('i will rent a rickshaw');
}

//? ---------- Multiple Js 2.(multiple.js) --------------
const salaryCandidate = 21001;
const isBCS = true;
let height = 68;
const hasCar = false;
height = 71;


// if(salaryCandidate > 20000 && height > 66){
//     console.log('Su----patro');
// }
// else{
//     console.log('onno patro khuji')
// }

if(salaryCandidate > 25000 || height > 72){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}


// more and more condition
// if(salaryCandidate > 25000 || height > 72 || isBCS){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }

if(salaryCandidate > 25000 && height > 72 && isBCS){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}

// -----------------COMPLEX CONDITION--------------------
if((salaryCandidate > 25000 && hasCar) || isBCS ){
    console.log('tomar 14 gosti raji')
}

if((salaryCandidate > 25000 || hasCar) && isBCS ){
    console.log('tomar 14 gosti raji')
}

/**
 * MULTI_LEVEL CONDITION 3.(stepped.js)
*/

const price = 2000;

if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price -discount;
    console.log(payAmount)
}
else {
    console.log(price);
}

//one Another 4.(restaurant.js)

const age = 62;
const mealPrice = 500;

if (age <= 12) {
    console.log('You can eat for free');
}
else if (age >= 60) {
    // 50% discount
    const discount = mealPrice * 50 / 100;
    const payAmount = mealPrice - discount;
    console.log(payAmount);
}
else if (age >= 50) {
    // 25% discount
    const discount = mealPrice * 25 / 100;
    const payAmount = mealPrice - discount;
    console.log(payAmount);
}
else if (age >= 40) {
    // 10% discount
    const discount = mealPrice * 10 / 100;
    const payAmount = mealPrice - discount;
    console.log(payAmount);
}
else {
    console.log(mealPrice);
}

// -------Nested If-Else Condition 5.(nested.js)----
const money = -10;
if (money > 300) {
    console.log('bro you are rich!!!');
}
else{
    if(money > 100){
        console.log('tui gorib o na boro lok o na')
    }
    else {
        if (money > 0){
            console.log('dosto kola kha.calcium bara')
        }
        else {
            console.log('tui amar bondhu na. ')
        }
    }
}

/** (Advanced)If-else 
 *
 * TERNARY --> three parts
 * 
 *   ?    :
 * 
 *  condition ? do something when true : do something when false
*/

//Example 1

const voterAge = 20;             // ভোটারের বয়স 

// normal if-else 
// if (voterAge >= 18) {
//     console.log('Vote Dio');
// } else {
//     console.log('Ghumai thako');
// }

// simple ternary 
voterAge >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako');


//Example 2

let ticketPrice = 500;            

const isLeader = false;          

// সাধারণ if-else: নেতা হলে ফ্রি, না হলে +100
if (isLeader) {
    ticketPrice = 0;            // নেতা হলে ভাড়া = 0
} else {
    ticketPrice = ticketPrice + 100; // নেতা না হলে +100
}
console.log('Pay amount(1) :', ticketPrice);

// একই লজিক টার্নারি দিয়ে
ticketPrice = isLeader === true ? 0 : ticketPrice + 100;
console.log('Pay amount(2) :', ticketPrice);

// OPTIONAL: semi-advanced logic 
if (isLeader === true) {
    if (ticketPrice > 1000) {
        ticketPrice = ticketPrice / 2; // দাম > 1000 হলে 50% কেটে দেওয়া হয়
    } else {
        ticketPrice = 0;               // নয়তো ভাড়া = 0
    }
} else {
    ticketPrice = ticketPrice + 1000;  // নেতা না হলে +1000
}
console.log('Pay amount(3) :', ticketPrice);

// nested ternary (কমেন্ট করা রয়েছে — পড়তে সাবধান)
// ticketPrice = isLeader ? (ticketPrice > 1000 ? ticketPrice / 2 : 0) : ticketPrice + 1000;

ticketPrice = isLeader ? 
                (ticketPrice > 1000 ? ticketPrice / 2 : 0) 
              : ticketPrice + 1000;
console.log('Pay amount(4) :', ticketPrice);