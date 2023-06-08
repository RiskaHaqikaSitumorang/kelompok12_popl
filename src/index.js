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
  const title = "Ikigai: The Japanese secret to a long and happy life";
  const author = "Francesc Miralles and Hector Garcia";

  return (
    <article className="Book">
      <img
        src="https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg"
        alt="Ikigai: The Japanese secret to a long and happy life"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
