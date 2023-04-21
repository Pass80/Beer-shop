import './HomePage.css';
import img1 from '../../assets/images/beer.png';
import img2 from '../../assets/images/set-of-beers.png';
import { Link } from 'react-router-dom';
import Test from "../../components/Test/Test";

const HomePage = ({ data }) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomBeer = data[randomIndex];

    return (
        <section>
            <div className="list">
                <img src={img1} alt="glass of beer" />

                <h2>
                    <Link className="link1" to="/list">
                        All Beers
                    </Link>
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid quis quibusdam ea nobis cum, quae aperiam
                    consequatur placeat sint similique.
                </p>
            </div>
            <div className="random">
                <img src={img2} alt="glass of beer" />
                <Link className="link1" to={`/details/${randomBeer?._id}`}>
                    <h2>Random Beer</h2>
                </Link>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, impedit quidem! A assumenda cumque at consequatur
                    blanditiis fugiat tempora labore!
                </p>
            </div>
            <Test/>
        </section>
    );
};

export default HomePage;
