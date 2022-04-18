// STRINGS //
console.log('(--STRINGS--)');

// (A) //
console.log('(A)');

var thisIsAString = 'i am a first word'
console.log(thisIsAString.toUpperCase())

// (B) //
console.log('(B)');

var thisIsB = 'i am a second word';
var resultWords = thisIsB.substring (-1, 6);
console.log(resultWords);

// (C) //
console.log('(C)');

var thisIsC = 'i am a third word';
var resultThird = thisIsC.substring (14);
console.log(resultThird);

// (D) //
console.log('(D)');

var tenLetters = 'i do not know what to write';
var resultD = tenLetters.substring(0,1).toUpperCase() + tenLetters.substring(1,27).toLowerCase();
console.log(resultD);

// (E) //
console.log('(E)');

var foundIndex = 'this is';
var resultIndex = foundIndex.indexOf(' ');
console.log(resultIndex);

// (F) //
console.log('(F)');
var exercise2F = 'this character';
var result2F = 