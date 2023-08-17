const removeFromArray = function(array, num, ...moreNum) {

    let index = array.indexOf(num); 
    if(index>=0){
        array.splice(index, 1);
    }

    if(moreNum.length>0){
        for(i=moreNum.length-1; i>=0; i--){
            let index = array.indexOf(moreNum[i]);
            if(index>=0){
                array.splice(index,1);
            }
        }
    }

    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
