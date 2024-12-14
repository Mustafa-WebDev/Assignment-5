// Task: Global Scope
// Declare variables using var, let, and const in the global scope
var globalVar = 'I am a global var';
let globalLet = 'I am a global let';
const globalConst = 'I am a global const';

// Log all three variables to the console
console.log(globalVar); // "I am a global var"
console.log(globalLet); // "I am a global let"
console.log(globalConst); // "I am a global const"

// Are they accessible globally?
// Yes, all three are accessible globally.

// Task: Function Scope
function functionScope() {
    var functionVar = 'I am a function var';
    let functionLet = 'I am a function let';
    const functionConst = 'I am a function const';

    console.log(functionVar); // Accessible inside the function
    console.log(functionLet); // Accessible inside the function
    console.log(functionConst); // Accessible inside the function
}
functionScope();

// Trying to log them outside the function
try {
    console.log(functionVar);
} catch (e) {
    console.log("functionVar is not accessible outside the function");
}
try {
    console.log(functionLet);
} catch (e) {
    console.log("functionLet is not accessible outside the function");
}
try {
    console.log(functionConst);
} catch (e) {
    console.log("functionConst is not accessible outside the function");
}

// Task: Block Scope
if (true) {
    var blockVar = 'I am a block var';
    let blockLet = 'I am a block let';
    const blockConst = 'I am a block const';

    console.log(blockVar); // Accessible inside the block
    console.log(blockLet); // Accessible inside the block
    console.log(blockConst); // Accessible inside the block
}

// Logging them outside the block
console.log(blockVar); // Accessible (var is not block-scoped)
try {
    console.log(blockLet);
} catch (e) {
    console.log("blockLet is not accessible outside the block");
}
try {
    console.log(blockConst);
} catch (e) {
    console.log("blockConst is not accessible outside the block");
}

// Task: Hoisting with var
console.log(hoistedVar); // undefined
testVar = 10; // Assignment without declaration works due to hoisting
var hoistedVar;

// Task: Hoisting with let and const
try {
    console.log(hoistedLet);
} catch (e) {
    console.log("Cannot access 'hoistedLet' before initialization");
}
let hoistedLet = 20;

try {
    console.log(hoistedConst);
} catch (e) {
    console.log("Cannot access 'hoistedConst' before initialization");
}
const hoistedConst = 30;

// Task: Re-declaration
var reDeclaredVar = "First declaration";
var reDeclaredVar = "Second declaration"; // Works
console.log(reDeclaredVar);

try {
    let reDeclaredLet = "First declaration";
    // let reDeclaredLet = "Second declaration"; // Error
} catch (e) {
    console.log("Cannot redeclare variable with let");
}

try {
    const reDeclaredConst = "First declaration";
    // const reDeclaredConst = "Second declaration"; // Error
} catch (e) {
    console.log("Cannot redeclare variable with const");
}

// Task: Re-assignment
var reAssignVar = "Original value";
reAssignVar = "New value"; // Works
console.log(reAssignVar);

let reAssignLet = "Original value";
reAssignLet = "New value"; // Works
console.log(reAssignLet);

try {
    const reAssignConst = "Original value";
    reAssignConst = "New value"; // Error
} catch (e) {
    console.log("Cannot reassign a constant");
}

// Task: Temporal Dead Zone (TDZ)
{
    try {
        console.log(tdzLet);
    } catch (e) {
        console.log("Cannot access 'tdzLet' before initialization");
    }
    let tdzLet = "Defined inside block";

    try {
        console.log(tdzConst);
    } catch (e) {
        console.log("Cannot access 'tdzConst' before initialization");
    }
    const tdzConst = "Defined inside block";
}

// Task: Good use cases for var, let, and const
// Example with var
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log("Value of i after loop:", i);

// Example with let
for (let j = 0; j < 3; j++) {
    console.log(j);
}
try {
    console.log("Value of j after loop:", j);
} catch (e) {
    console.log("j is not accessible outside the loop");
}

