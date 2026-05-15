import { useEffect, useState } from "react";
import type { IBook } from "./IBook";

export default function GetBooks() {
    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const rawData = await fetch("http://localhost:5005/books", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "x-api-key": "secret123"
                },

            });
            const response = await rawData.json();
            setBooks(response);

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Book List</h2>

            <div>
                {books.map(book => (
                    <div>
                        <h3>{book.title}</h3>
                        <h3>{book.author}</h3>
                        <img src={book.imageUrl} />
                    </div>

                ))}
            </div>
        </div>
    );


}


