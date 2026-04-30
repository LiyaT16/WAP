"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = calculateAverage;
exports.printStudentInfo = printStudentInfo;
function calculateAverage(student) {
    let avg = 0;
    for (let i = 0; i < student.grades.length; i++) {
        avg += student.grades[i];
    }
    return avg / student.grades.length;
}
function printStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Average Grade: ${calculateAverage(student)}`);
    if ("advisor" in student) {
        console.log(`Advisor: ${student.advisor}`);
    }
}
