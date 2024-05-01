import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="*" element={<p>Error 404</p>} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;
