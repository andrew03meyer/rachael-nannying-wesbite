import { Link } from "react-router-dom";

function Sidebar(){
    return(
    <>
    <ul className ="group space-y-1 w-20 hover:w-60 transition-all duration-700 text-roboto bg-gradient-to-r from-gray-200 to-white">
        <li className="group h-32 block w-full">
            <div className="h-32 block w-full">
                <div className="transition-all duration-1000 block w-5 overflow-y-clip h-0.5 group-hover:w-7 bg-black m-2"></div>
                <div className="transition-all duration-1000 block w-5 overflow-y-clip h-0.5 group-hover:w-3 bg-black m-2"></div>
                <div className="transition-all duration-1000 block w-5 overflow-y-clip h-0.5 group-hover:w-7 bg-black m-2"></div>
            </div>
        </li>

        <li>
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
    </>
    );
}

export default Sidebar;