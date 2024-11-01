import React from "react";
import { useParams } from "react-router-dom";

const BooksDetels = () => {
  const { bookId } = useParams();

  return (
    <div>
      <h1 className="text-4xl">Books Deletels : {bookId}</h1>
    </div>
  );
};

export default BooksDetels;
