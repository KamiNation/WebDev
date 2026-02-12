
// JS Syntax
// alert("Hello, Welcome to TO Javascript!");

// Variables; Var are containers for storing values(data).
// 3 ways of declaring JS Variables
// var; can redeclare and reassign values
// let; can reassign values but cannot redeclare
// const; cannot redeclare and cannot reassign values

// var

// Naming Conventions for Variables
// 1. Camel Case; the first word is in lowercase and the first letter of each subsequent word is capitalized
let camelCaseVariable
// 2. Snake Case; all words are in lowercase and separated by underscores
let snake_case_variable
// It cant start with a number, 
// It can only start with a letter, underscore or dollar sign

//keyword     variableName     assignmentOperator     value 
var            name                 =                "Toyin";
let            age                  =                 25;
const          country              =                 "Nigeria";

console.log("name =>", name)
console.log("age =>", age)
console.log("country =>", country)



// Datatypes
// Datatype is the classification of data which tells 
// the compiler or interpreter how the programmer 
// intends to use the data.

// Primitive Datatypes
// 1. String; a sequence of characters enclosed in single or double quotes
let myString = "My string"
console.log("myString =>", myString)
console.log("typeof myString =>", typeof myString)

// 2. Number; represents both integer and floating-point numbers
let myInteger = 10
console.log("myInteger =>",  myInteger)
console.log("typeof myInteger =>", typeof myInteger)

let myFLoat = 3.14
console.log("myFloat =>",  myFLoat)
console.log("typeof myFloat =>", typeof myFLoat)

// 3. Boolean; represents true or false values
let iamBoolean = true
console.log("iamBoolean =>",  iamBoolean)
console.log("typeof iamBoolean =>", typeof iamBoolean)


// 4. Null; represents the intentional absence of any object value
let myNull = null
console.log("myNull =>", myNull)
console.log("myNull =>", typeof myNull)

// 5. Undefined; represents a variable that has been declared but not assigned a value
let myUndefined
console.log("myUndefined =>",  myUndefined)
console.log("myUndefined =>", typeof myUndefined)

// Non-Primitive Datatypes
// 1. Object; a collection of properties, 
// where each property is defined as a key-value pair
let myObject = {
    name: "Toyin",
    age: 25,
    country: "Nigeria",
    school: "University of Lagos"
}
console.log("myObject =>", myObject)
// 2. Array; an ordered list of values, which can be of any datatype
let myArray = ["Toyin", 25, "Nigeria", "University of Lagos", true, null, undefined]
console.log("myArray =>", myArray)


// Strings
// String Concatenation; the addition 
// of two or more strings together to form a new string

let firstName = "Oluwatoyin"
let surName = "Ogunlari"

// Concatenation using the + operator
let fullName = firstName + " " + surName

let newSentence = "I am from a royal bloodline and my first name is" + " " + firstName + " " + "and my royal surname is  " + surName 
console.log("fullname =>", fullName)
console.log("newSentence =>", newSentence)


// Concatenation using template literals ` `; 
// allows for embedding expressions
let templateLiteral = `my first name is ${firstName}  and my surname ${surName}`
let newSentenceT = `I am from a royal bloodline and my first name is ${firstName} and my royal surname is ${surName}` 
console.log("templateLiteral =>", templateLiteral)
console.log("templateLiteral =>", newSentenceT)


// string length; this returns the number of characters in a string
console.log("newSentenceT length =>", newSentenceT.length)

// Section 1: Variable Basics
// What are the three keywords used to declare variables in JavaScript?

// Explain the difference between let and const regarding "reassigning" values.

// Which variable declaration keyword allows you to both redeclare and reassign values?

// Identify the four parts of this statement: let age = 25;

// let: ______

// age: ______

// =: ______

// 25: ______

// Section 2: Naming Conventions
// Write the variable name user home address using Camel Case.

// Write the variable name user home address using Snake Case.

// Which of the following are invalid variable names? Why?

// let 1stPlace = "Gold";

