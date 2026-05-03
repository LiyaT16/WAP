abstract class LibraryItem {
    isAvailable: boolean = true;

    constructor(public id: number, public title: string) { }

    checkout() {
        this.isAvailable = false;
    }
    returnItem() {
        this.isAvailable = true;
    }

    abstract getInfo(): string;
}

