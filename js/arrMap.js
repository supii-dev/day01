// map을 사용하는 이유는? 똑같은 크기의 새로운 배열을 만들면서 새로운 값들로 세팅하고 싶을때 사용. D카피
const arr = [11, 32, 7, 19, 40, 56,]; 

// const mapArr = arr.map(item=>item);
const mapArr = arr.map(item=>item+1);


mapArr[0] = 20; 

console.log('arr:',arr);
console.log('mapArr:',mapArr);
console.log('arr:',Array.toString(arr));
console.log('mapArr:',Array.toString(mapArr));
console.log('arr === mapArr:', arr === mapArr); //펄스면 디카피 ===만 쓸수있도록

const myArr = {
    0: 11,
    1: 32,
    2: 7, 
    3: 19,
    4: 40,
    5: 56,
    length: 6,
    forEach: function(cd){
        for(let i =0; i<this.length; i++){
            cd(this[i],i);
        }
        return;
    },
    map: function(cd){
        const temp = new Array(this.length);
        for(let i =0; i<this.length; i++){

        // const result = cd(this[i],i);
        // temp[i]=result;

        temp[i] = cd(this[i],i);
        }
        return temp;
    }
};

const myMapArr = myArr.map(item=>item+1);
console.log('myMapArr:',myMapArr);

