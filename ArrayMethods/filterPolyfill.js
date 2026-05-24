let arr=[10,20,30,40,50];



Array.prototype.myFilter=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

let mappedArr=arr.myFilter((element,index)=>{
    return element%3==0;
});

console.log(mappedArr);