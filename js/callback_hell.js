//콜백지옥 , 바로 실행하지않고 일정시간이 지난후 함수를 실행함 , 함수의 주소값을 보낸다 
setTimeout(()=>{
    console.log('A');
},3000);

setTimeout(()=>{
    console.log('B');
},2000);

setTimeout(()=>{
    console.log('C');
},1000);