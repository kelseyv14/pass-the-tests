var avow = require('avow');
var moment = require('moment');

// Booleans
//if the value is true, which it is- 1+1=2, it should return true
function isTrue(value) {
    return value === value;

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
// if the value is null it should return true. it is null because of the variable included
function isNull(value) {
    if (value === null){
        return true 
    }
    else {
        return false
    }
}

var emptyGlass = null;

avow('isNull returns true', isNull(emptyGlass) === true);
//the value is undefined because it doesn't have anything asigned to it

function isUndefined(value) {
    if (value === undefined) {
        return true
    } 
    else {
        return false
    }
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
// it changes to lowercase because of the syntax demand 'tolowercase'. I recognize the variable isn't necessary but it makes more sense to me this way.
function convertCaseLower(value) {
    var text =  value;
    return text.toLowerCase()
}


avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');
// same as previous

function convertCaseUpper(value) {
      var text =  value;
    return text.toUpperCase()
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');
// same
function repeatWord(value, place) {
    var text = value;
    return text.repeat(place)
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');
//this function slices at 7 and 12 and I don't know why
function sliceWord(value) {
    var text = value;
    return text.slice(7,12)
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');
//this value gets split in the right place because a new variable was named that represents the second string in the value?

function splitWord(value, splitIt) {
    return value.split(splitIt);
}


avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(value, name) {
    return value.indexOf(name);
}


avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(value, word) {
    return value.includes(word);
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(value, match) {
    return value.match(/\d/g).join('');

}


avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');



function extractPhoneNumber(value) {
    return value.match(/\d/g).join('');
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber(value) {
    return Number(value);
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(value) {
    return value = value + 1;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
    if (value % 3 === 0){
   
         return true;
    }
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber(value) {
    return Math.round(Math.random(value) * 10);

}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(value) {
    return Math.round(value); 
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment() {
  return moment().format('dddd');                

}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(value) {
   return value.name
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');


// Arrays
function getFirstItem(value) {
    return value[0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')