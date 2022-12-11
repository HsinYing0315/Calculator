var operator = document.getElementById("operate");
var answer;

function calculate(){
    var firstNumber = parseInt(document.getElementById("number1").value);
    var secondNumber = parseInt(document.getElementById("number2").value);
    
    if(operator.value == "plus"){
        answer = firstNumber + secondNumber;
        document.getElementById("result").textContent = "Result = " + answer;
    }else if(operator.value == "minus"){
        answer = firstNumber - secondNumber;
        document.getElementById("result").textContent = "Result = " + answer;
    }else if(operator.value == "multiply"){
        answer = firstNumber * secondNumber;
        document.getElementById("result").textContent = "Result = " + answer;
    }else{
        answer = firstNumber / secondNumber;
        document.getElementById("result").textContent = "Result = " + answer;
    }
}

function setButton(val){
    var button = document.getElementById("press");

    if(val == "plus"){
        button.value = "Add";
        button.textContent = "Add";
    }else if(val == "minus"){
        button.value = "Minus";
        button.textContent = "Minus";
    }else if(val == "multiply"){
        button.value = "Multiply";
        button.textContent = "Multiply";
    }else{
        button.value = "Divide"
        button.textContent = "Divide"
    }
}