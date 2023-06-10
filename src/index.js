import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Francesc Miralles and Hector Garcia",
  title: "Ikigai: The Japanese secret to a long and happy life",
  image:
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: " Napoleon Hill",
  title: "Think and Grow Rich",
  image:
    "https://m.media-amazon.com/images/I/41CqlzJS-NL._SX322_BO1,204,203,200_.jpg",
};

const BookList = () => {
  return (
    <section className="BookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        image={secondBook.image}
      />
    </section>
  );
};

const Book = (props) => {
  const { author, title, image } = props;

  return (
    <article className="Book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
