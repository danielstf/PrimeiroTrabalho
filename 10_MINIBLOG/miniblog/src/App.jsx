import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Componentes
import NavBar from "./components/NavBar";

//Routes
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
