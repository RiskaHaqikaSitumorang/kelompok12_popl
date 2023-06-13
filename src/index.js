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
  return (
    <section className="BookList">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = (eventObject) => {
    console.log(eventObject); // Return event object
    console.log(eventObject.target); // Return HTML element where the event is register
    console.log(eventObject.target.name);
    console.log(eventObject.target.value);
    console.log("Handle form input");
  };
  const handelButtonClick = (eventObject) => {
    alert("Handle button click");
  };
  return (
    <section>
      <form>
        <h2>Form</h2>
        <input type="text" name="example" onChange={handleFormInput} />
      </form>
      <button onClick={handelButtonClick}>Click</button>
    </section>
  );
};

const Book = ({ author, title, image }) => {
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
