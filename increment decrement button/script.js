const countvalue = document.querySelector('#counter')

const increment =() =>{
//    get the value from ui
let value = parseInt(countvalue.innerText);
// update the value
value = value+1;
// set it into ui
countvalue.innerText = value;
}
const decrement =() =>{
//    get the value from ui
let value = parseInt(countvalue.innerText);
// update the value
value = value-1;
// set it into ui
countvalue.innerText = value;
}
const addten =() =>{
//    get the value from ui
let value = parseInt(countvalue.innerText);
// update the value
value = value+10;
// set it into ui
countvalue.innerText = value;
}
const subten =() =>{
//    get the value from ui
let value = parseInt(countvalue.innerText);
// update the value
value = value-10;
// set it into ui
countvalue.innerText = value;
}