// Example with const
const fixedValue = 42;
console.log("Fixed value:", fixedValue);

// Task: String Interpolation
const firstName = "Ahmed";
const lastName = "Khan";
const fullName = `${firstName} ${lastName}`;
console.log("Full name:", fullName);

// Task: Multi-line Strings
const multiLine = `123 Main Street
Springfield, Pakistan`;
console.log("Multi-line string:", multiLine);

// Task: Simple Expressions
const num1 = 5;
const num2 = 10;
const sumString = `${num1} + ${num2} = ${num1 + num2}`;
console.log("Sum string:", sumString);

// Task: Function Calls in Template Literals
function multiply(a, b) {
    return a * b;
}
const productString = `The product of 4 and 5 is ${multiply(4, 5)}`;
console.log(productString);

// Task: Tagged Template
function tag(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values);
    return "Processed template literal";
}
const taggedResult = tag`This is a ${"tagged"} template literal`;
console.log(taggedResult);

// Task: Formatting Tag Function
function uppercase(strings, ...values) {
    return strings.reduce((result, str, i) => result + str + (values[i]?.toUpperCase() || ""), "");
}
const formattedString = uppercase`This is ${"formatted"} text.`;
console.log(formattedString);

// Task: Conditional Logic in Template Literals
const currentHour = new Date().getHours();
const timeMessage = `${currentHour < 12 ? "Good morning" : "Good afternoon"}`;
console.log(timeMessage);

// Task: Loops within Template Literals
const shoppingList = ["Apples", "Bananas", "Cherries"];
const htmlList = `<ul>${shoppingList.map(item => `<li>${item}</li>`).join("")}</ul>`;
console.log(htmlList);

// Task: Escaping Backticks
const backtickString = `This is a backtick: \``;
console.log(backtickString);

// Task: Nested Template Literals
const nestedHTML = `
<table>
  ${[1, 2, 3].map(row => `
    <tr>
      ${["A", "B", "C"].map(cell => `<td>${row}${cell}</td>`).join("")}
    </tr>
  `).join("")}
</table>`;
console.log(nestedHTML);

// Task: Simple Condition
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// Task: Even or Odd
const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log("Even or Odd:", evenOrOdd);

// Task: Grade Evaluation
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log("Grade:", grade);

// Task: Login Status
const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log("Status Message:", statusMessage);

// Task: Discount Eligibility
const isMember = true;
const purchaseAmount = 120;
const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log("Discount:", discount);

// Task: Determine Max Value
function maxValue(a, b) {
    return a > b ? a : b;
}
console.log("Max value:", maxValue(5, 10));

// Task: Greeting Message
function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Alice"));
console.log(greet(""));

// Task: Mapping Values
const numbersArray = [1, 2, 3, 4, 5];
const mappedArray = numbersArray.map(num => (num % 2 === 0 ? num * 2 : num * 3));
console.log("Mapped array:", mappedArray);

// Task: Filtering Values
const stringsArray = ["a", "abc", "abcd", "abcde"];
const filteredArray = stringsArray.filter(str => str.length > 3);
console.log("Filtered array:", filteredArray);

// Task: Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

// Task: Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);

// Task: Adding Elements to an Array
const numbers = [2, 3, 4];
const updatedNumbers = [1, ...numbers, 5];
console.log("Updated Numbers:", updatedNumbers);

// Task: Copying an Object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);

// Task: Merging Objects
const object1 = { x: 1, y: 2 };
const object2 = { y: 3, z: 4 };
const mergedObject = { ...object1, ...object2 };
console.log("Merged Object:", mergedObject);

// Task: Updating Object Properties
const user = { name: "Ahmed", age: 30, email: "Ahmed@example.com" };
const updatedUser = { ...user, email: "newemail@example.com", address: "123 Main St" };
console.log("Updated User:", updatedUser);

// Task: Passing Array Elements as Arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbersForSum = [1, 2, 3];
console.log("Sum:", sum(...numbersForSum));

