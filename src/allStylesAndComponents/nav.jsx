import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-white rounded-md p-2.5 text-black fixed mx-auto my-3 w-full pr-14 pl-14 shadow-xl">
            <div className="text-green-700 font-sans no-underline font-bold size-14">
                <Link to="/">Simple Design</Link>
            </div>
            <ul className="flex list-none space-x-4 justify-between ml-8 ">
                <li className=" text-gray-500 hover:text-black">
                    <Link to="/">Home</Link>
                </li>
                <li className=" text-gray-500 hover:text-black">
                    <Link to="/sourcecode">Source Code</Link>
                </li>
                <li className=" text-gray-500 hover:text-black">
                    <Link to="/login">Login</Link>
                </li>
                <li className=" text-gray-500 hover:text-black">
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
