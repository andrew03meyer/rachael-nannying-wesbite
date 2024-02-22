import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import About from "./About/About";
// import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
