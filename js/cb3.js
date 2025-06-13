function sum(n1,n2){
    return n1 + n2;
}

function sub(n1,n2){
    return n1 - n2;
}

const calc = function(cb,n1,n2){
   const i = cb(n1,n2);
   console.log("결과:",i);
} 

calc(sum,10,20);
calc(sub,20,12);

function calc(cd,n1,n2){
    const result = cb(n1,n2);
    console.log("결과:",result);
}