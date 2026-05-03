import { Book, Magazine, Library } from "./subClass";

const library = new Library();

const book1 = new Book(
    1,
    "Atomic Habits",
    "James Clear",
    350
);
const book2 = new Book(
    2,
    "The Alchemist",
    "Paulo Coelho",
    250
);

const Magazine1 = new Magazine(
    3,
    "National Geographic",
    200
);

library.addItem(book1);
library.addItem(book2);
library.addItem(Magazine1);

console.log("Before checkout:");
library.listAvailable();
console.log("-------------------------------------------------------------");
book1.checkout();
console.log("After checkout:");
library.listAvailable();
console.log("-------------------------------------------------------------");

book1.returnItem();
console.log("After return:");
library.listAvailable();

console.log("-------------------------------------------------------------");
library.items.forEach((item) => {
    console.log(item.getInfo());
});
console.log("-------------------------------------------------------------");

console.log(library.findByTite("Think and Grow"));
console.log(library.findByTite("Atomic Habits"));





