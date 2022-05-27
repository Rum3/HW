let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

function getHighestScoreIndex(){
    return Math.max(...scores);
}
console.log(getHighestScoreIndex());

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:



// expected output
// Maria has the higest score: 6


