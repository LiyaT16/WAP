import { useEffect, useState } from "react";
import type { IBook } from "./IBook";
import { useNavigate, useParams } from "react-router-dom";

export default function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState<IBook | null>(null);

    useEffect(() => {
        getBooksById();
    }, []);

    const getBooksById = async () => {
        try {
            const rawData = await fetch(`http://localhost:5005/books/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "x-api-key": "secret123"
                }

            });
            const response = await rawData.json();
            setBook(response);

        } catch (error) {
            console.log(error);
        }
    };
    if (!book) {
        return <h2>Loading...</h2>;
    }
    return (

        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year: {book.year} </p>
            <img src={book.imageUrl} />
            <button onClick={() => navigate(-1)}> Back </button>

        </div>

    );

}

