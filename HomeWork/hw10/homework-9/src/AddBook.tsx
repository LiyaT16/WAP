import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IBook } from "./IBook";

function AddBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState<IBook>({
        title: "",
        author: "",
        year: 0,
        imageUrl: ""
    } as IBook);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const rawData = await fetch("http://localhost:5005/books", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "x-api-key": "secret123"
                },
                body: JSON.stringify(book)
            });
            const response = await rawData.json();
            console.log(response);
            navigate("/");

        } catch (error) {
            console.log(error);
        }
    };
    const onChangeHandler = (e: any) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Title"
                value={book.title}
                onChange={onChangeHandler}
                name="title" />

            <input placeholder="Author"
                value={book.author}
                onChange={onChangeHandler}
                name="author" />

            <input placeholder="Year"
                value={book.year}
                onChange={onChangeHandler}
                name="year" />
            <input placeholder="Image Url"
                value={book.imageUrl}
                onChange={onChangeHandler}
                name="imageUrl" />

            <button type="submit"> Add Book</button>
        </form>
    );
}
export default AddBook;