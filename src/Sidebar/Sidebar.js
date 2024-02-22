import { Link } from "react-router-dom";

function Sidebar(){
    return(
    <ul className ="group space-y-1 h-screen bg-white w-20 hover:w-1/6 transition-all duration-1000 hover:bg-gray-100">
        <li className="group group-hover:block block w-1/6 hover:w-1/6 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <div className="group-hover transition-all duration-1000">
                <div className="group-hover:w-7 w-5 h-0.5 bg-black m-2"></div>
                <div className="group-hover:w-3 w-5 h-0.5 bg-black m-2"></div>
                <div className="group-hover:w-7 w-5 h-0.5 bg-black m-2"></div>
            </div>
        </li>
        <li>
            <Link to="/" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Home
            </Link>
        </li>

        <li>
            <Link to="/about" className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            About
            </Link>
        </li>

        <li>
            <a
            href="#"
            className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
            Teams
            </a>
        </li>

        <li >
            <a
            href="#"
            className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
            Billing
            </a>
        </li>

        <li >
            <a
            href="#"
            className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
            Invoices
            </a>
        </li>

        <li >
            <a
            href="#"
            className="group-hover:block hidden truncate rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
            Account
            </a>
        </li>
    </ul>
    );
}

export default Sidebar;