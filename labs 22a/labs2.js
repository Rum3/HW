let numbers = [2, -4, 5, 6, 9, 0, 1];
let max = findMaxEven(numbers);

function findMaxEven(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0 ){
        }
        if(arr[i] >= max) {
            max === arr[i];
        }
        
    }

        
} 

console.log(`The max even number of ${numbers} is ${max}`);