// Task: Combining Multiple Arrays
function combineArrays(...arrays) {
    return [].concat(...arrays);
}
console.log("Combined Arrays:", combineArrays([1, 2], [3, 4], [5, 6]));

// Task: Rest Parameter with Spread Operator
function multiplyByFactor(factor, ...nums) {
    return nums.map(num => num * factor);
}
console.log("Multiplied Array:", multiplyByFactor(2, 1, 2, 3));

// Task: Spread Operator with Nested Structures
const nestedArray = [[1, 2], [3, 4]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log("Original Nested Array:", nestedArray);
console.log("Shallow Copy:", shallowCopy);

// Task: Sum Function
function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4));

// Task: Average Function
function average(...nums) {
    return nums.length ? sumAll(...nums) / nums.length : 0;
}
console.log("Average:", average(2, 4, 6, 8));

// Task: First and Rest
const [first, ...rest] = [10, 20, 30, 40];
console.log("First:", first);
console.log("Rest:", rest);

// Task: Skip and Rest
const [, , ...remainingColors] = ["red", "green", "blue", "yellow"];
console.log("Remaining Colors:", remainingColors);

// Task: Basic Destructuring
const person = { name: "Alice", age: 25, email: "alice@example.com", address: "456 Elm St" };
const { name, email, ...otherProps } = person;
console.log("Name:", name);
console.log("Email:", email);
console.log("Other Properties:", otherProps);

// Task: Nested Destructuring
const student = { id: 1, name: "Bob", grades: [90, 80], info: { age: 20, major: "CS" } };
const { id, name: studentName, info: { major }, ...otherStudentProps } = student;
console.log("ID:", id);
console.log("Name:", studentName);
console.log("Major:", major);
console.log("Other Student Properties:", otherStudentProps);

// Task: Filter Even Numbers
function filterEven(...nums) {
    return nums.filter(num => num % 2 === 0);
}
console.log("Filtered Evens:", filterEven(1, 2, 3, 4, 5, 6));

// Task: Combine and Sort Arrays
function combineAndSort(...arrays) {
    return combineArrays(...arrays).sort((a, b) => a - b);
}
console.log("Combined and Sorted:", combineAndSort([3, 1], [4, 2], [6, 5]));

// Task: Basic Destructuring with Arrays
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);
console.log("Third Fruit:", thirdFruit);

// Task: Skipping Elements
const colors = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colors;
console.log("Primary Color:", primaryColor);
console.log("Tertiary Color:", tertiaryColor);

// Task: Basic Destructuring with Objects
const car = { make: "Toyota", model: "Camry", year: 2021 };
const { make: carMake, model: carModel, year: carYear } = car;
console.log("Make:", carMake);
console.log("Model:", carModel);
console.log("Year:", carYear);

// Task: Default Values
const settings = { theme: "dark" };
const { theme, language = "English" } = settings;
console.log("Theme:", theme);
console.log("Language:", language);

// Task: Array of Arrays
const nestedNums = [[1, 2], [3, 4], [5, 6]];
const [ [a], [b], [c] ] = nestedNums;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Task: Object within an Object
const profile = { username: "charlie", details: { em: "charlie@example.com", address: "789 Oak St" } };
const { username, details: { em, address } } = profile;
console.log("Username:", username);
console.log("Email:", email);
console.log("Address:", address);

// Task: Mix of Arrays and Objects
const data = { id: 1, info: [{ name: "Alice" }, { age: 25 }] };
const { id: dataId, info: [ { name: infoName }, { age: infoAge } ] } = data;
console.log("ID:", dataId);
console.log("Name:", infoName);
console.log("Age:", infoAge);

// Task: Array Parameters
function printCoordinates([x, y]) {
    console.log("X:", x);
    console.log("Y:", y);
}
printCoordinates([10, 20]);

// Task: Object Parameters
function displayUser({ name, age }) {
    console.log("Name:", name);
    console.log("Age:", age);
}

