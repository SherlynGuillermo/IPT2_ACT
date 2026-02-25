import { BrowserRouter, Routes, Route, Link } from "react";
import "./App.css";

function Home() {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <p>Welcome to our Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="PriceChecker">
      <h1>Price Checker</h1>
      <p>
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/"> Home Page</Link></li>
            <li><Link to="/PriceChecker">Price Checker</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PriceChecker" element={<PriceChecker />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
