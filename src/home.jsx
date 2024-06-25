import { useState } from 'react';

const Home = () => {
    const [buttonClicked, setButtonClicked] =useState(false);

    const handeleButtonClick = () =>{
        setButtonClicked(true);
    };

    return(
        <div>
            <h1>We Train Best Standards of Responsive Websites And Apps</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at quam finibus,
             rutrum leo pulvinar, pretium ligula. Maecenas consectetur sit amet quam at tincidunt.
             Pellentesque vel condimentum ante. Morbi in mauris vel felis malesuada congue.
             Morbi blandit porttitor odio vel consequat. Nulla gravida quis lorem vitae hendrerit.</p>
            <p>Register Here:</p>
            {buttonClicked ? <p>Button was clicked!</p> : null}
             <button to="/signup" onClick={handeleButtonClick}>Sign Up</button>
        </div>

        
    );
};

export default Home;