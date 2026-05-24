// array.includes(value, fromIndex)

// Arguments:

// value
// → value to search
// fromIndex (optional)
// → index from where search starts

let arr=[9,3,6,24];

Array.prototype.myIncludes=function(element,fromIndex){
    let startIndex=fromIndex||0;
    for(let i=startIndex;i<this.length;i++){
        if(this[i]==element)return true;
    }
    return false;
}

let ans=arr.includes(3,2);

console.log(ans);