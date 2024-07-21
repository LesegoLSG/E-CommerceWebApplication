import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-200"
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight ${
                currentPage === number
                  ? "text-white bg-black"
                  : "text-black bg-white"
              } border border-gray-300 hover:bg-gray-200`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className="px-3 py-2 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-200"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
