Challenge 1: The "Tweet" Character Counter
The Scenario: You are building a social media app. The maximum limit for a post is 280 characters.

Task: Create a script that:

Uses a variable userPost (you can just assign a long string to this for now).

Calculates how many characters the user has already used.

Calculates how many characters are remaining (280 minus the length).

Displays a message using Template Literals: "You have used [X] characters and have [Y] characters left."

Challenge 2: The "Hidden Identity" Object
The Scenario: You have a secret user profile.

Task: 1.  Create an Object called secretUser with the keys: username, realName, and idNumber.
2.  Create a string called maskedIdentity that combines only the first character of the username and the length of the realName.
3.  Print: "User [username] has a real name that is [length] characters long."

Challenge 3: The Greeting Machine
The Scenario: You want to welcome a user to your website professionally.

Task: 1.  Create two variables: inputName and inputCity.
2.  Use String Concatenation (the + operator) to create a variable called welcomeMessage.
3.  The message should say: "Hello [inputName], welcome to Javascript! We see you are visiting from [inputCity]."
4.  Print the welcomeMessage in ALL CAPS (Hint: If you don't know the code for all caps, try to find the length of the final message instead).

Challenge 4: The "Data Type" Validator
The Scenario: You are checking if a user entered the right kind of data.

Task: 1.  Create a variable userInput = "25".
2.  Create a second variable actualAge = 25.
3.  Use console.log to show the typeof for both.
4.  Explain (in a comment //) why one is a String and the other is a Number.

Challenge 5: Variable Swap (The Logic Puzzle)
The Scenario: You have two values and you need to switch them.

Task: 1.  let bucketA = "Water";
2.  let bucketB = "Juice";
3.  Using a third "temporary" variable (e.g., let temp;), swap the values so that bucketA holds "Juice" and bucketB holds "Water".
4.  Print both to prove the swap worked.

The "Character Count" Series
The Basic Counter: Ask a user for their name. Display: "Your name has [X] characters."

The Space Explorer: Ask for a sentence. Calculate the length. Display: "This sentence is [X] characters long including spaces."

The SMS Limit: A text message limit is 160. Ask for a message. Display: "You have [X] characters remaining."

The Password Checker: Ask a user to create a password. If the length is less than 8, display: "Too short! You need [X] more characters."

The Bio Snippet: Ask for a 50-character bio. If they type 60, display: "You are [X] characters over the limit!"

The Double Name: Ask for a First Name and a Last Name separately. Display the total length of both combined.

The Empty Check: Ask for a response. If the length is 0, display: "You didn't type anything!" (Hint: Use length).

The "Template Literal" Series
The Story Creator: Ask for a noun, a verb, and an adjective. Use a template literal to put them into a funny sentence.

The Receipt: Ask for an itemName and a price. Display: "Item: [itemName] | Cost: $[price]".

The Address Label: Ask for street, city, and country. Display them on three separate lines using one template literal.

The Year Calc: Ask for birthYear. Calculate 2026 - birthYear and display: "You are [age] years old."

The ID Card: Create an object for a user. Ask the user for their jobTitle. Add it to the object and print the full profile.

The "Data Type & Logic" Series
The String-to-Number: Ask for a number. Use typeof to show the user that their input is actually a String by default.

The Boolean Toggle: Create a variable isLoggedIn = false. Ask the user for a password. If they type "1234", change isLoggedIn to true and print the status.

The Array Adder: Create an array shoppingList = ["Milk", "Eggs"]. Ask the user for one more item and add it to the list.

The Secret Index: Ask for a word. Display the first character of that word using word[0].

The Last Character: Ask for a word. Display the last character using word[word.length - 1].

The "Advanced Calculation" Series
The Percentage Tracker: A blog post allows 1000 words. Ask the user how many they've written. Display: "You are [X]% finished."

The Name Reverser: (Conceptual) Ask for a name. Display the length and then the name with a "Start" and "End" tag using concatenation.

The Variable Swap Challenge: Ask for Value A and Value B. Swap them using a temporary variable and show the user the "Swapped" result.


New Assignment

Level 1: Remember (Recall & Identification)
Which keyword allows both redeclaration and reassignment of variables?

True or False: const variables can be reassigned but not redeclared.

List the characters a JavaScript variable is allowed to start with.

What is the syntax for Snake Case?

Define Primitive Datatype based on your notes.

Which data type represents the "intentional absence of value"?

What symbol is used for the Assignment Operator?

What does the .length property return?

Name the non-primitive data type that uses key-value pairs.

Which method would you use to check if a string ends with a specific sequence of characters?

What is the symbol for the Strict Equality operator?

List the three symbols for Logical Operators (AND, OR, NOT).

What property or object would you use to find the square root of a number?

Level 2: Understand (Explanation & Comparison)
Explain why let camelCase and let camelcase are considered different variables.

What is the difference between an Array and an Object regarding how they store data?

Describe the process of Type Coercion when adding a string to a number.

What is the difference between Math.floor() and Math.ceil()?

Compare == and ===. Which one is safer to use and why?

Explain how Template Literals handle variables differently than the + operator.

Why does typeof null return "object" in JavaScript?

What happens to a variable that is declared but not assigned a value? (What is its type?)

Explain the purpose of the .split() method. What does it return?

Describe the difference between && (AND) and || (OR) in a logical statement.

Level 3: Apply (Execution & Implementation)
Write a line of code to declare a constant named PI with the value 3.14.

Use Template Literals to log: "I am [age] years old" using a variable age.

You have let price = "100". Convert it to a Number and add 20 to it.

Given let text = "JavaScript", use .slice() to extract the word "Java".

Create an Object for a car with properties: brand, model, and year.

Use the + operator to join str1 = "Hello" and str2 = "World" with a space.

Use Math.random() and Math.floor() to create a whole number between 0 and 5.

Use .split() to turn the string "Red,Blue,Green" into an Array.

Write a comparison to check if x is greater than 10 and less than 20.

Level 4: Analyze (Breaking Down & Reasoning)
Analyze this: let result = "5" + 2 + 3;. What is the value of result? Explain.

Analyze this: let result = 2 + 3 + "5";. What is the value of result? Explain.

If let s = "Programming", what is the result of s.slice(0, 3) vs s.slice(3)?

Break down this logical expression: (true && false) || !false. Is the final result true or false?

Why would let 1stPlace = "Toyin"; throw an error?

Given let colors = ["red", "green", "blue"], how do you access the string "red" specifically?

If you use .split("") (empty quotes) on the word "Hi", what is the resulting Array?

Level 5: Evaluate (Judging & Justifying)
Evaluate which is better for a fixed username: let or const? Justify your answer.

A developer uses .slice(0, 5) to get the first name from "Toyin Ogunlari". Evaluate if this code will work if the name changes to "Oluwatoyin".

Critique this code: let total = "10" * 2;. Does it work? Is it good practice?

Decide whether .split() or .slice() is more efficient for extracting the domain from "info@google.com".

Compare Math.round(4.5) and Math.floor(4.5). Why do they give different results?


JavaScript Logic & Methods: VS Code Challenge Set
1. The Character Processor
Create a variable let userQuote = "Knowledge is power". Use a console.log() to display the total number of characters in that string.

2. The Word Counter
Create a variable let sentence = "Learning JavaScript is an exciting journey". Use the .split() method to calculate how many words are in the sentence and log the count.

3. The Secure Gate
Declare two variables: let age = 20 and let hasTicket = true. Write a logic check using the && operator that logs "Welcome" if they are 18 or older and have a ticket, otherwise logs "Access Denied".

4. The Dynamic ID
Use Math.random() to generate a decimal between 0 and 100. Use a Math method to turn it into a whole number, convert it to a String, and join it with the prefix "ID_" (e.g., "ID_42").

5. The Email Validator
Create a variable let email = "student@school.com". Write a script that checks two things:

Does it include the "@" symbol?

Does it end with ".com"?
Log a single boolean (true or false) that confirms if both conditions are met.

6. The Price Calculator
Create a variable let rawPrice = "199.99".

Convert rawPrice from a String to a Number.

Add a 7.5% tax to the value.

Use a Math method to display the final price rounded to the nearest whole number.

7. The Substring Specialist
Given the string let data = "frontend-developer".

Use .split() to remove the hyphen and store the result in an array.

Use .slice() on the original string to extract only the word "frontend".

8. The Comparison Analysis
Create two variables: let valA = 50 (Number) and let valB = "50" (String).

Log the result of a Loose Equality (==) comparison.

Log the result of a Strict Equality (===) comparison.

9. The Name Trimmer
Create a variable let fullName = "Oluwatoyin Ogunlari". Write a script that checks if the name is longer than 10 characters. If it is, use .slice() to grab the first 10 characters and concatenate "..." to the end.

10. The Climate Alert
Create a variable let currentTemp = 45. Use the Logical OR (||) operator to log "Extreme Weather" if the temperature is below 0 OR above 40. Otherwise, log "Normal Weather"