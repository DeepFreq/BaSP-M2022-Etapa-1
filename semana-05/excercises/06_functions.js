// FUNCTIONS //
console.log('--FUNCTIONS--');

// (A) //
console.log('(A)');

var theVar;
function sum(num1, num2) {
    theVar = num1 + num2;
    return console.log(theVar);
}
sum(3,8);
sum(10,13);

// (B) //
console.log('(B)');

var theVarB;
function sumB(num3, num4) {
    if (typeof num3 == 'number' && typeof num4 == 'number') {
        theVarB = num3 + num4;
        return console.log(theVarB);
    } else {
        alert('Error, debe ingresar un nro')
        theVarB = NaN;
        return console.log(theVarB);
    }
}
sumB(43,7);
sumB('zumbi',10);

// (C) //
console.log('(C)');

var theVarC;
function validateInteger(num5) {
    theVarC = Number.isInteger(num5);
    return console.log(theVarC);
}
validateInteger(4);
validateInteger(13123123);
validateInteger(4.5);

// (D) //
console.log('(D)');

var theVarD;
function sumD(num6, num7) {
    if (typeof num6 == 'number' && typeof num7 == 'number') {
        if (Number.isInteger(num6) && Number.isInteger(num7)) {
            theVarD = num6 + num7;
            return console.log(theVarD);
        } else {
            alert('Enter whole numbers. The results will be rounded.');
            num6 = Math.round(num6);
            num7 = Math.round(num7);
            theVarD = num6 + num7;
            return console.log(theVarD);
        };
    } else {
        alert('Error - You must enter number');
        theVarD = NaN;
        return console.log(theVarD);
    };
};

sumD(14,14.3);
sumD(12,12);

// (E) //
console.log('(E)');

var theVarE;
function validateInteger2(num8) {
    if (Number.isInteger(num8)) {
        return num8;
    } else {
        alert('The number: ' + num8 + ' will be rounded');
        return Math.round(num8);
    }
};

function sumE(num9, num10) {
    if (typeof num9 == 'number' && typeof num10 == 'number') {
        num9 = validateInteger2(num9);
        num10 = validateInteger2(num10);
        resultadoE = num9 + num10;
        return console.log(theVarE);
    } else {
        alert('Error - You must enter number')
        resultadoE = NaN;
        return console.log(theVarE);
    }
};

sumE(11,22);
sumE(11.7,100.2);