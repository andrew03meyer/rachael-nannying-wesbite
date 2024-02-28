import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Sidebar from "./Sidebar/Sidebar";
import Rates from "./Rates/Rates";
import Contact from "./Contact/Contact";
import Sent from "./Contact/Sent";

function App() {
  return (
    <div className="flex App bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200">
      <BrowserRouter>
      <Sidebar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sent" element={<Sent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
