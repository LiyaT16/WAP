"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryItem = void 0;
class LibraryItem {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.isAvailable = true;
    }
    checkout() {
        this.isAvailable = false;
    }
    returnItem() {
        this.isAvailable = true;
    }
}
exports.LibraryItem = LibraryItem;
