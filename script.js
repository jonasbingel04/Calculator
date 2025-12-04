let number1 = "";
let number2 = "";
let operator = "";

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
    else if(operator == "-"){
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
function populate(isNumber, sign){
    const results = document.getElementById("results");
    
    if(isNumber){
        if(!operator){
            number1 = number1 + sign;
            results.textContent = number1;
        }
        else{
            number2 = number2 + sign;
            results.textContent = number1 + " " + operator + " "+ number2;
        }
    }
    else{
        if(!operator){
            operator = sign;
            results.textContent = number1 + " " + operator;
        }
        else{
            switch(operator){
                case "+":
                    result = add(Number(number1), Number(number2));
                    clear();
                    number1 = result;
                    operator = sign;
                    results.textContent = number1 + " " + operator;
                    break;
                case "-":
                    result = subtract(Number(number1), Number(number2));
                    clear();
                    number1 = result;
                    operator = sign;
                    results.textContent = number1 + " " + operator;
                    break;
                case "*":
                    result = multiply(Number(number1), Number(number2));
                    clear();
                    number1 = result;
                    operator = sign;
                    results.textContent = number1 + " " + operator;
                    break;
                case "/":
                    result = divide(Number(number1), Number(number2));
                    clear();
                    number1 = result;
                    operator = sign;
                    results.textContent = number1 + " " + operator;
                    break;
            }
        }
    }
}

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
}

function equal(){
    if(operator){
        switch(operator){
            case "+":
                result = add(Number(number1), Number(number2));
                clear();
                number1 = result;
                results.textContent = number1;
                break;
            case "-":
                result = subtract(Number(number1), Number(number2));
                clear();
                number1 = result;
                results.textContent = number1;
                break;
            case "*":
                result = multiply(Number(number1), Number(number2));
                clear();
                number1 = result;
                results.textContent = number1;
                break;
            case "/":
                result = divide(Number(number1), Number(number2));
                clear();
                number1 = result;
                results.textContent = number1;
                break;
        }
    }
    else{
        
    }
}



const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populate(true, button.id);
    });
});

const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        populate(false, button.id);
    });
});

const acButton = document.querySelector("#clear");
acButton.addEventListener("click", () => {
    clear();
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    equal();
});