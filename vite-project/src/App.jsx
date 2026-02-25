import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage'
import PriceChecker from './PriceChecker'
import "./App.css";

function App() {
  return (
    <BrowserRouter>

    <Link to="/"> Home Page</Link>
    <Link to="/price-checker">Price Checker</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price-checker" element={<PriceChecker />} />
      </Routes>
    </BrowserRouter>
  );
}
