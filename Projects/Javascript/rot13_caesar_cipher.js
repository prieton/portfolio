function rot13(str) {
    // Create an array of alphabets
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let decodedStr = "";
    // Since rot13 shift is just a reflection eg. A -> N, and N -> A, 
    // If alphabet index is in the upper half (ie. index 0-12), shift it 13 forward
    // Else if it is in the second half, shift it 13 backward
    // Else (ie. if it doesn't fit the required input format and hence not found in the array), return the character as is
    for (let i = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) >= 0) {
        decodedStr += alphabet[alphabet.indexOf(str[i]) + 13];
      } else if (alphabet.indexOf(str[i]) >= 13) {
        decodedStr += alphabet[alphabet.indexOf(str[i]) - 13];
      } else {
        console.log(str[i])
        decodedStr += str[i];
      }
    }
    return decodedStr;
}
  
console.log(rot13("GUR ORFG SERR BAYVAR OBBGPNZC FVGR"));
