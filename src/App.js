import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Sidebar from "./Sidebar/Sidebar";
import Rates from "./Rates/Rates";
import Contact from "./Contact/Contact";
import Sent from "./Contact/Sent";
import Banner from "./Banner/Banner";

function App() {
  return (
    <div className="flex flex-col text-roboto text-gray-600">
        <BrowserRouter>
        <div className="flex bg-white">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sent" element={<Sent />} />
          </Routes>
        </div>
        <Banner className="items-end" />
      </BrowserRouter>
    </div>
  );
}

export default App;
