import { useState } from 'react';
import { Link } from 'react-router-dom';
import myHomeImage from "./home.jpg";
import styles from "./home.module.css";

const Home = () => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h1>We Train Best Standards of Responsive Websites And Apps</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at quam finibus,
                rutrum leo pulvinar, pretium ligula. Maecenas consectetur sit amet quam at tincidunt.
                Pellentesque vel condimentum ante. Morbi in mauris vel felis malesuada congue.
                Morbi blandit porttitor odio vel consequat. Nulla gravida quis lorem vitae hendrerit.</p>
                <p>Register Here:
                <button onClick={handleButtonClick}>
                    <Link to="/signup">Sign Up</Link>
                </button>

                </p>
            </div>

            <div className={styles.imageContainer}>
                <img src={myHomeImage} alt='female image' />
            </div>
        </div>
    );
};

export default Home;
