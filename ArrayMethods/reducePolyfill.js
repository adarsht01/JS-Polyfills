let arr=[2,4,5,6,9];

function useInbuiltReduce(){
    return arr.reduce((accumulator,curr,index)=>{
        return accumulator+curr;
    },0);
}

console.log(useInbuiltReduce());
//Notes
//-> without initial value(0) accumulator takes first value and loop start with second, so same ans.
//questions on it
// Q- find max number

function findMaxNumber(){
    return arr.reduce((acc,num)=>{
        return (acc>num)?acc:num;
    },-Infinity)
}

console.log(findMaxNumber());


//Polyfill for reduce

Array.prototype.myReduce = function(cb, initialValue){

    let accumulator;
    let startIndex;

    if(initialValue !== undefined){
        accumulator = initialValue;
        startIndex = 0;
    }
    else{
        accumulator = this[0];
        startIndex = 1;
    }

    for(let i = startIndex; i < this.length; i++){

        accumulator = cb(
            accumulator,
            this[i],
            i,
            this
        );

    }

    return accumulator;
}