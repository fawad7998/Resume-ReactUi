import Home from "./assets/Pages/Home";
import Eduu from "./assets/pages/Eduu";
import Skillss from "./assets/pages/Skillss";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skillss />} />
          <Route path="edu" element={<Eduu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
