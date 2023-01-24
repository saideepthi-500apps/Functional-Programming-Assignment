const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let emptyArray = [];
  return emptyArray.concat(arr.slice()).sort((a,b)=>a-b);
  // Only change code above this line
}


function getOutput() {
  document.getElementById("output").innerText = nonMutatingSort(globalArray);
}
