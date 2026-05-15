import { useEffect, useState } from "react";
import type { IBook } from "./IBook";
import { Link } from "react-router-dom";

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
        <div className="bg-green-200 m-2 border-2 rounded">
            <h2 className="font-bold text-2xl text-center mb-4">Book List</h2>

            <div className="grid grid-cols-3 gap-4 m-2">
                {books.map(book => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <div className="border-2 rounded p-2">
                            <h3>{book.title}</h3>
                            <h3>{book.author}</h3>
                            {book.imageUrl && (<img src={book.imageUrl} width="200" />)}
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );


}


