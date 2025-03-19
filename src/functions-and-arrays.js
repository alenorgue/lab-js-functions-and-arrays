// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {

if (a>b) {
    return a;
} 

return b;
}


// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    for (let word of words) {if (word.length > longestWord.length){ longestWord = word} 
    } 
    if (words.length == 0) { return null}
    else {return longestWord}
    
}

findLongestWord (words)



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sumT= 0;
    for (let number of numbers){
        sumT += number;
        
    }
    if (numbers.length == 0){
        return 0;
    } else {
        return sumT;
    }
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    let sumT= 0;
    for (let number of numbers){
        sumT += number;
        
    }
    if (numbers.length == 0){
        return 0;
    } else {
        return sumT / numbers.length;
    }
}



// Iteration 5 | Find Elements

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {
    
    if (words2.length == 0) {
        return null;
    } else {
        return words2.include(wordToSearch);
    }
}