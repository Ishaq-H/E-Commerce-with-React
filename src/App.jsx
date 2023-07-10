import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { books } from "./data";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
