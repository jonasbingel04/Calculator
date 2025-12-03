let number1;
let number2;
let operator;

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x,y){
    return x * y
}
function divide(x, y){
    return x / y
}
function operate(){
    if(operator == "+"){
        return add(number1, number2);
    }
    else if(operater == "-"){
        return subtract(number1,number2);
    }
    else if(operator == "*"){
        return multiply(number1,number2);
    }
    else if(operator == "/"){
        return divide(number1,number2);
    }
    else{
        console.log("Error in funtion operate")
    }
}