'use strict';

function repeat (fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

function filter(arr, fn) {
  // initialize a new array
  let newArray = [];
  // loop through the array to look at its contents
  for (let i = 0; i < arr.length; i++) {
    // if the element at [i] index matches, then push to the new array
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}



// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator (typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    if(warningCounter === 1) {
      console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!"`);
    } else if (warningCounter === 0 || warningCounter >= 2) {
      console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!"`);
    }
    console.log(`"DANGER! There is a(n) ${typeOfWarning} hazard at ${location}"`);
  };
}

const earthQuake = hazardWarningCreator('earthquake');

const tornado = hazardWarningCreator('torando');

const rockSlide = hazardWarningCreator('rock slide');

earthQuake('10th St and Blanco');

earthQuake('10th and Lorrain');

tornado('10th St and James');

rockSlide('10th and Blanco');

function correctMovement(arr) {
  let totalMovement = 0;
  let filteredArr = arr
    .filter(nums => nums[0] > 0 && nums[1] > 0)
    .map(nums => nums[0] += nums[1]);
  // filter negative array numbers (either first or second is negative)
  filteredArr.forEach(elem => console.log(elem));
}

console.log(correctMovement([[-1, 3], [2, 3], [3, 1]]));

const string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const arr = string.split(' ');

const reducer = arr.reduce((acc, word) => {
  if(word.length === 3) {
    acc += ' ';
    console.log(acc);
  } else {
    acc += word[word.length - 1].toUpperCase();
  }
  return acc;
}, '');

console.log(reducer);
