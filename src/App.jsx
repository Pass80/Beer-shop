import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import BeersListPage from './pages/BeersListPage/BeersListPage';
import HomePage from './pages/HomePage/HomePage';
import BeerDetailsPage from './pages/BeerDetailsPage/BeerDetailsPage';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers#')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage data={data} />} />
                <Route path="/list" element={<BeersListPage data={data} />} />
                <Route
                    path="/details/:id"
                    element={<BeerDetailsPage data={data} />}
                />
            </Routes>
        </div>
    );
}

export default App;
