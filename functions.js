"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Functions
 **********************************************************/

/**
 *  function definition
 *    starts with the keyword "function"
 *    followed by function name
 *    followed by parameter list in parentheses
 *      no types are specified, unlike Java
 *      arguments are passed by value, like Java
 *    followed by function body in curly brackets
 */

function mean(x, y) {
  return (x + y) / 2;
}

console.log(mean(3, 7)); // 5

// unspecified arguments are assigned a value of undefined
function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello(); // Hello undefined

// functions are first-class entities and may be assigned to variables

const mathOperator = mean;
console.log(mathOperator(9, 5)); // 7

/**
 * function expression
 *  there is no function name after the function keyword
 */

let average = function (x, y) {
  return (x + y) / 2;
};

/**
 * arrow functions
 *  a more concise syntax for function expressions
 *  the parameters are listed in parentheses
 *  parameters are followed by the arrow operator (=>)
 *  the return keyword is implied
 *  similar to lambdas in Java (->)
 */
average = (x, y) => (x + y) / 2;

// if there are no parameters, use empty parentheses
const hello = () => console.log("Hello world!");
hello();

// multi-line arrow functions must use curly brackets and the return keyword
average = (x, y) => {
  const result = (x + y) / 2;
  return result;
};
console.log(average(9, 11)); // 10
