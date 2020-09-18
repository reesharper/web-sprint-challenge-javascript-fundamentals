// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
// myFunction();



// Explanation: 

/* myFunction is creating a local variable in the "internal" variable as well as the new nested function "nestedFunction". nestedFunction doesnt need to have any variables inside of it because it is able to reach out into the lexical scope within "myFunction" as its parent and use the "internal" variable. */





/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

// console.log(summation(4));