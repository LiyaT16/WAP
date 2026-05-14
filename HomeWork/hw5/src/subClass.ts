import { LibraryItem } from "./class";
export class Book extends LibraryItem {

    constructor(public id: number, public title: string,
        public author: string, public pages: number) {
        super(id, title);
    }

    getInfo(): string {
        return `Book: ${this.title} by ${this.author}`;
    }
}

export class Magazine extends LibraryItem {
    constructor(public id: number, public title: string, public issueNumber: number) {
        super(id, title);
    }

    getInfo(): string {
        return `Magazine: ${this.title}, Issue Number: ${this.issueNumber}`;
    }
}

export class Library {
    items: LibraryItem[] = [];

    addItem(item: LibraryItem) {
        this.items.push(item);
    }

    listAvailable() {
        const availableItems = this.items.filter((item) => item.isAvailable);
        availableItems.forEach((item) => { console.log("Available items: ", item.getInfo()); });
    }

    findByTite(title: string): LibraryItem | undefined {
        return this.items.find((item) => item.title == title);
    }
}

