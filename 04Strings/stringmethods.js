//Find the length of the String
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); //Output 26

//Extracting String characters
//method 1
text = "HELLO WORLD";
console.log(text.charAt(0)); //Output H
//method 2
console.log(text.at(2)); //Output L
//method 3
console.log(text[2]); //Output L

//Extracting String Parts
//method 1
text = "Apple, Banana, Kiwi";
//slice between 7 and 13
console.log(text.slice(7,13));//Output Banana
//slice from 7 till end
console.log(text.slice(7));//Banana, Kiwi
//slice from right of the string and move leftwards
console.log(text.slice(-12));//Banana, Kiwi

//method 2 - Substring
console.log(text.substring(7,13))//Output Banana

//Case Conversion
let text1 = "Hello World!";
console.log(text1.toUpperCase()); //Output HELLO WORLD!
console.log(text1.toLowerCase()); //Output hello world!

//using index of method
text = "The weather is very good today and is also very soothing";
console.log(text.indexOf("is"));//Output 15
//using lastIndexOf
console.log(text.lastIndexOf("is"));//Output 35