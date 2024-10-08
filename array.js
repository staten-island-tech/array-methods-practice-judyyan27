const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

students.forEach((student) => console.log(student.name, student.age));
//Part 1

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);
//Part 2a

const youngStudents = students.filter((student) => student.age < 21);
console.log(youngStudents);
//Part 2b

students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));
//Part 3a

students
  .filter((student) => student.age < 21)
  .forEach((student) => console.log(student.name));
//Part 3b
