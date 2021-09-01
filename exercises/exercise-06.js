// Decide what you think will be logged to the console and then execute the function to see if you are correct.
// If you get any of these wrong, stop to think about WHY you were incorrect.

function checkMyScope() {
  var first = "apple";
  let second = "banana";
  var third = "cherry";
   fourth = "dragonfruit";

  if (true) {
    first = "elderberry";
    second = "fig";
    third = "grape";
    const fourth = "honeydew melon";
  };

  console.log('first is', first, '-- Using a Var is only local - the value of the previously defined fruit is changed');
  console.log('second is', second, '-- Using a Let is local and the value of the previous fruit is changed');
  console.log('third is', third, '-- Using a Var is only local - the value of the previously defined fruit is changed');
  console.log('fourth is', fourth, '-- Use Const when you dont want variable to change values. Meanwhile LET/VAR can change.');
};


console.log(checkMyScope());