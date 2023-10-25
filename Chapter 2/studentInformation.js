// Problem 7
studentInformation = (students) => {
  let maxGrade = students[0].grade;
  let studentId = 0
  for(let i = 1; i < students.length; i++) {
    if(students[i].grade > maxGrade){
      maxGrade = students[i].grade;
      studentId = i;
    }
  }
  console.log(`The highest grade in class is ${maxGrade} scored by ${students[studentId].name}`);
}

students = [
  {
    name: 'John',
    age: 21,
    grade: 85,
  },
  {
    name: 'Mark',
    age: 22,
    grade: 95,
  },
  {
    name: 'Jack',
    age: 21,
    grade: 75,
  }
]

studentInformation(students);