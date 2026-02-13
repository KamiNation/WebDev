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