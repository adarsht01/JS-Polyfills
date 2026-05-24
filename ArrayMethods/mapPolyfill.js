const arr=[1,2,3,4,5];

function useInbuiltMap(){
    return arr.map((num,index,arr)=>{
        return num*2;
    })
}

console.log(useInbuiltMap());

//map polyfill---------------->
Array.prototype.myMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

function useMyMap(){
    return arr.myMap((num,index)=>{
        return num*3;
    })
}

console.log(useMyMap());
