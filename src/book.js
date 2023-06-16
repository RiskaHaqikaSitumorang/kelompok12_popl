export const Book = ({ author, title, image, bookNumber }) => {
  return (
    <article className="Book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="BookNumber">{`# ${bookNumber + 1}`}</span>
    </article>
  );
};
