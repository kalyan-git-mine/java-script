function displayMessage() {
    const output = document.getElementById("output");
    output.innerHTML = "Hello from JavaScript ES6!";
    console.log("Button was clicked!");
}
// ----------------- BLOCK SCOPE ------------------
{
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Inside BLOCK:");
    console.log("x:", x); // 10
    console.log("y:", y); // 20
    console.log("z:", z); // 30

    // Reassign inside block
    x = 100; // ✅ OK
    y = 200; // ✅ OK
    // z = 300; // ❌ Error: Assignment to constant variable

    console.log("After reassignment inside BLOCK:");
    console.log("x:", x); // 100
    console.log("y:", y); // 200
    console.log("z:", z); // 30
}

// Outside BLOCK
console.log("\nOutside BLOCK:");
try {
    console.log("x:", x); // ✅ var is function/global scoped
} catch (err) {
    console.log("x Error:", err.message);
}
try {
    console.log("y:", y); // ❌ Block scoped
} catch (err) {
    console.log("y Error:", err.message);
}
try {
    console.log("z:", z); // ❌ Block scoped
} catch (err) {
    console.log("z Error:", err.message);
}

// ----------------- FUNCTION SCOPE ------------------
function testScope() {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log("\nInside FUNCTION:");
    console.log("a:", a); // 1
    console.log("b:", b); // 2
    console.log("c:", c); // 3

    // Reassign inside function
    a = 101;
    b = 202;
    // c = 303; // ❌ Error: Assignment to constant variable

    console.log("After reassignment inside FUNCTION:");
    console.log("a:", a); // 101
    console.log("b:", b); // 202
    console.log("c:", c); // 3
}

testScope();

// Outside FUNCTION
console.log("\nOutside FUNCTION:");
try {
    console.log("a:", a); // ❌ Function scoped
} catch (err) {
    console.log("a Error:", err.message);
}
try {
    console.log("b:", b); // ❌ Function scoped
} catch (err) {
    console.log("b Error:", err.message);
}
try {
    console.log("c:", c); // ❌ Function scoped
} catch (err) {
    console.log("c Error:", err.message);
}



// ================================
// 🌟 DECISION-MAKING (CONTROL FLOW)
// ================================

console.log("----- IF / ELSE IF / ELSE Example -----");

let age = 20;

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}


console.log("\n----- SWITCH Statement Example -----");

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek day.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("It's just another day.");
}


console.log("\n----- TERNARY Operator Example -----");

let score = 75;
let result = score >= 50 ? "Pass" : "Fail";
console.log("Result:", result);


// ================================
// 🔁 LOOPING
// ================================

console.log("\n----- FOR Loop Example (1 to 5) -----");

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}


console.log("\n----- WHILE Loop Example (Countdown from 5) -----");

let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}


console.log("\n----- DO...WHILE Loop Example (Runs at least once) -----");

let num = 0;
do {
  console.log("Number is:", num);
  num++;
} while (num < 3);


// ================================
// 🔄 BONUS: NESTED IF & LOOP COMBINATION
// ================================

console.log("\n----- BONUS: Loop with Conditional Inside -----");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
