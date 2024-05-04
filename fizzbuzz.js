function fizzBuzz(numbers) {
  let result = [];
  numbers.forEach((num) => {
    if (num % 3 === 0) {
      result.push("fizz");
    } else if (num % 5 === 0) {
      result.push("buzz");
    } else if (num % 15 === 0) {
      result.push("fizzbuzz");
    } else {
      result.push(num);
    }
  });

  return result.join(", ");
}

// module.export = { fizzBuzz, somethingElse }; if there were multiple functions
module.exports = fizzBuzz;