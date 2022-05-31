import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* Footer */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
