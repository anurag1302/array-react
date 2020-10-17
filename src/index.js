import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/816HBXHJsaL._AC_UY218_.jpg",
    title: "React.js Book: Learning React JavaScript Library From Scratch",
    author: "Greg Sidelnikov",
  },
  {
    img: "https://m.media-amazon.com/images/I/71vlPquePfL._AC_UL320_.jpg",
    title: "Pro C# 7: With .NET and .NET Core",
    author: "Andrew Troelsen",
  },
];

// function BookList() {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         console.log(book);
//         const { img, title, author } = book;
//         return <Book img={img} title={title} author={author} />;
//       })}
//     </section>
//   );
// }

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
