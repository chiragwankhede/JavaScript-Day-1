//  Map () :- 

const number =[1,2,3,4,5,6,7];

const newArray = number.map((num ,i, arr) =>{
    return num*5;
});

console.log(newArray);