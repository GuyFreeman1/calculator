let result = document.getElementById('screentext');

let calculate = (number) => {
    result.value += number;
}
let results = () => {
    try {
        result.value = eval(result.value)
    }
    catch (error) {
        alert('Enter A Valid Input')


    }
}
function clr() {
    result.value = ' ';

}


//------------ basic ------------
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }