
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
let age = 25;
const country = "Nigeria";
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