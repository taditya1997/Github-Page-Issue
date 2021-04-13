import React from "react";
import "./App.css";

function Pagination({ postperPage, totalPosts, paginate }) {
  const pagenumbers = [];
  for (var i = 1; i < Math.ceil(totalPosts / postperPage); i++) {
    pagenumbers.push(i);
  }

  return (
    <div className="pagination">
      {pagenumbers.map((number) => (
        <button onClick={() => paginate(number)} className="page-link">
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
