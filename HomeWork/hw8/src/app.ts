import cors from 'cors';
import express from "express";
import { apiKeyMiddleware, errorHandler } from './middleware';
import { Book } from './data';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", apiKeyMiddleware);

const books: Book[] = [];

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const found = books.find(x => x.id === id);
    if (found) {
        res.status(200).send(found);
    } else {
        res.status(404).send({ Message: `Book not found` });
    }
});

app.post("/books", (req, res) => {
    const { id, title, author, year, imageUrl } = req.body;
    if (!title) {
        return res.status(400).json({
            Message: "Title is required"
        });
    }
    if (!author) {
        return res.status(400).json({
            Message: "Author is required"
        });
    }
    if (typeof year !== "number") {
        return res.status(400).json({
            Message: "Year must be a number"
        });
    }
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

app.patch("/books/:id", (req, res) => {
    const { id } = req.params;
    const found = books.find(x => x.id === id);
    if (!found) {
        return res.status(404).send({ Message: `Book not found` });
    }
    Object.assign(found, req.body);
    res.json(found);
});

app.delete("/books/:id", (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) {
        return res.status(404).send({ message: `Book not found` });
    }
    books.splice(index, 1);
    res.status(200).json({ Message: `Book deleted` });

});

app.use(errorHandler);

const port = 5005;
app.listen(5005, () => console.log(`Listening on port ${port}...`));