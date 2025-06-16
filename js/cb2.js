let div = function(n1, n2) {
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
}
let cb = div;
cb(10, 2);
function sum(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}
const calc = function(cb, n1, n2) {
    cb(n1, n2);
}
calc(sum, 10, 20);
calc(div, 10, 2);
calc(function(n1, n2) {
    console.log(n1 * n2);
}, 30, 2);

//calc(1, 2, 3);

const findMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2);
//calc호출하여 calc(fn, 10, 20); 더 큰 수가 콘솔에 출력되도록 해주세요.
calc(findMax, 10, 20);
calc(findMax, 70, 20);