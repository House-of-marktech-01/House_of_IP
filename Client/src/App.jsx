import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Practice from './Pages/Practice';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollTop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton/>
      <Footer/>
    </Router>
  );
}

export default App;
