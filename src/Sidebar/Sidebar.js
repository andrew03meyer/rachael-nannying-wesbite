import { Link } from "react-router-dom";

function Sidebar(){
    return(
    <>
    <div className ="group space-y-1 w-20 inline-block hover:w-60 transition-all duration-700 text-roboto bg-gradient-to-r from-gray-200 to-white">
        <div className="flex flex-col group w-full p-2">
            <div className="transition-all duration-1000 inline-block w-6 h-0.5 group-hover:w-7 m-1 bg-gray-600"></div>
            <div className="transition-all duration-1000 inline-block w-6 h-0.5 group-hover:w-5 m-1 bg-gray-600"></div>
            <div className="transition-all duration-1000 inline-block w-6 h-0.5 group-hover:w-7 m-1 bg-gray-600"></div>
        </div>

        <div>
            <Link to="/" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 bg-grey-100 hover:bg-gray-200 hover:text-gray-700">
            Home
            </Link>
        </div>

        <div>
            <Link to="/about" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
            About
            </Link>
        </div>

        <div>
            <Link to="/rates" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
            Rates
            </Link>
        </div>
        
        <div>
            <Link to="/contact" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-xl hover:text-2xl transition-all duration-800 font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
            Contact Us
            </Link>
        </div>
    </div>
    </>
    );
}

export default Sidebar;