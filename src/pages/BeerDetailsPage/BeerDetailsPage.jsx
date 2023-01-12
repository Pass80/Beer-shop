import React from 'react';
import './BeerDetailsPage.css';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import arrow from '../../assets/images/left-arrow.png';
import { Link } from 'react-router-dom';

const BeerDetailsPage = ({ data }) => {
    const params = useParams();
    const beer = data.filter((element) => element._id === params.id);
    console.log(beer);

    return (
        <div>
            <section className="details-section">
                <div className="beer-details">
                    <div className="img-container">
                        <img src={beer[0].image_url} alt="beer bottle" />
                    </div>
                    <h3>{beer[0].name}</h3>
                    <h4>{beer[0].tagline}</h4>
                    <div className="infos">
                        <div>
                            <span>First brewed:</span>
                            <span>{beer[0].first_brewed}</span>
                        </div>
                        <div>
                            <span>Attenuation level:</span>
                            <span>{beer[0].attenuation_level}</span>
                        </div>
                    </div>
                    <p className="descriptions">{beer[0].description}</p>
                    <Link to="/list">
                        <button className="arrow">
                            <img src={arrow} alt="left-arrow" />
                        </button>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BeerDetailsPage;
