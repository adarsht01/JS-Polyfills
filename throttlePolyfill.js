const button=document.getElementById("throttle-btn");
const input=document.getElementById("throttle-delay");

//throttle function
function throttlePolyfill(cb,d){
    let last=0;
    return function(...arg){
        const now=Date.now();
        if(now-last<d)return;
        last=now;
        cb.apply(this, arg);
    }
}

function sayHello(){
    console.log("Hello adarsh this side testing throttle");
}

let delayTime=500;

let throttleButton=throttlePolyfill(sayHello,delayTime);

input.addEventListener("input",()=>{
    delayTime=Number(input.value) || 500;
    throttleButton=throttlePolyfill(sayHello,delayTime);
})

button.addEventListener("click",()=>{
    throttleButton();
})