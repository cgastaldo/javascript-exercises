const removeFromArray = function(userArray) {
    for (i=1; i<arguments.length; i++){
        while (userArray.includes(arguments[i])){
            const index = userArray.indexOf(arguments[i]);
            if (index > -1){
                userArray.splice(index, 1);
            }
        }
    }
    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
