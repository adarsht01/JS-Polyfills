//return first satisfied element or undefined

let arr=[10,23,20,24];

Array.prototype.myFind=function(cb){
    let ans;
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            ans=this[i];
            return ans;
        }
    }
    return ans;
}

let ans=arr.myFind((element,index)=>{
    return element%2!=0;
})

console.log(ans);