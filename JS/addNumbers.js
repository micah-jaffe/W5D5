const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Please input a number: ', function(numString) {
      const input = parseInt(numString);
      sum += input;
      console.log(`Sum is now ${sum}`);
      
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else if (numsLeft === 0){
    completionCallback(sum);
    reader.close();
  } 

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum * 2}`));