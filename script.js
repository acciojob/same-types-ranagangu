function isSameType(value1, value2) {
  const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  const onlyOneNaN = Number.isNaN(value1) || Number.isNaN(value2);

  if (bothNaN) return true;
  if (onlyOneNaN) return false;

  return typeof value1 === typeof value2;
}




// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
