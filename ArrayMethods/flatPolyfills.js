let arr=[1,2,[4,5,[6,7]]];


Array.prototype.myFlat=function(level=1){
    let temp=[];
    function flatten(arr,depth){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])&&depth>0){
                flatten(arr[i],depth-1);
            }
            else{
                temp.push(arr[i]);
            }
        }    
    }
    flatten(this,level);
    return temp;
}

console.log(arr.myFlat(Infinity));