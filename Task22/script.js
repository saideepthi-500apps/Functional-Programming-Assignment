function checkPositive(arr) {
  // Only change code below this line
  return arr.every(item=>item>=0);

  // Only change code above this line
}


function getOutput() {
  document.getElementById("output").innerText = checkPositive([1, 2, 3, -4, 5]);
}
