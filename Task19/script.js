function splitify(str) {
  // Only change code below this line
   let str1 = str.split(/[ ,-.]+/);
  // Only change code above this line
  return str1;
}


function getOutput() {
  document.getElementById("output").innerText = splitify("Hello World,I-am code");
}
