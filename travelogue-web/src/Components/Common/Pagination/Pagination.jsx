import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalUserCards, paginate }) => {


  const pageNumbers = [];

  for (let count = 1; count <= Math.ceil(totalUserCards / postsPerPage); count++) {
    pageNumbers.push(count);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="user-item">
          <a onClick={() => paginate(number)} href="#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  )

}


export default Pagination;