const reverseString = function(string) {

let stringSpilt = string.split(""); 
let stringLength = string.length; 
let newString = "";

for(i=stringLength-1; i>=0; i--){
    newString += stringSpilt[i];
}

return newString; 
};

// Do not edit below this line
module.exports = reverseString;
