// Hoisting Exercises

// Decide what you think will be logged to the console for each example. Uncomment the examples out one at a time to see if you are correct. If you got some answers wrong, think about WHY they were wrong.
// If you think that an example will cause an error, think about what that error might be.

// Example 1

    // console.log(petsName);
    // var petsName = 'Goblin';

    //Returns undefined because VAR isn't hoisted globally

// Example 2

    // console.log(petsName1);
    // let petsName1 = 'Grampa';

    // Uncaught reference error because LET isn't defined before it's being called


// Example 3

    // sayHi();
    // function sayHi() {
    //   console.log('hellllooooo!');
    // };

    // No error even though the function isn't defined before it's called - functions are know locally


// Example 4

    // sayHi();
    // function sayHi() {
    //   console.log('hey!');
    //   console.log(add(10, 2));
    // };

    // function add(a, b){
    //   return a + b;
    // };

    // No error the functions are know locally


// Example 5

    // sayHi();
    // const sayHi = () => {
    //   console.log('hello there!');
    // };

    //Can't access the function expression before it is initalized.

// Example 6

    // sayHi();
    // const sayHi = () => {
    //   console.log('hey!');
    //   console.log(add(10, 2));
    // };

    // function add(a, b){
    //   return a + b;
    // };

    //Can't access the function expression before it is initalized.

// Example 7

    // sayHi();
    // const sayHi = () => {
    //   console.log('hey!');
    //   console.log(add(10, 2));
    // };

    // const add = (a, b) => {
    //   return a + b;
    // };
    
    //Can't access the function expression before it is initalized.