// Only change code below this line
function urlSlug(title) {
  let value = title.split(" ");
 //  console.log(value);
 let lowerArray = [];
 for(let i of value){
   lowerArray.push(i.toLowerCase());
 }
 
   lowerArray = lowerArray.filter(item=>item != "");
   // console.log(lowerArray)
   let joinA = lowerArray.join("-");
   // console.log(joinA)
   return joinA;
}
// Only change code above this line

function getOutput() {
  document.getElementById("output").innerText = urlSlug(" Winter Is  Coming");
}
