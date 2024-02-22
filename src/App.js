import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Sidebar from "./Sidebar/Sidebar";
import Rates from "./Rates/Rates";

function App() {
  return (
    <div className="flex App">

      <BrowserRouter>
      <Sidebar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/rates" element={<Rates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
