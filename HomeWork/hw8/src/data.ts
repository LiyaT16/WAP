export interface Book {
    id: string,
    title: string,
    author: string,
    year: number,
    imageUrl: string;
};

export const books: Book[] = [
    {
        id: "1",
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        imageUrl: "https://example.com/atomic.jpg"
    },
    {
        id: "2",
        title: "Clean Code",
        author: "Robert Martin",
        year: 2008,
        imageUrl: "https://example.com/clean.jpg"
    }
];
