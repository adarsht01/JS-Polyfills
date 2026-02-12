const button=document.getElementById("once-btn");

function sayHello(){
    console.log("Hello adarsh, how are you?");
}

function once(cb){
    let isExecuted=false;

    return function(...arg){
        if(isExecuted){
            console.log("already asked");
            return;
        }
        isExecuted=true;
        cb(...arg);
    }
}

const onceSayHello=once(sayHello);

button.addEventListener("click",onceSayHello);