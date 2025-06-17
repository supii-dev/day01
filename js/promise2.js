const p = new Promise((resolve, reject)=>{
   
    resolve('성공');
  
    //reject('실패');
});

p.then(item=>{

    console.log('then: ',item);
    return '두번째'; //resolve('두번째');
})
.then(then=>{
    console.log('2 then: ',item);
})
.catch(item =>{
    console.log('catch: ',item);
 });

