let arr=[10,20,30,40,50];



Array.prototype.myForEach=function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i],i,this);
    }
}

arr.myForEach((element,index)=>{
    console.log(element,index);
})