const numb =[1,2,3,4,5];

const newArray = numb.reduce ( (acc, curr, i , arr) => {
    return acc + curr;
},0);

console.log(newArray);