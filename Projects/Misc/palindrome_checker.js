function palindrome(str) {
  // Remove non-alphabet and non-numeric characters from the string, and convert uppercase letters to lowercase
  let cleanArr = str.match(/[A-Za-z0-9]/g).map(str => str.toLowerCase());
  let testArr = []
  // Iterate through the string and compare the character at index i from the front and from the back
  for (let i = 0; i < cleanArr.length/2; i++) {
    if (cleanArr[i] != cleanArr[cleanArr.length - 1 - i]) {
      testArr.push("fail");
    };
  };
  console.log(testArr);
  // If no mismatch is detected, it is a palindrome, therefore return true, else return false
  return (testArr.length == 0 ? true : false);
}
  
console.log(palindrome("e_@#$eBee--"));
