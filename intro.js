"use strict"; // enable modern Javascript modifications

/* eslint-disable no-constant-condition */

/**********************************************************
 * Output to the terminal
 **********************************************************/

// Javascript uses console.log() instead of Java's System.out.println()
console.log("Hello, world!!");

/**********************************************************
 * Variable declaration, assignment, and scope
 **********************************************************/

/**
 * variable declarations:
 * use the keyword 'let'
 * similar to a local variable in Java
 * block scoped
 */
let x;

/**
 * variable assignment may be done after variable declaration or at the same time
 */
x = 7;
console.log(x);

x = 11;
console.log(x);

/**
 * constant (immutable value)
 * use the keyword 'const'
 * similar to the final keyword in Java
 * may be initialized at the same time as declaration or later
 * use all uppercase letters for constants assigned to literals
 * use camelCase for constants assigned to expressions
 */

const HOSTNAME = "localhost";
console.log(HOSTNAME);

/**
 * var keyword:
 * older way to declare variables
 * similar to local variables defined at the top of a method in Java
 * rarely used in modern javascript
 */

var y = 11;
console.log(y);

/**********************************************************
 * Primitive Types
 **********************************************************/

/**
 * Number
 *  represents both integer and floating-point values
 *  similar to a double in Java
 */
let a = 7;
a = 3.14;
console.log(typeof a);

/**
 * String
 *  a primitive type in javascript
 *  literals are enclosed in single or double quotes
 *  backticks enable template strings
 */
a = "hello";
console.log(typeof a);
let b = `${3 + 4} world!`;
console.log(b);

/**
 * Booleans
 *  similar to Java's boolean type
 */
a = true;
console.log(typeof a);

/**
 * null
 *  a primitive type with only valueL: null
 *  represents nothing, empty, or unknown
 *  not like a reference to a non-existent object like Java
 */
a = null;
console.log(typeof a); // Returns object (old bug in JavaScript)

/**********************************************************
 * Conditionals and Boolean Expressions
 **********************************************************/
