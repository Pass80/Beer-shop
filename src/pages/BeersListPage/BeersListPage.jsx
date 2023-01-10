import React from 'react';
import './BeersListPage.css';
import img3 from '../../assets/images/App.webp';
import Footer from '../../components/Footer/Footer';

const BeersListPage = ({ data }) => {
    return (
        <section>
            {data.map((drink) => {
                return (
                    <div className="card" key={drink.id}>
                        <div className="image-container">
                            <img src={drink.image_url} alt={drink.name} />
                        </div>
                        <div className="beer-info">
                            <h3>{drink.name}</h3>
                            <h4>{drink.tagline}</h4>
                            <p>Created by: {drink.contributed_by}</p>
                            <button>Details</button>
                        </div>
                    </div>
                );
            })}
            <Footer />
        </section>
    );
};

export default BeersListPage;
