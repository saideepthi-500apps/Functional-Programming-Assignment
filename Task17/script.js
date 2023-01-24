function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort();
  // Only change code above this line
}


function getOutput() {
  document.getElementById("output").innerText = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
}
