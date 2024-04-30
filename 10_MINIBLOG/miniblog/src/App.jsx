import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Componentes
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

//Routes
import About from "./Routes/About/About";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";

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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>

          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
