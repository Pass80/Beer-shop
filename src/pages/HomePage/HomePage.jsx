import './HomePage.css';
import img1 from '../../assets/images/beer.png';
import img2 from '../../assets/images/set-of-beers.png';

const HomePage = () => {
    return (
        <section>
            <div className="list">
                <img src={img1} alt="glass of beer" />
                <h2>All Beers</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid quis quibusdam ea nobis cum, quae aperiam
                    consequatur placeat sint similique.
                </p>
            </div>
            <div className="random">
                <img src={img2} alt="glass of beer" />
                <h2>Random Beer</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, impedit quidem! A assumenda cumque at consequatur
                    blanditiis fugiat tempora labore!
                </p>
            </div>
        </section>
    );
};

export default HomePage;
