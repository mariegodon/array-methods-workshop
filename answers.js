//1: take an array, print only positive numbers

function printPositive(arr) {
    arr.forEach(function(num) {
        if (num >= 0) {
            console.log(num);
        }
    });
}

//printPositive([2, -3, 5, -34, 274, 0]); //2 5 274 0

//2: take an array, return new array with only positive numbers
function getPositives(arr) {
    return arr.filter(function(num) {
        return num >= 0;
    });
}

//var positiveArray = getPositives([2, -3, 5, -34, 274, 0]);
//console.log(positiveArray); //[2, 5, 274, 0]

//3: take an array and function as arguements to a function
//return new array with only truthy values
function isTruthy(num) {
    return num;
}

function filterArray(array, predicate) {
    return array.filter(predicate);
}

//var truthyFalsyArray = [0, 1, "true", true, false]
//console.log(filterArray(truthyFalsyArray, isTruthy)); //[1, "true", true]

//4: return longest word in a string
function takeLongest(first, second) {
    if (first.length > second.length) {
        return first;
    }
    else {
        return second;
    }
}

function longestWord(someString) {
    var splitString = someString.split(" ");
    return splitString.reduce(takeLongest, "");
}

//console.log(longestWord("shorter longerrrrr")); //longerrrrr

