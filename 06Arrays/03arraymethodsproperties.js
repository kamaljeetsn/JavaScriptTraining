//Array Length - Property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)
//Converting an Array to a String
console.log(fruits.toString());//Output Banana,Orange,Apple,Mango
//pop-removes the last element from an array
console.log(fruits.pop());//Output - Mango
console.log(fruits);//Output [ 'Banana', 'Orange', 'Apple' ]
//push - adds a new element to an array (at the end)
console.log(fruits.push("Kiwi")); //returns the new array length - Output - 4
console.log(fruits)
//merging arrays - concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)//Output [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]


//indexOf() - searches an array for an element value and returns its position
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits1.indexOf("Apple"));//Output 0
//lastIndexOf() - returns the position of the last occurrence of the specified element
console.log(fruits1.lastIndexOf("Apple"));//Output 2

//sort - sorts an array alphabetically
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.sort());//Output [ 'Apple', 'Banana', 'Mango', 'Orange' ]
//reverse - reverses the elements in an array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.reverse()) //Output [ 'Mango', 'Apple', 'Orange', 'Banana' ]


