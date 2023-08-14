function isPalindrome(word) {
  // Write your algorithm here
  let wordReversedArr = [];
  for (let i = word.length + 1; i > -1; i--) {
    wordReversedArr.push(word[i]);
  }

  let reversedWord = wordReversedArr.join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

}

isPalindrome('word')

/* 
  Add your pseudocode here
  create array of characters of word in reverse
  push each letter into new reversed array using a for loop counting backwards
  join the letters of the reversed array into one word
  if the word that is fed to the function matches the word that is reveresed return true
  if not, return false. 
*/

/*
  Add written explanation of your solution here
  The first thing I did was create a new array that will hold the letters in the word that is pushed into the function, but in reverse. 
  Afterward, I pushed each character of the original word into the newly declared array variable. 
  I then joined the characters of the reversed array to become one word. 
  Lastly, I compared the original word with the reversed word and returned true if they match perfectly. 
  Return false if they do not match. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
