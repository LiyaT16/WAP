import cors from 'cors';
import express from "express";
import { apiKeyMiddleware } from './middleware';
import { books } from './data';
import { Request, Response, NextFunction } from "express";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", apiKeyMiddleware);


app.get("/books", (req, res) => {
    const q = req.query.q as string;
    if (q) {
        const filtered = books.filter(b => b.title.toLowerCase().includes(q.toLowerCase()) ||
            b.author.toLowerCase().includes(q.toLowerCase()));
        return res.json(filtered);
    }
    res.json(books);
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

    const { title, author, year, imageUrl } = req.body;

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

    if (isNaN(Number(year))) {
        return res.status(400).json({
            Message: "Year must be a number"
        });
    }

    const newBook = {
        id: Date.now().toString(),
        title,
        author,
        year: Number(year),
        imageUrl
    };

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

// app.patch("/books/:id", (req, res) => {

//     const { id } = req.params;

//     const found = books.find(
//         x => x.id === id
//     );

//     if (!found) {
//         return res.status(404).send({
//             Message: "Book not found"
//         });
//     }

//     const updatedBook = {
//         ...found,
//         ...req.body
//     };

//     res.json(updatedBook);
// });
app.delete("/books/:id", (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) {
        return res.status(404).send({ message: `Book not found` });
    }
    books.splice(index, 1);
    res.status(200).json({ Message: `Book deleted` });

});

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ message: err.message });
};
app.use(errorHandler);

const port = 5005;
app.listen(5005, () => console.log(`Listening on port ${port}...`));