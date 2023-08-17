const sumAll = function(int1, int2) {

    let sum = 0; 
    let lowerRange = 0; 
    let upperRange = 0; 

    if(int1 < 0 || int2 <0)
        return "ERROR"; 

    if(typeof int1 !== "number" || typeof int2 !== "number" )
        return "ERROR";

    if(int1>int2){
        lowerRange = int2;
        upperRange = int1;  
    }
    else{
        lowerRange = int1; 
        upperRange = int2; 
    }

    for(i=lowerRange; i<=upperRange; i++){
        sum+=i; 
    }

    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
