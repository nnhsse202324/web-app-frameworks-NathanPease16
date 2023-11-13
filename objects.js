"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Objects
 **********************************************************/

/**
 * Object construction
 *  objects can be constructed in a couple of ways
 *  properties can be added to objects after construction
 */

// Create an empty object with object constructor syntax
let journalEntry = new Object();

// Create an empty object with the object literal syntax
journalEntry = {};

// Create an object with properties (key-value pairs) in JSON format
journalEntry = {
  date: "11/13/2023",
  habitOfMind: "Applying Past Knowledge to New Situations",
  content:
    "By comparing and contrasting Javascript objects to Java objects, " +
    "I am strengthening my understanding",
};

console.log(journalEntry);
console.log(typeof journalEntry);

/**
 * Accessing properties
 *  use the dot notation, like in Java
 *  non-existent properties return undefined
 */
console.log(journalEntry.date);
console.log(journalEntry.studentName); // undefined

// properties can be added to objects after construction
journalEntry.studentName = "Anderson Peng";
console.log(journalEntry.studentName);

/**
 * Object references
 *  variables of type Object have a value that is a reference to the object, like in Java
 * copying an object reference is not the same as copying the object, like in Java
 * can use Object.assign and structuredClone to clone objects
 */

const newJournalEntry = journalEntry;
newJournalEntry.date = "11/14/2023";
console.log(journalEntry.date); // 11/14/2023 instead of 11/13/2023
