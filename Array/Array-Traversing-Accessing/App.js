// // Array Traversing
// let arr = [52, 64, 74, 24, 54, 22, 64, 92, 88, 93, 72, 53, 45];
// for (let i = 0; i < arr.length; i++) {
//   document.write(`${i} ==> ${arr[i]} <br/> `);
// }

// Array Accessing
let arr = [52, 64, 74, 24, 54, 22, 64, 92, 88, 93, 72, 53, 45];
let x = 4;
console.log(arr[x]);

function getElement() {
  let el = document.getElementById("element").value;
  if (arr.length > el && typeof parseInt(el) === "number") {
    alert(arr[el]);
  } else {
    alert("Enter Value Between 0 - 12");
  }
}
