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
    <div className="flex flex-col bg-gradient-to-t from-orange-200 via-orange-100 to-orange-200">
        <BrowserRouter>
        <div className="flex App ">
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
