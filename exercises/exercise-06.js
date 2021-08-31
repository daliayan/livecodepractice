// Decide what you think will be logged to the console and then execute the function to see if you are correct.
// If you get any of these wrong, stop to think about WHY you were incorrect.

function checkMyScope() {
  var first = "apple";
  var second = "banana";
  var third = "cherry";
  var fourth = "dragonfruit";

  if (true) {
    first = "elderberry";
    second = "fig";
    third = "grape";
    fourth = "honeydew melon";
  };

  console.log('first is', first);
  console.log('second is', second);
  console.log('third is', third);
  console.log('fourth is', fourth);
};
// console.log(first);