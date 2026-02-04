//* -----------Task 1--------//
/*
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300
*/
//?  ------------Solve------------
let totalMoney = 1000;
let cost = 700;
let returnMoney = totalMoney - cost;
console.log(returnMoney)



//*------Task 2-----
/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

//------ Solve------
// ইনপুট (পাঁচটি বিষয়ের নম্বর)
let marks = [75.25, 65, 80, 35.45, 99.50];

// মোট যোগফল
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

// গড় নির্ণয়
let average = total / marks.length;

// ২ ঘর দশমিক পর্যন্ত প্রিন্ট
console.log(average.toFixed(2));

//--------Task 3 -------
/* 
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4
*/
//------Solve------
let number = 119; // ইনপুট সংখ্যা

let remainder = number % 5; // % হলো modulo operator, যা remainder দেয়

console.log(remainder);


// ------------Task-4------
/*
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
*/
// 1️⃣
var a = isNaN('11');
/* কী হচ্ছে এখানে?
'11' হলো string
কিন্তু isNaN() আগে চেষ্টা করে এটাকে number এ convert করতে
'11' → Number('11') = 11
11 হলো valid number (NaN না)
✅ Result
Copy code
Javascript
false
📌 কারণ: '11' দেখতে string হলেও এটা number বানানো যায়, তাই NaN নয়।

*/

// 2️⃣
var a = isNaN(2 - 10);
/*
কী হচ্ছে এখানে?
2 - 10 = -8
-8 একটি valid number
তাই এটা NaN না
✅ Result
Copy code
Javascript
false
📌 কারণ: -8 সংখ্যাই, ভুল বা NaN কিছু না।
🔑 এক লাইনে মনে রাখার কৌশল
isNaN() চেক করে:
👉 “এই জিনিসটা কি number হতে পারে না?”
number হতে পারলে → false
number না হলে → true
উদাহরণ:
Copy code
Javascript
isNaN('abc') // true
isNaN('123') // false
isNaN(undefined) // true
*/
