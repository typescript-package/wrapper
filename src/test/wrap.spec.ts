import { Wrap } from "../lib";

console.group(`Wrap`);

// Initialize.
const htmlTag = new Wrap('<', '>', 'div');

// The `Wrap` object.
console.log(htmlTag); // Output: Wrap {'<div>', #closing: '>', #opening: '<', #text: 'div'}

console.log(htmlTag.valueOf()); // Output: <div>

// Initialize.
const bbCode = new Wrap('[', ']', 'quote');

console.log(bbCode); // Output: Wrap {'[quote]', #closing: ']', #opening: '[', #text: 'quote'}

console.log(bbCode.valueOf()); // Output: [quote]

console.groupEnd();
