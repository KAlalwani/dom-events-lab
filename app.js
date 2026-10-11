/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let x = null;
let y = null;
let op = null;
let result = null
/*------------------------ Cached Element References ------------------------*/
const numBtnElements = document.querySelectorAll('.number')
const opBtnElements = document.querySelectorAll('.operator')
const equalsBtnElement = document.querySelector('.equals')
const displayElement = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
numBtnElements.forEach((button) => {
  button.addEventListener('click', number);
});

opBtnElements.forEach((button) => {
  button.addEventListener('click', operator);
});

equalsBtnElement.addEventListener('click', calculator);
/*-------------------------------- Functions --------------------------------*/
function calculator(){
    switch (op){
        case '+':{
            result = parseInt(x) + parseInt(y)
            break;
        }
        case '-':{
            result = parseInt(x) - parseInt(y)
            break;
        }
        case '/':{
            result = parseInt(x) / parseInt(y)
        break;
        }
        case '*':{
            result = parseInt(x) * parseInt(y)
        break;
        }
        
    }
            displayElement.innerHTML = result
}
function number(){
    if(x && !y && !op){
        x += event.target.textContent
        displayElement.innerHTML = x}
    if(!x && !y && !op){
        x = event.target.textContent
        displayElement.innerHTML = x}
    if(x && y && op){
        y += event.target.textContent
        displayElement.innerHTML = y}
    if(x && !y && op){
        y = event.target.textContent
        displayElement.innerHTML = y}
    console.log(x)
    console.log(y)
    console.log("Clicked on number!")
}
function operator(){
    if(event.target.textContent === 'C'){
        displayElement.innerHTML = ''
        x = ''
        y = ''
        op = ''
        console.log('clicked on C!')
        }
    if(x && !y && !op)
        op = event.target.textContent

    console.log(op)
    console.log("Clicked on operator!")
}
function equals(){
    console.log("Clicked on equals!")
}