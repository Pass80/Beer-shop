import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers#')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);
    return <div>HomePage</div>;
};

export default HomePage;
