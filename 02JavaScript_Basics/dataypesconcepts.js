//Dynamic Tapping
let data = 42;     // Number
data = "Hello";    // String
data = true;       // Boolean

//Type Coercion
let result = "5" + 2;  // "52" (string concatenation)
let sum = "5" - 2;     // 3 (string converted to number)

//Checking data types
let num = 100;
console.log(typeof num);  // Output: "number"

let str = "Hello";
console.log(typeof str);  // Output: "string"

//Type Conversion - Implicit Conversion
let x = "5" * "2"; // Output: 10 (strings converted to numbers)

//Type Conversion - Explicit Conversion
let numStr = "123";
let num1 = Number(numStr);  // Converts string to number
console.log(num1);  // Output: 123
let strNum = String(num);


