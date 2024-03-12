function convertToRoman(num) {
    let romNum = "";
    // Store the mapping of Roman Numeral in descending order
    let romDict = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"],
    ];

    // Assign Roman Numeral from the biggest subtractable value
    for (let i = 0; i < romDict.length; i++) {
      while (num >= romDict[i][0]) {
        romNum += romDict[i][1];
        num -= romDict[i][0];
      }
    };
   return romNum;
  }
  
  console.log(convertToRoman(1984));