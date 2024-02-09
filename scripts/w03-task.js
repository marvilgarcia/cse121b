/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add(number1, number2){
    return number1 + number2;
}

function AddNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = Add(addNumber1,addNumber2);
    
}
document.querySelector("#addNumbers").addEventListener("click", AddNumbers);
/* Function Expression - Subtract Numbers */
function Subtract(number1, number2){
    return number1 - number2;
}

function SubtractNumbers(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = Subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", SubtractNumbers);

/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => number1 * number2;
const MultiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = Multiply(multiplyNumber1,multiplyNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", MultiplyNumbers);
/* Open Function Use - Divide Numbers */
const Divide = (number1, number2) => number1 / number2;
const DivideNumbers = () => {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = Divide(divideNumber1,divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", DivideNumbers);

/* Decision Structure */

// Get the Get Total Due button
document.getElementById("getTotal").addEventListener("click" , calculateTotal);



// Function to calculate the total due
function calculateTotal() {

    const subtotal = parseFloat(document.getElementById("subtotal").value);

    const isMember = document.getElementById("member").checked;

    // Apply discount if the user is a member
    if (isMember) {
        discountRate = 0.2; 
    } else {
        discountRate = 0; 
    }
    const total = subtotal * (1 - discountRate);

    document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let getNumbers = document.getElementById("array"); 

/* Output Source Array */
getNumbers.innerHTML = numbers

/* Output Odds Only Array */

document.getElementById("odds").innerHTML = numbers.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

document.getElementById("evens").innerHTML = numbers.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbers.reduce((sum,number) => sum + number);

/* Output Multiplied by 2 Array */
let multiplied = document.getElementById("multiplied").innerHTML = numbers.map((number)=> number *2);


/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = multiplied.reduce((sum,number) => sum + number);
