// Conditional js

// ? Conditional ba Ternary Operator mane hocche jekono ekta condition er upor vitti kore kono ekta kaj kora.  

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

// nested ternary 
// ticketPrice = isLeader ? (ticketPrice > 1000 ? ticketPrice / 2 : 0) : ticketPrice + 1000;

ticketPrice = isLeader ? 
                (ticketPrice > 1000 ? ticketPrice / 2 : 0) 
              : ticketPrice + 1000;
console.log('Pay amount(4) :', ticketPrice);