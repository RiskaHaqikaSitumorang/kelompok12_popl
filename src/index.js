import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Francesc Miralles and Hector Garcia",
    title: "Ikigai: The Japanese secret to a long and happy life",
    image:
      "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    author: " Napoleon Hill",
    title: "Think and Grow Rich",
    image:
      "https://m.media-amazon.com/images/I/41CqlzJS-NL._SX322_BO1,204,203,200_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="BookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ author, title, image, getBook, id }) => {
  return (
    <article className="Book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={getBook(id)}>Click</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
