import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Avis from "./pages/Avis";
import Contact from "./pages/Contact";
import Habitats from "./pages/Habitats";
import Histoirezoo from "./pages/Histoirezoo";
import Savane from "./pages/Savane";
import Desert from "./pages/Desert";
import Foret from "./pages/Foret";
import Polaire from "./pages/Polaire";
import Ocean from "./pages/Ocean";
import Montagne from "./pages/Montagne";
import Soigneur from "./pages/Soigneur";
import Naissance from "./pages/Naissance";
import Nouveau from "./pages/Nouveau";
import Desert1 from "./pages/Desert1";
import Foret1 from "./pages/Foret1";







function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/services" element={<Services />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/habitats" element={<Habitats />} />
            <Route path="/savane" element={<Savane />} />
            <Route path="/desert" element={<Desert />} />
            <Route path="/foret" element={<Foret />} />
            <Route path="/montagne" element={<Montagne />} />
            <Route path="/ocean" element={<Ocean />} />
            <Route path="/polaire" element={<Polaire />} />
            <Route path="/soigneur" element={<Soigneur />} />
            <Route path="/histoirezoo" element={<Histoirezoo />} />
            <Route path="/naissance" element={<Naissance />} />
            <Route path="/nouveau" element={<Nouveau />} />
            <Route path="/desert1" element={<Desert1 />} />
            <Route path="/foret1" element={<Foret1 />} />
            <Route path="*" element={<p>Error 404</p>} />
            
           
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;
