const obj={
    name:"adarsh",
    age:"25"
}

function wishBday(greet){
    console.log(`${greet} happy ${this.age}th bday ${this.name}`);
}

Function.prototype.myCall=function(o,...arg){
    if(typeof(this)!=="function"){
        throw new Error("not callable");
    }
    o.fn=this;
    o.fn(...arg);
}



wishBday.myCall(obj,"hi");


Function.prototype.myApply=function(o,arg=[]){
    if(typeof(this)!=="function"){
        throw new Error("not callable");
    }
    o.fn=this;
    o.fn(...arg);
}

wishBday.myApply(obj,["hi"]);


Function.prototype.myBind=function(o){
    if(typeof(this)!=="function"){
        throw new Error("not callable");
    }
    o.fn=this;
    return function(...newargs){
        return o.fn(...newargs);
    }
}

let bindWish=wishBday.myBind(obj);
bindWish("hi");

