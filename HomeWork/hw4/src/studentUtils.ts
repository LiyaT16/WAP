import { Student, GraduateStudent } from "./models";

export function calculateAverage(student: Student): number {
    let avg = 0;
    for (let i = 0; i < student.grades.length; i++) {
        avg += student.grades[i];
    }
    return avg / student.grades.length;
}

export function printStudentInfo(student: Student | GraduateStudent): void {
    console.log(`Name: ${student.name}`);
    console.log(`Average Grade: ${calculateAverage(student)}`);
    if ("advisor" in student) {
        console.log(`Advisor: ${student.advisor}`);

    }

}

