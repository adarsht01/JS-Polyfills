const users = [
    {name:"A", age:20},
    {name:"B", age:25},
    {name:"C", age:20}
];

Array.prototype.myGroupBy=function(cb){
    let temp={};
    for(let i=0;i<this.length;i++){
        let key=cb(this[i]);
        if(!temp[key]){
            temp[key]=[];
        }
        temp[key].push(this[i]);
    }
    return temp;
}

let grouped=users.myGroupBy((user)=>{
    return user.age;
})

console.log(grouped);