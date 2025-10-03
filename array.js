
let fruits = ["apple", "banana", "mango"]; 
console.log("Initial fruits:", fruits);

console.log("First fruit:", fruits[0]);    
console.log("Second fruit:", fruits[1]);  

fruits[1] = "orange";                      
console.log("After update:", fruits);


fruits.push("grape");                      
console.log("After push:", fruits);


fruits.pop();                              
console.log("After pop:", fruits);


fruits.unshift("kiwi");                    
console.log("After unshift:", fruits);


fruits.shift();                            
console.log("After shift:", fruits);

console.log("Length of array:", fruits.length);


for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit at index", i, "is", fruits[i]); 
}


fruits.forEach((fruit, index) => {
  console.log(`forEach -> Index ${index}: ${fruit}`);
});


let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); 
console.log("Uppercase fruits:", upperCaseFruits);


let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 letters:", longFruits);


let numbers = [10, 20, 30, 40]; 
let sum = numbers.reduce((acc, num) => acc + num, 0); 
console.log("Sum of numbers:", sum);


let someFruits = fruits.slice(0, 2); 
console.log("Sliced fruits:", someFruits);


fruits.splice(1, 1, "papaya"); 
console.log("After splice:", fruits);

const arr=[1,2,4,5, 6,77,234, 456,11,34,56,33,777]
arr.forEach(i=> console.log(i))
 const newarr=arr.map(i=> i*3)
 console.log(newarr)
 const agefilter= arr.filter(y=>y<=25)
console.log(agefilter)



