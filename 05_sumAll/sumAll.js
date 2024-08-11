const sumAll = function(number1, number2) {
    if(number1 <  0 || number2 < 0) {
        return "ERROR";
    }
    else if(number1%1 != 0 || number2%1 !=0){
        return "ERROR"
    }
    else if(typeof(number1) != 'number' || typeof(number2) != 'number') {
        return "ERROR";
    }

    if (number1 < number2){
        minNumber= number1;
        maxNumber= number2;
    }
    else{
        maxNumber= number1;
        minNumber= number2;
    }
    let sumNumbers = minNumber;
    for (i=minNumber; i<maxNumber; i++){
        minNumber +=1;
        sumNumbers += minNumber;
    }
    return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
