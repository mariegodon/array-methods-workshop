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

function totalVowels(prev, curr) {
    var vowels = ["a", "e", "i", "o", "u"];
    if (typeof curr === "string" && vowels.indexOf(curr) !== -1) {
        prev.push(curr);
    }
    return prev;
}

function countVowels(someString) {
    var splitString = someString.split("");
    return splitString.reduce(totalVowels, []).length;
}

//console.log(countVowels("how many vowels now? 5")); //5

//6: take an array of numbers, return object with hightest and lowest numbers

function isHighestLowest(prev, curr) {
    if (curr > prev.highest) {
        prev.highest = curr;
        return prev;
    }
    else if (curr < prev.lowest) {
        prev.lowest = curr;
        return prev;
    }
    return prev;
}

function highLow(someArray) {
    var highLowObj = {
        highest: -Infinity,
        lowest: Infinity
    }
    return someArray.reduce(isHighestLowest, highLowObj);
}

//console.log(highLow([6, 34, 2453, -3, -2348])); //{ highest: 2453, lowest: -2348 }

//7: similar to 6, take two highest numbers and two lowest numbers

function isHighestLowestTwo(prev, curr) {
    if (curr > prev.secondHighest) {
        if (curr > prev.highest) {
            prev.secondHighest = prev.highest;
            prev.highest = curr;
            return prev;
        }
        else if (curr === prev.highest) {
            prev.secondHighest = curr;
            return prev;
        }
        else {
            prev.secondHighest = curr;
            return prev;
        }
    }
    else if (curr < prev.secondLowest) {
        if (curr < prev.lowest) {
            prev.secondLowest = prev.lowest;
            prev.lowest = curr;
            return prev;
        }
        else if (curr === prev.lowest) {
            prev.secondLowest = curr;
            return prev;
        }
        else {
            prev.secondLowest = curr;
            return prev;
        }
    }

    return prev;
}

function highLowTwo(someArray) {
    var highLowTwoObj = {
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity
    }
    return someArray.reduce(isHighestLowestTwo, highLowTwoObj);
}

//console.log(highLowTwo([6, 34, 35, 36, 36, -65, 2454, 2453, -2348, 2454, -3, -2348, -65, 234]));

//8: take a string, return object where keys are letters
//values are number of times letter appears

function isUnique(repeated) {
    var unique = [];
    repeated.forEach(function(char) {
        if (unique.indexOf(char) === -1) {
            unique.push(char);
        }
    });
    return unique;
}

function letterCounter(prev, curr) {
    var oldCount = prev[curr];
    var newCount = oldCount + 1;
    prev[curr] = newCount;
    return prev;
}

function countChars(anyString) {
    var arrayOfLetters = anyString.replace(/\s+/g, '').split("");
    var uniqueStringArray = isUnique(arrayOfLetters);
    var objectCounter = {};
    uniqueStringArray.forEach(function(uniqueChar) {
        objectCounter[uniqueChar] = 0;
    });

    return arrayOfLetters.reduce(letterCounter, objectCounter);

}

//console.log(countChars("hello world"));

//9: take a database of people, return an object with 
//unique id as identifier, data as properties

function idReducer(prev, curr) {
    prev[curr["id"]] = curr;
    return prev;
    
}

function peopleById(peopleArray){
    
    return peopleArray.reduce(idReducer, {});
    
}

var exampleDatabase = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
];

//console.log(peopleById(exampleDatabase));



function peopleByFirstName() {
    
}
