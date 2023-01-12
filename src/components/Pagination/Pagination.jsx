import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, nextPage, previousPage }) => {
    return (
        <div className="pagination">
            <button className="btn btn--left" onClick={previousPage}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="left"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <p className="page-number">
                {currentPage} / {totalPages}
            </p>
            <button className="btn btn--right" onClick={nextPage}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="right"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
