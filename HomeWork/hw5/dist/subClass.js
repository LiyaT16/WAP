"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.Magazine = exports.Book = void 0;
const class_1 = require("./class");
class Book extends class_1.LibraryItem {
    constructor(id, title, author, pages) {
        super(id, title);
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    getInfo() {
        return `Book: ${this.title} by ${this.author}`;
    }
}
exports.Book = Book;
class Magazine extends class_1.LibraryItem {
    constructor(id, title, issueNumber) {
        super(id, title);
        this.id = id;
        this.title = title;
        this.issueNumber = issueNumber;
    }
    getInfo() {
        return `Magazine: ${this.title}, Issue Number: ${this.issueNumber}`;
    }
}
exports.Magazine = Magazine;
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    listAvailable() {
        const availableItems = this.items.filter((item) => item.isAvailable);
        availableItems.forEach((item) => { console.log("Available items: ", item.getInfo()); });
    }
    findByTite(title) {
        return this.items.find((item) => item.title == title);
    }
}
exports.Library = Library;
