// Task 1: Adding and Removing Elements

// Create an array containing some initial elements
let fruits = ['apple', 'banana', 'orange'];
console.log("Initial fruits array:", fruits);

// Use the push method to add a new element to the end of the array
fruits.push('mango');
console.log("Array after adding 'mango':", fruits);

// Use the pop method to remove the last element from the array
fruits.pop();
console.log("Array after removing the last element:", fruits);

// Task 2: Sorting Arrays

// Create an array of numbers in random order
let numbers = [3, 1, 5, 2, 4];
console.log("Initial numbers array:", numbers);

// Use the sort method to sort the array in ascending order
numbers.sort((a, b) => a - b); // Sort numbers in ascending order
console.log("Array after sorting in ascending order:", numbers);

// Task 3: Applying Array Methods

// Create an array of numbers
numbers = [3, 1, 5, 2, 4];
console.log("Numbers array for map, filter, and reduce:", numbers);

// Use the map method to double each number in the array
const doubledNumbers = numbers.map(num => num * 2);
console.log("Array after doubling each number:", doubledNumbers);

// Use the filter method to filter out even numbers from the array
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Array after filtering out even numbers:", oddNumbers);

// Use the reduce method to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers in the array:", sum);

// Additional Concepts

// Spread Operator Example
const moreFruits = ['pineapple', 'grape'];
const allFruits = [...fruits, ...moreFruits]; // Combine arrays
console.log("Array after spreading and combining fruits:", allFruits);

// Rest Operator Example
function logFruits(...fruits) {
  console.log("Logged fruits:", fruits);
}
logFruits('apple', 'banana', 'orange'); // Rest operator gathers all arguments into an array
