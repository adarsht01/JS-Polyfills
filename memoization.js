const button=document.getElementById("btn-get-square");
const input=document.getElementById("input-square");

function memoizeFxn(cb){
    let cache={};

    return function(arg){
        let key=String(arg);
        if(cache.hasOwnProperty(key)){
            console.log("from cache ",cache[key]);
        }
        else{
            console.log("calculating...........");
            let ans=cb(arg);
            cache[key]=ans;
            console.log("ans is ",ans);
        }
    }
}

function getSquare(num){
    return num*num;
}

let numSquare=memoizeFxn(getSquare);

button.addEventListener("click",()=>{
    let value=Number(input.value);
    numSquare(value);
})
