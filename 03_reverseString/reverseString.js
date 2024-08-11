const reverseString = function(userString) {
    reversedString = ''
    stringLength = userString.length;
    for (let i=0; i<stringLength; i++){
        reversedString = reversedString + 
            userString.slice(stringLength-i-1,stringLength-i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
