import { useState } from 'react';
import { Link } from 'react-router-dom';
import myHomeImage from "./home.jpg";


const Home = () => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
    };

    return (
        <div className="flex justify-between item-center p-7 pt-14 pl-14 w-full">
            <div className="pr-4 font-monospace mt-20 pt-7 w-1/2">
                <p className='text-5xl'>We Train Best Standards of Responsive Websites And Apps</p>
                <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at quam finibus,
                rutrum leo pulvinar, pretium ligula. Maecenas consectetur sit amet quam at tincidunt.
                Pellentesque vel condimentum ante. Morbi in mauris vel felis malesuada congue.
                Morbi blandit porttitor odio vel consequat. Nulla gravida quis lorem vitae hendrerit.</p>
                <p className='mt-8'>Register Here:
                <button onClick={handleButtonClick} className='bg-orange-400 px-5 hover:bg-gray-500 text-white border-none p-2 cursor-pointer ml-5 mb-5 rounded-lg'>
                    <Link to="/signup" >Sign Up</Link>
                </button>

                </p>
            </div>

            <div className="w-1/2 h-1 pt-24">
                <img src={myHomeImage} alt='female image' className='ml-20' width={500} />
            </div>
        </div>
    );
};

export default Home;
