import React, { useState, useEffect } from 'react';
import './BeersListPage.css';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';

const BeersListPage = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(data.length / cardsPerPage);
    const currentCards = data.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );
    const nextPage = () => {
        if (currentPage + 1 > totalPages) return;
        setCurrentPage(currentPage + 1);
    };
    const previousPage = () => {
        if (currentPage - 1 === 0) return;
        setCurrentPage(currentPage - 1);
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    const created = data[0];

    return (
        <section>
            {currentCards.map((drink, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="image-container">
                            <img src={drink.image_url} alt={drink.name} />
                        </div>
                        <div className="beer-info">
                            <h3>{drink.name}</h3>
                            <h4>{drink.tagline}</h4>
                            <p>
                                Created by:&nbsp;&nbsp;
                                {drink.contributed_by.replace(/\s*<.*>/, '')}
                            </p>

                            <Link className="link" to={`/details/${drink._id}`}>
                                Details
                            </Link>
                        </div>
                    </div>
                );
            })}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={nextPage}
                previousPage={previousPage}
            />
            <Footer />
        </section>
    );
};

export default BeersListPage;
