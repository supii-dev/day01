//원본에서 필요한 아이템만 걸러서 새로운 배열을 만들고 싶을때, 맵과 다른점은 가공을하는게 아니라 걸러서만드는 새로운 배열
const arr = [11, 32, 7, 19, 40, 56,];
const filterArr = arr.filter(item=>item%2 === 0);
console.log('arr:',arr)
console.log('filterArr:',filterArr)
// const temp =[];
// temp.push(1);
// temp.push(2);
// temp.push(3);

// console.log(temp);

const myArr = {
    0: 11,
    1: 32,
    2: 7, 
    3: 19,
    4: 40,
    5: 56,
    6: 57,
    length: 7,
    forEach: function(cd){
        for(let i =0; i<this.length; i++){
            cd(this[i],i);
        }
        return;
    },
    map: function(cd){
        const temp = new Array(this.length);
        for(let i =0; i<this.length; i++){
        temp[i] = cd(this[i],i);
        }
        return temp;
    },
    filter: function(cd){
        const temp = [];
        for(let i =0; i<this.length; i++){
        if(cd(this[i],i)){
            temp.push(this[i]);
        }
    }
    return temp;
}
};


const myFilterArr = myArr.filter(item=>item%2 === 0);
const myFilterArr2 = myArr.filter(item=>item > 50);
console.log('myFilterArr:',myFilterArr);
console.log('myFilterArr2:',myFilterArr2);
