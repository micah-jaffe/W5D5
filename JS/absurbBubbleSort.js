const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `, function(string) {
    if (string === "yes") {
      return callback(true);
    } else if (string === "no") {
      return callback(false);
    }
  });
  
}

function innerBubbleSortLoop(arr, i, madeAnySwap, outerBubbleSortLoop) {
  console.log(arr);
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => { 
      
      if (isGreaterThan) {
        let el = arr[i];
        let next_el = arr[i + 1];
        arr[i] = next_el; 
        arr[i + 1] = el;
        
        madeAnySwap = true; 
      }
      
      innerBubbleSortLoop(arr, i + 1, madeAnySwap, outerBubbleSortLoop);
    });
  } 

  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwap);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback();
    }
  }
  outerBubbleSortLoop(true);
}




absurdBubbleSort([3, 2, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});