// let _score = 10;

// let $price = 100;

// let my variable = "name";

// Section 3: Data Types
// List the 5 Primitive data types mentioned in your notes.

// What is the difference between null and undefined?

// If you run typeof 3.14, what will the result be?

// True or False: An Array is considered a Non-Primitive data type.

// In an Object, data is stored in ______ pairs.

// Section 4: Strings & Manipulation
// What is "String Concatenation"?

// Look at the code below. Use the + operator to join 
// these into a sentence: 
// let fruit = "apple"; 
// let color = "red";
//  let fruit = fruit + color

// Rewrite the sentence from the previous question using Template Literals.

// How do you find the total number of characters 
// (including spaces) in a string?


// Challenge 1: The Profile Builder
// Goal: Practice variable declaration and template literals.

// Create a const variable for your birthCountry.

// Create a let variable for your currentAge.

// Use template literals to create a sentence: "I am [currentAge] years old and I was born in [birthCountry]."

// Print the sentence and its length to the console.
// console.log("Sentence =>", sentence, sentence.length)

// Challenge 2: The Logic Fixer
// Goal: Understand variable naming and reassignment. 
// The following code has three errors. Rewrite it so it runs correctly:

// JavaScript
// let stName = "Toyin";
// const location = "Lagos";
// location = "Abuja"; 

// console.log(1stName, location);
// (Hint: Think about starting characters and which keywords allow reassignment.)



// Challenge 3: Data Type Detective
// Goal: Identify and use primitive vs. non-primitive types.

// Create an Array named favoriteFoods containing at least three strings.

// Create an Object named laptop with the keys: brand, model, and isWorking (a boolean).
const laptop = {
    brand: "hp",
    model: "2022",
    isWorking: true,
}

// Use console.log(typeof ...) to check the data type of favoriteFoods. Does it return "array" or "object"?

// Challenge 4: The String Mixer
// Goal: Practice different ways of concatenation.

// Create two variables: part1 = "JavaScript" and part2 = "is awesome".

// Create a third variable combined that joins them using the + operator, making sure there is a space between them.

// Create a fourth variable combined2 that joins them using template literals.

// Print both to see if they match.

// Challenge 5: The "Null" vs "Undefined" Test
// Goal: See the difference in the console.

// Declare a variable called ghost but do not assign it a value.
// console.log(ghost)
// console.log(typeof ghost)

// Declare a variable called empty and assign it the value of null.
// console.log(empty)
// console.log(typeof empty)


// Print both variables to the console.

// Print the typeof for both variables.


// Section 1: Variable Declarations
// Which keyword should you use if you want to declare a variable that cannot be changed later in the code?

// Why is var considered more "flexible" than let when it comes to the names of variables in the same scope?

// If you write let x = 10; and then follow it with let x = 20;, what will happen?

// In the statement const country = "Nigeria";, identify the Assignment Operator.

// Section 2: Naming Rules
// Your notes mention that a variable name cannot start with a number. Which of these characters are allowed to start a variable name?

// * (Asterisk)

// $ (Dollar sign)

// - (Hyphen)

// _ (Underscore)

// Describe the visual difference between Camel Case and Snake Case using the example "total player score".

// Is let FirstName the same as let firstname in JavaScript? (Think about case sensitivity).

// Section 3: Data Types
// What is the difference between a String and a Number in terms of how they are written in code?

// Which data type represents only two possible values: true or false?

// Your notes show let myUndefined. If you don't use the = sign to give it a value, what is its default type?

// If an Array is an "ordered list," how is an Object different in terms of how it stores information?

// Based on your notes, what does typeof return when you check a variable that is equal to null?

// Section 4: Working with Strings
// If firstName = "Toyin" and lastName = "O", write the code to combine them into one variable called fullName using the + operator.

// What are the special characters used to create a Template Literal?

// How would you use a template literal to inject the variable age into the string: "I am [age] years old"?

// If a string is "Hello!", what number will .length return? (Don't forget the punctuation!)