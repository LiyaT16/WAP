import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IBook } from "./IBook";

function AddBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState<IBook>({
        title: "",
        author: "",
        year: "" as any,
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
        setBook({ ...book, [e.target.name]: e.target.name === "year" ? Number(e.target.value) : e.target.value });
    };

    return (
        <div className="bg-amber-200 w-80 flex flex-cols border-2 rounded justify-center items-center">
            <form onSubmit={handleSubmit} className="m-2 space-y-2">
                <input className="border-2 w-full"
                    placeholder="Title"
                    value={book.title}
                    onChange={onChangeHandler}
                    name="title" />

                <input className="border-2 w-full"
                    placeholder="Author"
                    value={book.author}
                    onChange={onChangeHandler}
                    name="author" />

                <input className="border-2 w-full"
                    type="number"
                    placeholder="Year"
                    value={book.year}
                    onChange={onChangeHandler}
                    name="year" />
                <input className="border-2 w-full"
                    placeholder="Image Url"
                    value={book.imageUrl}
                    onChange={onChangeHandler}
                    name="imageUrl" /> <br></br>

                <button className="m-2 p-2 bg-green-400 border-2" type="submit"> Add Book</button>
            </form>
        </div>
    );
}
export default AddBook;