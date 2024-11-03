import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BooksDetels = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((books) => books.bookId === id);
  console.log(book);
  const {
    bookId: bookid,
    image,
    review,
    author,
    bookName,
    category,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <div className="my-12">
      <div className="flex w-11/12 mx-auto gap-10">
        <div>
          <img
            className="w-96 h-[450px] p-10 rounded-md bg-gray-300"
            src={image}
            alt=""
          />
        </div>
        <div className="my-5">
          <h1 className="text-4xl font-bold mb-3">{bookName}</h1>
          <h1>by : {author}</h1>
          <div className="divider"></div>
          <h1 className="leading-0">{category}</h1>
          <div className="divider"></div>
          <p className="w-62">
            <span className="text-xl font-bold">Revew</span> :{" "}
            {review.slice(0, 100)}
          </p>
          <div className="text-green-400 mr-">
            {" "}
            <span className="text-xl font-bold text-black">tags : </span>
            {tags}
          </div>
          <div>
            <h1>
              {" "}
              Number of Pages:{" "}
              <span className="text-xl font-bold">{totalPages}</span>
            </h1>
            <h1>
              Publisher: <span className="text-xl font-bold">{publisher}</span>
            </h1>
            <h1>
              Year of Publishing:{" "}
              <span className="text-xl font-bold">{yearOfPublishing}</span>
            </h1>
            <h1>
              Rating: <span className="text-xl font-bold">{rating}</span>
            </h1>
            <div className="">
              <button className="btn btn-primary">read</button>
              <button className="btn ml-5 btn-accent">wish list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetels;
