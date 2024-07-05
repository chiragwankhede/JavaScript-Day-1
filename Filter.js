const number = [1,2,3,4,5,6];

const newArray= number.filter(( num , i, arr) => {
    return num > 2;
});

console.log(newArray);