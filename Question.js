//  Q1 - Return name of student in capital 

let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
  ];


  const names = students.map((student)=>{
    return student.name.toUpperCase() +' '+ "marks are" + ' '+ student.marks;
  });

  console.log(names);


//   Q2- student who score only more than 60 marks and roll no greater than 15


const newMarks = students.filter((student , i, arr) => {
    return student.marks > 60;
});

console.log(newMarks);


//  Q3 - student who score only more than 60 marks and roll no greater than 15


const newMark = students.filter((student , i, arr) => {
    return student.marks > 60 && student.rollNumber >15;
});

console.log(newMark);

// Q4 - Sum of marks of all of the student 

const sum = students.reduce((acc, curr)=>{
    return acc + curr.marks;
},0);

console.log(sum);

// Q5 - name of student who score more than 60  { To not use return , remove {} and remove return}

const final = students.filter((student)=> student.marks>60).map((student)=> student.name.toUpperCase());

console.log(final);

// Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

let totalMarks = students.map(function(stu){ 
    if(stu.marks < 60){
        stu.marks += 20;}
    return stu;
}).filter(stu => stu.marks > 60).reduce((acc,curr) => acc+curr.marks, 0);

console.log(totalMarks); 