import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import { Book } from "./book";

const BookList = () => {
  return (
    <>
      <h1>Amazone Best Seller</h1>
      <section className="BookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} bookNumber={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
