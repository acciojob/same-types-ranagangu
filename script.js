function isSameType(value1, value2) {
  // Check for NaN using Number.isNaN (better than global isNaN)
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check for same type using typeof
  return typeof value1 === typeof value2;
}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