// Task: List Property Names
const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 };
console.log("Property Names:", Object.keys(book));

// Task: Count Properties
const s = { name: "Alice", age: 20, grade: "A", school: "High School" };
console.log("Number of Properties:", Object.keys(s).length);

// Task: Iterate Over Keys
const product = { name: "Laptop", price: 1000, category: "Electronics" };
Object.keys(product).forEach(key => console.log(`${key}: ${product[key]}`));

// Task: List Property Values
const movie = { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" };
console.log("Property Values:", Object.values(movie));

// Task: Sum Values
const scores = { math: 90, science: 85, english: 88 };
const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
console.log("Total Scores:", total);

// Task: Iterate Over Values
const u = { username: "Ahmed Khan", email: "Khan@example.com", location: "Pakistan" };
Object.values(u).forEach(value => console.log(value));

// Task: List Entries
const cd = { make: "Toyota", model: "Camry", year: 2021 };
console.log("Entries:", Object.entries(cd));

// Task: Convert Object to Array
const p = { firstName: "Ahmed", lastName: "Khan", age: 30 };
console.log("Converted Array:", Object.entries(p));

// Task: Iterate Over Entries
const ss = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(ss).forEach(([key, value]) => console.log(`${key}: ${value}`));

// Task: Filter Keys
const inventory = { apples: 5, bananas: 20, oranges: 15, grapes: 8 };
const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log("Filtered Keys:", filteredKeys);

// Task: Transform Values
const temperatures = { morning: 20, afternoon: 25, evening: 18 };
const transformedTemperatures = Object.fromEntries(
    Object.entries(temperatures).map(([key, value]) => [key, value * 1.8 + 32])
);
console.log("Transformed Temperatures:", transformedTemperatures);

// Task: Key-Value Swap
const roles = { admin: "Alice", editor: "Bob", viewer: "Charlie" };
const swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log("Swapped Roles:", swappedRoles);

// Task: Filter and Map
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}
console.log("Filtered and Mapped:", filterAndMap(num, n => n % 2 !== 0, n => n ** 2));

// Task: Sort and Reduce
const words = ["apple", "banana", "cherry", "date"];
function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn);
}
console.log("Sorted and Reduced:", sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + " " + word));

// Task: Simple Callback
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    // callback(message);
}
function printGreeting(message) {
    console.log(message);
}
greet("Alice", printGreeting);

// Task: Asynchronous Callback
function fetchData(callback) {
    setTimeout(() => callback("Data fetched successfully"), 1000);
}
function displayData(data) {
    console.log(data);
}
fetchData(displayData);

// Task: Simple Arrow Function
const add = (a, b) => a + b;
console.log("Sum:", add(3, 5));

// Task: Arrow Function with Array Methods
const arrayNumbers = [1, 2, 3, 4, 5];
console.log("Squared Numbers:", arrayNumbers.map(num => num ** 2));

