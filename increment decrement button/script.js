const countvalue = document.querySelector('#counter')

const increment =() =>{
//    get the value from ui
const value = parseInt(countvalue.innerText);
// update the value
value = value+1;
// set it into ui
countvalue.innerText = value;
}
const decrement =() =>{
//    get the value from ui
const value = parseInt(countvalue.innerText);
// update the value
value = value-1;
// set it into ui
countvalue.innerText = value;
}