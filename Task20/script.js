function sentensify(str) {
  // Only change code below this line
  let str1 = str.split(/[ ,-.]+/);
  return str1.join(" ");

  // Only change code above this line
}


function getOutput() {
  document.getElementById("output").innerText = sentensify("May-the-force-be-with-you");
}
