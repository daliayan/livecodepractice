// Use the months array from index.js.
// Write a function that returns only the months ending in the letter 'y'.

// const letterY = 'y';
// const singleLetter = monthsArray.indexOf(letterY);

const singleLetter = monthsArray.filter(month => month.slice(-1) === "y");

console.log(singleLetter);

// console.log(monthsArray.length);

// console.log(monthsArray[monthsArray.length - 1]);
