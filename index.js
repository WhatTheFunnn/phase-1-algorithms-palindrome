function isPalindrome(word) {
  const pali = reverse(word)  
  if (word === pali){
      return true
    }
    else {
      return false 
      }
    }



/*create argument in empty function "isPalindrome"
   string should check the value forwards 
   then backwards 
      this will need to be checked letter by letter 

  if it is palindrome, result should return "true"
  if it is not palidrome, result should return "false" */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;


//write 1 argument that is a string, this string should return true if its a palindrome and false if its not 