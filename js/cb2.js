const div = function(n1,n2){
    console.log(`${n1} / ${n2} = ${n1/n2}`);
}

function sum(n1,n2){
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}

const calc = function(cb,n1,n2){
    cd(n1,n2);
}

calc(sum, 10,20);
calc(div,10,2);

calc(function(n1,n2){
    console.log(n1*n2);
},30,2);


calc(function(n1,n2){
    if(n1 < n2){
        console.log(n2); 
    }else if (n1 >= n2){
    console.log(n1); }
},10,20)

calc((n1,n2)=>console.log(n1>n2?n1:n2),10,20);

const findMax = (n1,n2) =>console.log(n1>n2?n1:n2);

calc(findMax,10,20);
calc(findMax,70,20);


