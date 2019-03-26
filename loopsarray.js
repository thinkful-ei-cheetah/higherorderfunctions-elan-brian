'use strict';

function max(arr) {
  let i = 0;
  let maxVal = arr[0];
  while (i < arr.length) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    } 
    i++;
  }
  return maxVal;
}

function min(arr) {
  let i = 0;
  let minVal = arr[0];
  while (i < arr.length) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
    i++;
  }
  return minVal;
}

console.log(max([7, 9, 3, 4, 5, 6]));

function average(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum/arr.length;
}


console.log(average([1, 2, 3, 4]));

function decodeWord(word) {
  const charCode = word[0].charCodeAt();
  return charCode > 96 && charCode < 101 ? word[charCode - 96] : ' ';
  

  // switch (word[0]) {
  //   case 'a': return word[1];
  //   case 'b': return word[2];
  //   case 'c': return word[3];
  //   case 'd': return word[4];
  //   default: return ' ';
  // }
}

console.log(decodeWord('cycle'));

function decodeWords(words) {
  // split spring into an arry of words 
  const wordsArray = words.split(' ');
  // for each word, run it through the decodeWord()
  const decodedWordsArray = wordsArray.map(word => {
    return decodeWord(word);
  });
  // rejoin decoded words array into string
  const result = decodedWordsArray.join('');
  return result;
}

function decodeWords2(words) {
  return words
    .split(' ')
    // send in the function itself, not the invocation of the function like decodeWord()
    .map(decodeWord)
    .join('');
}

