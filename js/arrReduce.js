//배열의 여러값을 하나의 값으로 변경할 때 사용
// 주로 모든값 더하기 할때 사용
const arr = [11, 32, 7, 19, 40, 56,57];
const result = arr.reduce((prev,next)=>{
    console.log('prev:',prev,'next:',next);
    return prev+next
});// 익명함수 주소값 ,인자를 하나 보냈을경우 처음을 제외하고 prev에는 리턴값이 담긴다.
console.log('result:',result);

console.log('-------------------------------------------------');
const result2 = arr.reduce((prev,next)=>{
    console.log('prev:',prev,'next:',next);
    return prev+next
},100);// 초기값 ,기존값에서 더하고싶은 값이 있으면 넣어주면 된다.
console.log('result2:',result2);