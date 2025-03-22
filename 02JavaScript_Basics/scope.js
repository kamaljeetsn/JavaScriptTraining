// Global Scope
var globalVar = "I am global";

function testFunction() {
  // Function Scope
  var functionVar = "I am local to this function";
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
}

testFunction();
console.log(globalVar); // Accessible
// console.log(functionVar); // Uncaught ReferenceError

// Block Scope
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Accessible
}

// console.log(blockVar); // Uncaught ReferenceError