// Task: Variable Scope
function outer() {
    const x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

// Task: Closure
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1();
counter1();
counter2();
counter2();

// Task: Simple Default Parameters
function greetWithDefault(name, message = "Hello") {
    console.log(`${message}, ${name}!`);
}
greetWithDefault("Ahmed");
greetWithDefault("Ahmed", "Hi");

// Task: Default Parameters with Other Arguments
function calculateArea(width = 10, height = 5) {
    return width * height;
}
console.log("Default Area:", calculateArea());
console.log("Custom Area:", calculateArea(15, 10));

// Task: Square Numbers
const nums = [1, 2, 3, 4, 5];
console.log("Squared Numbers:", nums.map(n => n ** 2));

// Task: Convert to Uppercase
const wordsArray = ["apple", "banana", "cherry"];
console.log("Uppercase Words:", wordsArray.map(word => word.toUpperCase()));

// Task: Filter Even Numbers
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even Numbers:", numArray.filter(n => n % 2 === 0));

// Task: Filter Long Words
const wordsForFilter = ["apple", "banana", "cherry", "date"];
console.log("Long Words:", wordsForFilter.filter(word => word.length > 5));

// Task: Log Numbers
numArray.forEach(n => console.log(n));

// Task: Log Word Lengths
wordsArray.forEach(word => console.log(`${word}: ${word.length}`));

// Task: Sum of Numbers
console.log("Sum of Numbers:", numArray.reduce((sum, n) => sum + n, 0));

// Task: Concatenate Strings
const stringArray = ["Hello", "world", "this", "is", "JavaScript"];
console.log("Concatenated String:", stringArray.reduce((acc, word) => acc + " " + word));

// Task: Check for Even Number
console.log("Has Even Number:", numArray.some(n => n % 2 === 0));

// Task: Check for Long Word
console.log("Has Long Word:", wordsForFilter.some(word => word.length > 5));

// Task: Check All Even Numbers
console.log("All Even Numbers:", numArray.every(n => n % 2 === 0));

// Task: Check All Long Words
console.log("All Long Words:", wordsForFilter.every(word => word.length > 5));

// Task: Find First Even Number
console.log("First Even Number:", numArray.find(n => n % 2 === 0));

// Task: Find Long Word
console.log("First Long Word:", wordsForFilter.find(word => word.length > 5));

// Task: Find Index of First Even Number
console.log("Index of First Even Number:", numArray.findIndex(n => n % 2 === 0));

// Task: Find Index of Long Word
console.log("Index of First Long Word:", wordsForFilter.findIndex(word => word.length > 5));

// Task: Simple Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve("Hello, world!"), ms));
}
delay(2000).then(message => console.log(message));

// Task: Promise Chain
function fetchDataChain() {
    return new Promise(resolve => resolve({ data: "Sample Data" }));
}
fetchDataChain().then(data => console.log("Fetched Data:", data));

// Task: Error Handling
function fetchUserData() {
    return new Promise((resolve, reject) => {
        const user = { name: "Ahmed" }; // Missing age
        if (!user.age) reject("Age property is missing");
        resolve(user);
    });
}
fetchUserData()
    .then(data => console.log("User Data:", data))
    .catch(error => console.log("Error:", error));

// Task: Simulate Network Request
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => Math.random() > 0.5 ? resolve("Sunny") : reject("Network Error"), 1000);
    });
}
getWeather()
    .then(weather => console.log("Weather Data:", weather))
    .catch(error => console.log("Error:", error));

// Task: Simple async Function
async function sayHello() {
    const message = await delay(2000);
    console.log(message);
}
sayHello();

// Task: Fetch Data with async/await
async function getUserData() {
    try {
        const data = await fetchUserData();
        console.log("Fetched User Data:", data);
    } catch (error) {
        console.log("Error Fetching User Data:", error);
    }
}
getUserData();

// Task: Fetch and Process Data
function fetchUser() {
    return Promise.resolve({ name: "Alice", age: 25 });
}
function fetchPosts() {
    return Promise.resolve(["Post1", "Post2", "Post3"]);
}
async function getUserAndPosts() {
    try {
        const user = await fetchUser();
        console.log("User:", user);
        const posts = await fetchPosts();
        console.log("Posts:", posts);
    } catch (error) {
        console.log("Error:", error);
    }
}
getUserAndPosts();

// Task: Error Handling in async/await
async function getUserInfo() {
    try {
        const user = await fetchUserData();
        console.log("User Info:", user);
    } catch (error) {
        console.log("Error in User Info:", error);
    }
}
getUserInfo();

// Task: Simulate API Calls
function apiCall() {
    return new Promise(resolve => setTimeout(() => resolve("API Data"), Math.random() * 1000));
}
async function getData() {
    try {
        const result1 = await apiCall();
        console.log("Result 1:", result1);
        const result2 = await apiCall();
        console.log("Result 2:", result2);
        const result3 = await apiCall();
        console.log("Result 3:", result3);
    } catch (error) {
        console.log("Error in API Calls:", error);
    }
}
getData();

