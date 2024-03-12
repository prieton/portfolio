function telephoneCheck(str) {
    // Create regex containing list of rules specifying a valid US telephone number
    let testRegex = /^1?\s?[(]?\d{3}[)]?[-\s]?\d{3}[-\s]?\d{4}$/;
    // If an opening bracket exists, ensure that a closing bracket also exists, and vice versa
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" && str[i+4] != ")") {
          return false;
        } else if (str[i] == ")" && str [i-4] != "(") {
          return false;
        }
    }
    // Test the string against the regex and return result
    return testRegex.test(str);
}

console.log(telephoneCheck("1 555)-555-5555"));