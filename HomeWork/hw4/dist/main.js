"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const studentUtils_1 = require("./studentUtils");
const utils_1 = require("./utils");
const studentsList = [
    {
        id: 1,
        name: "Liya",
        grades: [95, 90, 80],
        level: models_1.GradeLevel.Undergraduate
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@gmail.com",
        grades: [90, 75, 85],
        level: models_1.GradeLevel.Graduate,
        advisor: "Dr. Smith"
    },
    {
        id: 3,
        name: "Luca",
        email: "luca@gmail.com",
        grades: [94, 83, 81],
        level: models_1.GradeLevel.Undergraduate
    },
    {
        id: 4,
        name: "Tom",
        email: "tom@gmail.com",
        grades: [84, 97, 91],
        level: models_1.GradeLevel.PhD
    }
];
const names = studentsList.map((student) => student.name);
console.log("Names: ", names);
const highPerform = (0, utils_1.filterArray)(studentsList, (student) => (0, studentUtils_1.calculateAverage)(student) >= 85);
console.log("High performing students: ", highPerform);
studentsList.forEach((studentsList) => {
    (0, studentUtils_1.printStudentInfo)(studentsList);
});
