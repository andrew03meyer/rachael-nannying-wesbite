import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="flex App">

      <BrowserRouter>
      <Sidebar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
