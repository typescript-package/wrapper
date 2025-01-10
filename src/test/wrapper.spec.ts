import { Wrapper } from "../lib";

console.group(`Wrapper`);

// Initialize.
const htmlTag = new Wrapper(
  '<',
  '>',
  'div'
);

// The `Wrap` object.
console.log(htmlTag); // Output: Wrapper {'<div>', #closing: '>', #opening: '<', #text: 'div'}

console.log(htmlTag.valueOf()); // Output: <div>

// Initialize.
const bbCode = new Wrapper('[', ']', 'quote');

console.log(bbCode); // Output: Wrapper {'[quote]', #closing: ']', #opening: '[', #text: 'quote'}

// Wrap the valueOf [quote]
console.log(bbCode.wrap()); // Output: [[quote]]

// Wrap the valueOf [quote] with the specified `opening` and `closing` chars.
console.log(bbCode.wrap(`(`, `)`)); // Output: ([quote])

// Wrap the specified text with the `opening` and `closing` chars.
console.log(bbCode.wrapOn(`/italic`)); // Output: [/italic]

// Replace the `opening` and `closing` chars.
console.log(bbCode.rewrap(`(`, `)`)); // Output: (quote)

// Wraps the `text` inside.
console.log(bbCode.wrapText(`(`, `)`)); // Output: [(quote)]

// Returns the primitive value.
console.log(bbCode.valueOf()); // Output: [quote]

console.groupEnd();
