// Task 1: Obtaining String Length

// Create a string with some text content
let message = "Hello, World!";
console.log("Task 1: Obtaining String Length");
console.log("String:", message);
console.log("Length of the string:", message.length); // Output: 13

// Task 2: Converting Cases

// Create a string with mixed-case content
let text = "Hello, World!";
console.log("\nTask 2: Converting Cases");
console.log("Original string:", text);

// Use the toUpperCase method to convert the string to uppercase
let upperCaseText = text.toUpperCase();
console.log("Uppercase string:", upperCaseText); // Output: "HELLO, WORLD!"

// Use the toLowerCase method to convert the string to lowercase
let lowerCaseText = text.toLowerCase();
console.log("Lowercase string:", lowerCaseText); // Output: "hello, world!"

// Task 3: Extracting Substrings

// Create a string with some text content
let sentence = "The quick brown fox jumps over the lazy dog";
console.log("\nTask 3: Extracting Substrings");
console.log("Original sentence:", sentence);

// Use the substring method to extract a substring from the original string
let substring = sentence.substring(4, 9); // Extracts characters from index 4 to 8 (9 is exclusive)
console.log("Extracted substring (index 4 to 9):", substring); // Output: "quick"

// Task 4: Splitting Strings

// Create a string containing multiple words separated by spaces
let words = "The quick brown fox";
console.log("\nTask 4: Splitting Strings");
console.log("Original sentence:", words);

// Use the split method to split the string into an array of words based on the space delimiter
let wordsArray = words.split(' ');
console.log("Array of words after splitting:", wordsArray); // Output: [ 'The', 'quick', 'brown', 'fox' ]

// Additional Concepts

// Join Method Example: Combining an array of words back into a string
let joinedWords = wordsArray.join(' ');
console.log("String after joining the array with spaces:", joinedWords); // Output: "The quick brown fox"
