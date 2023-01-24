// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
      let value = fixedValue;
      value += 1;
      return value;
  // Only change code above this line
}
function getOutput() {
  document.getElementById("output").innerText = incrementer(fixedValue);
}
