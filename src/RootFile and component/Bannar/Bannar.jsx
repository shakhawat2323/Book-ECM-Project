import React from "react";
import Bannarimg from "../../assets/books.jpg";

const Bannar = () => {
  return (
    <div className="hero bg-base-200  border-2 border-yellow-200 h-[400px] px-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Bannarimg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl w-10/12 font-bold">
            Books To freshen up your bookshelf
          </h1>

          <button className="btn btn-primary mt-5">view The List</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
