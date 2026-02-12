const inputSecond=document.getElementById("input-seconds");
const inputTimes=document.getElementById("input-times");
const button=document.getElementById("rate-limit-btn");


let timer=500;
let times=1;
inputSecond.addEventListener("input",()=>{
    timer=inputSecond.value||500;
    createLimiter();
})

inputTimes.addEventListener("input",()=>{
    times=inputTimes.value||1;
    createLimiter();
})

function sayHello(){
    console.log("I can sayHello only ", times, " in ",timer, " miliseconds");
}

function rateLimiter(cb,timer,times){
    let currentCount=0;
    let last=Date.now();
    return function(...arg){
        let now=Date.now();

        if(now-last>=timer){
            currentCount=0;
            last=now;
        }

        if(currentCount>=times){
            console.log("limit reached wait for", timer-(now-last));
            return; 
        }
        else 
            {
                currentCount++;
                cb(...arg);
            }
    }
}

let rateLimitHello;

function createLimiter() {
    rateLimitHello = rateLimiter(sayHello, timer, times);
}

createLimiter();

button.addEventListener("click",()=>rateLimitHello());