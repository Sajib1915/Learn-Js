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