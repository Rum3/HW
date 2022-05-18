let heightInput =document.getElementById("height");
let weightInput = document.getElementById("weight");
let calculateButton = document.getElementById("calculate");
let bmi = document.getElementById("bmi");
let statement = document.getElementById("text");
let BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    //The addEventListener() method of the EventTarget interface sets up a 
    //function that will be called whenever the specified event is delivered to the target.

height = heightInput.value/100;
weight = weightInput.value;
BMI = weight/(height**2); 
bmi.innerText = BMI;

if(BMI < 18.5){
        statement.innerText = "You are underweight";    
    }

if((BMI > 18.5)  (BMI < 25)){
        statement.innerText = "You are with normal weight";
    }

if((BMI > 25)){
        statement.innerText = "You are overweight";
    }
});
