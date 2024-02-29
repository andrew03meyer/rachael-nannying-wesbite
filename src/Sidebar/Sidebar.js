import { Link } from "react-router-dom";

function Sidebar(){
    return(
    <ul className ="group space-y-1 w-20 hover:w-60 transition-all duration-700 hover:bg-gradient-to-t from-orange-100 to-orange-200">
        <li className="group group-hover:block block w-1/6 hover:w-1/6 rounded-lg px-4 py-2 text-sm font-medium">
            <div className="group-hover">
                <div className="transition-all duration-1000 group-hover:w-7 w-5 h-0.5 bg-black m-2"></div>
                <div className="transition-all duration-1000 group-hover:w-3 w-5 h-0.5 bg-black m-2"></div>
                <div className="transition-all duration-1000 group-hover:w-7 w-5 h-0.5 bg-black m-2"></div>
            </div>
        </li>
        <li className="">
            <Link to="/" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 bg-grey-100 hover:bg-orange-100 hover:text-gray-700">
            Home
            </Link>
        </li>

        <li>
            <Link to="/about" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 hover:bg-orange-100 hover:text-gray-700">
            About
            </Link>
        </li>

        <li>
            <Link to="/rates" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 hover:bg-orange-100 hover:text-gray-700">
            Rates
            </Link>
        </li>
        
        <li>
            <Link to="/contact" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 hover:bg-orange-100 hover:text-gray-700">
            Contact Us
            </Link>
        </li>
    </ul>
    );
}

export default Sidebar;