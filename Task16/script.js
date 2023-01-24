const squareList = arr => {
  // Only change code below this line
  let v = [];
  let v1 = arr.filter(item=> {
    if(item === parseInt(item)  && item>=0){
       v.push(parseInt(item));
    }
  });
  let modified = v.map(item=>item**2);
  console.log(modified);
  return modified;
  // Only change code above this line
};


function getOutput() {
  document.getElementById("output").innerText = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
}
