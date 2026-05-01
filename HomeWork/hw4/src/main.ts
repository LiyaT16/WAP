import { Student, GraduateStudent, GradeLevel } from "./models";
import { calculateAverage, printStudentInfo } from "./studentUtils";
import { identity, filterArray } from "./utils";

const studentsList: (Student | GraduateStudent)[] = [
    {
        id: 1,
        name: "Liya",
        grades: [95, 90, 80],
        level: GradeLevel.Undergraduate

    },
    {
        id: 2,
        name: "Bob",
        email: "bob@gmail.com",
        grades: [90, 75, 85],
        level: GradeLevel.Graduate,
        advisor: "Dr. Smith"
    },
    {
        id: 3,
        name: "Luca",
        email: "luca@gmail.com",
        grades: [94, 83, 81],
        level: GradeLevel.Undergraduate
    },
    {
        id: 4,
        name: "Tom",
        email: "tom@gmail.com",
        grades: [84, 97, 91],
        level: GradeLevel.PhD
    }
];
const names = studentsList.map((student) => student.name);
console.log("Names: ", names);
console.log("----------------------------------------");

let total = studentsList.reduce((sum, student) => sum + calculateAverage(student), 0);
let classAvg = total / studentsList.length;
console.log("Class Average: ", classAvg);
console.log("----------------------------------------");

const highStud = filterArray(studentsList, student => calculateAverage(student) > 84);
console.log("Higher performing", highStud);
console.log("----------------------------------------");

studentsList.forEach((studentsList) => {
    printStudentInfo(studentsList);
});


