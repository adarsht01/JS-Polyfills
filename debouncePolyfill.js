const input=document.getElementById("debounce-delay");
const button=document.getElementById("debounce-btn");

//debouncePolyfill
function debounce(cb,d){
    let timer;
    return function(...arg){
        if(timer)clearTimeout(timer);
        timer=setTimeout(()=>{
           cb.apply(this, arg);
        },d);
    }
}

function sayHello(){
    console.log("Hello Adarsh this side");
}

let debounceHello=debounce(sayHello,500);
let delayTime=500;

input.addEventListener("input",()=>{
    delayTime=input.value || 500;
    debounceHello=debounce(sayHello,delayTime);
})

button.addEventListener("click",()=>{
    debounceHello();
});

