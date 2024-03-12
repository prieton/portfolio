function checkCashRegister(price, cash, cid) {
    let change = cash - price
    // Map the currency to their numeric unit value
    let unitDict = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      "ONE HUNDRED": 100
    };
    let result = {change: []};

    // Create an array containing arrays of the unit value of the currency, and the remaining total value of the currency in the register
    // Sort the array in descending order based on the value of the currency
    let unitCid = cid.map(array => [unitDict[array[0]], array[1]]).sort((a, b) => b[0] - a[0]);


    for (let i in unitCid) {
        change = Math.round(change*100)/100;
        if (change > unitCid[i][0] && unitCid[i][1] != 0) {
          // If remaining change is less than the balance of the currency in register
          // Deduct the maximum possible amount from remaining change
          if (change < unitCid[i][1]){
            unitCid[i][1] -= change - change % unitCid[i][0];
            result.change.push([...Object.keys(unitDict).filter(key => unitDict[key] == unitCid[i][0]), change - change % unitCid[i][0]]);
            change = change % unitCid[i][0];
            }
          // If remaining change is more than the balance of the currency in register
          // Deduct the entire balance of the currency from remaining change
          else {
            change -= unitCid[i][1];
            result.change.push([...Object.keys(unitDict).filter(key => unitDict[key] == unitCid[i][0]), unitCid[i][1]]);
            unitCid[i][1] = 0
            }
          }
        }
    
    // Calculate total remaining balance in the register
    let totalCid = unitCid.reduce((sum, arr) => sum += arr[1], 0);
    // Check the total remaining register balance and if there's any remaining change needed to be paid
    if (totalCid == change) {
      result.status = "CLOSED";
      result.change = cid;
    } else if (change == 0) {
      result.status = "OPEN";
    } else {
      result.status = "INSUFFICIENT_FUNDS";
      result.change = [];
    };
    //console.log(change);
    return result;
}
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 2], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
