// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let value = fixedValue;
  value = value+1;
  return value;
  // Only change code above this line
}
function getOutput() {
  document.getElementById("output").innerText = incrementer();
}
