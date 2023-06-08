import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="BookList">
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="Book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg"
    alt="Ikigai: The Japanese secret to a long and happy life"
  />
);
const Title = () => (
  <h2>Ikigai: The Japanese secret to a long and happy life</h2>
);
const Author = () => <h4>Francesc Miralles and Hector Garcia</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
