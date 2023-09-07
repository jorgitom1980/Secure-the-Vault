// Pseudocode
// 1. Before anything else, write the pseudocode of your steps and how you will solve this exercise.
// 2. Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
// 3. Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.
// 4. Add comments throughout the code to explain each step in the process.
// 5. Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
// 6. Please submit either a file with your code or a screenshot of the code, with the pseudocode showing.

let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

// combination number #1
const num1 = 2 * 5; //10

// combination number #2
const num2 = 120 / 3; //40

// combination number #3
const num3 = 100 - 61; //39

// displaying the vault  combination as num1 - num2 - num3
const fullcombination =  `${num1} - ${num2} - ${num3}`;

//alert message
alert('You have received this message because you have been chosen to open an important vault. Here is the secret combination: \n' + fullcombination);


