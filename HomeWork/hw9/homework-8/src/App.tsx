import { useState } from 'react';

type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  imageUrl: string;

};

function App() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    }]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Book = {
      id: (books.length + 1).toString(),
      title,
      author,
      year: Number(year),
      imageUrl,
    };
    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setYear("");
    setImageUrl("");
  };

  return (
    <div>
      <div className='grid justify-center'>
        <div className='border-4 border-amber-700 bg-amber-200 w-100 m-8 p-4'>
          <h1 className='font-bold text-3xl text-blue-700 text-center mb-4'>Library App</h1>

          <form onSubmit={handleSubmit} className="grid space-y-2">
            <input className='border-2 rounded'
              type="text"
              placeholder='Enter Title'
              value={title}
              onChange={e => setTitle(e.target.value)} />

            <input className='border-2 rounded'
              type="text"
              placeholder='Enter Author'
              value={author}
              onChange={e => setAuthor(e.target.value)} />

            <input className='border-2 rounded'
              type="number"
              placeholder='Enter Year'
              value={year}
              onChange={e => setYear(e.target.value)} />

            <input className='border-2 rounded'
              type="text"
              placeholder='Enter Image URL'
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)} />

            <button className='border-2 rounded bg-green-800 text-2xl text-white' type="submit" >Add Book</button>
          </form>
        </div>
      </div>

      <div className='border-3 rounded m-2 p-4'>
        <h2 className='text-center font-bold text-2xl'>Book List</h2>
        <div className='flex gap-3 w-100'>
          {books.map((book) => (
            <div className='flex space-x-3 border-2 rounded-2xl p-2 w-100'>
              <div key={book.id}>
                <h3>Title: {book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
                <p> <img src={book.imageUrl} alt={book.title} className='w-full' /> </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
